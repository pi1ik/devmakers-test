import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/src/shared/utils/axiosInstance";
import { IMessage } from "../model/types";
import { validateTelegramOrPhone } from "../utils/validation";
import { trackAIConsultant } from "@/src/shared/utils/analytics";
import { SITE_ORIGIN, TELEGRAM_URL } from "@/src/shared/utils/constants";

export function useChatLogic() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [telegramInput, setTelegramInput] = useState("");
  const [validationError, setValidationError] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([
    {
      id: "welcome",
      text: `Привет! 👋 Я AI-консультант студии. Задайте мне любой вопрос о наших услугах, ценах, сроках или выберите один из популярных вопросов ниже.\n\nТакже вы можете ознакомиться с нашими кейсами на странице портфолио: ${SITE_ORIGIN}/portfolio или посетить наш Telegram: ${TELEGRAM_URL}`,
      sender: "ai",
      timestamp: new Date(),
    },
  ]);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Check if user has already unlocked the chat
  useEffect(() => {
    const savedTelegram = localStorage.getItem("ai_consultant_telegram");
    if (savedTelegram) {
      setIsUnlocked(true);
    }
  }, []);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Only auto-scroll after user has interacted with chat
    if (hasInteracted) {
      scrollToBottom();
    }
  }, [messages, isTyping, hasInteracted]);

  const sendMessageMutation = useMutation({
    mutationFn: async (text: string) => {
      const { data } = await axiosInstance.post("/chat", {
        message: text,
        user_id: "test_user_id",
      });

      return data;
    },
  });

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    setHasInteracted(true);
    trackAIConsultant("question_asked", text.trim());

    const userMessage: IMessage = {
      id: Date.now(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const data = await sendMessageMutation.mutateAsync(text);

      const aiMessage: IMessage = {
        id: Date.now() + 1,
        text: data.response || "Не удалось получить ответ 😔",
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Ошибка запроса:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Ошибка при обращении к серверу. Попробуйте позже.",
          sender: "ai",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateTelegramOrPhone(telegramInput);

    if (!validation.isValid) {
      setValidationError(validation.error || "Неверный формат");
      return;
    }

    // Valid input - unlock chat
    localStorage.setItem("ai_consultant_telegram", telegramInput.trim());
    setIsUnlocked(true);
    setValidationError("");

    // Track chat unlock
    trackAIConsultant("chat_unlocked");
  };

  return {
    isUnlocked,
    telegramInput,
    validationError,
    messages,
    inputValue,
    isTyping,
    messagesContainerRef,
    setTelegramInput,
    setInputValue,
    handleSendMessage,
    handleUnlock,
    handleTelegramInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setTelegramInput(e.target.value);
      // Clear validation error when user starts typing
      if (validationError) setValidationError("");
    },
  };
}

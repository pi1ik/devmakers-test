"use client";

import { motion, AnimatePresence } from "motion/react";
import { Bot, Send, Sparkles, Lock } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import { SEO } from "@/src/widgets";
import {
  STUDIO_NAME,
  SITE_ORIGIN,
  TELEGRAM_URL,
  CONTACT_EMAIL,
} from "@/src/shared/utils/constants";
import { trackAIConsultant } from "@/src/shared/utils/analytics";
import { ChatMessage } from "@/src/features/ai-consultant/ChatMessage";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/src/shared/utils/axiosInstance";
import { getAnimationConfig } from "../shared/utils/performance";
import {
  MotionPageDescription,
  MotionPageHeading,
} from "../shared/ui";

type Message = {
  id: string | number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
};

const quickQuestions = [
  "Сколько стоит разработка сайта?",
  "Какие сроки выполнения проекта?",
  "Какие технологии вы используете?",
  "Предоставляете ли вы техподдержку?",
  "Можно ли увидеть примеры работ?",
  "Как происходит оплата?",
];

// const aiResponses: { [key: string]: string } = {
//   "сколько стоит":
//     "Стоимость разработки зависит от сложности проекта:\\n\\n• Лендинг: от 50 000₽\\n• Корпоративный сайт: от 150 000₽\\n• Интернет-магазин: от 300 000₽\\n• Веб-приложение: от 500 000₽\\n• AI-агент: от 100 000₽\\n\\nТочную стоимость мы рассчитаем после обсуждения ваших задач. Свяжитесь с нами для получения детального коммерческого предложения!",

//   срок: "Сроки выполнения проектов:\\n\\n• Лендинг: 1-2 недели\\n• Корпоративный сайт: 3-6 недель\\n• Интернет-магазин: 6-10 недель\\n• Веб-приложение: 8-16 недель\\n• AI-агент: 2-4 недели\\n\\nМы работаем по Agile-методологии, что позволяет запустить MVP за 2-4 недели и постепенно развивать продукт.",

//   технологи:
//     "Мы используем современный технологический стек:\\n\\n**Frontend:**\\n• React / Next.js\\n• TypeScript\\n• Tailwind CSS\\n\\n**Backend:**\\n• Node.js / Python\\n• PostgreSQL / MongoDB\\n\\n**AI:**\\n• GPT-4 / Claude\\n• Custom ML модели\\n\\n**Cloud:**\\n• AWS / Vercel\\n• Docker / Kubernetes\\n\\nВыбор технологий зависит от специфики вашего проекта.",

//   поддержк:
//     "Да, мы предоставляем техническую поддержку:\\n\\n• **Гарантийная поддержка** - 3 месяца бесплатно после запуска\\n• **Техподдержка 24/7** - исправление критических ошибок\\n• **Консультации** - помощь в работе с системой\\n• **Обновления** - актуализация безопасности и функционала\\n\\nТакже предлагаем долгосрочные контракты на абонентское обслуживание.",

//   пример: `Конечно! У нас в портфолио более 50 успешных проектов:\n\n• **Лендинги** с конверсией выше среднего\n• **Корпоративные сайты** для крупных компаний\n• **Интернет-магазины** с интеграциями\n• **SaaS-платформы** для стартапов\n• **AI-агенты** для автоматизации\n\nПосмотрите наши работы: ${SITE_ORIGIN}/portfolio\nИли почитайте детальные кейсы на нашем сайте: ${SITE_ORIGIN}/projects`,

//   оплат:
//     "Мы предлагаем гибкие условия оплаты:\\n\\n**Этапная оплата:**\\n• 30% - предоплата и начало работ\\n• 40% - после утверждения дизайна\\n• 30% - после сдачи проекта\\n\\n**Для малого бизнеса:**\\n• Возможна рассрочка на 3-6 месяцев\\n• Скидки при долгосрочном сотрудничестве\\n\\n**Способы оплаты:**\\n• Банковский перевод (для юр.лиц)\\n• Онлайн-оплата\\n• Криптовалюта (по согласованию)",

//   default: `Спасибо за ваш вопрос! 🤖\n\nЯ постараюсь помочь вам. Если мой ответ не полностью раскрывает вашу тему, рекомендую:\n\n• Перейти в FAQ: ${SITE_ORIGIN}/faq\n• Связаться через Telegram: ${TELEGRAM_URL}\n• Написать на Email: ${CONTACT_EMAIL}\n• Посмотреть кейсы: ${SITE_ORIGIN}/portfolio\n\nЧем еще я могу помочь?`,
// };

// function getAIResponse(question: string): string {
//   const lowerQuestion = question.toLowerCase();

//   for (const [key, response] of Object.entries(aiResponses)) {
//     if (lowerQuestion.includes(key)) {
//       return response;
//     }
//   }

//   return aiResponses.default;
// }

// Validation function for telegram/phone
function validateTelegramOrPhone(input: string): {
  isValid: boolean;
  error?: string;
} {
  const trimmed = input.trim();

  // Check for telegram username (@username)
  const telegramPattern = /^@[a-zA-Z0-9_]{5,32}$/;

  // Check for phone number (Russian format +7XXXXXXXXXX)
  const phonePattern = /^\+7\d{10}$/;

  if (telegramPattern.test(trimmed)) {
    return { isValid: true };
  }

  if (phonePattern.test(trimmed)) {
    return { isValid: true };
  }

  // Provide specific error message
  if (trimmed.startsWith("@")) {
    return {
      isValid: false,
      error:
        "Имя пользователя должно содержать от 5 до 32 символов (буквы, цифры, _)",
    };
  }

  if (trimmed.startsWith("+")) {
    return {
      isValid: false,
      error: "Формат: +7 и 10 цифр (например: +79001234567)",
    };
  }

  return { isValid: false, error: "Введите @username или +79001234567" };
}

export function AIConsultantPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [telegramInput, setTelegramInput] = useState("");
  const [validationError, setValidationError] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: `Привет! 👋 Я AI-консультант студии. Задайте мне любой вопрос о наших услугах, ценах, сроках или выберите один из популярных вопросов ниже.\n\nТакже вы можете ознакомиться с нашими кейсами на странице портфолио: ${SITE_ORIGIN}/portfolio или посетить наш Telegram: ${TELEGRAM_URL}`,
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const animConfig = useMemo(() => getAnimationConfig(), []);

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

    const userMessage: Message = {
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

      const aiMessage: Message = {
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

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const handleTelegramInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTelegramInput(e.target.value);
    // Clear validation error when user starts typing
    if (validationError) {
      setValidationError("");
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

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <SEO
        title="AI-консультант"
        description={`Задайте вопрос AI-консультанту ${STUDIO_NAME} и получите мгновенные ответы о наших услугах, ценах, сроках разработки и технологиях. Интерактивный чат-бот работает 24/7.`}
        keywords="AI консультант, чат-бот, онлайн консультация, вопросы о разработке, стоимость сайта, сроки проекта, технологии разработки"
        canonical={`${SITE_ORIGIN}/ai-consultant`}
      />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: animConfig.duration,
          }}
          className="text-center mb-8 sm:mb-12 px-6 lg:px-8"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-accent/10 mb-4 sm:mb-6">
            <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
          </div>
          <MotionPageHeading className="mb-3 sm:mb-4">
            AI-консультант
          </MotionPageHeading>
          <MotionPageDescription className="text-muted-foreground max-w-2xl mx-auto px-4">
            Получите мгновенные ответы на ваши вопросы о наших услугах
          </MotionPageDescription>
        </motion.div>

        {/* Quick Questions */}
        <motion.div
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mb-8 pt-6 px-6 lg:px-8 ${
            !isUnlocked ? "blur-sm pointer-events-none" : ""
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <h2 className="text-foreground text-sm sm:text-base">
              Популярные вопросы
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {quickQuestions.map((question, index) => (
              <motion.button
                key={question}
                initial={
                  animConfig.shouldAnimate ? { opacity: 0, scale: 0.9 } : false
                }
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={
                  animConfig.shouldAnimate
                    ? { scale: 1.02, transition: { duration: 0.3 } }
                    : {}
                }
                whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
                onClick={() => handleQuickQuestion(question)}
                className="px-4 py-3 sm:px-5 sm:py-3 rounded-xl border border-border bg-secondary/30 text-muted-foreground hover:border-accent/50 hover:text-foreground transition-colors duration-300 text-sm touch-manipulation active:bg-accent/10"
              >
                {question}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-6 lg:mx-8 rounded-2xl border border-border bg-secondary/20 backdrop-blur-sm overflow-hidden relative"
        >
          {/* Messages */}
          <div
            ref={messagesContainerRef}
            className={`h-[500px] sm:h-[600px] overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4 transition-all duration-500 ${
              !isUnlocked ? "blur-sm pointer-events-none" : ""
            }`}
          >
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={{
                  id: message.id,
                  text: message.text,
                  sender: message.sender,
                }}
              />
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-2 sm:gap-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <div className="px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-background/50 border border-border">
                  <div className="flex gap-1">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0,
                      }}
                      className="w-2 h-2 rounded-full bg-accent"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.2,
                      }}
                      className="w-2 h-2 rounded-full bg-accent"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.4,
                      }}
                      className="w-2 h-2 rounded-full bg-accent"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            className={`border-t border-border p-3 sm:p-4 bg-background/50 transition-all duration-500 ${
              !isUnlocked ? "blur-sm pointer-events-none" : ""
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex gap-2 sm:gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Задайте вопрос..."
                  maxLength={300}
                  className="flex-1 min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-muted-foreground text-sm sm:text-base"
                />
                <motion.button
                  type="submit"
                  whileHover={animConfig.shouldAnimate ? { scale: 1.02 } : {}}
                  whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
                  disabled={!inputValue.trim()}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-accent text-accent-foreground rounded-xl transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 sm:gap-2 shrink-0"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline sm:inline">Отправить</span>
                  <span className="inline xs:hidden sm:hidden">Отпр.</span>
                </motion.button>
              </div>
              {inputValue.length > 0 && (
                <div className="flex justify-end">
                  <span
                    className={`text-xs ${
                      inputValue.length >= 300
                        ? "text-red-500"
                        : "text-muted-foreground"
                    }`}
                  >
                    {inputValue.length}/300
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* Unlock Overlay */}
          <AnimatePresence>
            {!isUnlocked && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-background/80 backdrop-blur-md flex items-center justify-center p-6 z-10"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="max-w-md w-full mx-4"
                >
                  <div className="bg-secondary/50 rounded-2xl border border-border p-5 sm:p-8 shadow-2xl">
                    <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent/10 mx-auto mb-4 sm:mb-6">
                      <Lock className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                    </div>

                    <h3
                      className="text-foreground text-center mb-2 sm:mb-3"
                      style={{ fontSize: "1.25rem" }}
                    >
                      Доступ к AI-консультанту
                    </h3>

                    <p className="text-muted-foreground text-center mb-5 sm:mb-6 text-sm sm:text-base">
                      Укажите ваш Telegram, чтобы получить доступ к чату
                    </p>

                    <form
                      onSubmit={handleUnlock}
                      className="space-y-3 sm:space-y-4"
                    >
                      <div>
                        <label
                          htmlFor="telegram"
                          className="block text-foreground mb-2 text-sm sm:text-base"
                        >
                          Telegram или номер телефона
                        </label>
                        <input
                          id="telegram"
                          type="text"
                          value={telegramInput}
                          onChange={handleTelegramInputChange}
                          placeholder="@username или +79001234567"
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background/50 border rounded-xl focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground text-sm sm:text-base ${
                            validationError
                              ? "border-red-500 focus:border-red-500"
                              : "border-border focus:border-accent"
                          }`}
                          required
                        />
                        {validationError && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-xs sm:text-sm mt-2"
                          >
                            {validationError}
                          </motion.p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={
                          animConfig.shouldAnimate
                            ? { scale: 1.02, transition: { duration: 0.15 } }
                            : {}
                        }
                        whileTap={{
                          scale: 0.98,
                          transition: { duration: 0.15 },
                        }}
                        className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-accent text-accent-foreground rounded-xl transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base">
                          Начать общение
                        </span>
                      </motion.button>

                      <p className="text-muted-foreground text-center text-xs sm:text-sm">
                        Мы используем ваш контакт только для связи по вашему
                        запросу
                      </p>
                    </form>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-6 lg:mx-8 mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl border border-border bg-accent/5 backdrop-blur-sm"
        >
          <p className="text-muted-foreground text-center text-sm sm:text-base">
            Не нашли ответ на свой вопрос? Свяжитесь с нами напрямую через{" "}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Telegram
            </a>{" "}
            или{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-accent hover:underline"
            >
              Email
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

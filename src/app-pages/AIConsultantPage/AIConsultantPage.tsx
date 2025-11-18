"use client";

import { motion } from "motion/react";
import { Bot } from "lucide-react";
import { useMemo } from "react";
import { SEO } from "@/src/widgets";
import {
  STUDIO_NAME,
  SITE_ORIGIN,
  TELEGRAM_URL,
  CONTACT_EMAIL,
} from "@/src/shared/utils/constants";
import { getAnimationConfig } from "../../shared/utils/performance";
import { MotionPageDescription, MotionPageHeading } from "../../shared/ui";
import { quickQuestions } from "./model/quickQuestions";
import QuickQuestions from "./ui/QuickQuestions";
import ChatContainer from "./ui/ChatContainer";
import { useChatLogic } from "./hooks/useChatLogic";

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

export function AIConsultantPage() {
  const {
    isUnlocked,
    telegramInput,
    validationError,
    messages,
    inputValue,
    isTyping,
    messagesContainerRef,
    setInputValue,
    handleSendMessage,
    handleUnlock,
    handleTelegramInputChange,
  } = useChatLogic();

  const animConfig = useMemo(() => getAnimationConfig(), []);

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
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
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
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
        <QuickQuestions
          isUnlocked={isUnlocked}
          onQuestionClick={handleQuickQuestion}
          questions={quickQuestions}
        />

        {/* Chat Container */}

        <ChatContainer
          ref={messagesContainerRef}
          messages={messages}
          inputValue={inputValue}
          onInputChange={setInputValue}
          onSubmit={handleSubmit}
          isTyping={isTyping}
          isUnlocked={isUnlocked}
          validationError={validationError}
          unlockInputValue={telegramInput}
          onUnlockInputChange={handleTelegramInputChange}
          onUnlockSubmit={handleUnlock}
        />

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

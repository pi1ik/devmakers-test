"use client";

import { useMemo, useRef, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, Lock } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { IMessage } from "../model/types";
import { getAnimationConfig } from "@/src/shared/utils/performance";

interface IChatContainerProps {
  messages: IMessage[];
  inputValue: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isTyping: boolean;
  isUnlocked: boolean;
  validationError?: string;
  unlockInputValue: string;
  onUnlockInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUnlockSubmit: (e: React.FormEvent) => void;
}

const ChatContainer = forwardRef<HTMLDivElement, IChatContainerProps>(
  (
    {
      messages,
      inputValue,
      onInputChange,
      onSubmit,
      isTyping,
      isUnlocked,
      validationError,
      unlockInputValue,
      onUnlockInputChange,
      onUnlockSubmit,
    },
    ref
  ) => {
    const messagesContainerRef = ref;
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const animConfig = useMemo(() => getAnimationConfig(), []);

    return (
      <motion.div
        initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
        animate={{ opacity: 1, y: 0 }}
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
          <form onSubmit={onSubmit} className="space-y-2">
            <div className="flex gap-2 sm:gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => onInputChange(e.target.value)}
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
                    onSubmit={onUnlockSubmit}
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
                        value={unlockInputValue}
                        onChange={onUnlockInputChange}
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
    );
  }
);

ChatContainer.displayName = "ChatContainer";

export default ChatContainer;

"use client";

import { getAnimationConfig } from "@/src/shared/utils/performance";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useMemo } from "react";

interface IQuickQuestionsProps {
  isUnlocked: boolean;
  onQuestionClick: (question: string) => void;
  questions: string[];
}

export default function QuickQuestions({
  isUnlocked,
  onQuestionClick,
  questions,
}: IQuickQuestionsProps) {
  const animConfig = useMemo(() => getAnimationConfig(), []);
  return (
    <motion.div
      initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
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
        {questions.map((question, index) => (
          <motion.button
            key={question}
            initial={animConfig.shouldAnimate ? { opacity: 0, scale: 0.9 } : {}}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
            whileHover={
              animConfig.shouldAnimate
                ? { scale: 1.02, transition: { duration: 0.3 } }
                : {}
            }
            whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
            onClick={() => onQuestionClick(question)}
            className="px-4 py-3 sm:px-5 sm:py-3 rounded-xl border border-border bg-secondary/30 text-muted-foreground hover:border-accent/50 hover:text-foreground transition-colors duration-300 text-sm touch-manipulation active:bg-accent/10"
          >
            {question}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

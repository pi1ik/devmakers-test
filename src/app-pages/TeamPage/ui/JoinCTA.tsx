"use client";

import { motion } from "motion/react";
import { Send, Mail } from "lucide-react";
import { useMemo } from "react";
import { getAnimationConfig } from "../../../shared/utils/performance";
import { TELEGRAM_URL, CONTACT_EMAIL } from "@/src/shared/utils/constants";
import { SectionDescription, SectionHeading } from "@/src/shared/ui";

export default function JoinCTA() {
  const animConfig = useMemo(() => getAnimationConfig(), []);
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
      <motion.div
        initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center p-12 rounded-2xl border border-border bg-gradient-to-br from-accent/5 to-purple-500/5"
      >
        <h3 className="text-foreground mb-4 text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-[1.2]">
          Присоединяйтесь к команде
        </h3>
        <SectionDescription className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Ищем талантливых разработчиков, дизайнеров и менеджеров для работы над
          интересными проектами
        </SectionDescription>
        <div className="flex items-center justify-center gap-4">
          <motion.a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={animConfig.shouldAnimate ? { scale: 1.03 } : {}}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-accent text-accent-foreground rounded-full transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
            Telegram
          </motion.a>

          <motion.a
            href={`mailto:${CONTACT_EMAIL}`}
            whileHover={animConfig.shouldAnimate ? { scale: 1.03 } : {}}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 border border-border bg-background/50 backdrop-blur-sm text-foreground rounded-full transition-color duration-300 hover:border-accent/50 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Email
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

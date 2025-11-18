"use client";

import { motion } from "motion/react";
import { IAchievementItem } from "../model/teamData";
import { useMemo } from "react";
import { getAnimationConfig } from "@/src/shared/utils/performance";

interface IAchievementsProps {
  achievements: IAchievementItem[];
}

export default function Achievements({ achievements }: IAchievementsProps) {
  const animConfig = useMemo(() => getAnimationConfig(), []);
  return (
    <motion.div
      initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
    >
      {achievements.map((achievement, index) => {
        const Icon = achievement.icon;
        return (
          <motion.div
            key={achievement.title}
            initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className="p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-foreground mb-2">{achievement.title}</h3>
            <p className="text-muted-foreground">{achievement.description}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

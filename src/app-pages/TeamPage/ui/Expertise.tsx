"use client";

import { motion } from "motion/react";
import { useMemo } from "react";
import { getAnimationConfig } from "../../../shared/utils/performance";
import { IExpertiseItem } from "../model/teamData";
import { SectionDescription, SectionHeading } from "@/src/shared/ui";

interface IExpertiseProps {
  expertise: IExpertiseItem[];
}

export default function Expertise({ expertise }: IExpertiseProps) {
  const animConfig = useMemo(() => getAnimationConfig(), []);
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <motion.div
        initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <SectionHeading className="mb-4">Экспертиза команды</SectionHeading>
        <SectionDescription>
          Глубокие знания в современных технологиях и лучших практиках
          разработки
        </SectionDescription>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertise.map((expert, index) => {
          const Icon = expert.icon;
          return (
            <motion.div
              key={expert.title}
              initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={
                animConfig.shouldAnimate
                  ? { y: -4, transition: { duration: 0.3 } }
                  : {}
              }
              className="p-8 rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <h3
                style={{ fontSize: "1.25rem" }}
                className="text-foreground mb-2"
              >
                {expert.title}
              </h3>
              <p className="text-accent mb-4">{expert.experience}</p>
              <div className="flex flex-wrap gap-2">
                {expert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

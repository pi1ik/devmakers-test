"use client";

import { motion } from "motion/react";
import { useMemo } from "react";
import { getAnimationConfig } from "../../../shared/utils/performance";
import { ICultureItem } from "../model/teamData";
import { SectionDescription, SectionHeading } from "@/src/shared/ui";

interface ICultureProps {
  culture: ICultureItem[];
}

export default function Culture({ culture }: ICultureProps) {
  const animConfig = useMemo(() => getAnimationConfig(), []);
  return (
    <div className="bg-secondary/20 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionHeading className="mb-4">Культура и ценности</SectionHeading>
          <SectionDescription>
            Что делает нашу команду особенной и почему с нами приятно работать
          </SectionDescription>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {culture.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-border bg-background/50 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3
                  style={{ fontSize: "1.5rem" }}
                  className="text-foreground mb-3"
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

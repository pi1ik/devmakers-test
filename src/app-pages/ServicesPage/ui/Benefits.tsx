"use client";

import { motion } from "motion/react";
import { IBenefit } from "../model/servicesData";
import { useEffect, useMemo, useState } from "react";
import { getAnimationConfig } from "@/src/shared/utils/performance";

interface IBenefitsProps {
  benefits: IBenefit[];
}

export function Benefits({ benefits }: IBenefitsProps) {
  const animConfig = useMemo(() => getAnimationConfig(), []);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    Promise.resolve().then(() => setMounted(true));
  }, []);
  return (
    mounted && (
      <motion.div
        initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: animConfig.duration, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
      >
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={benefit.title}
              initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: animConfig.duration,
                delay: 0.3 + index * 0.1,
              }}
              className="p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-accent/50 md:transition-[border] nd:duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    )
  );
}

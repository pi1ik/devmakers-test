"use client";

import { ImageWithFallback } from "@/src/shared/ui";
import { getAnimationConfig } from "@/src/shared/utils/performance";
import { motion } from "motion/react";
import { useMemo } from "react";

interface ITeamPhotosProps {
  teamPhotos: string[];
}

export default function TeamPhotos({ teamPhotos }: ITeamPhotosProps) {
  const animConfig = useMemo(() => getAnimationConfig(), []);
  return (
    <motion.div
      initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
    >
      {teamPhotos.map((photo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          className="relative h-96 rounded-2xl overflow-hidden group"
        >
          <ImageWithFallback
            src={photo}
            alt={`Team photo ${index + 1}`}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </motion.div>
      ))}
    </motion.div>
  );
}

"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "@/src/shared/ui";
import { ArrowUpRight } from "lucide-react";
import { getAnimationConfig } from "@/src/shared/utils/performance";
import { PortfolioProject } from "./portfolioData";

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
  onClick: () => void;
}

export function PortfolioCard ({
  project,
  index,
  onClick,
}: ProjectCardProps) {
  const animConfig = useMemo(() => getAnimationConfig(), []);
  return (
    <motion.div
      key={project.title}
      initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index + 1) * 0.15 }}
      whileHover={animConfig.shouldAnimate ? { y: -8 } : {}}
      onClick={onClick}
      className="group rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-accent/50 overflow-hidden cursor-pointer"
      // style={{ willChange: animConfig.shouldAnimate ? "transform" : "auto" }}
    >
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden bg-secondary/20 flex justify-center items-center">
        <div className="relative w-[85%] h-full xs:w-[65%] sm:w-[55%] md:w-[40%] lg:w-[60%] xl:w-[55%]">
          <ImageWithFallback
            loading="eager"
            src={project.image}
            alt={project.title}
            className={`mt-5 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 
              
            `}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 style={{ fontSize: "1.5rem" }} className="text-foreground flex-1">
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 ml-3" />
        </div>

        <p className="text-muted-foreground mb-4">{project.description}</p>

        {project.results && (
          <div className="mb-4 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
            <p className="text-accent">{project.results}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

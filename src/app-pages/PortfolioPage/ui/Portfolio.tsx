"use client";

import styled from "@emotion/styled";
import { motion } from "motion/react";
import { mediaQueries } from "@/src/shared/utils/breakpoints";
import { ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";
import {
  portfolioData,
  IPortfolioProject,
} from "@/src/app-pages/PortfolioPage/model/portfolioData";
import { PortfolioCard } from "@/src/app-pages/PortfolioPage/ui/PortfolioCard";
import { getAnimationConfig } from "@/src/shared/utils/performance";
import { fadeInUp } from "@/src/shared/utils/motionConfig";
import { notFound } from "next/navigation";

type PortfolioProps = {
  category: string;
  onBack: () => void;
  onProjectClick: (category: string, index: number) => void;
};

export const MotionPortfolioPageDescription = styled(motion.p)`
  color: var(--muted-foreground);
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 30rem;

  font-size: 1rem;

  ${mediaQueries.tablet} {
    font-size: 1.125rem;
  }

  ${mediaQueries.desktop} {
    font-size: 1.25rem;
    max-width: 42rem;
  }
`;

export const MotionPortfolioPageHeading = styled(motion.h1)`
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--foreground);
  margin-bottom: 1.5rem;
  max-width: 80rem;

  font-size: 2rem;

  ${mediaQueries.tablet} {
    font-size: 3.5rem;
  }

  ${mediaQueries.desktop} {
    font-size: 4.25rem;
  }

  ${mediaQueries.wide} {
    font-size: 5rem;
  }
`;

export function Portfolio({
  category,
  onBack,
  onProjectClick,
}: PortfolioProps) {
  const data = portfolioData[category];
  const [visibleCount, setVisibleCount] = useState(6);

  const animConfig = useMemo(() => getAnimationConfig(), []);

  const visibleProjects = data.projects.slice(0, visibleCount);

  const hasMore = visibleCount < data.projects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="min-h-screen bg-background pt-24 px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: animConfig.duration,
          }}
          className="mb-16"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Вернуться назад
          </button>

          <MotionPortfolioPageHeading variants={fadeInUp} className="mb-4">
            {data.title}
          </MotionPortfolioPageHeading>
          <MotionPortfolioPageDescription
            variants={fadeInUp}
            className="ml-0 mr-0"
          >
            Реализованные проекты в категории «{data.title}»
          </MotionPortfolioPageDescription>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project: IPortfolioProject, index: number) => {
            return (
              <PortfolioCard
                key={project.title}
                project={project}
                index={index}
                onClick={() => onProjectClick(category, index)}
              />
            );
          })}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-full transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            >
              Загрузить еще
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

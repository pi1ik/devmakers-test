"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getAnimationConfig } from "../shared/utils/performance";
import { SectionDescription, SectionHeading } from "../shared/ui";

// Map projects from projectDetailsMap to display on home page
const projects = [
  {
    id: "landings-0",
    title: "Лендинг для SaaS-продукта",
    category: "Веб-разработка + Дизайн",
    description:
      "Продающий лендинг для B2B SaaS с интеграцией CRM и аналитикой поведения пользователей.",
    tags: ["Next.js", "Tailwind", "HubSpot"],
  },
  {
    id: "chatbots-0",
    title: "AI-бот для поддержки",
    category: "AI-агент",
    description:
      "Умный чат-бот для автоматизации 80% обращений в поддержку интернет-магазина.",
    tags: ["GPT-4", "Python", "FastAPI"],
  },
  {
    id: "webapps-0",
    title: "CRM для застройщика",
    category: "Веб-приложение",
    description:
      "Кастомная CRM для управления продажами недвижимости с аналитикой и интеграцией с банками.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "ecommerce-0",
    title: "Магазин одежды",
    category: "E-commerce",
    description:
      "Интернет-магазин с AR-примеркой, AI-рекомендациями и программой лояльности.",
    tags: ["Shopify", "AI", "AR"],
  },
  {
    id: "uiux-0",
    title: "Редизайн банковского приложения",
    category: "UI/UX Дизайн",
    description:
      "Полный редизайн мобильного приложения с фокусом на упрощение UX и доступность.",
    tags: ["Figma", "User Research", "A/B Testing"],
  },
  {
    id: "corporate-0",
    title: "Сайт производственной компании",
    category: "Корпоративный сайт",
    description:
      "Многостраничный сайт с каталогом продукции, формой запроса КП и личным кабинетом для дилеров.",
    tags: ["Next.js", "PostgreSQL", "CMS"],
  },
];

interface IWorkProps {
  onProjectClick?: (projectId: string) => void;
}

export function Work({ onProjectClick }: IWorkProps) {
  const animConfig = useMemo(() => getAnimationConfig(), []);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    Promise.resolve().then(() => setMounted(true));
  }, []);

  return (
    mounted && (
      <section
        id="work"
        className="py-16 sm:py-24 lg:py-32 px-6 lg:px-8 bg-secondary/20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: animConfig.duration }}
            className="mb-20"
          >
            <SectionHeading className="text-center mb-4">
              Портфолио
            </SectionHeading>
            <SectionDescription className="text-center">
              Реализованные решения для бизнеса
            </SectionDescription>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: animConfig.duration,
                  delay: index * 0.1,
                }}
                whileHover={
                  animConfig.shouldAnimate
                    ? { y: -4, transition: { duration: 0.15 } }
                    : {}
                }
                onClick={() => onProjectClick?.(project.id)}
                className="group p-8 rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-colors duration-300 cursor-pointer"
                style={{
                  willChange: animConfig.shouldAnimate ? "transform" : "auto",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        style={{ fontSize: "1.5rem" }}
                        className="text-foreground"
                      >
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                    <p className="text-indigo-600 dark:text-accent font-medium mb-3">
                      {project.category}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  );
}

"use client";

import { motion } from "motion/react";
import {
  Globe,
  Palette,
  Bot,
  Workflow,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "@/src/shared/ui/imageWithFallback";
import { CTASection, SEO, generateBreadcrumbSchema } from "@/src/widgets";
import { PageHeading, PageDescription } from "@/src/shared/ui/Typography";
import { fadeInUp } from "../shared/utils/motionConfig";

type PortfolioCategoryProps = {
  onCategoryClick?: (category: string) => void;
  onNavigate?: (page: string) => void;
};

const categories = [
  {
    icon: Globe,
    title: "Веб разработка",
    description:
      "Сайты любой сложности: от лендингов до сложных веб-приложений",
    projects: 48,
    image:
      "https://images.unsplash.com/photo-1759668358660-0d06064f0f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMTAyMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    subcategories: [
      { label: "Лендинги", key: "landings", count: 12 },
      { label: "Корпоративные сайты", key: "corporate", count: 15 },
      { label: "Интернет-магазины", key: "ecommerce", count: 10 },
      { label: "Веб-приложения", key: "webapps", count: 11 },
    ],
  },
  {
    icon: Palette,
    title: "Дизайн",
    description:
      "От логотипов до полных дизайн-систем и UI/UX для сложных продуктов",
    projects: 62,
    image:
      "https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIwOTIyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    subcategories: [
      { label: "UI/UX дизайн", key: "uiux", count: 20 },
      { label: "Логотипы", key: "logos", count: 18 },
      { label: "Брендинг", key: "branding", count: 14 },
      { label: "Дизайн-системы", key: "designsystems", count: 10 },
    ],
  },
  {
    icon: Bot,
    title: "AI-агенты",
    description: "Умные помощники для автоматизации коммуникации и поддержки",
    projects: 42,
    image:
      "https://images.unsplash.com/photo-1601132359864-c974e79890ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHJvYm90JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIxNzE5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    subcategories: [
      { label: "Чат-боты", key: "chatbots", count: 15 },
      { label: "Telegram боты", key: "telegrambots", count: 8 },
      { label: "Голосовые ассистенты", key: "voiceassistants", count: 8 },
      { label: "Автоматизация поддержки", key: "aisupport", count: 11 },
    ],
  },
  {
    icon: Workflow,
    title: "Автоматизация",
    description: "Оптимизация бизнес-процессов и интеграция систем",
    projects: 41,
    image:
      "https://images.unsplash.com/photo-1628017974725-18928e8e8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjIxMTM1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    subcategories: [
      { label: "CRM системы", key: "crm", count: 12 },
      { label: "Email-маркетинг", key: "emailmarketing", count: 10 },
      { label: "Интеграции", key: "integrations", count: 11 },
      { label: "Аналитика", key: "analytics", count: 8 },
    ],
  },
];

const stats = [
  { value: "120+", label: "Завершенных проектов" },
  { value: "85%", label: "Клиентов возвращаются" },
  { value: "15+", label: "Специалистов в команде" },
  { value: "8", label: "Лет на рынке" },
];

export function PortfolioPage({
  onCategoryClick,
  onNavigate,
}: PortfolioCategoryProps) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Главная", url: "https://studio.ai/" },
    { name: "Портфолио", url: "https://studio.ai/portfolio" },
  ]);

  return (
    <div className="min-h-screen bg-background pt-24">
      <SEO
        title="Портфолио"
        description="120+ успешных проектов studio.ai в веб-разработке, дизайне, AI-агентах и автоматизации. Работаем со стартапами и крупными корпорациями. Примеры наших работ и кейсы."
        keywords="портфолио веб-разработка, примеры сайтов, кейсы дизайна, примеры AI-проектов, выполненные работы, интернет-магазины, корпоративные сайты"
        canonical="https://studio.ai/portfolio"
        structuredData={breadcrumbSchema}
      />
      {/* Hero Section */}
      <div className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent">Портфолио студии</span>
            </motion.div>

            <PageHeading variants={fadeInUp}>Наши работы</PageHeading>
            <PageDescription variants={fadeInUp}>
              Более 120 успешных проектов в разработке, дизайне, AI и
              автоматизации.
              <br />
              От стартапов до крупных корпораций.
            </PageDescription>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm"
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    lineHeight: "1.2",
                    letterSpacing: "-0.02em",
                  }}
                  className="text-accent mb-2"
                >
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Category Image */}
                  <div className="relative h-64 overflow-hidden bg-secondary/20">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>

                    {/* Projects Count */}
                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                      <span className="text-foreground">
                        {category.projects} проектов
                      </span>
                    </div>
                  </div>

                  {/* Category Content */}
                  <div className="p-8">
                    <h3
                      style={{ fontSize: "1.75rem" }}
                      className="text-foreground mb-3"
                    >
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {category.description}
                    </p>

                    {/* Subcategories */}
                    <div className="space-y-2 mb-6">
                      {category.subcategories.map((sub) => (
                        <button
                          key={sub.key}
                          onClick={() => onCategoryClick?.(sub.key)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border bg-secondary/30 hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 group/item"
                        >
                          <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {sub.label}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">
                              {sub.count}
                            </span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover/item:text-accent group-hover/item:translate-x-1 transition-all" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
        </div>
      </div>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

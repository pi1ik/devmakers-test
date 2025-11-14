"use client";

import { motion } from "motion/react";
import { Services, CTASection, SEO, servicesSchema } from "@/src/widgets";
import {
  Globe,
  Palette,
  Bot,
  Workflow,
  Check,
  Zap,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import { ImageWithFallback } from "@/src/shared/ui/imageWithFallback";
import { PageHeading, PageDescription } from "@/src/shared/ui/Typography";
import { fadeInUp } from "../shared/utils/motionConfig";

const benefits = [
  {
    icon: Zap,
    title: "Быстрый запуск",
    description: "MVP за 2-4 недели, итеративная разработка",
  },
  {
    icon: Shield,
    title: "Качество кода",
    description: "Код ревью, тестирование, документация",
  },
  {
    icon: Clock,
    title: "В срок",
    description: "Чёткие дедлайны, прозрачная коммуникация",
  },
  {
    icon: Users,
    title: "Поддержка 24/7",
    description: "Техподдержка и консультации после запуска",
  },
];

const technologies = [
  { name: "React / Next.js", category: "Frontend" },
  { name: "Node.js / Python", category: "Backend" },
  { name: "Figma / Adobe XD", category: "Design" },
  { name: "GPT-4 / Claude", category: "AI" },
  { name: "PostgreSQL / MongoDB", category: "Database" },
  { name: "AWS / Vercel", category: "Cloud" },
];

const serviceDetails = [
  {
    icon: Globe,
    title: "Веб-разработка",
    description: "Современные веб-решения любой сложности",
    features: [
      "Лендинги с высокой конверсией",
      "Корпоративные сайты на CMS",
      "Интернет-магазины с интеграциями",
      "SaaS и веб-приложения",
      "Адаптивная верстка и SEO",
    ],
    image:
      "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjIxMDAzODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Palette,
    title: "UI/UX Дизайн",
    description: "Дизайн, который конвертирует пользователей",
    features: [
      "UX-исследования и прототипирование",
      "Визуальный дизайн интерфейсов",
      "Дизайн-системы и UI-киты",
      "Брендинг и айдентика",
      "Адаптивный дизайн для всех устройств",
    ],
    image:
      "https://images.unsplash.com/photo-1572882724878-e17d310e6a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwdG9vbHN8ZW58MXx8fHwxNzYyMTUzODMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Bot,
    title: "AI-агенты",
    description: "Умные помощники для бизнеса",
    features: [
      "Чат-боты для сайтов и мессенджеров",
      "Голосовые ассистенты для телефонии",
      "AI для автоматизации поддержки",
      "Интеграция с GPT-4 и Claude",
      "Обучение на ваших данных",
    ],
    image:
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyMTE1MTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Workflow,
    title: "Автоматизация процессов",
    description: "Оптимизация и масштабирование бизнеса",
    features: [
      "Подбор и внедрение CRM/ERP",
      "Настройка email-маркетинга",
      "Интеграция систем через API",
      "Аналитика и дашборды",
      "Автоматизация рутинных задач",
    ],
    image:
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyMTE1MTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

interface ServicesPageProps {
  onNavigate?: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="min-h-screen bg-background pt-24">
      <SEO
        title="Услуги"
        description="Комплексные digital-решения от studio.ai: веб-разработка, UI/UX дизайн, AI-агенты и автоматизация бизнес-процессов. Быстрый запуск, качество кода, поддержка 24/7."
        keywords="услуги веб-разработки, UI/UX дизайн, создание сайтов, разработка AI-агентов, чат-боты, автоматизация бизнеса, CRM системы, Next.js, React"
        canonical="https://studio.ai/services"
        structuredData={servicesSchema}
      />
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <PageHeading variants={fadeInUp}>Наши услуги</PageHeading>
          <PageDescription variants={fadeInUp}>
            Комплексные решения для вашего бизнеса: от идеи до готового продукта
          </PageDescription>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
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
      </div>

      {/* Main Services */}
      <Services />

      {/* Detailed Services */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "3rem",
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          }}
          className="text-foreground mb-16 text-center"
        >
          Что входит в услуги
        </motion.h2>

        <div className="space-y-12">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  !isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-80 rounded-2xl overflow-hidden ${
                    !isEven ? "lg:col-start-2" : ""
                  }`}
                >
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                  <h3
                    style={{ fontSize: "2rem", lineHeight: "1.2" }}
                    className="text-foreground mb-4"
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-muted-foreground mb-6"
                    style={{ fontSize: "1.125rem" }}
                  >
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Technologies */}
      <div className="bg-secondary/20 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              style={{
                fontSize: "3rem",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
              }}
              className="text-foreground mb-4"
            >
              Технологии
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Используем проверенный стек технологий для создания надежных
              решений
            </p>
          </motion.div>

          {/* Infinite Marquee */}
          <div className="relative">
            <div className="flex gap-4 animate-marquee">
              {/* First set */}
              {technologies.map((tech) => (
                <div
                  key={`first-${tech.name}`}
                  className="flex-shrink-0 px-6 py-4 rounded-xl border border-border bg-background/50 backdrop-blur-sm"
                >
                  <div className="text-muted-foreground whitespace-nowrap">
                    {tech.name}
                  </div>
                  <div className="text-accent whitespace-nowrap">
                    {tech.category}
                  </div>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {technologies.map((tech) => (
                <div
                  key={`second-${tech.name}`}
                  className="flex-shrink-0 px-6 py-4 rounded-xl border border-border bg-background/50 backdrop-blur-sm"
                >
                  <div className="text-muted-foreground whitespace-nowrap">
                    {tech.name}
                  </div>
                  <div className="text-accent whitespace-nowrap">
                    {tech.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

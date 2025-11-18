"use client";

import { motion } from "motion/react";
import { Services, CTASection, SEO, servicesSchema } from "@/src/widgets";
import {
  MotionPageHeading,
  MotionPageDescription,
} from "@/src/shared/ui/Typography";
import { fadeInUp } from "../../shared/utils/motionConfig";
import { useMemo } from "react";
import { getAnimationConfig } from "../../shared/utils/performance";
import { benefits, technologies, serviceDetails } from "./model/servicesData";
import { DetailedServices } from "./ui/DetailedServices";
import { Benefits } from "./ui/Benefits";
import { Technologies } from "./ui/Technologies";

interface IServicesPageProps {
  onNavigate?: (page: string) => void;
}

export function ServicesPage({ onNavigate }: IServicesPageProps) {
  const animConfig = useMemo(() => getAnimationConfig(), []);
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
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: animConfig.duration }}
          className="text-center mb-12"
        >
          <MotionPageHeading variants={fadeInUp}>Наши услуги</MotionPageHeading>
          <MotionPageDescription variants={fadeInUp}>
            Комплексные решения для вашего бизнеса: от идеи до готового продукта
          </MotionPageDescription>
        </motion.div>

        {/* Benefits Grid */}
        <Benefits benefits={benefits} />
      </div>

      {/* Main Services */}
      <Services />

      {/* Detailed Services */}
      <DetailedServices serviceDetails={serviceDetails} />

      {/* Technologies */}
      <Technologies technologies={technologies} />

      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import { Hero } from "../Hero";
import { Stats } from "../Stats";
import { Services } from "../Services";
import { Work } from "../Work";
import { Clients } from "../Clients";
import { Process } from "../Process";
import { Testimonials } from "../Testimonials";
import { AIConsultantPreview } from "../AIConsultantPreview";
import { CTASection } from "../CTASection";
import { SEO, organizationSchema } from "../SEO";
import { STUDIO_NAME, SITE_ORIGIN } from "../../utils/constants";

interface HomePageProps {
  onNavigate?: (page: string) => void;
  onProjectClick?: (projectId: string) => void;
}

export function HomePage({ onNavigate, onProjectClick }: HomePageProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO
        title="Главная"
        description={`${STUDIO_NAME} — премиум студия веб-разработки, дизайна и AI-решений. Создаем сайты, дизайн, AI-агентов и автоматизируем бизнес-процессы. От идеи до полной реализации.`}
        keywords={`${STUDIO_NAME}, веб-разработка, создание сайтов, UI/UX дизайн, AI-агенты, чат-боты, автоматизация бизнеса, CRM системы, разработка под ключ`}
        canonical={`${SITE_ORIGIN}/`}
        structuredData={organizationSchema}
      />

      {/* Ambient background gradient system */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Base gradient - full page smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5" />

        {/* Top accent bloom */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-accent/8 rounded-full blur-[150px]"
          animate={{
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Left side gradient flow */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-purple-500/6 rounded-full blur-[120px]"
          animate={{
            opacity: [0.6, 0.8, 0.6],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Right side gradient flow */}
        <motion.div
          className="absolute top-1/2 -right-1/4 w-[900px] h-[900px] bg-accent/6 rounded-full blur-[140px]"
          animate={{
            opacity: [0.7, 0.9, 0.7],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Bottom accent bloom */}
        <motion.div
          className="absolute bottom-0 left-1/3 w-[1000px] h-[500px] bg-purple-500/7 rounded-full blur-[130px]"
          animate={{
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Smooth vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent via-50% to-background/40" />

        {/* Radial fade from edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_100%)] opacity-60" />
      </div>

      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Clients/Partners */}
      <Clients />

      {/* Services Preview */}
      <Services onNavigate={onNavigate} />

      {/* AI Consultant Preview */}
      <AIConsultantPreview onNavigate={() => onNavigate?.("ai-consultant")} />

      {/* Work Preview */}
      <Work onProjectClick={onProjectClick} />

      {/* Testimonials */}
      <Testimonials onContactClick={() => scrollToSection("contact")} />

      {/* Process Preview */}
      <Process />

      {/* CTA Section */}
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}

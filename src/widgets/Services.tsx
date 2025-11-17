"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  Globe,
  Palette,
  Bot,
  Workflow,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { getAnimationConfig } from "../shared/utils/performance";
import { SectionDescription, SectionHeading } from "../shared/ui";

const services = [
  {
    icon: Globe,
    title: "Разработка сайтов",
    description:
      "Создаем сайты любой сложности: лендинги, корпоративные порталы, интернет-магазины и веб-приложения.",
    gradient: "from-blue-500/20 via-cyan-500/20 to-blue-500/20",
    iconColor: "text-blue-400",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
  },
  {
    icon: Palette,
    title: "Дизайн UI/UX",
    description:
      "Проектируем удобные интерфейсы и создаем визуальную айдентику, которая выделяет ваш продукт.",
    gradient: "from-purple-500/20 via-pink-500/20 to-purple-500/20",
    iconColor: "text-purple-400",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]",
  },
  {
    icon: Bot,
    title: "AI-агенты",
    description:
      "Разрабатываем чат-ботов, голосовых ассистентов и AI-инструменты для автоматизации задач.",
    gradient: "from-accent/20 via-indigo-500/20 to-accent/20",
    iconColor: "text-accent",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]",
  },
  {
    icon: Workflow,
    title: "Оптимизация процессов",
    description:
      "Находим и внедряем софт для автоматизации бизнес-процессов, повышаем эффективность компании.",
    gradient: "from-emerald-500/20 via-green-500/20 to-emerald-500/20",
    iconColor: "text-emerald-400",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]",
  },
];

function ServiceCard({
  service,
  index,
  onClick,
}: {
  service: (typeof services)[0];
  index: number;
  onClick?: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const animConfig = useMemo(() => getAnimationConfig(), []);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    Promise.resolve().then(() => setMounted(true));
  }, []);
  // Only use 3D effects on capable devices
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!animConfig.complexAnimations) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    mounted && (
      <motion.div
        initial={animConfig.shouldAnimate ? { opacity: 0, y: 30 } : false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: animConfig.duration,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={
          animConfig.complexAnimations
            ? {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
            : undefined
        }
        className="group relative h-full cursor-pointer"
      >
        {/* Gradient glow effect - simplified for low-end */}
        {animConfig.complexAnimations && (
          <motion.div
            animate={{
              opacity: isHovered ? 0.8 : 0,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
            className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl`}
          />
        )}

        {/* Main card */}
        <motion.div
          whileHover={animConfig.shouldAnimate ? { y: -8 } : {}}
          transition={{ duration: 0.2 }}
          className="relative h-full p-8 lg:p-10 rounded-2xl border border-border bg-background/80 backdrop-blur-xl overflow-hidden flex flex-col"
          style={{
            willChange: animConfig.shouldAnimate ? "transform" : "auto",
          }}
        >
          {/* Animated gradient background - only on complex animations */}
          {animConfig.complexAnimations && (
            <motion.div
              animate={{
                backgroundPosition: isHovered
                  ? ["0% 0%", "100% 100%"]
                  : "0% 0%",
              }}
              transition={{
                duration: 3,
                repeat: isHovered ? Infinity : 0,
                repeatType: "reverse",
              }}
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              style={{ backgroundSize: "200% 200%" }}
            />
          )}

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Shine effect - only on capable devices */}
          {animConfig.complexAnimations && (
            <motion.div
              animate={{
                x: isHovered ? ["0%", "200%"] : "0%",
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
            />
          )}

          <div className="relative flex flex-col h-full">
            {/* Icon container with simplified animations */}
            <div className="mb-6 relative">
              <div
                className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-colors duration-300`}
              >
                {/* Icon */}
                <service.icon
                  className={`w-8 h-8 ${service.iconColor} relative z-10`}
                />
              </div>
            </div>

            {/* Title */}
            <h3
              style={{ fontSize: "1.5rem" }}
              className="text-foreground mb-3 relative"
            >
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
              {service.description}
            </p>

            {/* Hover indicator */}
            <div
              className={`flex items-center gap-2 text-accent transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-sm">Узнать больше</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Corner accent */}
          <div
            className={`absolute top-4 right-4 w-2 h-2 bg-accent rounded-full transition-transform duration-300 ${
              isHovered ? "scale-100" : "scale-0"
            }`}
          />
        </motion.div>
      </motion.div>
    )
  );
}

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const animConfig = useMemo(() => getAnimationConfig(), []);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    Promise.resolve().then(() => setMounted(true));
  }, []);

  const handleCardClick = () => {
    onNavigate?.("portfolio");
  };

  return (
    mounted && (
      <section
        id="services"
        className="relative py-20 sm:py-32 px-6 lg:px-8 overflow-hidden"
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

        {/* Animated background orbs - only on capable devices */}
        {animConfig.complexAnimations && (
          <>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 -left-48 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
              style={{ willChange: "transform, opacity" }}
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
              style={{ willChange: "transform, opacity" }}
            />
          </>
        )}

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: animConfig.duration }}
            className="text-center mb-20"
          >
            <motion.div
              initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: animConfig.duration, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/10 mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent">Наши услуги</span>
            </motion.div>

            <SectionHeading>Что мы делаем</SectionHeading>

            <SectionDescription className="mb-4">
              Комплексные digital-решения для вашего бизнеса
            </SectionDescription>
          </motion.div>

          {/* Services grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr"
            style={
              animConfig.complexAnimations
                ? { perspective: "1000px" }
                : undefined
            }
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </section>
    )
  );
}

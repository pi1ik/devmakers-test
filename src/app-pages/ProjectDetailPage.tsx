"use client";

import { motion } from "motion/react";
import styled from "@emotion/styled";
import {
  ArrowLeft,
  Calendar,
  Users,
  Target,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { ImageWithFallback } from "../shared/ui/imageWithFallback";
import { useEffect, useMemo } from "react";
import { trackProjectView } from "../shared/utils/analytics";
import {
  PageDescription,
  PageHeading,
  SectionDescription,
  SectionHeading,
} from "../shared/ui";
import { getAnimationConfig } from "../shared/utils/performance";
import { mediaQueries } from "../shared/utils/breakpoints";

export type ProjectDetail = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  results?: string;
  category: string;
  fullDescription?: string;
  client?: string;
  timeline?: string;
  team?: string;
  challenge?: string;
  solution?: string;
  technologies?: string[];
  features?: string[];
  outcomes?: string[];
  websiteUrl?: string;
};

type ProjectDetailPageProps = {
  project: ProjectDetail;
  onBack: () => void;
  onNavigate?: (page: string) => void;
};

export const ProjectDetailPageDescription = styled.p`
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

export function ProjectDetailPage({
  project,
  onBack,
  onNavigate,
}: ProjectDetailPageProps) {
  const animConfig = useMemo(() => getAnimationConfig(), []);
  // Track project view
  useEffect(() => {
    trackProjectView(project.id, project.title, project.category);
  }, [project]);

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={animConfig.shouldAnimate ? { x: -4 } : {}}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Назад к портфолио
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: animConfig.duration,
          }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <PageHeading className="mb-6">{project.title}</PageHeading>

          <ProjectDetailPageDescription className="max-w-3xl ml-0 mr-0">
            {project.description}
          </ProjectDetailPageDescription>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[330px] mb-16 rounded-2xl overflow-hidden border xs:h-[380px] sm:h-[420px] md:h-[500px]"
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full pt-3 box-border object-top object-cover xs:pt-5 xs:px-5 sm:pt-5 sm:px-15 md:px-25 lg:px-55"
          />
        </motion.div>

        {/* Website Link Banner */}
        {project.websiteUrl && (
          <motion.a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={animConfig.shouldAnimate ? { scale: 1.02 } : {}}
            whileTap={{ scale: 0.98 }}
            className="block mb-6 p-6 rounded-2xl border border-accent/30 bg-accent/5 backdrop-blur-sm hover:border-accent/50 transition-colors duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <ExternalLink className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-foreground mb-1">Посмотреть сайт</h3>
                  <p className="text-muted-foreground">
                    Перейти к работающему проекту
                  </p>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        )}

        {/* Project Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {project.client && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: project.websiteUrl ? 0.4 : 0.3,
              }}
              className="p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-foreground mb-2">Клиент</h3>
              <p className="text-muted-foreground">{project.client}</p>
            </motion.div>
          )}

          {project.timeline && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: project.websiteUrl ? 0.5 : 0.4,
              }}
              className="p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-foreground mb-2">Сроки</h3>
              <p className="text-muted-foreground">{project.timeline}</p>
            </motion.div>
          )}

          {project.results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: project.websiteUrl ? 0.6 : 0.5,
              }}
              className="p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-foreground mb-2">Результаты</h3>
              <p className="text-muted-foreground">{project.results}</p>
            </motion.div>
          )}
        </div>

        {/* Full Description */}
        {project.fullDescription && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <SectionHeading>О проекте</SectionHeading>
            <SectionDescription
              className="leading-relaxed"
              style={{ fontSize: "1.125rem" }}
            >
              {project.fullDescription}
            </SectionDescription>
          </motion.div>
        )}

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {project.challenge && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-8 rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm"
            >
              <h3
                style={{ fontSize: "1.5rem" }}
                className="text-foreground mb-4"
              >
                Задача
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>
          )}

          {project.solution && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-8 rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm"
            >
              <h3
                style={{ fontSize: "1.5rem" }}
                className="text-foreground mb-4"
              >
                Решение
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          )}
        </div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-16"
          >
            <SectionHeading>Ключевые функции</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-background/50 backdrop-blur-sm"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-16"
          >
            <SectionHeading>Технологии</SectionHeading>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary/50 text-foreground rounded-xl border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Outcomes */}
        {project.outcomes && project.outcomes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-20"
          >
            <SectionHeading>Достижения</SectionHeading>
            <div className="relative overflow-hidden">
              {/* Left fade gradient */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

              {/* Right fade gradient */}
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

              <div className="flex animate-marquee">
                {/* First set */}
                <div className="flex gap-6 pl-3 pr-3 animate-marquee1">
                  {project.outcomes.map((outcome, index) => (
                    <div
                      key={`first-${index}`}
                      className="flex-shrink-0 p-6 rounded-2xl border border-accent/20 bg-accent/5 backdrop-blur-sm flex items-center justify-center min-h-[120px] min-w-[320px] "
                    >
                      <p
                        className="text-foreground text-center"
                        style={{ fontSize: "1.125rem" }}
                      >
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex gap-6 pl-3 pr-3 animate-marquee2">
                  {project.outcomes.map((outcome, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex-shrink-0 p-6 rounded-2xl border border-accent/20 bg-accent/5 backdrop-blur-sm flex items-center justify-center min-h-[120px] min-w-[320px]"
                    >
                      <p
                        className="text-foreground text-center"
                        style={{ fontSize: "1.125rem" }}
                      >
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-20 p-8 rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm text-center"
        >
          <h3 style={{ fontSize: "1.75rem" }} className="text-foreground mb-4">
            Хотите похожий проект?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Расскажите нам о вашей задаче, и мы создадим решение, которое
            превзойдет ожидания
          </p>
          <motion.button
            onClick={() => onNavigate?.("ai-consultant")}
            whileHover={animConfig.shouldAnimate ? { scale: 1.02 } : {}}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-xl transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] cursor-pointer"
          >
            Задать вопрос AI
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

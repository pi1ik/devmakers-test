"use client";

import { motion } from "motion/react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { TELEGRAM_URL, CONTACT_EMAIL } from "@/src/shared/utils/constants";
import styled from "@emotion/styled";
import { mediaQueries } from "@/src/shared/utils/breakpoints";
import { useMemo, useState } from "react";
import { ContactModal } from "../features/contact/ContactModal";
import { getAnimationConfig } from "@/src/shared/utils/performance";

interface IContactProps {
  onNavigate?: (page: string) => void;
}

// Styled Components for Contact Section
const ContactHeading = styled(motion.h2)`
  color: var(--foreground);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;

  font-size: 2rem;

  ${mediaQueries.tablet} {
    font-size: 2.5rem;
  }

  ${mediaQueries.desktop} {
    font-size: 3.5rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(to right, var(--accent, #6366f1), #c084fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

const ContactDescription = styled.p`
  color: var(--muted-foreground);
  margin-bottom: 1.5rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;

  font-size: 1rem;

  ${mediaQueries.tablet} {
    font-size: 1.125rem;
  }
`;

const FeatureCard = styled(motion.div)`
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  background: var(--secondary-30);
  backdrop-filter: blur(8px);
  text-align: center;
`;

const FeatureTitle = styled.h3`
  color: var(--foreground);
  margin-bottom: 0.5rem;

  font-size: 1rem;

  ${mediaQueries.tablet} {
    font-size: 1.125rem;
  }
`;

const FeatureDescription = styled.p`
  color: var(--muted-foreground);

  font-size: 0.875rem;

  ${mediaQueries.tablet} {
    font-size: 1rem;
  }
`;

export function Contact({ onNavigate }: IContactProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const animConfig = useMemo(() => getAnimationConfig(), []);

  return (
    <section id="contact" className="px-6 lg:px-8 pt-0 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <ContactHeading
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Давайте обсудим
            <br />
            <GradientText>ваш проект</GradientText>
          </ContactHeading>
          <ContactDescription>
            Есть идея для сайта? Нужен AI-агент? Хотите автоматизировать
            процессы? Заполните форму или напишите нам напрямую.
          </ContactDescription>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm flex flex-col justify-center"
          >
            <h3
              style={{ fontSize: "1.75rem" }}
              className="text-foreground mb-4"
            >
              Готовы начать проект?
            </h3>
            <p className="text-muted-foreground mb-6">
              Расскажите нам о вашей задаче, и мы создадим решение, которое
              превзойдет ожидания
            </p>
            <motion.button
              onClick={() => setIsContactModalOpen(true)}
              whileHover={animConfig.shouldAnimate ? { scale: 1.02 } : {}}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-3 bg-accent text-accent-foreground rounded-xl transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
            >
              Оставить заявку
            </motion.button>
          </motion.div>

          {/* Direct Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div>
              <h3 className="text-foreground mb-4">Или свяжитесь напрямую</h3>
              <p className="text-muted-foreground mb-6">
                Выберите удобный для вас способ связи
              </p>
            </div>

            <motion.a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={animConfig.shouldAnimate ? { scale: 1.02 } : {}}
              whileTap={{ scale: 0.98 }}
              className="group p-6 border border-border bg-secondary/30 rounded-xl hover:border-accent/50 transition-colors duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Send className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-foreground">Telegram</div>
                <div className="text-muted-foreground">
                  @{TELEGRAM_URL.replace("https://t.me/", "")}
                </div>
              </div>
            </motion.a>

            <motion.a
              href={`mailto:${CONTACT_EMAIL}`}
              whileHover={animConfig.shouldAnimate ? { scale: 1.02 } : {}}
              whileTap={{ scale: 0.98 }}
              className="group p-6 border border-border bg-secondary/30 rounded-xl hover:border-accent/50 transition-colors duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-foreground">Email</div>
                <div className="text-muted-foreground">{CONTACT_EMAIL}</div>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-accent" />
            </div>
            <FeatureTitle>Быстрый ответ</FeatureTitle>
            <FeatureDescription>
              Отвечаем в течение 2 часов в рабочее время
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <FeatureTitle>Консультация</FeatureTitle>
            <FeatureDescription>
              Бесплатный аудит и оценка проекта
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Send className="w-6 h-6 text-accent" />
            </div>
            <FeatureTitle>Гибкий подход</FeatureTitle>
            <FeatureDescription>
              Подстраиваемся под ваши сроки и бюджет
            </FeatureDescription>
          </FeatureCard>
        </div>
      </div>

      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        title="Готовы начать проект?"
        description="Расскажите нам о вашей задаче, и мы создадим решение, которое превзойдет ожидания"
      />
    </section>
  );
}

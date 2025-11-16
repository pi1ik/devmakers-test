"use client";

import { motion } from "motion/react";
import { Sparkles, ArrowRight, MessageSquare } from "lucide-react";
import { TELEGRAM_URL } from "@/src/shared/utils/constants";
import styled from "@emotion/styled";
import { mediaQueries } from "@/src/shared/utils/breakpoints";
import { useMemo, useState } from "react";
import { ContactModal } from "@/src/features/contact/ContactModal";
import { SectionDescription, SectionHeading } from "../shared/ui";
import { getAnimationConfig } from "../shared/utils/performance";

interface CTASectionProps {
  onNavigate?: (page: string) => void;
}

// Styled Components for CTA Section

const CTAButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;

  flex-direction: column;

  ${mediaQueries.tablet} {
    flex-direction: row;
  }
`;

const TrustBadges = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 0.875rem;
  color: var(--muted-foreground);

  ${mediaQueries.mobile} {
    gap: 1rem;
    font-size: 0.75rem;
  }

  ${mediaQueries.tablet} {
    gap: 2rem;
    font-size: 0.875rem;
  }
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.875rem;

  ${mediaQueries.tablet} {
    font-size: 1rem;
  }
`;

export function CTASection({ onNavigate }: CTASectionProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const animConfig = useMemo(() => getAnimationConfig(), []);

  return (
    <>
      <section className="relative py-24 lg:py-32 px-6 lg:px-8 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5" />
        <motion.div
          animate={
            animConfig.shouldAnimate
              ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
              : false
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={
            animConfig.shouldAnimate
              ? {
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }
              : false
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: animConfig.duration }}
            className="text-center"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-8"
            >
              <Sparkles className="w-8 h-8 text-accent" />
            </motion.div>

            {/* Heading */}
            <SectionHeading>Готовы начать проект?</SectionHeading>

            {/* Description */}
            <SectionDescription>
              Давайте обсудим вашу идею и создадим что-то невероятное вместе.
              Первая консультация — бесплатно.
            </SectionDescription>

            {/* CTA Buttons */}
            <CTAButtonContainer>
              {/* Primary CTA - Contact Form with shine effect */}
              <motion.button
                onClick={() => setIsContactModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-xl bg-accent text-accent-foreground transition-shadow duration-300 flex items-center gap-2 overflow-hidden hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] cursor-pointer"
              >
                <ArrowRight className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Оставить заявку</span>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                />
              </motion.button>

              {/* Secondary CTA - Telegram */}
              <motion.a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.15 } }}
                className="px-8 py-4 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-foreground hover:border-accent/50 transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Написать в Telegram
              </motion.a>
            </CTAButtonContainer>

            {/* Trust badges */}
            <TrustBadges
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Badge>
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Бесплатная консультация
              </Badge>
              <Badge>
                <div className="w-2 h-2 rounded-full bg-green-500" />
                NDA по запросу
              </Badge>
              <Badge>
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Ответ в течение 24 часов
              </Badge>
            </TrustBadges>
          </motion.div>
        </div>
      </section>

      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        title="Готовы начать проект?"
        description="Давайте обсудим вашу идею и создадим что-то невероятное вместе"
      />
    </>
  );
}

"use client";

import { motion } from "motion/react";
import { CheckCircle, HelpCircle } from "lucide-react";
import { SEO, generateFAQSchema } from "@/src/widgets";
import { STUDIO_NAME, SITE_ORIGIN } from "@/src/shared/utils/constants";
import { MotionPageHeading, MotionPageDescription } from "@/src/shared/ui";
import { fadeInUp } from "@/src/shared/utils/motionConfig";
import { useMemo, useState } from "react";
import { ContactModal } from "@/src/features/contact/ContactModal";
import { faq } from "./model/faq";
import { getAnimationConfig } from "@/src/shared/utils/performance";

interface IFAQPageProps {
  onNavigate?: (page: string) => void;
}

export function FAQPage({}: IFAQPageProps) {
  const faqSchema = generateFAQSchema(faq);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const animConfig = useMemo(() => getAnimationConfig(), []);

  return (
    <div className="min-h-screen bg-background pt-24">
      <SEO
        title="FAQ — Частые вопросы"
        description={`Ответы на популярные вопросы о работе с ${STUDIO_NAME}: сроки разработки, стоимость проектов, технологии, техподдержка. Узнайте больше о сотрудничестве с нашей студией.`}
        keywords="частые вопросы веб-разработка, стоимость создания сайта, сроки разработки, техподдержка сайтов, договор на разработку, работа с регионами"
        canonical={`${SITE_ORIGIN}/faq`}
        structuredData={faqSchema}
      />
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-12">
        <motion.div
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8">
            <HelpCircle className="w-10 h-10 text-accent" />
          </div>
          <MotionPageHeading variants={fadeInUp}>
            Частые вопросы
          </MotionPageHeading>
          <MotionPageDescription variants={fadeInUp}>
            Ответы на самые популярные вопросы о работе с нами
          </MotionPageDescription>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faq.map((item, index) => (
            <motion.div
              key={item.question}
              initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <div className="flex-1">
                  <h3
                    style={{ fontSize: "1.25rem" }}
                    className="text-foreground mb-3"
                  >
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm text-center"
        >
          <h3
            style={{ fontSize: "1.5rem" }}
            className="text-foreground mb-4 text-balance"
          >
            Не нашли ответ на свой вопрос?
          </h3>
          <p className="text-muted-foreground mb-6 text-balance">
            Напишите нам и мы ответим в течение нескольких часов
          </p>
          <motion.button
            onClick={() => setIsContactModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-xl transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] cursor-pointer"
          >
            Написать нам
          </motion.button>
        </motion.div>
      </div>

      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        title="Задайте ваш вопрос"
        description="Напишите нам и мы ответим в течение нескольких часов"
      />
    </div>
  );
}

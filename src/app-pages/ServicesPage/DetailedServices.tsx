"use client";

import { motion } from "motion/react";
import { ImageWithFallback, MotionSectionHeading } from "@/src/shared/ui";
import { ServiceDetail } from "./servicesData";
import { useEffect, useMemo, useState } from "react";
import { getAnimationConfig } from "@/src/shared/utils/performance";
import { Check } from "lucide-react";

interface DetailedServicesProps {
  serviceDetails: ServiceDetail[];
}

export function DetailedServices({ serviceDetails }: DetailedServicesProps) {
  const animConfig = useMemo(() => getAnimationConfig(), []);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    Promise.resolve().then(() => setMounted(true));
  }, []);
  return (
    mounted && (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <MotionSectionHeading
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          Что входит в услуги
        </MotionSectionHeading>

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
    )
  );
}

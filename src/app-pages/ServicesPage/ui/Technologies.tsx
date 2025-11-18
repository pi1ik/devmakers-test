"use client";

import { motion } from "motion/react";
import { ITechnology } from "../model/servicesData";
import { SectionDescription, SectionHeading } from "@/src/shared/ui";
import { useEffect, useState } from "react";

interface ITechnologiesProps {
  technologies: ITechnology[];
}
export function Technologies({ technologies }: ITechnologiesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    Promise.resolve().then(() => setMounted(true));
  }, []);
  return (
    mounted && (
      <div className="bg-secondary/20 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <SectionHeading>Технологии</SectionHeading>
            <SectionDescription>
              Используем проверенный стек технологий для создания надежных
              решений
            </SectionDescription>
          </motion.div>

          {/* Infinite Marquee */}
          <div className="relative overflow-hidden">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex overflow-hidden">
              <div className="flex gap-4 animate-marquee">
                {/* First set */}
                <div className="flex gap-4 pl-2 pr-2 animate-marquee1">
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
                </div>

                {/* Second set for seamless loop */}

                <div className="flex gap-4 pl-2 pr-2 animate-marquee2">
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
        </div>
      </div>
    )
  );
}

"use client";

import { motion } from "motion/react";
import { Team } from "@/src/app-pages/TeamPage/ui/Team";
import { SEO } from "@/src/widgets";
import { STUDIO_NAME, SITE_ORIGIN } from "@/src/shared/utils/constants";
import { useMemo } from "react";
import { getAnimationConfig } from "../../shared/utils/performance";
import { PageDescription, PageHeading } from "../../shared/ui";
import TeamPhotos from "./ui/TeamPhotos";
import { achievements, culture, expertise, teamPhotos } from "./model/teamData";
import Achievements from "./ui/Achievements";
import Expertise from "./ui/Expertise";
import Culture from "./ui/Culture";
import JoinCTA from "./ui/JoinCTA";

export function TeamPage() {
  const animConfig = useMemo(() => getAnimationConfig(), []);
  return (
    <div className="min-h-screen bg-background pt-24">
      <SEO
        title="Команда"
        description={`Познакомьтесь с командой ${STUDIO_NAME}: опытные разработчики, дизайнеры и AI-специалисты мирового уровня. 5+ лет опыта, современный стек технологий, награды и достижения.`}
        keywords="команда разработчиков, UI/UX дизайнеры, AI разработка, frontend developer, backend developer, React команда, дизайн студия"
        canonical={`${SITE_ORIGIN}/team`}
      />
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <motion.div
          initial={animConfig.shouldAnimate ? { opacity: 0, y: 20 } : {}}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: animConfig.duration,
          }}
          className="text-center mb-16"
        >
          <PageHeading className="mb-6">Наша команда</PageHeading>
          <PageDescription>
            Опытные специалисты мирового уровня в разработке, дизайне и AI
          </PageDescription>
        </motion.div>

        {/* Team Photos Grid */}
        <TeamPhotos teamPhotos={teamPhotos} />

        {/* Achievements */}
        <Achievements achievements={achievements} />
      </div>

      {/* Main Team Component */}
      <Team />

      {/* Expertise */}
      <Expertise expertise={expertise} />

      {/* Culture */}
      <Culture culture={culture} />

      {/* Join CTA */}
      <JoinCTA />
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/src/widgets/Hero";
import { Stats } from "@/src/widgets/Stats";
import { useRouter } from "next/navigation";

// Lazy load components below the fold for better performance
const Services = dynamic(
  () =>
    import("@/src/widgets/Services").then((mod) => ({ default: mod.Services })),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const Work = dynamic(
  () => import("@/src/widgets/Work").then((mod) => ({ default: mod.Work })),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const Clients = dynamic(
  () =>
    import("@/src/widgets/Clients").then((mod) => ({ default: mod.Clients })),
  {
    loading: () => <div className="min-h-[300px]" />,
  }
);

const Process = dynamic(
  () =>
    import("@/src/widgets/Process").then((mod) => ({ default: mod.Process })),
  {
    loading: () => <div className="min-h-[600px]" />,
  }
);

const Testimonials = dynamic(
  () =>
    import("@/src/widgets/Testimonials").then((mod) => ({
      default: mod.Testimonials,
    })),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const AIConsultantPreview = dynamic(
  () =>
    import("@/src/widgets/AIConsultantPreview").then((mod) => ({
      default: mod.AIConsultantPreview,
    })),
  {
    loading: () => <div className="min-h-[500px]" />,
  }
);

const CTASection = dynamic(
  () =>
    import("@/src/widgets/CTASection").then((mod) => ({
      default: mod.CTASection,
    })),
  {
    loading: () => <div className="min-h-[300px]" />,
  }
);

export default function Home() {
  const router = useRouter();

  const handleProjectClick = (projectId: string) => {
    // projectId format: "landings-0", "chatbots-0", etc.
    const [category, id] = projectId.split("-");
    router.push(`/portfolio/${category}/${id}`);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient background gradient system */}

      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Clients/Partners */}
      <Clients />

      {/* Services Preview */}
      <Services />

      {/* AI Consultant Preview */}
      <AIConsultantPreview />

      {/* Work Preview */}
      <Work onProjectClick={handleProjectClick} />

      {/* Testimonials */}
      <Testimonials />

      {/* Process Preview */}
      <Process />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

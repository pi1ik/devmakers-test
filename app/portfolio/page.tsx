"use client";

import { PortfolioPage } from "@/src/app-pages/PortfolioPage";
import { useRouter } from "next/navigation";

export default function Portfolio() {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/portfolio/${category}`);
  };

  return <PortfolioPage onCategoryClick={handleCategoryClick} />;
}

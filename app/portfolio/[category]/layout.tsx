import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { portfolioData } from "@/src/app-pages/PortfolioPage/model/portfolioData";

export default async function PortfolioLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // Check if category exists
  if (!portfolioData[category]) {
    notFound();
  }

  return <>{children}</>;
}

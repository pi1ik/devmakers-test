import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/src/features/navigation/Navigation";
import { Footer } from "@/src/widgets/Footer";
import { FloatingChatButton } from "@/src/features/navigation/FloatingChatButton";
import { ThemeProvider } from "@/src/features/theme/ThemeProvider";
import { QueryProvider } from "@/src/processes/QueryProvider";
import { ThemeScript } from "@/src/features/theme/ThemeScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "devmakers - Разработка сайтов, дизайн и AI для вашего бизнеса",
  description:
    "Разрабатываем сайты, создаем дизайн, внедряем AI-агентов и автоматизируем бизнес-процессы. От идеи до полной реализации.",
  icons: {
    icon: [
      { url: "/logo-new.svg", type: "image/svg+xml" },
      { url: "/logo-new.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: "/logo-new.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link rel="preload" href="/logo-new.svg" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <ThemeProvider>
            <div className="min-h-screen bg-background">
              <Navigation />
              {children}
              <Footer />
              <FloatingChatButton />
            </div>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

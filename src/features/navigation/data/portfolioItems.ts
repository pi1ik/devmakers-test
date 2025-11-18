export interface IPortfolioItem {
  label: string;
  key: string;
}

export interface IPortfolioCategory {
  category: string;
  items: IPortfolioItem[];
}
export const portfolioItems: IPortfolioCategory[] = [
  {
    category: "Веб разработка",
    items: [
      { label: "Лендинги", key: "landings" },
      { label: "Корпоративные сайты", key: "corporate" },
      { label: "Интернет-магазины", key: "ecommerce" },
      { label: "Веб-приложения", key: "webapps" },
    ],
  },
  {
    category: "Дизайн",
    items: [
      { label: "UI/UX дизайн", key: "uiux" },
      { label: "Логотипы", key: "logos" },
      { label: "Брендинг", key: "branding" },
      { label: "Дизайн-системы", key: "designsystems" },
    ],
  },
  {
    category: "AI-агенты",
    items: [
      { label: "Чат-боты", key: "chatbots" },
      { label: "Telegram боты", key: "telegrambots" },
      { label: "Голосовые ассистенты", key: "voiceassistants" },
      { label: "Автоматизация поддержки", key: "aisupport" },
    ],
  },
  {
    category: "Автоматизация",
    items: [
      { label: "CRM системы", key: "crm" },
      { label: "Email-маркетинг", key: "emailmarketing" },
      { label: "Интеграции", key: "integrations" },
      { label: "Аналитика", key: "analytics" },
    ],
  },
];

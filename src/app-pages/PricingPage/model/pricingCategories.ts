export interface ICategory {
  id: string;
  name: string;
}

export const pricingCategories: ICategory[] = [
  { id: "all", name: "Все услуги" },
  { id: "Веб-разработка", name: "Веб-разработка" },
  { id: "Дизайн", name: "Дизайн" },
  { id: "AI-агенты", name: "AI-агенты" },
  { id: "Автоматизация", name: "Автоматизация" },
];

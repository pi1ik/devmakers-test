import {
  Award,
  BookOpen,
  Heart,
  Zap,
  Code,
  Palette,
  Server,
  Bot,
  Briefcase,
  Star,
  TrendingUp,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ICultureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface IExpertiseItem {
  icon: LucideIcon;
  title: string;
  skills: string[];
  experience: string;
}

export interface IAchievementItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ITeamCategory {
  icon: LucideIcon;
  title: string;
  count: number;
}

export interface IStat {
  label: string;
  value: string;
}

export const culture: ICultureItem[] = [
  {
    icon: Zap,
    title: "Быстрые решения",
    description:
      "Работаем в режиме стартапа: быстро принимаем решения и не боимся экспериментов.",
  },
  {
    icon: BookOpen,
    title: "Постоянное обучение",
    description:
      "Каждый месяц изучаем новые технологии и делимся знаниями внутри команды.",
  },
  {
    icon: Heart,
    title: "Забота о команде",
    description:
      "Гибкий график, удаленная работа, медстраховка и компенсация обучения.",
  },
  {
    icon: Award,
    title: "Качество кода",
    description:
      "Code review, тестирование, документация — стандарт для каждого проекта.",
  },
];

export const expertise: IExpertiseItem[] = [
  {
    icon: Code,
    title: "Frontend разработка",
    skills: ["React/Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    experience: "5+ лет опыта",
  },
  {
    icon: Server,
    title: "Backend разработка",
    skills: ["Node.js", "Python", "PostgreSQL", "API Design"],
    experience: "6+ лет опыта",
  },
  {
    icon: Palette,
    title: "UI/UX дизайн",
    skills: ["Figma", "Adobe XD", "Prototyping", "Design Systems"],
    experience: "7+ лет опыта",
  },
  {
    icon: Bot,
    title: "AI разработка",
    skills: ["GPT-4", "Claude", "LangChain", "Vector DB"],
    experience: "3+ года опыта",
  },
  {
    icon: Briefcase,
    title: "Менеджмент",
    skills: ["Agile", "Scrum", "Jira", "Product Management"],
    experience: "8+ лет опыта",
  },
];

export const achievements: IAchievementItem[] = [
  {
    icon: Star,
    title: "Премия RuNet",
    description: "Лучший корпоративный сайт 2023",
  },
  {
    icon: Award,
    title: "Top Developer",
    description: "В топ-10 студий по версии Workspace",
  },
  {
    icon: TrendingUp,
    title: "Рост 200%",
    description: "Удвоили команду за последний год",
  },
];

export const teamPhotos: string[] = [
  "https://images.unsplash.com/photo-1670851050245-d861fd433d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjE1NDI1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1759844197486-5b3612c7d534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtd29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyMTE2ODkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
];

export const teamCategories: ITeamCategory[] = [
  {
    icon: Code,
    title: "Frontend разработчики",
    count: 4,
  },
  {
    icon: Server,
    title: "Backend разработчики",
    count: 3,
  },
  {
    icon: Palette,
    title: "Дизайнеры",
    count: 3,
  },
  {
    icon: Bot,
    title: "AI-инженеры",
    count: 2,
  },
  {
    icon: Briefcase,
    title: "Менеджеры",
    count: 3,
  },
];

export const stats: IStat[] = [
  { label: "Специалистов", value: "15+" },
  { label: "Проектов", value: "120+" },
  { label: "Лет опыта", value: "8" },
];

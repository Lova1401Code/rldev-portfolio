export type TechCategory = {
  id: string;
  icon: string;
  title: string;
  items: string[];
};

export const techCategories: TechCategory[] = [
  {
    id: "frontend",
    icon: "Monitor",
    title: "Front-end",
    items: ["React", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    id: "backend",
    icon: "Server",
    title: "Back-end",
    items: ["Node.js", "NestJS", "REST API"],
  },
  {
    id: "database",
    icon: "Database",
    title: "Base de données",
    items: ["PostgreSQL", "Prisma", "SQL"],
  },
  {
    id: "devops",
    icon: "Container",
    title: "DevOps",
    items: ["Docker", "Git", "GitHub", "CI/CD", "Nginx"],
  },
  {
    id: "ai",
    icon: "BrainCircuit",
    title: "Intelligence artificielle",
    items: [
      "Intégration d'API IA",
      "Assistants intelligents",
      "Fonctionnalités IA sur mesure",
    ],
  },
];
export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  href: string | null;
  badge?: string;
};

export const projects: Project[] = [
  {
    id: "eduflow",
    title: "EduFlow",
    subtitle: "Plateforme de gestion scolaire",
    description:
      "Une solution web permettant de centraliser la gestion d'un établissement scolaire.",
    image: "/projects/eduflow.png",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    href: "https://eduflow-seven-sigma.vercel.app/",
  },
  {
    id: "crm",
    title: "CRM",
    subtitle: "Application de gestion commerciale",
    description:
      "Une application permettant de gérer les clients, prospects, opportunités et indicateurs commerciaux.",
    image: "/projects/crm.png",
    technologies: ["React", "JavaScript"],
    href: "https://my-crm-sage-eight.vercel.app",
  },
  {
    id: "weathernow",
    title: "WeatherNow",
    subtitle: "Application météo moderne",
    description:
      "Une application web permettant de consulter les conditions météorologiques à partir d'une ville ou de la localisation de l'utilisateur.",
    image: "/projects/weathernow.png",
    technologies: ["React", "Vite", "Tailwind CSS", "API météo"],
    href: "https://weather-now-application-m-t-o.vercel.app/",
  },
  {
    id: "streaming",
    title: "Plateforme de streaming",
    subtitle: "Application web de streaming vidéo",
    description:
      "Participation au développement d'une plateforme web avec gestion des utilisateurs, contenus, authentification, API et fonctionnalités de paiement.",
    image: "/projects/stream.png",
    technologies: ["React", "Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    href: null,
    badge: "Projet professionnel",
  },
];
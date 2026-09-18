export type Service = {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  items?: string[];
  price?: string;
  cta: string;
  ctaHref: string;
};

export const services: Service[] = [
  {
    id: "site-vitrine",
    icon: "Globe",
    title: "Site vitrine",
    tagline: "Présentez votre activité de manière professionnelle.",
    description:
      "Création de sites modernes pour présenter votre entreprise, vos services, vos produits, vos réalisations et vos coordonnées.",
    items: [
      "Entreprises",
      "Entrepreneurs",
      "Commerçants",
      "Associations",
      "Professions libérales",
      "Restaurants",
      "Services locaux",
    ],
    price: "À partir de : sur devis",
    cta: "Demander un devis",
    ctaHref: "#contact",
  },
  {
    id: "application-web",
    icon: "AppWindow",
    title: "Application web",
    tagline: "Transformez votre idée en véritable outil numérique.",
    description:
      "Développement d'applications web sur mesure pour automatiser vos tâches, gérer vos données et améliorer votre organisation.",
    items: [
      "Gestion de stock",
      "Gestion d'école",
      "Gestion de personnel",
      "CRM",
      "Tableau de bord",
      "Système de réservation",
      "Plateforme métier",
    ],
    cta: "Parler de mon projet",
    ctaHref: "#contact",
  },
  {
    id: "modernisation",
    icon: "RefreshCw",
    title: "Modernisation de site",
    tagline: "Votre site a besoin d'un nouveau souffle ?",
    description:
      "Je peux améliorer son design, son expérience utilisateur, ses performances et son adaptation aux smartphones.",
    cta: "Améliorer mon site",
    ctaHref: "#contact",
  },
  {
    id: "maintenance",
    icon: "Wrench",
    title: "Maintenance & accompagnement",
    tagline: "Votre site ne s'arrête pas après sa mise en ligne.",
    description:
      "Correction de problèmes, mises à jour, améliorations et accompagnement technique pour garder votre site fonctionnel et sécurisé.",
    cta: "Demander un accompagnement",
    ctaHref: "#contact",
  },
  {
    id: "ia",
    icon: "Sparkles",
    title: "Intégration de fonctionnalités IA",
    tagline: "Ajoutez l'intelligence artificielle à votre projet.",
    description:
      "Intégration de fonctionnalités basées sur l'IA pour créer des expériences plus intelligentes et automatiser certaines tâches.",
    items: [
      "Assistant IA",
      "Chatbot",
      "Recherche intelligente",
      "Génération de contenu",
      "Analyse et traitement de données",
      "Assistance aux utilisateurs",
    ],
    cta: "Discuter de mon idée",
    ctaHref: "#contact",
  },
];
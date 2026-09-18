export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Échange",
    description:
      "Vous me présentez votre activité, votre idée ou votre problème. Pas besoin d'avoir un cahier des charges technique. Expliquez simplement ce que vous souhaitez obtenir.",
  },
  {
    number: "02",
    title: "Proposition",
    description:
      "J'analyse votre besoin et je vous propose une solution adaptée avec les fonctionnalités, le délai et le budget estimatif.",
  },
  {
    number: "03",
    title: "Conception",
    description:
      "Nous définissons la structure et l'expérience utilisateur de votre futur site.",
  },
  {
    number: "04",
    title: "Développement",
    description:
      "Je transforme la conception en une solution web fonctionnelle et responsive.",
  },
  {
    number: "05",
    title: "Tests",
    description:
      "Le site est vérifié sur différents écrans et scénarios avant sa mise en ligne.",
  },
  {
    number: "06",
    title: "Mise en ligne",
    description:
      "Votre site est déployé et devient accessible à vos clients.",
  },
  {
    number: "07",
    title: "Suivi",
    description:
      "Besoin d'une modification ou d'une nouvelle fonctionnalité ? Votre projet peut continuer à évoluer.",
  },
];
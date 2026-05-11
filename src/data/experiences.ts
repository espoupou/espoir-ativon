export type ExperienceContext = {
  fr: string;
  en: string;
};

export type ExperienceContent = {
  role: ExperienceContext;
  organization: string;
  period: string;
  context: ExperienceContext;
  missions: ExperienceContext[];
  tools: string[];
  contribution: ExperienceContext;
};

export type Experience = {
  id: string;
  slug: string;
  image?: string;
  content: ExperienceContent;
};

export const experiences: Experience[] = [
  {
    id: "super-cerame",
    slug: "super-cerame", // redirects to project page in UI
    image: "/assets/experiences/super-cerame/logo.png",
    content: {
      role: {
        fr: "Stage en Production Industrielle",
        en: "Industrial Production Intern",
      },
      organization: "Super Cérame",
      period: "2023",
      context: {
        fr: "Stage en production industrielle autour de la densité, viscosité, résidu, atomisation et traçabilité.",
        en: "Industrial production internship focusing on density, viscosity, residue, atomization and traceability.",
      },
      missions: [
        {
          fr: "Suivi des paramètres critiques de la barbotine.",
          en: "Monitoring of critical slip parameters.",
        },
        {
          fr: "Analyse de données de production pour optimiser les contrôles.",
          en: "Analysis of production data to optimize controls.",
        },
        {
          fr: "Appui à la compréhension du flux de traçabilité après palettisation.",
          en: "Support in understanding the traceability flow after palletization.",
        }
      ],
      tools: ["Production", "Excel", "Python", "EVOCON", "Qualité"],
      contribution: {
        fr: "Mise en évidence de corrélations et optimisation de l'organisation des contrôles.",
        en: "Highlighting correlations and optimizing the organization of controls.",
      }
    }
  },
  {
    id: "um5",
    slug: "stage-qualite-um5",
    image: "/assets/experiences/um5/logo.png",
    content: {
      role: {
        fr: "Assistant Ingénieur Qualité",
        en: "Quality Engineer Assistant",
      },
      organization: "Université Mohammed V de Rabat",
      period: "2024",
      context: {
        fr: "Assurance qualité interne universitaire, structuration de système documentaire et ISO 21001.",
        en: "Internal university quality assurance, documentation system structuring and ISO 21001.",
      },
      missions: [
        {
          fr: "Cartographie des processus et réalisation de SIPOC.",
          en: "Process mapping and SIPOC creation.",
        },
        {
          fr: "Définition d'objectifs qualité et structuration d'indicateurs SMART.",
          en: "Definition of quality objectives and structuring of SMART indicators.",
        },
        {
          fr: "Mise en place d'un gestionnaire documentaire sécurisé en consultation seule.",
          en: "Implementation of a secure, read-only document manager.",
        }
      ],
      tools: ["ISO 21001", "SIPOC", "Gap Analysis", "Indicateurs", "Documentation"],
      contribution: {
        fr: "A contribué à rendre le système qualité plus lisible et mesurable.",
        en: "Contributed to making the quality system more readable and measurable.",
      }
    }
  },
  {
    id: "safnet",
    slug: "safnet",
    image: "/assets/experiences/safnet/logo.png",
    content: {
      role: {
        fr: "Stagiaire Développement Web",
        en: "Web Development Intern",
      },
      organization: "SafNet Togo",
      period: "2022",
      context: {
        fr: "Stage orienté développement web et création d'applications numériques.",
        en: "Internship focused on web development and digital application creation.",
      },
      missions: [
        {
          fr: "Développement d'applications web et interfaces utilisateurs.",
          en: "Development of web applications and user interfaces.",
        },
        {
          fr: "Gestion de formulaires, données et logique applicative.",
          en: "Management of forms, data, and application logic.",
        }
      ],
      tools: ["Django", "Python", "HTML", "CSS", "JavaScript"],
      contribution: {
        fr: "Renforcement des bases en développement logiciel, capacité à transformer un besoin en application.",
        en: "Strengthening of software development bases, ability to turn a need into an application.",
      }
    }
  },
  {
    id: "ghiyada",
    slug: "ghiyada",
    image: "/assets/experiences/ghiyada/logo.png",
    content: {
      role: {
        fr: "Développeur Web et Mobile",
        en: "Web and Mobile Developer",
      },
      organization: "Ghiyada Africa",
      period: "2021",
      context: {
        fr: "Expérience orientée développement web/mobile et contribution à des projets logiciels.",
        en: "Experience focused on web/mobile development and software projects.",
      },
      missions: [
        {
          fr: "Contribution à des interfaces web et mobile.",
          en: "Contribution to web and mobile interfaces.",
        },
        {
          fr: "Développement de fonctionnalités applicatives et gestion de données.",
          en: "Development of application features and data management.",
        }
      ],
      tools: ["Web", "Mobile", "Databases", "UI/UX"],
      contribution: {
        fr: "Base solide pour relier aujourd'hui informatique et projets industriels.",
        en: "Solid foundation for linking computer science and industrial projects today.",
      }
    }
  }
];

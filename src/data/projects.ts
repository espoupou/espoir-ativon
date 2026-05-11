export type ProjectContext = {
  fr: string;
  en: string;
};

export type ProjectContent = {
  title: ProjectContext;
  subtitle: ProjectContext;
  summary: ProjectContext;
  problem: ProjectContext;
  role: ProjectContext;
  tools: string[];
  contribution: ProjectContext;
};

export type Project = {
  id: string;
  slug: string;
  type: "industrial" | "data" | "software";
  image?: string;
  github?: string;
  content: ProjectContent;
};

export const projects: Project[] = [
  {
    id: "super-cerame",
    slug: "super-cerame",
    type: "industrial",
    image: "/assets/projects/super-cerame/cover.png",
    github: "https://github.com/espoupou/super_cerame",
    content: {
      title: {
        fr: "Super Cérame — Suivi et optimisation",
        en: "Super Cérame — Monitoring and optimization",
      },
      subtitle: {
        fr: "Suivi de paramètres de production céramique (densité, viscosité, résidu)",
        en: "Monitoring of ceramic production parameters (density, viscosity, residue)",
      },
      summary: {
        fr: "Stage en production industrielle autour de l'atomisation et de la traçabilité des produits finis.",
        en: "Industrial production internship focusing on atomization and finished product traceability.",
      },
      problem: {
        fr: "Maîtriser les variations de la barbotine avant atomisation et optimiser les contrôles terrain.",
        en: "Control slip variations before atomization and optimize shop-floor checks.",
      },
      role: {
        fr: "Analyse terrain, mesure de paramètres, structuration des données et proposition d'amélioration des contrôles.",
        en: "Field analysis, parameter measurement, data structuring, and proposal of control improvements.",
      },
      tools: ["Python", "Excel", "EVOCON", "Xperlean"],
      contribution: {
        fr: "Mise en évidence des corrélations, proposition de réduction des contrôles répétitifs et appui à la traçabilité aval.",
        en: "Highlighted correlations, proposed reduction of repetitive controls, and supported downstream traceability.",
      },
    },
  },
  {
    id: "ligne-devidoir",
    slug: "ligne-production-devidoir",
    type: "industrial",
    image: "/assets/projects/ligne-production-devidoir/cover.png",
    content: {
      title: {
        fr: "Conception et optimisation d'une ligne d'assemblage",
        en: "Design and optimization of an assembly line",
      },
      subtitle: {
        fr: "Ligne de production de dévidoirs",
        en: "Hose reel production line",
      },
      summary: {
        fr: "Projet de génie industriel combinant Lean Management, simulation ARENA et supervision temps réel.",
        en: "Industrial engineering project combining Lean Management, ARENA simulation and real-time supervision.",
      },
      problem: {
        fr: "Capacité actuelle insuffisante pour absorber les pics de demande saisonniers sans ajouter de shift supplémentaire.",
        en: "Current capacity insufficient to absorb seasonal demand peaks without adding an extra shift.",
      },
      role: {
        fr: "Chronométrage, équilibrage des postes, simulation ARENA et prototypage d'une supervision Node-RED/ESP32.",
        en: "Time studies, line balancing, ARENA simulation and prototyping of a Node-RED/ESP32 supervision system.",
      },
      tools: ["Lean", "VSM", "ARENA", "Axelor", "Node-RED", "ESP32", "Power BI"],
      contribution: {
        fr: "Proposition d'un scénario de rééquilibrage validé par simulation et conception d'une architecture de suivi TRS/OEE.",
        en: "Proposed a rebalancing scenario validated by simulation and designed an OEE monitoring architecture.",
      },
    },
  },
  {
    id: "kanban",
    slug: "kanban-simulation",
    type: "industrial",
    image: "/assets/projects/kanban/cover.png",
    github: "https://github.com/espoupou/Kanban-Simulation-with-Stock-Sizing",
    content: {
      title: {
        fr: "Kanban Simulation with Stock Sizing",
        en: "Kanban Simulation with Stock Sizing",
      },
      subtitle: {
        fr: "Simulation d’un système de production en flux tiré avec dimensionnement des stocks, seuils de déclenchement et cartes Kanban.",
        en: "Simulation of a pull-flow production system with stock sizing, threshold-based triggers and Kanban cards.",
      },
      summary: {
        fr: "Ce projet simule une ligne de production fonctionnant selon les principes du Kanban et du flux tiré. L’objectif est de visualiser l’évolution des stocks, de déclencher des cartes Kanban lorsque les seuils sont atteints et d’analyser le comportement d’une ligne composée de plusieurs postes sur un shift de 8 heures.",
        en: "This project simulates a production line using Kanban and pull-flow principles. The goal is to visualize stock evolution, trigger Kanban cards when thresholds are reached and analyze the behavior of a four-station production line over an 8-hour shift.",
      },
      problem: {
        fr: "Le dimensionnement des stocks intermédiaires est un enjeu important en gestion de production. Un stock trop faible bloque le flux, un stock trop élevé augmente les encours.",
        en: "Intermediate stock sizing is a major issue in production management. Too little stock blocks the flow, too much increases work-in-progress.",
      },
      role: {
        fr: "Développement complet de la simulation Python, logique Kanban et visualisation.",
        en: "Full development of the Python simulation, Kanban logic and visualization.",
      },
      tools: ["Python", "Kanban", "Lean Manufacturing", "Flux tiré", "Stock sizing", "Simulation", "Matplotlib", "Pandas", "CSV", "Gestion de production"],
      contribution: {
        fr: "Création d'un outil pédagogique de simulation pour comprendre et tester les seuils Kanban.",
        en: "Creation of an educational simulation tool to understand and test Kanban thresholds.",
      },
    },
  },
  {
    id: "msp",
    slug: "msp-pilotage",
    type: "industrial",
    image: "/assets/projects/msp/cover.png",
    github: "https://github.com/espoupou/MSP_Pilotage",
    content: {
      title: {
        fr: "Pilotage par MSP",
        en: "SPC Monitoring",
      },
      subtitle: {
        fr: "Simulation MATLAB de maîtrise statistique des procédés.",
        en: "MATLAB simulation of statistical process control.",
      },
      summary: {
        fr: "Simulation d’un process industriel avec cartes X-bar/R, usure, maintenance et indicateurs Cp/Cpk pour comprendre la stabilité, la capabilité et les décisions d’ajustement.",
        en: "Simulation of an industrial process with X-bar/R charts, wear, maintenance, and Cp/Cpk indicators to understand stability, capability, and adjustment decisions.",
      },
      problem: {
        fr: "Détecter les dérives avant la production de pièces non conformes.",
        en: "Detect drifts before non-conforming parts are produced.",
      },
      role: {
        fr: "Modélisation des cartes X-bar/R et calcul des indicateurs Cp/Cpk.",
        en: "Modeling X-bar/R charts and calculating Cp/Cpk indicators.",
      },
      tools: ["MATLAB", "MSP / SPC", "Cartes de contrôle", "X-bar Chart", "R Chart", "Cp / Cpk", "Qualité", "Process", "Maintenance", "Simulation", "Usure", "Pilotage industriel"],
      contribution: {
        fr: "Validation de la logique d'intervention préventive basée sur la donnée.",
        en: "Validation of data-driven preventive intervention logic.",
      },
    },
  },
  {
    id: "batteries",
    slug: "batteries",
    type: "data",
    image: "/assets/projects/batteries/cover.png",
    github: "https://github.com/espoupou/Batteries",
    content: {
      title: {
        fr: "Batteries — EIS / DRT Tool",
        en: "Batteries — EIS / DRT Tool",
      },
      subtitle: {
        fr: "Outil Python d’analyse de données électrochimiques.",
        en: "Python tool for electrochemical data analysis.",
      },
      summary: {
        fr: "Application Tkinter pour charger, prétraiter, visualiser et comparer des données EIS/DRT, avec tracés Nyquist, preprocessing et structure modulaire.",
        en: "Tkinter application to load, preprocess, visualize, and compare EIS/DRT data, featuring Nyquist plots, preprocessing, and a modular structure.",
      },
      problem: {
        fr: "Traitement manuel fastidieux des fichiers de mesure.",
        en: "Tedious manual processing of measurement files.",
      },
      role: {
        fr: "Développement de l'interface, logique de traitement et visualisation.",
        en: "Interface development, processing logic and visualization.",
      },
      tools: ["Python", "Tkinter", "EIS", "DRT", "Battery Analysis", "Electrochemical Impedance Spectroscopy", "Nyquist Plot", "Data Preprocessing", "Excel", "pandas", "Matplotlib", "Scientific Tooling"],
      contribution: {
        fr: "Outil personnel d’analyse de traitement et visualisation.",
        en: "Personal tool for processing and visualization analysis.",
      },
    },
  },
  {
    id: "expediente",
    slug: "expediente-digital",
    type: "software",
    image: "/assets/projects/expediente/cover.png",
    content: {
      title: {
        fr: "Expediente Digital",
        en: "Expediente Digital",
      },
      subtitle: {
        fr: "Digitalisation documentaire",
        en: "Documentary digitalization",
      },
      summary: {
        fr: "Génération numérique de dossiers de prêts avec signatures et annexes.",
        en: "Digital generation of loan files with signatures and annexes.",
      },
      problem: {
        fr: "Lourdeur du traitement papier et besoin d'intégration backend.",
        en: "Cumbersome paper processing and need for backend integration.",
      },
      role: {
        fr: "Développement de l'API et logique de génération PDF côté backend.",
        en: "API development and PDF generation logic on the backend.",
      },
      tools: ["NestJS", "TypeORM", "Flutter", "Swagger"],
      contribution: {
        fr: "Projet logiciel réalisé dans un contexte réel pour structurer la donnée.",
        en: "Software project implemented in a real context to structure data.",
      },
    },
  },
  {
    id: "driftshare",
    slug: "driftshare",
    type: "software",
    image: "/assets/projects/driftshare/cover.png",
    github: "https://github.com/espoupou/DriftShare",
    content: {
      title: {
        fr: "DriftShare",
        en: "DriftShare",
      },
      subtitle: {
        fr: "Partage de fichiers temps réel par room temporaire.",
        en: "Real-time file sharing via temporary rooms.",
      },
      summary: {
        fr: "Prototype web utilisant Node.js, Socket.IO et MongoDB pour connecter un expéditeur et un destinataire, transférer un fichier par chunks et le reconstruire côté réception.",
        en: "Web prototype using Node.js, Socket.IO, and MongoDB to connect a sender and receiver, transfer a file by chunks, and reconstruct it on the receiving end.",
      },
      problem: {
        fr: "Besoin de structurer un transfert de fichiers simple.",
        en: "Need to structure simple file transfers.",
      },
      role: {
        fr: "Conception web complète et backend.",
        en: "Full web design and backend.",
      },
      tools: ["Node.js", "Express.js", "Socket.IO", "MongoDB", "JavaScript", "WebSocket", "File Sharing", "Real-time", "HTML", "SCSS", "Bootstrap", "Gulp"],
      contribution: {
        fr: "Démonstration de logique temps réel et base d'architecture.",
        en: "Demonstration of real-time logic and architectural foundation.",
      },
    },
  }
];

export type ProjectContext = { fr: string; en: string };
export type ProjectContent = {
  title: ProjectContext;
  subtitle: ProjectContext;
  summary: ProjectContext;
  problem: ProjectContext;
  role: ProjectContext;
  tools: string[];
  contribution: ProjectContext;
};
export type StudyItem = { title: ProjectContext; description: ProjectContext };
export type Project = {
  id: string;
  slug: string;
  type: "industrial" | "data" | "software";
  github?: string;
  content: ProjectContent;
  caseStudy: {
    kind: ProjectContext;
    steps: StudyItem[];
    findings: StudyItem[];
    scope: ProjectContext;
  };
};
const copy = (fr: string, en: string): ProjectContext => ({ fr, en });
const item = (frTitle: string, enTitle: string, fr: string, en: string): StudyItem => ({ title: copy(frTitle, enTitle), description: copy(fr, en) });

export const projects: Project[] = [
  {
    id: "super-cerame", slug: "super-cerame", type: "industrial",
    github: "https://github.com/espoupou/super_cerame",
    content: {
      title: copy("Super Cérame - Pilotage de production", "Super Cérame - Production monitoring"),
      subtitle: copy("Du contrôle de la barbotine à la traçabilité des produits finis.", "From slip monitoring to finished product traceability."),
      summary: copy("Mesures terrain et analyse Python pour mieux organiser les contrôles de densité, viscosité et résidu avant atomisation.", "Shop-floor measurements and Python analysis to improve density, viscosity and residue checks before atomization."),
      problem: copy("Maîtriser les variations de la barbotine avant atomisation, tout en limitant les contrôles répétitifs.", "Control slip variations before atomization while reducing repetitive checks."),
      role: copy("Observation du procédé, prélèvement d’échantillons, mesure des paramètres, structuration des données et proposition d’amélioration des contrôles.", "Process observation, sample collection, parameter measurement, data structuring and proposals to improve checks."),
      tools: ["Python", "Excel", "EVOCON", "Xperlean"],
      contribution: copy("Mise en évidence de relations entre paramètres, proposition d’une organisation plus ciblée des contrôles et appui à la compréhension de la traçabilité aval.", "Explored relationships between parameters, proposed more targeted checks and supported understanding of downstream traceability."),
    },
    caseStudy: {
      kind: copy("Stage industriel · 2023", "Industrial internship · 2023"),
      steps: [
        item("Comprendre le terrain", "Understand the shop floor", "Observation du procédé céramique : broyage, préparation de la barbotine, atomisation, pressage, cuisson et conditionnement.", "Observed the ceramic process: milling, slip preparation, atomization, pressing, firing and packaging."),
        item("Mesurer et structurer", "Measure and structure", "Prélèvement avec les opérateurs ; contrôle de la densité par masse/volume, de la viscosité par temps d’écoulement et du résidu par dilution/filtration. Centralisation dans Excel et Python.", "Collected samples with operators; measured density by mass/volume, viscosity by flow time and residue by dilution/filtration. Organized the records in Excel and Python."),
        item("Analyser et proposer", "Analyze and propose", "Suivi journalier D/V/R, étude densité–viscosité et viscosité–granulométrie, puis essais de régression pour orienter les observations et les contrôles.", "Daily density/viscosity/residue tracking, exploration of density–viscosity and viscosity–particle size relationships, then regression experiments to guide observations and checks."),
      ],
      findings: [
        item("Mieux organiser les contrôles de densité", "Better timing of density checks", "Les contrôles pouvaient être répétés toutes les 5 minutes. J’ai proposé d’estimer le temps d’approche de la densité cible pour revenir environ 3 à 5 minutes avant l’ajustement final. Dans certains cas observés : moins de mesures répétitives, de sollicitations du brassage et de petits gaspillages de barbotine.", "Checks could be repeated every 5 minutes. I proposed estimating the time to approach the target density and returning about 3–5 minutes before the final adjustment. In some observed cases: fewer repeated measurements, less unnecessary stirring and less minor slip waste."),
        item("Relier produit et information", "Connect products and information", "Appui à l’analyse du parcours de traçabilité : tri → emballage → palettisation → code-barres / QR code → scan cariste → stockage → consultation Xperlean.", "Supported analysis of the traceability flow: sorting → packaging → palletization → barcode / QR code → forklift operator scan → storage → Xperlean lookup."),
      ],
      scope: copy("Les analyses sont exploratoires et les améliorations observées restent qualitatives. Les corrélations servent à formuler des hypothèses à confronter au terrain ; aucun gain global chiffré n’est revendiqué.", "The analysis is exploratory and observed improvements are qualitative. Correlations support hypotheses to check on the shop floor; no quantified overall gain is claimed."),
    },
  },
  {
    id: "ligne-devidoir", slug: "ligne-production-devidoir", type: "industrial",
    content: {
      title: copy("Équilibrage d’une ligne d’assemblage", "Assembly line balancing"),
      subtitle: copy("Dévidoirs : analyser le goulot, simuler les scénarios et concevoir le suivi TRS.", "Hose reels: identify the bottleneck, simulate scenarios and design OEE monitoring."),
      summary: copy("Chronométrage, Lean et simulation ARENA pour rééquilibrer une ligne de dévidoirs, avec un prototype de supervision connecté.", "Time studies, Lean and ARENA simulation to rebalance a hose reel line, with a connected monitoring prototype."),
      problem: copy("Absorber les pics de demande saisonniers sans ajouter une seconde équipe : une capacité estimée à 19 998 unités par mois pour un objectif de 30 000.", "Handle seasonal demand peaks without adding a second shift: an estimated capacity of 19,998 units per month against a target of 30,000."),
      role: copy("Décomposition de la gamme, chronométrage, équilibrage des postes, comparaison de scénarios ARENA et prototypage d’une supervision Node-RED / ESP32.", "Mapped assembly operations, conducted time studies, balanced stations, compared ARENA scenarios and prototyped Node-RED / ESP32 monitoring."),
      tools: ["Lean", "ARENA", "Node-RED", "ESP32", "VSM", "Axelor", "Power BI"],
      contribution: copy("Proposition d’un rééquilibrage évalué par simulation et conception d’une architecture de suivi de la performance industrielle.", "Proposed rebalancing evaluated through simulation and designed an industrial performance monitoring architecture."),
    },
    caseStudy: {
      kind: copy("Projet de génie industriel", "Industrial engineering project"),
      steps: [
        item("Décomposer et chronométrer", "Map and time operations", "Étude de la gamme : structure de base, timon, tambour, injecteur et manivelle, roues, contrôle puis emballage. Relevé des temps pour identifier les déséquilibres.", "Studied the assembly sequence: base structure, drawbar, drum, injector and crank, wheels, inspection and packaging. Recorded operation times to identify imbalances."),
        item("Comparer les configurations", "Compare configurations", "Analyse Lean (VSM, 5S, Pareto), répartition des tâches et modélisation ARENA de la ligne initiale, du renforcement du goulot et d’une réorganisation globale.", "Lean analysis (VSM, 5S, Pareto), task allocation and ARENA modeling of the initial line, a reinforced bottleneck and an overall reorganization."),
        item("Préparer le pilotage", "Prepare monitoring", "Prototypage de la chaîne capteurs → ESP32 → MQTT → Node-RED → MySQL → tableau de bord, pour suivre performance, disponibilité, qualité et TRS.", "Prototyped the chain sensors → ESP32 → MQTT → Node-RED → MySQL → dashboard to track performance, availability, quality and OEE."),
      ],
      findings: [
        item("Un goulot identifié au premier poste", "A bottleneck at the first station", "Les temps présentés dans l’étude sont de 29,6 s, 25,5 s, 16,7 s, 14,9 s et 25,4 s pour les cinq postes, face à un takt time d’environ 20 s. Le poste 1 présente le temps le plus élevé et une forte variabilité.", "The study reports station times of 29.6 s, 25.5 s, 16.7 s, 14.9 s and 25.4 s against a takt time of about 20 s. Station 1 has the longest time and high variability."),
        item("Un scénario retenu par simulation", "A scenario selected through simulation", "Le renforcement du goulot (scénario B) a été retenu parmi les configurations étudiées. La simulation situe sa capacité autour de 30 000 unités par mois, sous les hypothèses du projet.", "Reinforcing the bottleneck (scenario B) was selected among the configurations studied. The simulation places its capacity at around 30,000 units per month under the project assumptions."),
      ],
      scope: copy("Les capacités annoncées sont des estimations et résultats de simulation, pas des gains mesurés après déploiement en usine. La supervision est un prototype.", "The stated capacities are estimates and simulation results, not gains measured after factory deployment. The monitoring system is a prototype."),
    },
  },
  {
    id: "tricycle", slug: "vehicule-tricycle", type: "industrial",
    content: {
      title: copy("Véhicule tricycle - Conception et fabrication", "Tricycle vehicle - Design and manufacturing"),
      subtitle: copy("Du besoin fonctionnel à l'usinage d'un système de direction.", "From functional requirements to manufacturing a steering system."),
      summary: copy("Projet collectif de conception mécanique autour d'un châssis existant : analyse fonctionnelle, modélisation TopSolid, choix des matériaux, fabrication et assemblage du système de direction.", "Team mechanical design project based on an existing chassis: functional analysis, TopSolid modeling, material selection, manufacturing and steering-system assembly."),
      problem: copy("Adapter un châssis de tricycle existant pour construire un système de direction fonctionnel, précis et compatible avec les contraintes de fabrication disponibles.", "Adapt an existing tricycle chassis to build a functional and precise steering system compatible with the available manufacturing resources."),
      role: copy("Contribution au travail d'équipe sur l'analyse fonctionnelle, la conception des composants, la préparation des gammes d'usinage, la fabrication, l'assemblage et les essais.", "Contributed to the team effort across functional analysis, component design, machining process planning, manufacturing, assembly and testing."),
      tools: ["TopSolid", "CAO / CAD", "FAO / CAM", "CNC", "FAST"],
      contribution: copy("Une démarche complète reliant cahier des charges, modèles 3D, dessins de définition, sélection des matériaux et réalisation physique de composants du système de direction.", "A complete workflow connecting functional specifications, 3D models, technical drawings, material selection and physical production of steering-system components."),
    },
    caseStudy: {
      kind: copy("Projet de conception et fabrication - 2024", "Design and manufacturing project - 2024"),
      steps: [
        item("Analyser le besoin", "Analyze the need", "Étude du châssis existant, diagramme de contexte, bête à cornes, diagramme FAST et cahier des charges fonctionnel pour structurer les besoins du véhicule.", "Studied the existing chassis and used a context diagram, horn diagram, FAST diagram and functional specifications to structure the vehicle requirements."),
        item("Concevoir le système de direction", "Design the steering system", "Prise de mesures, transformation de la rotation du volant en translation, modélisation des composants et dessins de définition avec TopSolid.", "Took measurements, designed the steering-wheel rotation-to-translation mechanism, modeled components and produced technical drawings with TopSolid."),
        item("Fabriquer et assembler", "Manufacture and assemble", "Sélection de l'aluminium, de l'acier et du cuivre, préparation des gammes d'usinage, fraisage, tournage, perçage, alésage, filetage, assemblage et essais du mécanisme.", "Selected aluminum, steel and copper, prepared machining process plans, then milled, turned, drilled, reamed, threaded, assembled and tested the mechanism."),
      ],
      findings: [
        item("Une chaîne mécanique complète", "A complete mechanical chain", "Le mécanisme conçu transmet la rotation du volant aux roues par un ensemble de pièces intermédiaires transformant le mouvement en translation.", "The designed mechanism transfers steering-wheel rotation to the wheels through intermediate components that convert the motion into translation."),
        item("Conception pensée pour la fabrication", "Design for manufacturing", "Les choix de géométrie, de matériaux, de machines et d'outillage ont été documentés dans les dessins de définition et les gammes d'usinage.", "Geometry, material, machine and tooling choices were documented through technical drawings and machining process plans."),
      ],
      scope: copy("Projet collectif académique réalisé à partir d'un châssis existant. Le dossier documente la conception et la fabrication du système de direction ; il ne revendique ni participation au Shell Eco-marathon, ni performance énergétique mesurée.", "Academic team project based on an existing chassis. The report documents steering-system design and manufacturing; it does not claim participation in the Shell Eco-marathon or measured energy-performance results."),
    },
  },
  {
    id: "kanban", slug: "kanban-simulation", type: "industrial",
    github: "https://github.com/espoupou/Kanban-Simulation-with-Stock-Sizing",
    content: {
      title: copy("Kanban - Simulation des flux", "Kanban - Production flow simulation"),
      subtitle: copy("Dimensionner les stocks et comprendre le déclenchement du réapprovisionnement.", "Size inventory and understand replenishment triggers."),
      summary: copy("Simulation Python d’une ligne à quatre postes : stocks intermédiaires, seuils Kanban et réapprovisionnement en flux tiré.", "Python simulation of a four-station line: intermediate inventory, Kanban thresholds and pull-based replenishment."),
      problem: copy("Trouver un équilibre entre disponibilité matière et limitation des encours : un stock trop faible bloque le flux, un stock trop élevé immobilise des ressources.", "Balance material availability against work in progress: too little inventory blocks flow; too much ties up resources."),
      role: copy("Développement de la simulation, de la logique de déclenchement Kanban et de la visualisation des stocks.", "Developed the simulation, Kanban trigger logic and inventory visualization."),
      tools: ["Python", "Kanban", "Matplotlib", "Pandas", "CSV"],
      contribution: copy("Un outil pédagogique pour tester l’effet des seuils et des temps de traitement sur la stabilité du flux.", "An educational tool to test how thresholds and processing times affect flow stability."),
    },
    caseStudy: {
      kind: copy("Simulation pédagogique", "Educational simulation"),
      steps: [
        item("Paramétrer la ligne", "Configure the line", "Quatre postes - découpe, pliage, collage, étiquetage - disposent chacun d’un temps de traitement, d’un stock et d’un seuil de déclenchement. La durée de l’équipe est paramétrable.", "Four stations - cutting, folding, bonding and labeling - each have a processing time, inventory level and trigger threshold. Shift duration is configurable."),
        item("Déclencher le flux tiré", "Trigger pull flow", "Chaque poste consomme des pièces. Lorsque son stock passe sous le seuil défini, une carte Kanban signale au poste amont le besoin de réapprovisionnement.", "Each station consumes parts. When inventory falls below its threshold, a Kanban card signals the replenishment need to the upstream station."),
        item("Observer et comparer", "Observe and compare", "Les stocks sont visualisés avec Matplotlib et les résultats enregistrés en CSV. La modification des seuils et des temps permet d’explorer plusieurs scénarios.", "Inventory is visualized with Matplotlib and results are logged to CSV. Changing thresholds and processing times enables scenario comparisons."),
      ],
      findings: [
        item("Rendre le Kanban observable", "Make Kanban behavior visible", "La simulation relie consommation, seuil de stock et signal de réapprovisionnement. Elle sert à comprendre les blocages et le comportement des encours sur une équipe, notamment de 8 heures.", "The simulation connects consumption, inventory thresholds and replenishment signals. It helps explain blockages and work-in-progress behavior over a shift, including an 8-hour scenario."),
        item("Une base d’analyse réutilisable", "A reusable analysis foundation", "Les paramètres modifiables et l’export CSV permettent de répéter les essais et d’analyser les données générées en dehors de la visualisation.", "Configurable parameters and CSV export allow repeated experiments and analysis of generated data beyond the visualization."),
      ],
      scope: copy("La ligne et ses stocks sont simulés. Le projet illustre la logique Kanban ; un dimensionnement industriel réel demanderait des données terrain et une validation adaptée.", "The production line and inventory are simulated. The project illustrates Kanban logic; real industrial stock sizing would require shop-floor data and appropriate validation."),
    },
  },
  {
    id: "msp", slug: "msp-pilotage", type: "industrial", github: "https://github.com/espoupou/MSP_Pilotage",
    content: {
      title: copy("Pilotage par MSP", "Statistical process control"),
      subtitle: copy("Explorer la stabilité d’un procédé et les décisions de maintenance.", "Explore process stability and maintenance decisions."),
      summary: copy("Simulation MATLAB avec cartes X̄/R, indicateurs Cp/Cpk et usure progressive pour étudier les décisions d’ajustement.", "MATLAB simulation with X̄/R charts, Cp/Cpk indicators and progressive wear to explore adjustment decisions."),
      problem: copy("Comprendre les dérives d’un procédé et les signaux permettant d’intervenir avant la production de pièces non conformes.", "Understand process drift and the signals that support intervention before non-conforming parts are produced."),
      role: copy("Modélisation du procédé et de l’usure, cartes de contrôle X̄/R, calcul de Cp/Cpk et logique d’intervention utilisateur.", "Modeled the process and wear, X̄/R control charts, Cp/Cpk calculation and user intervention logic."),
      tools: ["MATLAB", "MSP / SPC", "Cp / Cpk"],
      contribution: copy("Une simulation pour relier statistiques de qualité, évolution du procédé et choix de maintenance ou d’ajustement.", "A simulation connecting quality statistics, process evolution and maintenance or adjustment choices."),
    },
    caseStudy: {
      kind: copy("Simulation pédagogique", "Educational simulation"),
      steps: [
        item("Définir les hypothèses", "Define assumptions", "Saisie de la cible et des tolérances, puis initialisation de la taille d’échantillon, du taux d’usure et des limites de contrôle.", "Enter the target and tolerances, then initialize sample size, wear rate and control limits."),
        item("Suivre moyenne et dispersion", "Track mean and dispersion", "À chaque cycle, de nouvelles données sont générées, l’usure évolue et les cartes X̄/R ainsi que Cp/Cpk sont recalculés.", "At each cycle, new data is generated, wear evolves and the X̄/R charts and Cp/Cpk indicators are recalculated."),
        item("Tester les décisions", "Test decisions", "L’utilisateur peut continuer, ajuster la cible, arrêter ou effectuer une maintenance. Dans le modèle, la maintenance remet l’usure à zéro.", "The user can continue, adjust the target, stop or perform maintenance. In the model, maintenance resets wear to zero."),
      ],
      findings: [
        item("Relier un signal à une action", "Connect a signal to an action", "La boucle de simulation met en relation la dérive, les limites de contrôle et les interventions possibles pour explorer une logique de pilotage préventif.", "The simulation loop connects drift, control limits and possible interventions to explore preventive process management."),
        item("Distinguer stabilité et capabilité", "Distinguish stability from capability", "Les cartes de contrôle suivent le comportement du procédé, tandis que Cp/Cpk décrivent son positionnement par rapport aux tolérances retenues dans le modèle.", "Control charts track process behavior, while Cp/Cpk describe how it sits relative to the tolerances defined in the model."),
      ],
      scope: copy("Il s’agit d’un procédé simulé et d’un support pédagogique, sans résultat de production réelle ni déploiement industriel revendiqué.", "This is a simulated process and an educational tool; no real production results or industrial deployment are claimed."),
    },
  },
  {
    id: "batteries", slug: "batteries", type: "data", github: "https://github.com/espoupou/Batteries",
    content: {
      title: copy("Batteries - Analyse EIS / DRT", "Batteries - EIS / DRT analysis"),
      subtitle: copy("Un outil Python pour traiter et visualiser des données électrochimiques.", "A Python tool for processing and visualizing electrochemical data."),
      summary: copy("Application Tkinter pour importer, prétraiter et comparer des données EIS/DRT, avec tracés Nyquist et modules spécialisés.", "Tkinter application to import, preprocess and compare EIS/DRT data, with Nyquist plots and specialized modules."),
      problem: copy("Réduire les manipulations manuelles de fichiers de mesure hétérogènes et structurer un traitement plus facile à suivre et à maintenir.", "Reduce manual handling of heterogeneous measurement files and structure a workflow that is easier to follow and maintain."),
      role: copy("Développement de l’interface et du traitement, visualisation et refactorisation de l’application en modules spécialisés.", "Developed the interface and processing, created visualizations and refactored the application into specialized modules."),
      tools: ["Python", "Tkinter", "Matplotlib", "Pandas", "EIS", "DRT"],
      contribution: copy("Un outil personnel qui rassemble import, prétraitement et visualisation dans une interface, avec une architecture modulaire.", "A personal tool bringing import, preprocessing and visualization into one interface with a modular architecture."),
    },
    caseStudy: {
      kind: copy("Outil d’analyse scientifique", "Scientific analysis tool"),
      steps: [
        item("Organiser les traitements", "Organize processing", "Séparation de l’interface principale, des dialogues, des fenêtres spécialisées et des cœurs de calcul EIS/DRT.", "Separated the main interface, dialogs, specialized windows and EIS/DRT processing engines."),
        item("Préparer les données", "Prepare data", "Import de fichiers et de classeurs Excel, conversions et nettoyage dans une fenêtre de prétraitement dédiée.", "Imported files and Excel workbooks, with conversions and cleaning in a dedicated preprocessing window."),
        item("Visualiser et comparer", "Visualize and compare", "Tracés Nyquist, comparaison de courbes et fenêtres dédiées aux classeurs et à l’analyse DRT, en préservant la logique de calcul existante.", "Nyquist plots, curve comparisons and dedicated workbook and DRT analysis windows, while preserving existing calculation logic."),
      ],
      findings: [
        item("Un parcours de traitement structuré", "A structured processing workflow", "L’application réunit les étapes de chargement, prétraitement et visualisation pour faciliter l’exploration des données de mesure.", "The application brings together loading, preprocessing and visualization to simplify exploration of measurement data."),
        item("Une architecture plus lisible", "A clearer architecture", "Les responsabilités sont réparties entre modules afin de faciliter les corrections et les évolutions de l’interface et des traitements.", "Responsibilities are split across modules to make interface and processing fixes and extensions easier."),
      ],
      scope: copy("Le projet porte sur l’outillage logiciel de l’analyse. Il ne revendique ni nouvelle méthode électrochimique ni performance de batterie démontrée.", "The project focuses on analysis software. It does not claim a new electrochemical method or demonstrated battery performance."),
    },
  },
  {
    id: "expediente", slug: "expediente-digital", type: "software",
    content: {
      title: copy("Expediente Digital", "Expediente Digital"),
      subtitle: copy("Digitalisation des dossiers de prêts.", "Digitizing loan documentation."),
      summary: copy("Développement d’une API de génération de dossiers PDF, avec signatures et annexes, pour structurer un processus documentaire.", "Developed an API to generate PDF files with signatures and annexes, structuring a document workflow."),
      problem: copy("Alléger un traitement papier et intégrer la génération documentaire au serveur applicatif.", "Streamline paper-based processing and integrate document generation into the application backend."),
      role: copy("Développement de l’API et de la logique de génération PDF côté serveur.", "Developed the API and backend PDF generation logic."),
      tools: ["NestJS", "TypeORM", "Flutter", "Swagger"],
      contribution: copy("Contribution à un projet logiciel en contexte réel, en reliant données applicatives et documents numériques.", "Contributed to a software project in a real context, connecting application data and digital documents."),
    },
    caseStudy: {
      kind: copy("Projet logiciel", "Software project"),
      steps: [
        item("Structurer les données", "Structure data", "Organisation des informations nécessaires à la constitution des dossiers de prêts et à leur intégration côté serveur.", "Organized the information required to assemble loan files and integrate it with the backend."),
        item("Développer l’API", "Develop the API", "Développement avec NestJS et TypeORM, dans un environnement comprenant Flutter et Swagger.", "Developed with NestJS and TypeORM in an environment including Flutter and Swagger."),
        item("Générer les documents", "Generate documents", "Mise en place de la logique de production de dossiers PDF avec signatures et annexes.", "Implemented the logic for producing PDF files with signatures and annexes."),
      ],
      findings: [
        item("Relier besoin métier et serveur", "Connect business needs and backend", "Le projet mobilise la modélisation de données et la génération documentaire pour transformer un processus papier en traitement applicatif.", "The project combines data modeling and document generation to turn a paper-based process into an application workflow."),
      ],
      scope: copy("Cette présentation décrit mon périmètre de contribution à l’API et à la génération documentaire ; elle ne publie aucun dossier client.", "This case study describes my contribution to the API and document generation; it does not publish customer files."),
    },
  },
  {
    id: "driftshare", slug: "driftshare", type: "software", github: "https://github.com/espoupou/DriftShare",
    content: {
      title: copy("DriftShare", "DriftShare"),
      subtitle: copy("Partage de fichiers en temps réel par session temporaire.", "Real-time file sharing through temporary rooms."),
      summary: copy("Prototype Node.js et Socket.IO : connexion expéditeur–destinataire, transfert par fragments et reconstruction du fichier à réception.", "Node.js and Socket.IO prototype: connect sender and receiver, transfer chunks and reconstruct the file on receipt."),
      problem: copy("Structurer un transfert de fichiers simple entre un expéditeur et un destinataire, reliés par une session temporaire.", "Structure a simple file transfer between a sender and a receiver connected through a temporary room."),
      role: copy("Conception de l’interface web, développement du serveur et de la logique de communication en temps réel.", "Designed the web interface, developed the backend and implemented real-time communication logic."),
      tools: ["Node.js", "Socket.IO", "MongoDB", "Express.js", "JavaScript"],
      contribution: copy("Un prototype fonctionnel qui démontre la logique expéditeur–destinataire, les événements temps réel et le transfert par fragments binaires.", "A functional prototype demonstrating sender–receiver logic, real-time events and binary chunk transfer."),
    },
    caseStudy: {
      kind: copy("Prototype de fin de formation", "Graduation project prototype"),
      steps: [
        item("Créer et rejoindre une session", "Create and join a room", "L’expéditeur et le destinataire se retrouvent grâce à un identifiant de session. MongoDB participe à la gestion des identifiants et des doublons actifs.", "Sender and receiver connect through a room identifier. MongoDB supports identifier management and active duplicate prevention."),
        item("Transmettre par fragments", "Transfer in chunks", "Node.js, Express et Socket.IO coordonnent les événements d’envoi et de réception de fragments binaires.", "Node.js, Express and Socket.IO coordinate events for sending and receiving binary chunks."),
        item("Reconstruire à réception", "Reconstruct on receipt", "La logique côté destinataire reconstitue le fichier, dans une interface web développée en HTML, SCSS et JavaScript.", "Receiver-side logic reconstructs the file within a web interface built with HTML, SCSS and JavaScript."),
      ],
      findings: [
        item("Un parcours complet de transfert", "A complete transfer workflow", "Le prototype relie interface, serveur, base de données et communication événementielle autour d’un usage simple de partage de fichiers.", "The prototype connects interface, server, database and event-driven communication around a simple file-sharing workflow."),
        item("Des évolutions identifiées", "Identified next steps", "Authentification, chiffrement de bout en bout, contrôle des tailles, gestion des gros fichiers, sécurisation des événements et tests automatisés restent des axes d’amélioration.", "Authentication, end-to-end encryption, size controls, large-file handling, event security and automated tests remain areas for improvement."),
      ],
      scope: copy("Prototype académique : un renforcement de la sécurité, de la robustesse et du déploiement serait nécessaire avant une utilisation en production.", "Academic prototype: security, robustness and deployment would need further work before production use."),
    },
  },
];

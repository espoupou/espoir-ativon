export type LocalizedText = { fr: string; en: string };

export type Certification = {
  id: string;
  kind: LocalizedText;
  title: LocalizedText;
  issuer: LocalizedText;
  year: string;
  description: LocalizedText;
  credentialUrl?: string;
};

const copy = (fr: string, en: string): LocalizedText => ({ fr, en });

export const certifications: Certification[] = [
  {
    id: "lean-six-sigma-black-belt",
    kind: copy("Certification", "Certification"),
    title: copy("Lean Six Sigma Black Belt", "Lean Six Sigma Black Belt"),
    issuer: copy("AIGPE", "AIGPE"),
    year: "2026",
    description: copy(
      "Certification en amélioration continue, analyse de processus et résolution structurée de problèmes.",
      "Certification in continuous improvement, process analysis and structured problem-solving.",
    ),
    credentialUrl: "https://digitalcredentials.aigproexcellence.com/en/profile/kokouespoirativon3451049/",
  },
  {
    id: "alx-backend",
    kind: copy("Certification", "Certification"),
    title: copy("Software Engineering - spécialisation Back-end", "Software Engineering - Back-end specialization"),
    issuer: copy("ALX", "ALX"),
    year: "2024",
    description: copy(
      "Programme intensif de 12 mois en génie logiciel avec spécialisation en développement serveur.",
      "Twelve-month intensive software engineering program with a back-end specialization.",
    ),
  },
  {
    id: "arduino-workshop",
    kind: copy("Formation", "Training"),
    title: copy("Arduino - cours et atelier pratique", "Arduino - course and practical workshop"),
    issuer: copy("Club RobotiCore - ENSAM Rabat", "RobotiCore Club - ENSAM Rabat"),
    year: "2023",
    description: copy(
      "Formation pratique aux bases d'Arduino, de l'électronique et du prototypage embarqué.",
      "Practical training in Arduino fundamentals, electronics and embedded prototyping.",
    ),
  },
  {
    id: "tele-guided-robotics",
    kind: copy("Attestation", "Achievement"),
    title: copy("Fondamentaux des robots télécommandés", "Tele-guided robot fundamentals"),
    issuer: copy("Club RobotiCore - ENSAM Rabat", "RobotiCore Club - ENSAM Rabat"),
    year: "2024",
    description: copy(
      "Reconnaissance de la maîtrise des bases de commande et de mise en oeuvre d'un robot télécommandé.",
      "Recognition of proficiency in the fundamentals of controlling and implementing a tele-guided robot.",
    ),
  },
  {
    id: "icpc-togo",
    kind: copy("Distinction", "Distinction"),
    title: copy("ICPC Togolese Collegiate Programming Contest", "ICPC Togolese Collegiate Programming Contest"),
    issuer: copy("ICPC - Université de Lomé", "ICPC - University of Lomé"),
    year: "2020 / 2021",
    description: copy(
      "6e place à l'édition 2020 et 11e place à l'édition 2021 du concours national de programmation.",
      "6th place in the 2020 edition and 11th place in the 2021 edition of the national programming contest.",
    ),
  },
  {
    id: "afridea-hackathon",
    kind: copy("Participation", "Participation"),
    title: copy("Hackathon régional AfriDEA", "AfriDEA Regional Hackathon"),
    issuer: copy("AfriDEA - Ambassade des États-Unis au Togo", "AfriDEA - U.S. Embassy in Togo"),
    year: "2021",
    description: copy(
      "Participation à un hackathon régional consacré à l'innovation et à la résolution collaborative de problèmes.",
      "Participation in a regional hackathon focused on innovation and collaborative problem-solving.",
    ),
  },
];

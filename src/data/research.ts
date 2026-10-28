export type LocalizedResearchText = { fr: string; en: string };

export type ResearchSection = {
  title: LocalizedResearchText;
  description: LocalizedResearchText;
};

export type ResearchWork = {
  slug: string;
  title: string;
  status: LocalizedResearchText;
  authors: string[];
  summary: LocalizedResearchText;
  topics: LocalizedResearchText[];
  sections: ResearchSection[];
  scope: LocalizedResearchText;
};

const copy = (fr: string, en: string): LocalizedResearchText => ({ fr, en });

export const researchWorks: ResearchWork[] = [
  {
    slug: "perovskite-solar-cells",
    title: "Hybrid Perovskite Solar Cells: Materials, Device Architectures, Stability Limits and Scale-Up Pathways",
    status: copy("Manuscrit technique non publié", "Unpublished technical manuscript"),
    authors: ["Kokou Espoir ATIVON", "Lauriana HOUNGBEDJI"],
    summary: copy(
      "Revue technique reliant les matériaux photovoltaïques, l'architecture des cellules, les mécanismes de dégradation et les contraintes d'industrialisation des cellules solaires hybrides à pérovskite.",
      "Technical review connecting photovoltaic materials, cell architectures, degradation mechanisms and industrial scale-up constraints for hybrid perovskite solar cells.",
    ),
    topics: [
      copy("Matériaux photovoltaïques", "Photovoltaic materials"),
      copy("Stabilité et dégradation", "Stability and degradation"),
      copy("Dépôt à grande échelle", "Scalable deposition"),
      copy("Fiabilité et encapsulation", "Reliability and encapsulation"),
      copy("Industrialisation", "Industrial scale-up"),
    ],
    sections: [
      {
        title: copy("Matériaux et architectures", "Materials and architectures"),
        description: copy(
          "Analyse de l'ingénierie de composition, de la passivation et des architectures n-i-p et p-i-n.",
          "Review of compositional engineering, passivation and n-i-p and p-i-n device architectures.",
        ),
      },
      {
        title: copy("Stabilité et fiabilité", "Stability and reliability"),
        description: copy(
          "Synthèse des effets de l'humidité, de l'oxygène, de la chaleur, de la lumière et de la migration ionique sur la dégradation.",
          "Synthesis of how moisture, oxygen, heat, light and ion migration contribute to degradation.",
        ),
      },
      {
        title: copy("Passage du laboratoire à l'industrie", "From laboratory to manufacturing"),
        description: copy(
          "Étude des procédés de dépôt, du contrôle qualité en ligne, de l'encapsulation, du rendement de fabrication et de la reproductibilité.",
          "Review of deposition processes, in-line quality control, encapsulation, manufacturing yield and reproducibility.",
        ),
      },
      {
        title: copy("Contraintes environnementales", "Environmental constraints"),
        description: copy(
          "Prise en compte de la gestion du plomb, du recyclage et des exigences réglementaires dans une perspective produit.",
          "Consideration of lead management, recycling and regulatory requirements from a product perspective.",
        ),
      },
    ],
    scope: copy(
      "Ce travail est une revue de littérature en cours. Il n'est ni publié, ni évalué par les pairs, et ne présente pas de résultats expérimentaux originaux.",
      "This work is an ongoing literature review. It is not published or peer-reviewed and does not present original experimental results.",
    ),
  },
];

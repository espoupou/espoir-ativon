"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";
import Image from "next/image";
import { projects } from "@/data/projects";
import DetailHero from "@/components/DetailHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import MetricCard from "@/components/MetricCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import { GithubIcon } from "@/components/icons";

export default function SuperCeramePage() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const project = projects.find((p) => p.id === "super-cerame");

  if (!project) return null;
  const content = project.content;

  const processItems = language === "fr" ? [
    { title: "Matières premières", description: "Réception et stockage" },
    { title: "Broyage et mélange", description: "Préparation de la barbotine" },
    { title: "Barbotine", description: "Stockage et contrôle (D/V/R)" },
    { title: "Atomisation", description: "Séchage de la poudre" },
    { title: "Pressage", description: "Mise en forme" },
    { title: "Séchage", description: "Élimination de l’eau" },
    { title: "Émaillage et impression", description: "Décoration" },
    { title: "Cuisson", description: "Traitement thermique" },
    { title: "Tri et emballage", description: "Contrôle qualité" },
    { title: "Palettisation", description: "Stockage et traçabilité" },
  ] : [
    { title: "Raw materials", description: "Receiving and storage" },
    { title: "Milling and mixing", description: "Slip preparation" },
    { title: "Slip", description: "Storage and D/V/R checks" },
    { title: "Atomization", description: "Powder drying" },
    { title: "Pressing", description: "Tile shaping" },
    { title: "Drying", description: "Moisture removal" },
    { title: "Glazing and printing", description: "Decoration" },
    { title: "Firing", description: "Thermal treatment" },
    { title: "Sorting and packaging", description: "Quality control" },
    { title: "Palletization", description: "Storage and traceability" },
  ];

  const fieldWorkItems = language === "fr" ? [
    { title: "Observation du procédé", description: "Compréhension de la ligne complète, de la préparation au conditionnement, pour identifier l’impact des paramètres mesurés." },
    { title: "Collecte des échantillons", description: "Travail terrain régulier avec les opérateurs pour récupérer des échantillons de barbotine." },
    { title: "Mesure de la densité", description: "Suivi par masse et volume pour vérifier la concentration avant atomisation." },
    { title: "Mesure de la viscosité", description: "Évaluation du temps d’écoulement pour estimer la fluidité et identifier les besoins d’ajustement." },
    { title: "Mesure du résidu", description: "Contrôle par dilution et filtration pour évaluer la qualité du broyage." },
    { title: "Structuration des données", description: "Saisie, nettoyage et mise en forme dans des fichiers de suivi Excel/Python." },
    { title: "Analyse et visualisation", description: "Exploration des tendances et étude des corrélations entre densité, viscosité et indicateurs." },
  ] : [
    { title: "Process observation", description: "Reviewed the full line, from preparation to packaging, to understand the impact of the measured parameters." },
    { title: "Sample collection", description: "Regular shop-floor work with operators to collect slip samples." },
    { title: "Density measurement", description: "Used mass and volume measurements to check concentration before atomization." },
    { title: "Viscosity measurement", description: "Measured flow time to assess fluidity and identify adjustment needs." },
    { title: "Residue measurement", description: "Used dilution and filtration checks to assess milling quality." },
    { title: "Data structuring", description: "Entered, cleaned and formatted monitoring data in Excel and Python files." },
    { title: "Analysis and visualization", description: "Explored trends and possible relationships between density, viscosity and other indicators." },
  ];

  const analysisCards = language === "fr" ? [
    { file: "den_visco.png", alt: "Analyse de la densité et de la viscosité", title: "Analyse densité / viscosité", description: "Étude de la relation entre la concentration et les variations d’écoulement." },
    { file: "journal_DVR.png", alt: "Journal de suivi densité, viscosité et résidu", title: "Journal D/V/R", description: "Suivi journalier pour observer les variations dans le temps et détecter les écarts." },
    { file: "OLS_visco_grain.png", alt: "Régression linéaire", title: "Régression linéaire", description: "Essais de régression pour tester des relations entre variables et orienter les observations." },
    { file: "visco_grain.png", alt: "Analyse de la viscosité et de la granulométrie", title: "Analyse viscosité / granulométrie", description: "Exploration de l’hypothèse d’une relation entre certaines fractions granulométriques et la viscosité." },
  ] : [
    { file: "den_visco.png", alt: "Density and viscosity analysis", title: "Density / viscosity analysis", description: "Study of the relationship between concentration and flow variations." },
    { file: "journal_DVR.png", alt: "Density, viscosity and residue monitoring log", title: "D/V/R monitoring log", description: "Daily monitoring to observe changes over time and identify deviations." },
    { file: "OLS_visco_grain.png", alt: "Linear regression", title: "Linear regression", description: "Regression trials to test relationships between variables and guide further observations." },
    { file: "visco_grain.png", alt: "Viscosity and particle-size analysis", title: "Viscosity / particle-size analysis", description: "Exploration of a possible relationship between selected particle-size fractions and viscosity." },
  ];

  const improvementImpacts = language === "fr" ? [
    "Moins de mesures répétitives et meilleure organisation du contrôle",
    "Moins de temps perdu et de sollicitations inutiles du brassage",
    "Réduction de petits gaspillages de barbotine",
    "Meilleure compréhension de l’évolution de la densité",
  ] : [
    "Fewer repetitive measurements and better organized checks",
    "Less lost time and fewer unnecessary mixing requests",
    "Reduced small amounts of slip waste",
    "A clearer understanding of density changes over time",
  ];

  const skillGroups = language === "fr" ? [
    { title: "Production et procédé", items: ["Compréhension d’un procédé céramique", "Suivi de paramètres critiques", "Observation terrain"] },
    { title: "Qualité et traçabilité", items: ["Contrôle qualité", "Suivi des lots par QR code", "Fiabilisation des données"] },
    { title: "Données et outils", items: ["Excel et Python", "Analyse exploratoire", "Corrélations et visualisation"] },
    { title: "Compétences relationnelles", items: ["Curiosité terrain", "Esprit d’analyse", "Lien entre données et réalité"] },
  ] : [
    { title: "Production and process", items: ["Understanding of a ceramic process", "Critical-parameter monitoring", "Shop-floor observation"] },
    { title: "Quality and traceability", items: ["Quality control", "QR-code batch tracking", "Data reliability"] },
    { title: "Data and tools", items: ["Excel and Python", "Exploratory analysis", "Correlation and visualization"] },
    { title: "Interpersonal skills", items: ["Shop-floor curiosity", "Analytical thinking", "Connecting data with operations"] },
  ];

  const takeaways = language === "fr" ? [
    "Comprendre un procédé complet",
    "Mesurer avec rigueur",
    "Analyser sans surinterpréter",
    "Transformer les données en pistes d’amélioration",
  ] : [
    "Understand an end-to-end process",
    "Measure rigorously",
    "Analyze without overinterpreting",
    "Turn data into improvement opportunities",
  ];

  return (
    <div className="pb-24">
      <DetailHero
        title={content.title[language]}
        subtitle={content.subtitle[language]}
        tags={content.tools}
        summary={content.summary[language]}
        backLink="/projects"
        backLabel={t.projects.back}
        buttons={
          <>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-background border border-border rounded-md text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm font-medium"
              >
                <GithubIcon size={18} className="mr-2" />
                {t.projects.githubRepository}
              </a>
            )}
            <a
              href="#analyse"
              className="inline-flex items-center px-5 py-2.5 bg-accent-blue text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm font-medium"
            >
              {language === "fr" ? "Voir les analyses" : "View analyses"}
            </a>
          </>
        }
      />

      <div className="max-w-[800px] mx-auto px-5 md:px-8 mt-16 space-y-24">
        
        {/* Section A: Contexte */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Contexte industriel" : "Industrial Context"} />
          <div className="prose dark:prose-invert max-w-none text-foreground-secondary text-lg leading-relaxed mb-8">
            <p>
              {language === "fr"
                ? "Super Cérame est une entreprise de fabrication de carreaux céramiques. Le procédé comprend plusieurs étapes successives : préparation des matières premières, broyage/mélange, stockage de la barbotine, atomisation, pressage, séchage, émaillage, impression, cuisson, tri, emballage, palettisation et stockage."
                : "Super Cérame is a ceramic tile manufacturing company. The process includes several successive steps: raw material preparation, milling/mixing, slip storage, atomization, pressing, drying, glazing, printing, firing, sorting, packaging, palletization, and storage."}
            </p>
          </div>
          
          <ProcessTimeline items={processItems} orientation="horizontal" />
          
          <div className="bg-cards border border-border p-6 rounded-xl mt-8 border-l-4 border-l-accent-blue">
            <p className="text-foreground font-medium">
              {language === "fr"
                ? "Mon intervention se situait principalement en amont du procédé, autour de la préparation et du suivi de la barbotine avant atomisation, tout en observant aussi les étapes aval pour comprendre l'impact global sur la production."
                : "My intervention was mainly upstream in the process, around the preparation and monitoring of the slip before atomization, while also observing downstream steps to understand the overall impact on production."}
            </p>
          </div>
        </AnimatedSection>

        {/* Section B: Problématique */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Problématique" : "Challenge"} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard 
              title={language === "fr" ? "Densité" : "Density"}
              description={language === "fr" ? "Permet de contrôler la concentration de la barbotine et influence directement la masse de poudre obtenue à la sortie de l'atomiseur." : "Controls the slip concentration and directly influences the mass of powder obtained at the atomizer output."}
            />
            <MetricCard 
              title={language === "fr" ? "Viscosité" : "Viscosity"}
              description={language === "fr" ? "Traduit la résistance à l'écoulement. Une viscosité mal maîtrisée peut perturber le transfert, l'atomisation et la stabilité du procédé." : "Reflects flow resistance. Poorly controlled viscosity can disrupt transfer, atomization, and process stability."}
            />
            <MetricCard 
              title={language === "fr" ? "Résidu" : "Residue"}
              description={language === "fr" ? "Indique les particules solides restantes après contrôle, permettant de comprendre la qualité du broyage." : "Indicates remaining solid particles after control, helping to understand milling quality."}
            />
          </div>
          <p className="text-foreground-secondary text-lg">
            {language === "fr"
              ? "L'enjeu n'était pas uniquement de mesurer ces paramètres, mais de comprendre leurs variations, leurs relations possibles et leur influence sur la production."
              : "The challenge was not only to measure these parameters but to understand their variations, possible relationships, and influence on production."}
          </p>
        </AnimatedSection>

        {/* Section C: Travail terrain */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Travail réalisé sur le terrain" : "Field Work Conducted"} />
          <ProcessTimeline items={fieldWorkItems} orientation="vertical" />
        </AnimatedSection>

        {/* Section D: Analyse de données */}
        <AnimatedSection id="analyse">
          <SectionHeading title={language === "fr" ? "Analyse de données" : "Data Analysis"} />
          <p className="text-foreground-secondary text-lg mb-8">
            {language === "fr" 
              ? "Exploration des tendances et hypothèses comme base d'aide à la décision pour orienter les observations terrain."
              : "Exploration of trends and hypotheses as a decision-support basis to guide field observations."}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analysisCards.map((card) => (
              <div key={card.file} className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                  <span className="mb-2" aria-hidden="true">📷</span>
                  <span className="text-xs">{card.file}</span>
                  <Image fill sizes="(min-width: 768px) 400px, 100vw" src={`/assets/projects/super-cerame/${card.file}`} alt={card.alt} className="object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = "none"} />
                </div>
                <div className="p-5">
                  <h4 className="font-heading font-semibold text-foreground mb-2">{card.title}</h4>
                  <p className="text-sm text-foreground-secondary">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Section E: Optimisation */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Optimisation du contrôle de densité" : "Density Control Optimization"} />
          <div className="prose dark:prose-invert max-w-none text-foreground-secondary text-lg leading-relaxed">
            <p>{language === "fr" ? <><strong>Contexte :</strong> Avant mon intervention, lorsqu’une densité cible devait être atteinte, les contrôles pouvaient être réalisés de manière répétée, parfois toutes les cinq minutes. Cette méthode sécurisait le procédé, mais entraînait des pertes de temps.</> : <><strong>Context:</strong> Before my involvement, checks could be repeated every five minutes when a target density had to be reached. This secured the process but also created avoidable time losses.</>}</p>
            <p>{language === "fr" ? <><strong>Proposition :</strong> À partir des mesures, j’ai travaillé sur une logique d’estimation du temps nécessaire pour se rapprocher de la densité cible. L’objectif était de revenir au bon moment, environ trois à cinq minutes avant l’échéance estimée, pour l’ajustement final.</> : <><strong>Proposal:</strong> Using the measurements, I worked on estimating the time needed to approach the target density. The aim was to return at the right moment, approximately three to five minutes before the estimated target time, for the final adjustment.</>}</p>
            <div className="bg-accent-green/5 border border-accent-green/20 p-6 rounded-xl mt-6">
              <h4 className="font-heading font-semibold text-accent-green mb-4">{language === "fr" ? "Impacts observés dans certains cas :" : "Impacts observed in selected cases:"}</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                {improvementImpacts.map((impact) => <li key={impact}>{impact}</li>)}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Section F & G: Traçabilité */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Appui à la traçabilité des produits finis" : "Finished Product Traceability Support"} />
          <p className="text-foreground-secondary text-lg mb-8">
            {language === "fr"
              ? "En complément, j'ai observé et accompagné la compréhension du flux aval après tri, emballage et palettisation, concernant la traçabilité des palettes via Xperlean."
              : "In addition, I observed and supported the understanding of the downstream flow after sorting, packaging, and palletization, concerning pallet traceability via Xperlean."}
          </p>
          
          <div className="bg-cards border border-border p-6 rounded-xl mb-8 flex flex-wrap gap-2 text-sm font-mono text-accent-blue">
            {language === "fr"
              ? "Tri → Emballage → Palettisation → Code-barres → QR code → Scan cariste → Stockage → Consultation Xperlean"
              : "Sorting → Packaging → Palletization → Barcode → QR code → Forklift scan → Storage → Xperlean lookup"}
          </div>
          
          <p className="text-foreground font-medium text-lg italic border-l-4 border-accent-yellow pl-4">
            {language === "fr"
              ? "J'ai aidé à analyser, comprendre, documenter et fiabiliser la logique de traçabilité. Cette expérience m'a permis de comprendre que la performance industrielle dépend aussi de la qualité des données et de la circulation de l'information."
              : "I helped analyze, understand, document, and make the traceability logic more reliable. This experience helped me understand that industrial performance also depends on data quality and information flow."}
          </p>
        </AnimatedSection>

        {/* Section I: Compétences */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Compétences mobilisées" : "Skills applied"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group) => (
              <div key={group.title} className="bg-cards border border-border p-5 rounded-xl">
                <h4 className="font-heading font-semibold text-foreground mb-3 text-sm">{group.title}</h4>
                <ul className="text-sm text-foreground-secondary space-y-2">
                  {group.items.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Section J: Résultats */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Ce que cette expérience m'a apporté" : "What this experience brought me"} />
          <p className="text-foreground-secondary text-lg mb-8">
            {language === "fr"
              ? "Ce stage m'a permis de passer d'une vision théorique de la production à une compréhension concrète du terrain industriel. J'ai appris à relier les chiffres à ce qui se passe réellement dans l'atelier."
              : "This internship allowed me to transition from a theoretical view of production to a concrete understanding of the industrial shop floor. I learned to connect numbers to what actually happens in the workshop."}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {takeaways.map((takeaway) => <div key={takeaway} className="bg-cards border border-border p-4 rounded-xl text-center font-medium text-foreground">{takeaway}</div>)}
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}

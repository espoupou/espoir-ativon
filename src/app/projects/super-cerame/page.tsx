"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { projects } from "@/data/projects";
import DetailHero from "@/components/DetailHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import MetricCard from "@/components/MetricCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export default function SuperCeramePage() {
  const { language } = useLanguage();
  const project = projects.find((p) => p.id === "super-cerame");

  if (!project) return null;
  const content = project.content;

  const processItems = [
    { title: "Matières premières", description: "Réception et stockage" },
    { title: "Broyage & mélange", description: "Préparation de la barbotine" },
    { title: "Barbotine", description: "Stockage et contrôle (D/V/R)" },
    { title: "Atomisation", description: "Séchage de la poudre" },
    { title: "Pressage", description: "Mise en forme" },
    { title: "Séchage", description: "Élimination de l'eau" },
    { title: "Émaillage / impression", description: "Décoration" },
    { title: "Cuisson", description: "Traitement thermique" },
    { title: "Tri & emballage", description: "Contrôle qualité" },
    { title: "Palettisation", description: "Stockage & traçabilité" },
  ];

  const fieldWorkItems = [
    { title: "Observation du process", description: "Compréhension de la ligne complète, de la préparation au conditionnement, pour identifier l'impact des paramètres mesurés." },
    { title: "Collecte des échantillons", description: "Travail terrain régulier avec les opérateurs pour récupérer des échantillons de barbotine." },
    { title: "Mesure de la densité", description: "Suivi par masse et volume pour vérifier la concentration avant atomisation." },
    { title: "Mesure de la viscosité", description: "Évaluation du temps d'écoulement pour estimer la fluidité et identifier les besoins d'ajustement." },
    { title: "Mesure du résidu", description: "Contrôle par dilution et filtration pour évaluer la qualité du broyage." },
    { title: "Structuration des données", description: "Saisie, nettoyage et mise en forme dans des fichiers de suivi Excel/Python." },
    { title: "Analyse et visualisation", description: "Exploration des tendances et étude des corrélations entre densité, viscosité et indicateurs." },
  ];

  return (
    <div className="pb-24">
      <DetailHero
        title={content.title[language]}
        subtitle={content.subtitle[language]}
        tags={content.tools}
        summary={content.summary[language]}
        backLink="/projects"
        backLabel={language === "fr" ? "Retour aux projets" : "Back to projects"}
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
                {language === "fr" ? "Voir le dépôt GitHub" : "View GitHub Repository"}
              </a>
            )}
            <a
              href="#analyse"
              className="inline-flex items-center px-5 py-2.5 bg-accent-blue text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm font-medium"
            >
              {language === "fr" ? "Voir les analyses" : "View analysis"}
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
          <SectionHeading title={language === "fr" ? "Problématique" : "Problematic"} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard 
              title={language === "fr" ? "Densité" : "Density"}
              description={language === "fr" ? "Permet de contrôler la concentration de la barbotine et influence directement la masse de poudre obtenue à la sortie de l'atomiseur." : "Controls the slip concentration and directly influences the mass of powder obtained at the atomizer output."}
            />
            <MetricCard 
              title={language === "fr" ? "Viscosité" : "Viscosity"}
              description={language === "fr" ? "Traduit la résistance à l'écoulement. Une viscosité mal maîtrisée peut perturber le transfert, l'atomisation et la stabilité du process." : "Reflects flow resistance. Poorly controlled viscosity can disrupt transfer, atomization, and process stability."}
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
            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <span className="mb-2">📷</span>
                <span className="text-xs">den_visco.png</span>
                <img src="/assets/projects/super-cerame/den_visco.png" alt="Densité et Viscosité" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-5">
                <h4 className="font-heading font-semibold text-foreground mb-2">Analyse densité / viscosité</h4>
                <p className="text-sm text-foreground-secondary">Étude de la relation entre la concentration et les variations d'écoulement.</p>
              </div>
            </div>
            
            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <span className="mb-2">📷</span>
                <span className="text-xs">journal_DVR.png</span>
                <img src="/assets/projects/super-cerame/journal_DVR.png" alt="Journal DVR" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-5">
                <h4 className="font-heading font-semibold text-foreground mb-2">Journal D/V/R</h4>
                <p className="text-sm text-foreground-secondary">Suivi journalier pour observer les variations dans le temps et détecter les écarts.</p>
              </div>
            </div>

            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <span className="mb-2">📷</span>
                <span className="text-xs">OLS_visco_grain.png</span>
                <img src="/assets/projects/super-cerame/OLS_visco_grain.png" alt="Régression" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-5">
                <h4 className="font-heading font-semibold text-foreground mb-2">Régression linéaire</h4>
                <p className="text-sm text-foreground-secondary">Essais de régression (aide à l'analyse) pour tester des relations entre variables et orienter les observations.</p>
              </div>
            </div>

            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <span className="mb-2">📷</span>
                <span className="text-xs">visco_grain.png</span>
                <img src="/assets/projects/super-cerame/visco_grain.png" alt="Viscosité et Granulométrie" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-5">
                <h4 className="font-heading font-semibold text-foreground mb-2">Analyse viscosité / granulométrie</h4>
                <p className="text-sm text-foreground-secondary">Exploration de l'hypothèse d'une relation entre certaines fractions granulométriques et la viscosité.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Section E: Optimisation */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Optimisation du contrôle de densité" : "Density Control Optimization"} />
          <div className="prose dark:prose-invert max-w-none text-foreground-secondary text-lg leading-relaxed">
            <p><strong>Contexte :</strong> Avant mon intervention, lorsqu'une densité cible devait être atteinte, les contrôles pouvaient être réalisés de manière répétée, parfois toutes les 5 minutes. Cette méthode permettait de sécuriser le process, mais entraînait des pertes de temps.</p>
            <p><strong>Ce que j'ai proposé :</strong> En exploitant les mesures, j'ai travaillé sur une logique d'estimation du temps nécessaire pour se rapprocher de la densité cible. L'idée était de revenir au bon moment (environ 3-5 min avant) pour l'ajustement final.</p>
            <div className="bg-accent-green/5 border border-accent-green/20 p-6 rounded-xl mt-6">
              <h4 className="font-heading font-semibold text-accent-green mb-4">Impacts observés dans certains cas :</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Moins de mesures répétitives et meilleure organisation du contrôle</li>
                <li>Moins de temps perdu et de sollicitations inutiles du brassage</li>
                <li>Réduction de petits gaspillages de barbotine</li>
                <li>Meilleure compréhension de l'évolution de la densité</li>
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
            Tri → Emballage → Palettisation → Code-barres → QR code → Scan cariste → Stockage → Consultation Xperlean
          </div>
          
          <p className="text-foreground font-medium text-lg italic border-l-4 border-accent-yellow pl-4">
            {language === "fr"
              ? "J'ai aidé à analyser, comprendre, documenter et fiabiliser la logique de traçabilité. Cette expérience m'a permis de comprendre que la performance industrielle dépend aussi de la qualité des données et de la circulation de l'information."
              : "I helped analyze, understand, document, and make the traceability logic more reliable. This experience helped me understand that industrial performance also depends on data quality and information flow."}
          </p>
        </AnimatedSection>

        {/* Section I: Compétences */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Compétences mobilisées" : "Skills Utilized"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-cards border border-border p-5 rounded-xl">
              <h4 className="font-heading font-semibold text-foreground mb-3 text-sm">Production & process</h4>
              <ul className="text-sm text-foreground-secondary space-y-2">
                <li>• Compréhension d'un procédé céramique</li>
                <li>• Suivi de paramètres critiques</li>
                <li>• Observation terrain</li>
              </ul>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl">
              <h4 className="font-heading font-semibold text-foreground mb-3 text-sm">Qualité & traçabilité</h4>
              <ul className="text-sm text-foreground-secondary space-y-2">
                <li>• Contrôle qualité</li>
                <li>• Suivi des lots (QR code)</li>
                <li>• Fiabilisation des données</li>
              </ul>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl">
              <h4 className="font-heading font-semibold text-foreground mb-3 text-sm">Data & outils</h4>
              <ul className="text-sm text-foreground-secondary space-y-2">
                <li>• Excel / Python</li>
                <li>• Analyse exploratoire</li>
                <li>• Corrélations / Visualisation</li>
              </ul>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl">
              <h4 className="font-heading font-semibold text-foreground mb-3 text-sm">Soft skills</h4>
              <ul className="text-sm text-foreground-secondary space-y-2">
                <li>• Curiosité terrain</li>
                <li>• Esprit d'analyse</li>
                <li>• Relier données et réalité</li>
              </ul>
            </div>
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
            <div className="bg-cards border border-border p-4 rounded-xl text-center font-medium text-foreground">Comprendre un procédé complet</div>
            <div className="bg-cards border border-border p-4 rounded-xl text-center font-medium text-foreground">Mesurer avec rigueur</div>
            <div className="bg-cards border border-border p-4 rounded-xl text-center font-medium text-foreground">Analyser sans surinterpréter</div>
            <div className="bg-cards border border-border p-4 rounded-xl text-center font-medium text-foreground">Transformer les données en pistes d'amélioration</div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}

"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { projects } from "@/data/projects";
import DetailHero from "@/components/DetailHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ProcessTimeline from "@/components/ProcessTimeline";
import { GithubIcon } from "@/components/icons";
import { Activity, Database, LineChart, Settings, ShieldAlert, Wrench } from "lucide-react";

export default function MspPilotagePage() {
  const { language } = useLanguage();
  const project = projects.find((p) => p.id === "msp");

  if (!project) return null;
  const content = project.content;

  const simulationSteps = [
    { 
      title: language === "fr" ? "Entrée utilisateur" : "User Input", 
      description: language === "fr" ? "L’utilisateur saisit la valeur cible initiale du process et l’intervalle de tolérance." : "The user enters the initial target value of the process and the tolerance interval." 
    },
    { 
      title: language === "fr" ? "Initialisation" : "Initialization", 
      description: language === "fr" ? "Le programme initialise les paramètres : taille d’échantillon, taux d’usure, limites de contrôle et premières données de production." : "The program initializes parameters: sample size, wear rate, control limits, and initial production data." 
    },
    { 
      title: language === "fr" ? "Cartes de contrôle" : "Control Charts", 
      description: language === "fr" ? "Le programme affiche les cartes X-bar et R pour suivre la moyenne et la dispersion des échantillons." : "The program displays X-bar and R charts to monitor the mean and dispersion of the samples." 
    },
    { 
      title: language === "fr" ? "Boucle de simulation" : "Simulation Loop", 
      description: language === "fr" ? "À chaque cycle, le process évolue, l’usure est prise en compte, de nouvelles données sont générées et les indicateurs qualité sont recalculés." : "At each cycle, the process evolves, wear is taken into account, new data is generated, and quality indicators are recalculated." 
    },
    { 
      title: language === "fr" ? "Capabilité" : "Capability", 
      description: language === "fr" ? "Les valeurs Cp et Cpk sont calculées pour évaluer la capacité du process à rester dans les tolérances." : "Cp and Cpk values are calculated to evaluate the process's ability to stay within tolerances." 
    },
    { 
      title: language === "fr" ? "Décision" : "Decision", 
      description: language === "fr" ? "Lorsque certains seuils sont dépassés, l’utilisateur peut continuer, ajuster la cible, arrêter ou effectuer une maintenance." : "When certain thresholds are exceeded, the user can continue, adjust the target, stop, or perform maintenance." 
    },
    { 
      title: language === "fr" ? "Maintenance" : "Maintenance", 
      description: language === "fr" ? "La maintenance permet de remettre l’usure à zéro et de prolonger la simulation dans de meilleures conditions." : "Maintenance resets wear to zero and prolongs the simulation under better conditions." 
    }
  ];

  return (
    <div className="pb-24">
      {/* 1. Hero du projet */}
      <DetailHero
        title={content.title[language]}
        subtitle={content.subtitle[language]}
        tags={content.tools}
        summary={content.summary[language]}
        backLink="/projects"
        backLabel={language === "fr" ? "Retour aux projets" : "Back to projects"}
        buttons={
          project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-background border border-border rounded-md text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm font-medium"
            >
              <GithubIcon size={18} className="mr-2" />
              {language === "fr" ? "Voir le dépôt GitHub" : "View GitHub Repository"}
            </a>
          )
        }
      />

      <div className="max-w-[800px] mx-auto px-5 md:px-8 mt-16 space-y-20">
        
        {/* 2. Contexte & Problématique */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Contexte & Problématique" : "Context & Problematic"} />
          <div className="prose dark:prose-invert max-w-none text-foreground-secondary text-lg leading-relaxed mb-8">
            <p>
              {language === "fr"
                ? "Dans un environnement industriel, un process peut sembler stable au départ mais se dégrader progressivement à cause de l’usure, d’un mauvais réglage, d’une variation matière ou d’une dérive machine. La maîtrise statistique des procédés permet de détecter ces dérives avant qu’elles ne provoquent une non-qualité importante."
                : "In an industrial environment, a process may seem stable initially but gradually degrade due to wear, poor adjustment, material variation, or machine drift. Statistical process control allows detecting these drifts before they cause significant non-quality."}
            </p>
          </div>
          <div className="bg-cards border border-border p-8 rounded-xl shadow-sm border-l-4 border-l-accent-blue">
            <h3 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center">
              <ShieldAlert className="mr-3 text-accent-blue" />
              {language === "fr" ? "La question centrale" : "The core question"}
            </h3>
            <p className="text-foreground-secondary text-lg leading-relaxed">
              {language === "fr"
                ? "Comment suivre la stabilité d’un process, détecter une dérive, mesurer la capabilité et décider d’une action corrective ou de maintenance à partir de données simulées ?"
                : "How to monitor process stability, detect a drift, measure capability, and decide on a corrective or maintenance action based on simulated data?"}
            </p>
          </div>
        </AnimatedSection>

        {/* 3. Objectifs */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Objectifs de la simulation" : "Simulation Objectives"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              language === "fr" ? "Simuler un processus industriel." : "Simulate an industrial process.",
              language === "fr" ? "Générer des cartes de contrôle X-bar et R." : "Generate X-bar and R control charts.",
              language === "fr" ? "Calculer les limites de contrôle." : "Calculate control limits.",
              language === "fr" ? "Suivre les indicateurs Cp et Cpk." : "Monitor Cp and Cpk indicators.",
              language === "fr" ? "Simuler l’effet progressif de l’usure." : "Simulate the progressive effect of wear.",
              language === "fr" ? "Permettre des actions utilisateur (continuer, ajuster, arrêter, maintenance)." : "Allow user actions (continue, adjust, stop, maintenance).",
              language === "fr" ? "Montrer le lien entre qualité, process et maintenance." : "Show the link between quality, process, and maintenance."
            ].map((obj, i) => (
              <div key={i} className="flex items-start bg-cards border border-border p-4 rounded-xl">
                <span className="text-accent-blue mr-3 mt-1">•</span>
                <span className="text-foreground-secondary">{obj}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* 4. Fonctionnement de la simulation */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Fonctionnement de la simulation" : "Simulation Workflow"} />
          <ProcessTimeline items={simulationSteps} orientation="vertical" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <LineChart className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">control-chart.png</span>
                <img src="/assets/projects/msp/control-chart.png" alt="Control Chart" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Carte de contrôle (X-bar)" : "Control Chart (X-bar)"}
              </div>
            </div>
            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <Activity className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">cp-cpk.png</span>
                <img src="/assets/projects/msp/cp-cpk.png" alt="Cp / Cpk Indicators" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Indicateurs de capabilité (Cp/Cpk)" : "Capability Indicators (Cp/Cpk)"}
              </div>
            </div>
            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <Settings className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">wear-simulation.png</span>
                <img src="/assets/projects/msp/wear-simulation.png" alt="Wear Simulation" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Simulation de la dérive (Usure)" : "Drift Simulation (Wear)"}
              </div>
            </div>
            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <Wrench className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">maintenance-decision.png</span>
                <img src="/assets/projects/msp/maintenance-decision.png" alt="Maintenance Decision" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Décision de maintenance" : "Maintenance Decision"}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 5. Structure technique & 6. Résultats/apports */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cards border border-border p-6 rounded-xl">
              <h3 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center">
                <Database className="mr-2 text-foreground-secondary" size={24} />
                {language === "fr" ? "Structure technique" : "Technical Structure"}
              </h3>
              <ul className="space-y-3 font-mono text-sm text-foreground-secondary">
                <li className="flex items-start"><span className="text-accent-blue mr-2">📄</span> <strong>V1.m</strong> : {language === "fr" ? "première version du programme" : "first version of the program"}</li>
                <li className="flex items-start"><span className="text-accent-blue mr-2">📄</span> <strong>V2.m</strong> : {language === "fr" ? "version améliorée / complémentaire" : "improved / complementary version"}</li>
                <li className="flex items-start"><span className="text-accent-blue mr-2">📖</span> <strong>README.md</strong> : {language === "fr" ? "documentation du projet" : "project documentation"}</li>
              </ul>
            </div>
            
            <div className="bg-background-secondary border border-border p-6 rounded-xl">
              <h4 className="font-heading font-semibold text-foreground mb-4">
                {language === "fr" ? "Résultats et Apports :" : "Results & Insights:"}
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-foreground-secondary text-sm">
                <li>{language === "fr" ? "visualisation du comportement d’un process" : "visualization of process behavior"}</li>
                <li>{language === "fr" ? "suivi statistique avec cartes X-bar et R" : "statistical monitoring with X-bar and R charts"}</li>
                <li>{language === "fr" ? "calcul de Cp et Cpk" : "Cp and Cpk calculation"}</li>
                <li>{language === "fr" ? "simulation de l’usure" : "wear simulation"}</li>
                <li>{language === "fr" ? "prise de décision maintenance / ajustement" : "maintenance / adjustment decision-making"}</li>
                <li>{language === "fr" ? "meilleure compréhension du lien entre dérive process, qualité et maintenance" : "better understanding of the link between process drift, quality, and maintenance"}</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-accent-blue/10 border border-accent-blue/20 rounded-lg text-accent-blue text-center font-medium italic">
            {language === "fr" 
              ? "Ce projet est une simulation pédagogique et un outil d’aide à la compréhension, modélisant un cas industriel simplifié pour illustrer la MSP." 
              : "This project is an educational simulation and an aid to understanding, modeling a simplified industrial case to illustrate SPC."}
          </div>
        </AnimatedSection>

        {/* 7. Compétences démontrées */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Compétences démontrées" : "Demonstrated Skills"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-accent-blue">
              <h4 className="font-heading font-semibold text-foreground mb-3">1. {language === "fr" ? "Qualité & MSP" : "Quality & SPC"}</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Cartes de contrôle, limites de contrôle, dispersion, capabilité process, Cp / Cpk.
              </p>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-accent-green">
              <h4 className="font-heading font-semibold text-foreground mb-3">2. {language === "fr" ? "Process industriel" : "Industrial Process"}</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Dérive, tolérances, réglage cible, comportement dans le temps.
              </p>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-accent-yellow">
              <h4 className="font-heading font-semibold text-foreground mb-3">3. Maintenance</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Effet de l’usure, seuils de décision, maintenance corrective simulée.
              </p>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-foreground">
              <h4 className="font-heading font-semibold text-foreground mb-3">4. MATLAB</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Simulation, interaction utilisateur, visualisation, logique conditionnelle.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center text-lg text-foreground-secondary max-w-3xl mx-auto italic">
            "{language === "fr" 
              ? "Ce projet montre ma capacité à relier qualité, statistiques, comportement process et logique de maintenance dans une simulation simple, utile pour comprendre les principes de la maîtrise statistique des procédés."
              : "This project demonstrates my ability to connect quality, statistics, process behavior, and maintenance logic in a simple simulation, useful for understanding the principles of statistical process control."}"
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="https://github.com/espoupou/MSP_Pilotage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-md hover:bg-opacity-90 transition-colors shadow-md font-medium"
            >
              <GithubIcon size={20} className="mr-2" />
              {language === "fr" ? "Voir le code sur GitHub" : "View code on GitHub"}
            </a>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}

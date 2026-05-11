"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { projects } from "@/data/projects";
import DetailHero from "@/components/DetailHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ProcessTimeline from "@/components/ProcessTimeline";
import { GithubIcon } from "@/components/icons";
import { BarChart, Box, Database, RefreshCw, Timer, Workflow } from "lucide-react";

export default function KanbanSimulationPage() {
  const { language } = useLanguage();
  const project = projects.find((p) => p.id === "kanban");

  if (!project) return null;
  const content = project.content;

  const simulationSteps = [
    { 
      title: language === "fr" ? "Initialisation" : "Initialization", 
      description: language === "fr" ? "Les niveaux de stock, temps de traitement, seuils et durée de shift sont définis au départ." : "Stock levels, processing times, thresholds, and shift duration are defined." 
    },
    { 
      title: language === "fr" ? "Consommation" : "Consumption", 
      description: language === "fr" ? "Chaque poste consomme des pièces selon son rythme de traitement." : "Each station consumes parts according to its processing rate." 
    },
    { 
      title: language === "fr" ? "Détection du seuil" : "Threshold Detection", 
      description: language === "fr" ? "Lorsque le stock d’un poste passe sous son seuil défini, un signal Kanban est déclenché." : "When a station's stock drops below its defined threshold, a Kanban signal is triggered." 
    },
    { 
      title: language === "fr" ? "Réapprovisionnement" : "Replenishment", 
      description: language === "fr" ? "La carte Kanban signale au poste amont qu’un réapprovisionnement est nécessaire." : "The Kanban card signals to the upstream station that replenishment is needed." 
    },
    { 
      title: language === "fr" ? "Visualisation" : "Visualization", 
      description: language === "fr" ? "Les niveaux de stock sont affichés dynamiquement avec Matplotlib pendant la simulation." : "Stock levels are dynamically displayed using Matplotlib during the simulation." 
    },
    { 
      title: language === "fr" ? "Historisation" : "Data Logging", 
      description: language === "fr" ? "Les résultats de simulation sont enregistrés dans un fichier CSV pour analyse ultérieure." : "Simulation results are saved to a CSV file for future analysis." 
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
        
        {/* 2. Contexte industriel */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Contexte industriel" : "Industrial Context"} />
          <div className="prose dark:prose-invert max-w-none text-foreground-secondary text-lg leading-relaxed">
            <p>
              {language === "fr"
                ? "Dans un système de production en flux tiré, les postes amont ne produisent pas simplement pour stocker, mais pour réapprovisionner les postes aval lorsque le besoin apparaît. Le Kanban permet de matérialiser ce besoin à travers des signaux déclenchés par les niveaux de stock."
                : "In a pull-flow production system, upstream stations don't simply produce to store, but to replenish downstream stations when the need arises. Kanban materializes this need through signals triggered by stock levels."}
            </p>
            <p>
              {language === "fr"
                ? "Ce projet reproduit cette logique dans une simulation Python afin de mieux comprendre l’impact des seuils, des temps de traitement et de la durée de production sur le fonctionnement global de la ligne."
                : "This project reproduces this logic in a Python simulation to better understand the impact of thresholds, processing times, and production duration on the overall operation of the line."}
            </p>
          </div>
        </AnimatedSection>

        {/* 3. Problématique de stock et flux tiré */}
        <AnimatedSection>
          <div className="bg-cards border border-border p-8 rounded-xl shadow-sm border-l-4 border-l-accent-yellow">
            <h3 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center">
              <Box className="mr-3 text-accent-yellow" />
              {language === "fr" ? "Problématique : Dimensionnement des stocks" : "Problematic: Stock Sizing"}
            </h3>
            <p className="text-foreground-secondary text-lg leading-relaxed">
              {language === "fr"
                ? "Le dimensionnement des stocks intermédiaires est un enjeu important en gestion de production. Un stock trop faible peut provoquer des ruptures et bloquer le flux. Un stock trop élevé augmente les encours, l’espace occupé et le capital immobilisé. Le projet cherche donc à illustrer comment les seuils Kanban peuvent aider à maintenir un équilibre entre disponibilité matière et limitation des encours."
                : "Intermediate stock sizing is a major issue in production management. Too little stock can cause shortages and block the flow. Too much stock increases work-in-progress, occupied space, and tied-up capital. The project therefore seeks to illustrate how Kanban thresholds can help maintain a balance between material availability and limiting WIP."}
            </p>
          </div>
        </AnimatedSection>

        {/* 4. Ligne simulée & 5. Logique Kanban */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Ligne simulée & Logique Kanban" : "Simulated Line & Kanban Logic"} />
          <p className="text-foreground-secondary text-lg mb-8">
            {language === "fr"
              ? "La simulation représente une ligne de production composée de quatre postes. Chaque poste possède son propre temps de traitement, un niveau de stock, un seuil de déclenchement Kanban et une logique de réapprovisionnement."
              : "The simulation represents a production line composed of four stations. Each station has its own processing time, a stock level, a Kanban trigger threshold, and a replenishment logic."}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-between bg-cards border border-border p-6 rounded-xl overflow-hidden relative">
            <div className="flex flex-col items-center p-4 z-10">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mb-3 border border-accent-blue/20">
                <span className="font-bold text-accent-blue text-xl">1</span>
              </div>
              <h4 className="font-semibold text-foreground">Cutting</h4>
            </div>
            <div className="text-border hidden md:block z-10">→</div>
            <div className="flex flex-col items-center p-4 z-10">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mb-3 border border-accent-blue/20">
                <span className="font-bold text-accent-blue text-xl">2</span>
              </div>
              <h4 className="font-semibold text-foreground">Folding</h4>
            </div>
            <div className="text-border hidden md:block z-10">→</div>
            <div className="flex flex-col items-center p-4 z-10">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mb-3 border border-accent-blue/20">
                <span className="font-bold text-accent-blue text-xl">3</span>
              </div>
              <h4 className="font-semibold text-foreground">Bonding</h4>
            </div>
            <div className="text-border hidden md:block z-10">→</div>
            <div className="flex flex-col items-center p-4 z-10">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mb-3 border border-accent-blue/20">
                <span className="font-bold text-accent-blue text-xl">4</span>
              </div>
              <h4 className="font-semibold text-foreground">Labeling</h4>
            </div>
            
            {/* Background flow line */}
            <div className="absolute left-0 right-0 h-1 top-1/2 -translate-y-12 bg-border/50 hidden md:block z-0"></div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <Workflow className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">flow-diagram.png</span>
                <img src="/assets/projects/kanban/flow-diagram.png" alt="Flow Diagram" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Schéma de flux" : "Flow Diagram"}
              </div>
            </div>
            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <RefreshCw className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">kanban-trigger.png</span>
                <img src="/assets/projects/kanban/kanban-trigger.png" alt="Kanban Trigger" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Déclenchement Kanban" : "Kanban Triggering"}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 6. Fonctionnement de la simulation */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Comment fonctionne la simulation ?" : "How does the simulation work?"} />
          <ProcessTimeline items={simulationSteps} orientation="vertical" />
        </AnimatedSection>

        {/* 7. Paramètres personnalisables & 9. Structure technique */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center">
                <Timer className="mr-2 text-accent-blue" size={24} />
                {language === "fr" ? "Paramètres personnalisables" : "Customizable Parameters"}
              </h3>
              <p className="text-foreground-secondary mb-4">
                {language === "fr" ? "Le projet permet de modifier :" : "The project allows you to modify:"}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-foreground-secondary mb-4">
                <li>{language === "fr" ? "les temps de traitement" : "processing times"}</li>
                <li>{language === "fr" ? "les seuils de stock" : "stock thresholds"}</li>
                <li>{language === "fr" ? "la durée du shift" : "shift duration"}</li>
                <li>{language === "fr" ? "les paramètres de simulation" : "simulation parameters"}</li>
              </ul>
              <p className="text-sm text-foreground-secondary italic">
                {language === "fr" 
                  ? "Cette flexibilité permet de tester différents scénarios et d’observer comment une modification des seuils ou des temps de traitement influence la stabilité du flux." 
                  : "This flexibility allows testing different scenarios and observing how changing thresholds or processing times influences flow stability."}
              </p>
            </div>
            
            <div className="bg-cards border border-border p-6 rounded-xl">
              <h3 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center">
                <Database className="mr-2 text-foreground-secondary" size={24} />
                {language === "fr" ? "Structure technique" : "Technical Structure"}
              </h3>
              <ul className="space-y-3 font-mono text-sm text-foreground-secondary">
                <li className="flex items-start"><span className="text-accent-blue mr-2">📄</span> <strong>simulation.py</strong> : {language === "fr" ? "logique principale" : "main logic"}</li>
                <li className="flex items-start"><span className="text-accent-blue mr-2">▶️</span> <strong>main.py</strong> : {language === "fr" ? "point d'entrée" : "entry point"}</li>
                <li className="flex items-start"><span className="text-accent-blue mr-2">📦</span> <strong>requirements.txt</strong> : {language === "fr" ? "dépendances" : "dependencies"}</li>
                <li className="flex items-start"><span className="text-accent-blue mr-2">📊</span> <strong>simulation_results.csv</strong> : {language === "fr" ? "résultats générés" : "generated results"}</li>
                <li className="flex items-start"><span className="text-accent-blue mr-2">📁</span> <strong>image/</strong> : {language === "fr" ? "captures et graphiques" : "screenshots and charts"}</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* 8. Résultats et visualisation (Apports industriels) */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Résultats et Apports" : "Results & Insights"} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <BarChart className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">stock-levels.png</span>
                <img src="/assets/projects/kanban/stock-levels.png" alt="Stock Levels" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Niveaux de stock (Matplotlib)" : "Stock Levels (Matplotlib)"}
              </div>
            </div>
            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <Database className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">csv-output.png</span>
                <img src="/assets/projects/kanban/csv-output.png" alt="CSV Output" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Export de données CSV" : "CSV Data Export"}
              </div>
            </div>
          </div>
          
          <div className="bg-background-secondary border border-border p-6 rounded-xl">
            <h4 className="font-heading font-semibold text-foreground mb-4">
              {language === "fr" ? "Ce projet est avant tout conçu comme :" : "This project is primarily designed as:"}
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-foreground-secondary">
              <li>{language === "fr" ? "un outil de simulation pédagogique" : "an educational simulation tool"}</li>
              <li>{language === "fr" ? "une base d'analyse pour comprendre un flux tiré" : "an analysis base to understand pull-flow systems"}</li>
              <li>{language === "fr" ? "une illustration dynamique d'un système Kanban" : "a dynamic illustration of a Kanban system"}</li>
              <li>{language === "fr" ? "un support pour tester des scénarios (temps, seuils)" : "a support to test scenarios (times, thresholds)"}</li>
            </ul>
          </div>
        </AnimatedSection>

        {/* 11. Compétences démontrées */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Compétences démontrées" : "Demonstrated Skills"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-accent-blue">
              <h4 className="font-heading font-semibold text-foreground mb-3">1. {language === "fr" ? "Gestion de production" : "Production Management"}</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Flux tiré, Kanban, encours, seuils de stock, réapprovisionnement.
              </p>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-accent-green">
              <h4 className="font-heading font-semibold text-foreground mb-3">2. {language === "fr" ? "Simulation" : "Simulation"}</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Modélisation d’une ligne, logique dynamique, scénarios, évolution dans le temps.
              </p>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-accent-yellow">
              <h4 className="font-heading font-semibold text-foreground mb-3">3. Data & visualisation</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Matplotlib, CSV, suivi des niveaux de stock, analyse des résultats.
              </p>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-foreground">
              <h4 className="font-heading font-semibold text-foreground mb-3">4. {language === "fr" ? "Développement Python" : "Python Development"}</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Structuration du code, séparation main.py / simulation.py, paramètres configurables, export des résultats.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center text-lg text-foreground-secondary max-w-3xl mx-auto italic">
            "{language === "fr" 
              ? "Ce projet montre ma capacité à relier les méthodes de gestion de production à un outil numérique simple, afin de modéliser un flux, tester des paramètres et visualiser l’impact des décisions de stock sur la stabilité d’une ligne."
              : "This project demonstrates my ability to connect production management methods with a simple digital tool, in order to model a flow, test parameters, and visualize the impact of stock decisions on line stability."}"
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="https://github.com/espoupou/Kanban-Simulation-with-Stock-Sizing"
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

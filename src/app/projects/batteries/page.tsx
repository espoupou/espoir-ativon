"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { projects } from "@/data/projects";
import DetailHero from "@/components/DetailHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ProcessTimeline from "@/components/ProcessTimeline";
import { GithubIcon } from "@/components/icons";
import { Activity, BatteryCharging, Code2, Database, FileSpreadsheet, FlaskConical, LineChart, Settings } from "lucide-react";

export default function BatteriesPage() {
  const { language } = useLanguage();
  const project = projects.find((p) => p.id === "batteries");

  if (!project) return null;
  const content = project.content;

  const refactoringSteps = [
    {
      title: language === "fr" ? "Identifier les parties de l’application" : "Identify application parts",
      description: language === "fr" ? "Séparer l’interface principale, les dialogues, les fenêtres spécialisées et les cœurs de calcul." : "Separate the main interface, dialogs, specialized windows, and core processing engines."
    },
    {
      title: language === "fr" ? "Préserver la logique existante" : "Preserve existing logic",
      description: language === "fr" ? "Garder les modules de traitement EIS et DRT pour ne pas casser les fonctionnalités." : "Keep EIS and DRT processing modules intact to avoid breaking functionality."
    },
    {
      title: language === "fr" ? "Améliorer la maintenabilité" : "Improve maintainability",
      description: language === "fr" ? "Répartir le code en fichiers spécialisés pour faciliter les corrections et évolutions." : "Distribute the code into specialized files to facilitate fixes and future evolutions."
    },
    {
      title: language === "fr" ? "Structurer l’expérience utilisateur" : "Structure user experience",
      description: language === "fr" ? "Proposer des fenêtres dédiées selon le besoin : preprocessing, workbook plotting, DRT plotting." : "Provide dedicated windows based on needs: preprocessing, workbook plotting, DRT plotting."
    },
    {
      title: language === "fr" ? "Visualiser les résultats" : "Visualize results",
      description: language === "fr" ? "Utiliser les graphes Nyquist et les comparaisons pour faciliter l’interprétation." : "Use Nyquist plots and comparisons to ease interpretation."
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
          <SectionHeading title={language === "fr" ? "Contexte Scientifique" : "Scientific Context"} />
          <div className="prose dark:prose-invert max-w-none text-foreground-secondary text-lg leading-relaxed mb-8">
            <p>
              {language === "fr"
                ? "Les données d’impédance électrochimique sont souvent difficiles à exploiter directement. Elles peuvent provenir de fichiers différents, contenir des formats variés, nécessiter des conversions, des nettoyages, des comparaisons et des visualisations précises. Un outil dédié permet de réduire les manipulations manuelles et d’améliorer la traçabilité du traitement."
                : "Electrochemical impedance data is often difficult to use directly. It can come from different files, contain varied formats, and require conversions, cleaning, comparisons, and precise visualizations. A dedicated tool reduces manual handling and improves processing traceability."}
            </p>
          </div>

          <div className="bg-cards border border-border p-8 rounded-xl shadow-sm border-l-4 border-l-accent-green">
            <h3 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center">
              <FlaskConical className="mr-3 text-accent-green" />
              {language === "fr" ? "Problématique" : "Problematic"}
            </h3>
            <p className="text-foreground-secondary text-lg leading-relaxed">
              {language === "fr" ? "Comment faciliter l’analyse de données EIS/DRT en regroupant dans une même application :" : "How to facilitate EIS/DRT data analysis by regrouping within a single application:"}
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-foreground-secondary">
              <li>{language === "fr" ? "l’import des fichiers ;" : "file importing;"}</li>
              <li>{language === "fr" ? "le prétraitement ;" : "preprocessing;"}</li>
              <li>{language === "fr" ? "le tracé Nyquist ;" : "Nyquist plotting;"}</li>
              <li>{language === "fr" ? "la comparaison de plusieurs courbes ;" : "comparison of multiple curves;"}</li>
              <li>{language === "fr" ? "le traitement de workbooks Excel ;" : "processing of Excel workbooks;"}</li>
              <li>{language === "fr" ? "l’analyse DRT ;" : "DRT analysis;"}</li>
              <li>{language === "fr" ? "l’organisation du code en modules maintenables ?" : "organizing code into maintainable modules?"}</li>
            </ul>
          </div>
        </AnimatedSection>

        {/* 3. Objectifs & Démarche de refactorisation */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Démarche de refactorisation" : "Refactoring Approach"} />
          <p className="text-foreground-secondary text-lg mb-8">
            {language === "fr"
              ? "Le projet consistait également à transformer un code initial monolithique en une architecture logicielle propre et maintenable, séparant l'interface graphique (Tkinter) de la logique de calcul scientifique."
              : "The project also involved transforming an initial monolithic code into a clean, maintainable software architecture, separating the graphical interface (Tkinter) from the scientific computing logic."}
          </p>

          <ProcessTimeline items={refactoringSteps} orientation="vertical" />
        </AnimatedSection>

        {/* 4. Fonctionnalités et Visualisation */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Fonctionnalités de l'outil" : "Tool Features"} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <Settings className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">main-interface.png</span>
                <img src="/assets/projects/batteries/main-interface.png" alt="Main Interface" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Interface principale (Tkinter)" : "Main Interface (Tkinter)"}
              </div>
            </div>

            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <LineChart className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">nyquist.png</span>
                <img src="/assets/projects/batteries/nyquist.png" alt="Nyquist Plot" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Tracé Nyquist" : "Nyquist Plot"}
              </div>
            </div>

            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <LineChart className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">nyquist-compare.png</span>
                <img src="/assets/projects/batteries/nyquist-compare.png" alt="Nyquist Comparison" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Comparaison de courbes" : "Curve Comparison"}
              </div>
            </div>

            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <Database className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">preprocessing-window.png</span>
                <img src="/assets/projects/batteries/preprocessing-window.png" alt="Preprocessing" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Fenêtre de prétraitement" : "Preprocessing Window"}
              </div>
            </div>

            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <Activity className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">drt-plotter.png</span>
                <img src="/assets/projects/batteries/drt-plotter.png" alt="DRT Plotter" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Analyse DRT" : "DRT Analysis"}
              </div>
            </div>

            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <FileSpreadsheet className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">workbook-plotter.png</span>
                <img src="/assets/projects/batteries/workbook-plotter.png" alt="Workbook Plotter" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Visualisation de workbooks Excel" : "Excel Workbook Plotter"}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 5. Structure technique & 6. Résultats/apports */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cards border border-border p-6 rounded-xl">
              <h3 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center">
                <Code2 className="mr-2 text-foreground-secondary" size={24} />
                {language === "fr" ? "Structure technique" : "Technical Structure"}
              </h3>
              <ul className="space-y-3 font-mono text-sm text-foreground-secondary">
                <li className="flex items-start"><span className="text-accent-blue mr-2">▶️</span> <strong>main.py</strong> : {language === "fr" ? "point d'entrée" : "entry point"}</li>
                <li className="flex items-start"><span className="text-accent-blue mr-2">🪟</span> <strong>app.py</strong> : {language === "fr" ? "shell principal" : "main shell"}</li>
                <li className="flex items-start"><span className="text-accent-blue mr-2">💬</span> <strong>dialogs.py</strong> : {language === "fr" ? "fenêtres de dialogue" : "dialog windows"}</li>
                <li className="flex items-start"><span className="text-accent-blue mr-2">⚙️</span> <strong>preprocessing_window.py</strong></li>
                <li className="flex items-start"><span className="text-accent-blue mr-2">📊</span> <strong>workbook_plotter_window.py</strong></li>
                <li className="flex items-start"><span className="text-accent-blue mr-2">📈</span> <strong>drt_plotter_window.py</strong></li>
                <li className="flex items-start"><span className="text-accent-green mr-2">🧠</span> <strong>eis_core.py</strong> : {language === "fr" ? "cœur de traitement EIS" : "EIS processing core"}</li>
                <li className="flex items-start"><span className="text-accent-green mr-2">🧠</span> <strong>drt_core.py</strong> : {language === "fr" ? "cœur de traitement DRT" : "DRT processing core"}</li>
              </ul>
            </div>

            <div className="bg-background-secondary border border-border p-6 rounded-xl">
              <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center">
                <BatteryCharging className="mr-2 text-accent-green" size={20} />
                {language === "fr" ? "Résultats et Apports :" : "Results & Insights:"}
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-foreground-secondary text-sm">
                <li>{language === "fr" ? "outil plus structuré et plus maintenable" : "more structured and maintainable tool"}</li>
                <li>{language === "fr" ? "séparation claire entre interface et traitement" : "clear separation between interface and processing"}</li>
                <li>{language === "fr" ? "visualisation avancée de données EIS" : "advanced visualization of EIS data"}</li>
                <li>{language === "fr" ? "support pour analyse DRT" : "support for DRT analysis"}</li>
                <li>{language === "fr" ? "réduction des manipulations manuelles" : "reduction of manual operations"}</li>
                <li>{language === "fr" ? "base extensible pour l’ajout de nouvelles fonctionnalités" : "extensible base for adding new features"}</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-accent-green/10 border border-accent-green/20 rounded-lg text-accent-green text-center font-medium italic">
            {language === "fr"
              ? "Il s'agit d'un outil personnel d’analyse de traitement et de visualisation, une base de travail issue de la refactorisation d’un outil scientifique pour l'EIS/DRT."
              : "This is a personal analysis, processing, and visualization tool, a working foundation resulting from the refactoring of a scientific tool for EIS/DRT."}
          </div>
        </AnimatedSection>

        {/* 7. Compétences démontrées */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Compétences démontrées" : "Demonstrated Skills"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-accent-green">
              <h4 className="font-heading font-semibold text-foreground mb-3">1. {language === "fr" ? "Data scientifique" : "Scientific Data"}</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                EIS, DRT, Nyquist, comparaison de courbes, prétraitement.
              </p>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-accent-blue">
              <h4 className="font-heading font-semibold text-foreground mb-3">2. {language === "fr" ? "Python GUI" : "Python GUI"}</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Tkinter, fenêtres spécialisées, interaction utilisateur, organisation de l’interface.
              </p>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-accent-yellow">
              <h4 className="font-heading font-semibold text-foreground mb-3">3. {language === "fr" ? "Architecture logicielle" : "Software Architecture"}</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Refactorisation, séparation des responsabilités, modules spécialisés, maintenabilité.
              </p>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-foreground">
              <h4 className="font-heading font-semibold text-foreground mb-3">4. {language === "fr" ? "Analyse de données" : "Data Analysis"}</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Lecture de fichiers, Excel/workbooks, visualisation, traitement reproductible.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center text-lg text-foreground-secondary max-w-3xl mx-auto italic">
            "{language === "fr"
              ? "Ce projet montre ma capacité à développer un outil d’analyse scientifique spécialisé, à structurer un code Python existant et à transformer des données complexes en visualisations exploitables."
              : "This project demonstrates my ability to develop a specialized scientific analysis tool, structure existing Python code, and transform complex data into actionable visualizations."}"
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/espoupou/Batteries"
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

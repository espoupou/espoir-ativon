"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { projects } from "@/data/projects";
import DetailHero from "@/components/DetailHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import MetricCard from "@/components/MetricCard";
import ProcessTimeline from "@/components/ProcessTimeline";

export default function DevidoirPage() {
  const { language } = useLanguage();
  const project = projects.find((p) => p.id === "ligne-devidoir");

  if (!project) return null;
  const content = project.content;

  const gammeOperatoire = [
    { title: "Structure de base", description: "Assembler les plaques latérales, l'axe et la béquille. Points critiques: alignement et stabilité." },
    { title: "Montage du timon", description: "Fixation du timon de guidage." },
    { title: "Tambour", description: "Intégrer le tambour dans le châssis et vérifier sa rotation libre sans blocage." },
    { title: "Injecteur et manivelle", description: "Fixer les éléments liés à la fonction hydraulique. La manivelle doit transmettre l'effort au tambour." },
    { title: "Roues", description: "Monter les roues de déplacement et vérifier qu'elles tournent sans frottement." },
    { title: "Contrôle", description: "Vérification fonctionnelle finale." },
    { title: "Emballage", description: "Mise en carton." }
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
      />

      <div className="max-w-[800px] mx-auto px-5 md:px-8 mt-16 space-y-24">
        
        {/* Section A & B: Contexte et Problématique */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Contexte & Problématique" : "Context & Problematic"} />
          <p className="text-foreground-secondary text-lg leading-relaxed mb-8">
            {language === "fr"
              ? "Projet de conception et d'optimisation d'une ligne d'assemblage dédiée à la fabrication de dévidoirs pour tuyaux d'arrosage. L'enjeu industriel était de structurer une ligne capable de produire en série avec un bon niveau de qualité et une cadence suffisante."
              : "Design and optimization project for an assembly line dedicated to manufacturing hose reels. The industrial challenge was to structure a line capable of mass production with a good quality level and sufficient throughput."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <MetricCard 
              title={language === "fr" ? "Capacité insuffisante" : "Insufficient Capacity"}
              value="19 998"
              description={language === "fr" ? "Unités par mois actuellement (estimé). Trop faible pour les pics de demande." : "Units per month currently (estimated). Too low for demand peaks."}
            />
            <MetricCard 
              title={language === "fr" ? "Objectif pic de demande" : "Peak Demand Objective"}
              value="30 000"
              description={language === "fr" ? "Unités ciblées par mois. Contrainte: éviter l'ajout d'un second shift." : "Targeted units per month. Constraint: avoid adding a second shift."}
            />
          </div>
        </AnimatedSection>

        {/* Section C: Démarche */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Démarche projet" : "Project Approach"} />
          <ProcessTimeline 
            items={[
              { title: "Comprendre", description: "Identification des composants et fonctions." },
              { title: "Gamme opératoire", description: "Décomposition du montage." },
              { title: "Observer", description: "Relevé des temps par poste." },
              { title: "Pertes", description: "Analyse Lean (VSM, 5S, Pareto)." },
              { title: "Rééquilibrer", description: "Répartition cohérente des tâches." },
              { title: "Simuler", description: "Scénarios ARENA." },
              { title: "Intégrer ERP", description: "Axelor." },
              { title: "Superviser", description: "Prototypage ESP32 / Node-RED." }
            ]} 
          />
        </AnimatedSection>

        {/* Section D & E: Gamme & Temps */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Gamme opératoire & Temps" : "Routing & Times"} />
          <p className="text-foreground-secondary text-lg mb-6">
            {language === "fr"
              ? "Les chronométrages ont montré un déséquilibre important. Le poste 1 ressort comme le poste goulot (environ 30s) avec une forte variabilité."
              : "Time studies showed significant imbalance. Station 1 emerged as the bottleneck (approx. 30s) with high variability."}
          </p>
          
          <div className="bg-cards border border-border p-6 rounded-xl shadow-sm overflow-x-auto mb-10">
            <div className="min-w-[500px]">
              <div className="flex justify-between items-end h-40 border-b border-border pb-2 px-4 gap-4">
                {/* Simplified Bar Chart visualization */}
                <div className="w-1/5 flex flex-col justify-end items-center group">
                  <span className="text-xs font-mono mb-1 text-foreground-secondary group-hover:text-foreground">29.6s</span>
                  <div className="w-full bg-accent-red/80 dark:bg-red-500/80 h-[100%] rounded-t-md"></div>
                  <span className="text-xs mt-2 font-medium">P1 (Goulot)</span>
                </div>
                <div className="w-1/5 flex flex-col justify-end items-center group">
                  <span className="text-xs font-mono mb-1 text-foreground-secondary group-hover:text-foreground">25.5s</span>
                  <div className="w-full bg-accent-blue/60 h-[86%] rounded-t-md"></div>
                  <span className="text-xs mt-2 font-medium">P2</span>
                </div>
                <div className="w-1/5 flex flex-col justify-end items-center group">
                  <span className="text-xs font-mono mb-1 text-foreground-secondary group-hover:text-foreground">16.7s</span>
                  <div className="w-full bg-accent-green/60 h-[56%] rounded-t-md"></div>
                  <span className="text-xs mt-2 font-medium">P3</span>
                </div>
                <div className="w-1/5 flex flex-col justify-end items-center group">
                  <span className="text-xs font-mono mb-1 text-foreground-secondary group-hover:text-foreground">14.9s</span>
                  <div className="w-full bg-accent-green/60 h-[50%] rounded-t-md"></div>
                  <span className="text-xs mt-2 font-medium">P4</span>
                </div>
                <div className="w-1/5 flex flex-col justify-end items-center group">
                  <span className="text-xs font-mono mb-1 text-foreground-secondary group-hover:text-foreground">25.4s</span>
                  <div className="w-full bg-accent-blue/60 h-[85%] rounded-t-md"></div>
                  <span className="text-xs mt-2 font-medium">P5</span>
                </div>
              </div>
              {/* Takt time line */}
              <div className="relative w-full border-t border-dashed border-accent-yellow -mt-[66px] z-10 flex justify-end">
                <span className="bg-background text-xs font-mono text-accent-yellow px-1 absolute right-0 -top-2">Takt Time ~20s</span>
              </div>
            </div>
          </div>
          
          <ProcessTimeline items={gammeOperatoire} orientation="horizontal" />
        </AnimatedSection>

        {/* Section J: ARENA */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Simulation de flux avec ARENA" : "ARENA Flow Simulation"} />
          <p className="text-foreground-secondary text-lg mb-8">
            {language === "fr"
              ? "ARENA a été utilisé pour modéliser la ligne et comparer différents scénarios avant de retenir la meilleure configuration selon les hypothèses du projet."
              : "ARENA was used to model the line and compare different scenarios before selecting the best configuration based on the project's assumptions."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-gray-400">
              <h4 className="font-heading font-bold text-foreground mb-2">Scénario A</h4>
              <p className="text-sm text-foreground-secondary">Ligne actuelle, 1 opérateur/poste. Capacité insuffisante.</p>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-accent-green shadow-md relative">
              <div className="absolute top-2 right-2 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green"></span>
              </div>
              <h4 className="font-heading font-bold text-foreground mb-2">Scénario B</h4>
              <p className="text-sm text-foreground-secondary">Renforcement du goulot. Débit amélioré, capacité ~30k unités/mois. Retenu.</p>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-accent-blue">
              <h4 className="font-heading font-bold text-foreground mb-2">Scénario C</h4>
              <p className="text-sm text-foreground-secondary">Réorganisation globale. Gains intéressants mais inférieurs au scénario B.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Section L & M: Supervision */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Supervision temps réel" : "Real-time Supervision"} />
          <p className="text-foreground-secondary text-lg mb-8">
            {language === "fr"
              ? "Prototypage d'un système pour suivre la performance en temps réel, évitant de naviguer à vue. Calcul des indicateurs TP, TD, TQ et TRS."
              : "Prototyping a system to monitor performance in real-time. Calculation of OEE indicators."}
          </p>
          <div className="bg-background-secondary border border-border p-6 rounded-xl font-mono text-sm mb-8 text-center shadow-sm">
            Capteurs → ESP32 → MQTT → Node-RED → MySQL → Dashboard
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-cards border border-border p-4 rounded-xl text-center">
              <h4 className="font-bold text-accent-blue mb-1">TP</h4>
              <p className="text-xs text-foreground-secondary">Performance</p>
            </div>
            <div className="bg-cards border border-border p-4 rounded-xl text-center">
              <h4 className="font-bold text-accent-blue mb-1">TD</h4>
              <p className="text-xs text-foreground-secondary">Disponibilité</p>
            </div>
            <div className="bg-cards border border-border p-4 rounded-xl text-center">
              <h4 className="font-bold text-accent-blue mb-1">TQ</h4>
              <p className="text-xs text-foreground-secondary">Qualité</p>
            </div>
            <div className="bg-cards border border-accent-green p-4 rounded-xl text-center shadow-sm">
              <h4 className="font-bold text-accent-green mb-1">TRS</h4>
              <p className="text-xs text-foreground-secondary">Global</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Section R: Apprentissages */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Apprentissages" : "Key Learnings"} />
          <div className="bg-cards border border-border p-6 md:p-8 rounded-xl shadow-sm border-l-4 border-l-accent-yellow">
            <p className="text-foreground-secondary text-lg leading-relaxed italic">
              {language === "fr"
                ? "Ce projet m'a permis de comprendre qu'une ligne de production performante ne dépend pas uniquement du nombre d'opérateurs. Elle dépend surtout de l'équilibre entre les postes, de la qualité des standards, de la maîtrise des flux, et de la capacité à piloter les bonnes décisions avec des outils adaptés."
                : "This project helped me understand that a high-performing production line doesn't just depend on the number of operators. It mostly depends on the balance between stations, the quality of standards, flow control, and the ability to drive the right decisions with suitable tools."}
            </p>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}

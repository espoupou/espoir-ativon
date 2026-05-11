"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { experiences } from "@/data/experiences";
import DetailHero from "@/components/DetailHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import MetricCard from "@/components/MetricCard";
import ProcessTimeline from "@/components/ProcessTimeline";

export default function UM5Page() {
  const { language } = useLanguage();
  const exp = experiences.find((e) => e.id === "um5");

  if (!exp) return null;
  const content = exp.content;

  const gapAnalysisActions = [
    "Révision de la politique qualité",
    "Formalisation des procédures manquantes",
    "Structuration des indicateurs",
    "Automatisation progressive des tableaux de bord",
    "Plan de communication qualité",
    "Formation des référents",
  ];

  return (
    <div className="pb-24">
      <DetailHero
        title={content.role[language]}
        subtitle={content.organization}
        tags={content.tools}
        summary={content.context[language]}
        backLink="/experiences"
        backLabel={language === "fr" ? "Retour aux expériences" : "Back to experience"}
      />

      <div className="max-w-[800px] mx-auto px-5 md:px-8 mt-16 space-y-24">
        
        {/* Section A: Contexte institutionnel */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Contexte institutionnel" : "Institutional Context"} />
          <p className="text-foreground-secondary text-lg leading-relaxed mb-8">
            {language === "fr"
              ? "L'Université Mohammed V de Rabat cherche à renforcer son dispositif d'assurance qualité interne dans un contexte de digitalisation et d'exigences accrues. Le stage s'inscrivait dans cet environnement institutionnel complexe (présidence, pôles, établissements, référents)."
              : "Mohammed V University in Rabat seeks to strengthen its internal quality assurance system in a context of digitalization and increased requirements. The internship took place in this complex institutional environment (presidency, divisions, institutions, referents)."}
          </p>
          <div className="bg-cards border border-border p-6 rounded-xl font-mono text-sm text-center shadow-sm text-accent-blue">
            Présidence → Pôle Qualité → Référents → Établissements → Processus → Indicateurs
          </div>
        </AnimatedSection>

        {/* Section E: ISO 21001 */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Alignement ISO 21001" : "ISO 21001 Alignment"} />
          <p className="text-foreground-secondary text-lg mb-8">
            {language === "fr"
              ? "Utilisation de la norme ISO 21001 comme fil conducteur pour structurer la réflexion qualité, sans présenter la mission comme une certification complète."
              : "Use of the ISO 21001 standard as a guiding thread to structure quality reflection, without presenting the mission as a complete certification."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-cards border border-border p-4 rounded-xl">
              <h4 className="font-heading font-semibold text-foreground">Orientation apprenant</h4>
              <p className="text-sm text-foreground-secondary mt-1">Information qualité plus accessible</p>
            </div>
            <div className="bg-cards border border-border p-4 rounded-xl">
              <h4 className="font-heading font-semibold text-foreground">Approche processus</h4>
              <p className="text-sm text-foreground-secondary mt-1">Activités sous forme de SIPOC</p>
            </div>
            <div className="bg-cards border border-border p-4 rounded-xl">
              <h4 className="font-heading font-semibold text-foreground">Décision fondée sur les preuves</h4>
              <p className="text-sm text-foreground-secondary mt-1">Indicateurs mesurables (SMART)</p>
            </div>
            <div className="bg-cards border border-border p-4 rounded-xl">
              <h4 className="font-heading font-semibold text-foreground">Maîtrise documentaire</h4>
              <p className="text-sm text-foreground-secondary mt-1">Sécurisation des accès aux documents valides</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Section F: Processus & SIPOC */}
        <AnimatedSection>
          <SectionHeading title="Processus, procédures et SIPOC" />
          <p className="text-foreground-secondary text-lg mb-6">
            {language === "fr"
              ? "Clarification rapide des processus pour identifier les responsabilités sans entrer immédiatement dans un niveau de détail trop lourd."
              : "Rapid clarification of processes to identify responsibilities without immediately going into too heavy detail."}
          </p>
          <div className="bg-background-secondary border border-border rounded-xl p-6 overflow-x-auto shadow-sm">
            <table className="w-full text-left text-sm">
              <tbody>
                <tr className="border-b border-border"><th className="py-2 pr-4 text-foreground font-semibold">Supplier</th><td className="py-2 text-foreground-secondary">Présidence, établissements, référents qualité</td></tr>
                <tr className="border-b border-border"><th className="py-2 pr-4 text-foreground font-semibold">Input</th><td className="py-2 text-foreground-secondary">Rapports, enquêtes, audits, documents qualité</td></tr>
                <tr className="border-b border-border"><th className="py-2 pr-4 text-foreground font-semibold">Process</th><td className="py-2 text-foreground-secondary font-medium text-accent-green">Collecter, analyser, formaliser, suivre, améliorer</td></tr>
                <tr className="border-b border-border"><th className="py-2 pr-4 text-foreground font-semibold">Output</th><td className="py-2 text-foreground-secondary">Indicateurs, procédures, plans d'action, TdB</td></tr>
                <tr><th className="py-2 pr-4 text-foreground font-semibold">Customer</th><td className="py-2 text-foreground-secondary">Étudiants, enseignants, direction, parties prenantes</td></tr>
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        {/* Section H: Gestion documentaire */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Gestion documentaire sécurisée" : "Secure Document Management"} />
          <div className="bg-cards border border-border p-6 rounded-xl border-l-4 border-l-accent-blue shadow-sm mb-6">
            <p className="text-foreground-secondary text-lg">
              {language === "fr"
                ? "J'ai contribué à la mise en place d'un gestionnaire documentaire numérique centralisé. L'objectif était de permettre une consultation simple et rapide des documents validés, en mode lecture seule, pour éviter les versions multiples et obsolètes."
                : "I contributed to the implementation of a centralized digital document manager. The goal was to allow quick and easy consultation of validated documents in read-only mode, to avoid multiple and obsolete versions."}
            </p>
          </div>
          <div className="bg-background-secondary border border-border p-4 rounded-xl text-center font-mono text-xs sm:text-sm shadow-sm flex flex-wrap justify-center items-center gap-2">
            <span>Documents qualité</span>
            <span className="text-accent-blue">→</span>
            <span>Classement</span>
            <span className="text-accent-blue">→</span>
            <span>Validation</span>
            <span className="text-accent-blue">→</span>
            <span className="bg-accent-green/20 px-2 py-1 rounded text-accent-green font-bold">Consultation seule</span>
            <span className="text-accent-blue">→</span>
            <span>Utilisateurs</span>
          </div>
        </AnimatedSection>

        {/* Section I: Gap Analysis */}
        <AnimatedSection>
          <SectionHeading title="Gap Analysis" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4 border-b border-border pb-2 text-accent-green">Points forts</h4>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Rapports périodiques</li>
                <li>• Enquêtes de satisfaction</li>
                <li>• Audits internes</li>
                <li>• Base documentaire existante</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4 border-b border-border pb-2 text-accent-yellow">Axes d'amélioration</h4>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li>• Cartographie processus à compléter</li>
                <li>• Indicateurs non suivis régulièrement</li>
                <li>• Communication interne à formaliser</li>
                <li>• Cibles qualité à mieux définir</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-cards border border-border p-6 rounded-xl shadow-sm">
            <h4 className="font-heading font-bold text-foreground mb-3">
              {language === "fr" ? "Actions proposées" : "Proposed Actions"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {gapAnalysisActions.map((action, i) => (
                <span key={i} className="px-3 py-1 bg-background-secondary border border-border rounded-full text-xs text-foreground-secondary">
                  {action}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Section N: Apprentissages */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Apprentissages" : "Key Learnings"} />
          <p className="text-foreground-secondary text-lg mb-8 leading-relaxed">
            {language === "fr"
              ? "Ce stage m'a permis de découvrir l'amélioration des organisations à travers les processus, indicateurs et la maîtrise documentaire. Un système qualité efficace doit être structuré, accessible, mesurable et vivant."
              : "This internship allowed me to discover organizational improvement through processes, indicators, and document control. An effective quality system must be structured, accessible, measurable, and alive."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MetricCard title="1. Penser système" description="Relier stratégie, processus, documents, indicateurs." />
            <MetricCard title="2. Mesurer pour piloter" description="Un objectif nécessite un indicateur fiable et une cible." />
            <MetricCard title="3. Sécuriser l'information" description="Éviter les erreurs via la maîtrise documentaire." />
            <MetricCard title="4. Améliorer progressivement" description="Des actions réalistes, suivies dans le temps." />
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}

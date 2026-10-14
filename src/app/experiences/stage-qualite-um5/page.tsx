"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";
import { experiences } from "@/data/experiences";
import DetailHero from "@/components/DetailHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import MetricCard from "@/components/MetricCard";

export default function UM5Page() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const exp = experiences.find((e) => e.id === "um5");

  if (!exp) return null;
  const content = exp.content;

  const gapAnalysisActions = language === "fr"
    ? [
        "Révision de la politique qualité",
        "Formalisation des procédures manquantes",
        "Structuration des indicateurs",
        "Automatisation progressive des tableaux de bord",
        "Plan de communication qualité",
        "Formation des référents",
      ]
    : [
        "Review the quality policy",
        "Formalize missing procedures",
        "Structure performance indicators",
        "Progressively automate dashboards",
        "Create a quality communication plan",
        "Train quality representatives",
      ];

  const isoPrinciples = language === "fr"
    ? [
        ["Orientation apprenant", "Rendre l’information qualité plus accessible"],
        ["Approche processus", "Structurer les activités sous forme de SIPOC"],
        ["Décision fondée sur les preuves", "Définir des indicateurs mesurables et SMART"],
        ["Maîtrise documentaire", "Sécuriser l’accès aux documents valides"],
      ]
    : [
        ["Learner focus", "Make quality information more accessible"],
        ["Process approach", "Structure activities using SIPOC"],
        ["Evidence-based decisions", "Define measurable, SMART indicators"],
        ["Document control", "Secure access to valid documents"],
      ];

  const sipocRows = language === "fr"
    ? [
        ["Fournisseurs", "Présidence, établissements, référents qualité"],
        ["Entrées", "Rapports, enquêtes, audits, documents qualité"],
        ["Processus", "Collecter, analyser, formaliser, suivre, améliorer"],
        ["Sorties", "Indicateurs, procédures, plans d’action, tableaux de bord"],
        ["Clients", "Étudiants, enseignants, direction, parties prenantes"],
      ]
    : [
        ["Suppliers", "University presidency, institutions, and quality representatives"],
        ["Inputs", "Reports, surveys, audits, and quality documents"],
        ["Process", "Collect, analyze, formalize, monitor, and improve"],
        ["Outputs", "Indicators, procedures, action plans, and dashboards"],
        ["Customers", "Students, faculty, management, and stakeholders"],
      ];

  const gapAnalysis = language === "fr"
    ? {
        strengths: ["Rapports périodiques", "Enquêtes de satisfaction", "Audits internes", "Base documentaire existante"],
        improvements: ["Cartographie des processus à compléter", "Indicateurs non suivis régulièrement", "Communication interne à formaliser", "Cibles qualité à mieux définir"],
      }
    : {
        strengths: ["Periodic reports", "Satisfaction surveys", "Internal audits", "Existing document base"],
        improvements: ["Complete the process map", "Monitor indicators regularly", "Formalize internal communication", "Define quality targets more clearly"],
      };

  const learnings = language === "fr"
    ? [
        ["1. Penser système", "Relier stratégie, processus, documents et indicateurs."],
        ["2. Mesurer pour piloter", "Un objectif nécessite un indicateur fiable et une cible."],
        ["3. Sécuriser l’information", "Éviter les erreurs grâce à la maîtrise documentaire."],
        ["4. Améliorer progressivement", "Mettre en œuvre des actions réalistes, suivies dans le temps."],
      ]
    : [
        ["1. Think systemically", "Connect strategy, processes, documents, and indicators."],
        ["2. Measure to manage", "Every objective needs a reliable indicator and a target."],
        ["3. Secure information", "Prevent errors through document control."],
        ["4. Improve progressively", "Implement realistic actions and track them over time."],
      ];

  return (
    <div className="pb-24">
      <DetailHero
        title={content.role[language]}
        subtitle={content.organization}
        tags={content.tools}
        summary={content.context[language]}
        backLink="/experiences"
        backLabel={t.experiences.back}
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
            {language === "fr"
              ? "Présidence → Pôle qualité → Référents → Établissements → Processus → Indicateurs"
              : "University presidency → Quality division → Representatives → Institutions → Processes → Indicators"}
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
            {isoPrinciples.map(([title, description]) => (
              <div key={title} className="bg-cards border border-border p-4 rounded-xl">
                <h4 className="font-heading font-semibold text-foreground">{title}</h4>
                <p className="text-sm text-foreground-secondary mt-1">{description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Section F: Processus & SIPOC */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Processus, procédures et SIPOC" : "Processes, procedures, and SIPOC"} />
          <p className="text-foreground-secondary text-lg mb-6">
            {language === "fr"
              ? "Clarification rapide des processus pour identifier les responsabilités sans entrer immédiatement dans un niveau de détail trop lourd."
              : "Rapid clarification of processes to identify responsibilities without immediately going into too heavy detail."}
          </p>
          <div className="bg-background-secondary border border-border rounded-xl p-6 overflow-x-auto shadow-sm">
            <table className="w-full text-left text-sm">
              <tbody>
                {sipocRows.map(([label, value], index) => (
                  <tr key={label} className={index < sipocRows.length - 1 ? "border-b border-border" : undefined}>
                    <th className="py-2 pr-4 text-foreground font-semibold">{label}</th>
                    <td className={`py-2 text-foreground-secondary ${index === 2 ? "font-medium text-accent-green" : ""}`}>{value}</td>
                  </tr>
                ))}
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
            <span>{language === "fr" ? "Documents qualité" : "Quality documents"}</span>
            <span className="text-accent-blue">→</span>
            <span>{language === "fr" ? "Classement" : "Classification"}</span>
            <span className="text-accent-blue">→</span>
            <span>{language === "fr" ? "Validation" : "Approval"}</span>
            <span className="text-accent-blue">→</span>
            <span className="bg-accent-green/20 px-2 py-1 rounded text-accent-green font-bold">{language === "fr" ? "Lecture seule" : "Read-only access"}</span>
            <span className="text-accent-blue">→</span>
            <span>{language === "fr" ? "Utilisateurs" : "Users"}</span>
          </div>
        </AnimatedSection>

        {/* Section I: Gap Analysis */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Analyse des écarts" : "Gap Analysis"} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4 border-b border-border pb-2 text-accent-green">{language === "fr" ? "Points forts" : "Strengths"}</h4>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                {gapAnalysis.strengths.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4 border-b border-border pb-2 text-accent-yellow">{language === "fr" ? "Axes d’amélioration" : "Areas for improvement"}</h4>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                {gapAnalysis.improvements.map((item) => <li key={item}>• {item}</li>)}
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
            {learnings.map(([title, description]) => (
              <MetricCard key={title} title={title} description={description} />
            ))}
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}

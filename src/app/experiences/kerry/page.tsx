"use client";

import AnimatedSection from "@/components/AnimatedSection";
import DetailHero from "@/components/DetailHero";
import MetricCard from "@/components/MetricCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/data/experiences";
import { useTranslation } from "@/i18n";
import { useLanguage } from "@/i18n/LanguageContext";

export default function KerryExperiencePage() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const experience = experiences.find((item) => item.id === "kerry");

  if (!experience) return null;

  const content = experience.content;
  const metrics = language === "fr"
    ? [
        { value: "30+", title: "Collaborateurs formés", description: "Opérateurs, chefs d’équipe et trois managers concernés par le déploiement." },
        { value: "50+", title: "Audits LPA", description: "Audits de confirmation réalisés pour soutenir l’application des standards." },
        { value: ">95 %", title: "Participation", description: "Participation observée parmi les collaborateurs formés." },
        { value: "4–7 min", title: "Potentiel SMED estimé", description: "Opportunité identifiée, soumise à validation opérationnelle — pas un gain déjà réalisé." },
      ]
    : [
        { value: "30+", title: "Employees trained", description: "Operators, team leaders, and three managers involved in the rollout." },
        { value: "50+", title: "LPA audits", description: "Confirmation audits completed to support consistent use of standards." },
        { value: ">95%", title: "Participation", description: "Participation observed among trained employees." },
        { value: "4–7 min", title: "Estimated SMED potential", description: "An identified opportunity subject to operational validation—not a saving already achieved." },
      ];

  const cycle = language === "fr"
    ? [
        { title: "Observer", description: "Aller sur le terrain et comprendre le travail réel." },
        { title: "Analyser", description: "Identifier écarts, causes et opportunités." },
        { title: "Standardiser", description: "Transformer les bonnes pratiques en supports clairs." },
        { title: "Déployer", description: "Préparer les outils et accompagner leur utilisation." },
        { title: "Former", description: "Rendre les équipes autonomes sur les nouveaux standards." },
        { title: "Suivre", description: "Confirmer l’application par les audits et indicateurs." },
        { title: "Améliorer", description: "Capitaliser sur les retours pour faire évoluer le système." },
      ]
    : [
        { title: "Observe", description: "Go to the shop floor and understand the real work." },
        { title: "Analyze", description: "Identify gaps, causes, and opportunities." },
        { title: "Standardize", description: "Turn good practices into clear working materials." },
        { title: "Deploy", description: "Prepare the tools and support their adoption." },
        { title: "Train", description: "Enable teams to use the new standards independently." },
        { title: "Monitor", description: "Confirm application through audits and indicators." },
        { title: "Improve", description: "Use feedback to keep the system evolving." },
      ];

  const workstreams = language === "fr"
    ? [
        ["Analyse terrain et Gemba", "Observation des séquences de travail, échanges avec les équipes et mise en relation des pratiques avec les exigences de production."],
        ["Standards de travail", "Contribution à la structuration de modes opératoires et de supports visuels plus faciles à comprendre et à appliquer."],
        ["Audits LPA", "Déploiement d’audits courts et réguliers pour confirmer les standards, faire remonter les écarts et soutenir le management de proximité."],
        ["Résolution de problèmes 3C", "Structuration des constats, causes et contre-mesures pour rendre le suivi des actions plus lisible."],
        ["Analyse SMED", "Étude des changements de série et du nettoyage afin de distinguer les activités internes et externes et d’identifier un potentiel de réduction."],
        ["Formation et conduite du changement", "Formation de plus de 30 collaborateurs et accompagnement des managers pour favoriser l’appropriation des outils."],
        ["Indicateurs et outils numériques", "Utilisation d’Excel, de SAP et de l’environnement MES pour consolider le suivi opérationnel et les informations utiles."],
      ]
    : [
        ["Shop-floor analysis and Gemba", "Observed work sequences, engaged with teams, and connected daily practices with production requirements."],
        ["Standard work", "Helped structure operating standards and visual materials that were easier to understand and apply."],
        ["LPA audits", "Deployed short, recurring audits to confirm standards, surface gaps, and support frontline management."],
        ["3C problem-solving", "Structured concerns, causes, and countermeasures to make action tracking clearer."],
        ["SMED analysis", "Studied changeover and cleaning activities to distinguish internal and external work and identify reduction potential."],
        ["Training and change management", "Trained 30+ employees and supported managers to encourage adoption of the tools."],
        ["Indicators and digital tools", "Used Excel, SAP, and the MES environment to consolidate operational monitoring and useful information."],
      ];

  const learnings = language === "fr"
    ? [
        ["Le terrain d’abord", "Un standard utile commence par l’observation du travail réel et l’écoute des personnes qui l’exécutent."],
        ["Faire vivre les standards", "La documentation seule ne suffit pas : formation, confirmation et retour d’expérience sont indispensables."],
        ["Séparer activité et impact", "Le nombre d’audits ou de personnes formées mesure le déploiement, pas automatiquement un gain de performance."],
        ["Améliorer avec prudence", "Une opportunité calculée doit être validée dans les conditions réelles avant d’être présentée comme un résultat."],
      ]
    : [
        ["Start on the shop floor", "A useful standard begins with observing the real work and listening to the people who perform it."],
        ["Keep standards alive", "Documentation alone is not enough: training, confirmation, and feedback are essential."],
        ["Separate activity from impact", "Audit and training counts measure deployment, not an automatic performance gain."],
        ["Improve carefully", "A calculated opportunity must be validated in real conditions before it is presented as an achieved result."],
      ];

  return (
    <div className="pb-24">
      <DetailHero
        title={content.role[language]}
        subtitle={language === "fr" ? "Stage d’ingénieur en production — Kerry Savoury Ingredients France" : "Production Engineering Internship — Kerry Savoury Ingredients France"}
        tags={content.tools}
        summary={content.context[language]}
        backLink="/experiences"
        backLabel={t.experiences.back}
      />

      <div className="max-w-[960px] mx-auto px-5 md:px-8 mt-16 space-y-24">
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Le stage en un coup d’œil" : "Internship at a glance"} />
          <p className="text-foreground-secondary text-lg leading-relaxed mb-8">
            {language === "fr"
              ? "Du 15 juin au 11 septembre 2026 à Blendecques, j’ai contribué à des démarches d’excellence opérationnelle dans un environnement de fabrication d’ingrédients. La mission reliait observation terrain, standardisation, formation et suivi managérial, sans exposer de données industrielles confidentielles."
              : "From 15 June to 11 September 2026 in Blendecques, I contributed to operational-excellence initiatives in an ingredients manufacturing environment. The role connected shop-floor observation, standardization, training, and management follow-up without disclosing confidential industrial data."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric) => <MetricCard key={metric.title} {...metric} />)}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Contexte et enjeu" : "Context and challenge"} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cards border border-border p-6 rounded-xl">
              <h3 className="font-heading font-semibold text-lg mb-3">{language === "fr" ? "Le contexte" : "The context"}</h3>
              <p className="text-foreground-secondary leading-relaxed">{language === "fr" ? "Les opérations couvrent notamment la manipulation d’ingrédients, les transferts de matières, la pesée, le mélange, le stockage intermédiaire et le conditionnement. La fiabilité dépend de standards compris et appliqués de façon cohérente." : "Operations include ingredient handling, material transfers, weighing, mixing, intermediate storage, and packaging. Reliability depends on standards that are understood and applied consistently."}</p>
            </div>
            <div className="bg-cards border border-border p-6 rounded-xl border-l-4 border-l-accent-blue">
              <h3 className="font-heading font-semibold text-lg mb-3">{language === "fr" ? "Mon rôle" : "My role"}</h3>
              <p className="text-foreground-secondary leading-relaxed">{language === "fr" ? "Transformer des observations terrain en standards utilisables, accompagner leur déploiement, puis créer une boucle de confirmation et d’amélioration avec les équipes." : "Turn shop-floor observations into usable standards, support their rollout, and create a confirmation and improvement loop with the teams."}</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Démarche d’amélioration" : "Improvement approach"} />
          <ProcessTimeline items={cycle} orientation="horizontal" />
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Travaux réalisés" : "Workstreams"} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {workstreams.map(([title, description], index) => (
              <article key={title} className="bg-cards border border-border rounded-xl p-6 relative overflow-hidden">
                <span className="font-mono text-xs text-accent-blue">0{index + 1}</span>
                <h3 className="font-heading font-semibold text-lg mt-2 mb-2">{title}</h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Impact et portée des résultats" : "Impact and scope of results"} />
          <div className="bg-accent-green/5 border border-accent-green/20 rounded-xl p-6 md:p-8 mb-6">
            <p className="text-foreground leading-relaxed">{language === "fr" ? "Le déploiement a atteint 100 % des opérateurs et chefs d’équipe ciblés, ainsi que les trois managers concernés. Plus de 50 audits LPA ont soutenu la confirmation des standards, avec plus de 95 % de participation parmi les collaborateurs formés et 100 % pour les managers concernés." : "The rollout reached 100% of targeted operators and team leaders, together with all three managers involved. More than 50 LPA audits supported confirmation of the standards, with over 95% participation among trained employees and 100% among the managers concerned."}</p>
          </div>
          <p className="text-sm text-foreground-secondary border-l-4 border-l-accent-yellow pl-4 leading-relaxed">{language === "fr" ? "Lecture responsable des chiffres : ces indicateurs décrivent l’activité, la couverture et la participation. L’analyse SMED a identifié un potentiel estimé de 4 à 7 minutes, qui reste à valider opérationnellement et ne constitue pas un gain réalisé." : "Responsible interpretation: these indicators describe activity, coverage, and participation. The SMED analysis identified an estimated 4–7 minute opportunity that remains subject to operational validation and is not presented as an achieved saving."}</p>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Méthodes et outils" : "Methods and tools"} />
          <div className="flex flex-wrap gap-3">
            {["Gemba", "Lean Manufacturing", "Standard Work", "SOP / SWOP / WES", "LPA", "3C", "SMED", "SAP", "MES", "Excel", "KPI"].map((tool) => (
              <span key={tool} className="px-4 py-2 bg-cards border border-border rounded-full text-sm font-mono text-foreground-secondary">{tool}</span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Principaux apprentissages" : "Key learnings"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {learnings.map(([title, description]) => <MetricCard key={title} title={title} description={description} />)}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-background-secondary border border-border rounded-xl p-6 text-sm text-foreground-secondary">
            <strong className="text-foreground">{language === "fr" ? "Confidentialité : " : "Confidentiality: "}</strong>
            {language === "fr" ? "Cette étude de cas présente les méthodes et résultats autorisés à un niveau agrégé. Elle n’inclut ni recette, ni volume de production, ni donnée SAP/MES, ni plan d’équipement, ni information personnelle. Kerry n’a pas revu ni approuvé cette page." : "This case study presents authorized methods and results at an aggregate level. It contains no recipe, production volume, SAP/MES record, equipment layout, or personal information. Kerry has not reviewed or endorsed this page."}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

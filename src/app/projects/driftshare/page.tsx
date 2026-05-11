"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { projects } from "@/data/projects";
import DetailHero from "@/components/DetailHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ProcessTimeline from "@/components/ProcessTimeline";
import { GithubIcon } from "@/components/icons";
import { Code2, Database, Download, FileUp, Link as LinkIcon, Radio, Server, Share2, Upload, Wifi } from "lucide-react";

export default function DriftSharePage() {
  const { language } = useLanguage();
  const project = projects.find((p) => p.id === "driftshare");

  if (!project) return null;
  const content = project.content;

  const workflowSteps = [
    { 
      title: language === "fr" ? "Création de room" : "Room Creation", 
      description: language === "fr" ? "L’expéditeur crée une room temporaire." : "The sender creates a temporary room." 
    },
    { 
      title: language === "fr" ? "Génération d’un identifiant" : "Identifier Generation", 
      description: language === "fr" ? "Le serveur génère un numéro unique et le stocke pour éviter les doublons actifs." : "The server generates a unique number and stores it to avoid active duplicates." 
    },
    { 
      title: language === "fr" ? "Connexion du destinataire" : "Receiver Connection", 
      description: language === "fr" ? "Le destinataire saisit le numéro de room pour rejoindre la session." : "The receiver enters the room number to join the session." 
    },
    { 
      title: language === "fr" ? "Sélection du fichier" : "File Selection", 
      description: language === "fr" ? "L’expéditeur choisit un fichier sur son appareil." : "The sender chooses a file on their device." 
    },
    { 
      title: language === "fr" ? "Découpage en chunks" : "Chunking", 
      description: language === "fr" ? "Le fichier est lu en ArrayBuffer puis découpé en blocs binaires." : "The file is read into an ArrayBuffer and then split into binary blocks." 
    },
    { 
      title: language === "fr" ? "Transfert temps réel" : "Real-time Transfer", 
      description: language === "fr" ? "Les chunks sont envoyés via Socket.IO." : "Chunks are sent via Socket.IO." 
    },
    { 
      title: language === "fr" ? "Reconstruction" : "Reconstruction", 
      description: language === "fr" ? "Le destinataire récupère les chunks, reconstruit un Blob puis télécharge le fichier localement." : "The receiver collects the chunks, reconstructs a Blob, and downloads the file locally." 
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
                ? "Le projet répond à un besoin simple : transférer rapidement un fichier entre deux utilisateurs sans créer de compte ni configurer un système complexe. L’approche repose sur une room temporaire qui connecte un sender et un receiver pendant la session de transfert."
                : "The project addresses a simple need: to quickly transfer a file between two users without creating an account or setting up a complex system. The approach relies on a temporary room that connects a sender and a receiver during the transfer session."}
            </p>
          </div>
          <div className="bg-cards border border-border p-8 rounded-xl shadow-sm border-l-4 border-l-accent-blue">
            <h3 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center">
              <Share2 className="mr-3 text-accent-blue" />
              {language === "fr" ? "La problématique" : "The problematic"}
            </h3>
            <p className="text-foreground-secondary text-lg leading-relaxed">
              {language === "fr"
                ? "Comment permettre à deux utilisateurs de s’associer temporairement via un numéro de room, puis transférer un fichier en temps réel de manière simple et directe ?"
                : "How to allow two users to temporarily associate via a room number, and then transfer a file in real-time simply and directly?"}
            </p>
          </div>
        </AnimatedSection>

        {/* 3. Objectifs */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Objectifs du prototype" : "Prototype Objectives"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              language === "fr" ? "Créer une room temporaire." : "Create a temporary room.",
              language === "fr" ? "Générer un identifiant unique de room." : "Generate a unique room identifier.",
              language === "fr" ? "Permettre au destinataire de rejoindre la room." : "Allow the receiver to join the room.",
              language === "fr" ? "Envoyer les métadonnées du fichier." : "Send file metadata.",
              language === "fr" ? "Découper le fichier en chunks binaires." : "Split the file into binary chunks.",
              language === "fr" ? "Transférer les chunks via Socket.IO." : "Transfer chunks via Socket.IO.",
              language === "fr" ? "Reconstruire le fichier côté réception." : "Reconstruct the file on the receiving end.",
              language === "fr" ? "Proposer une interface web simple et responsive." : "Provide a simple and responsive web interface."
            ].map((obj, i) => (
              <div key={i} className="flex items-start bg-cards border border-border p-4 rounded-xl">
                <span className="text-accent-blue mr-3 mt-1">•</span>
                <span className="text-foreground-secondary">{obj}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* 4. Workflow de transfert & Architecture */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Architecture & Workflow de transfert" : "Architecture & Transfer Workflow"} />
          
          <div className="bg-cards border border-border p-6 rounded-xl flex flex-wrap items-center justify-center gap-4 text-sm font-mono text-accent-blue mb-12 shadow-sm">
            <div className="flex flex-col items-center"><Wifi className="mb-2" size={20} /><span>Frontend</span></div>
            <span className="text-border">→</span>
            <div className="flex flex-col items-center"><Server className="mb-2 text-foreground" size={20} /><span className="text-foreground">Node.js / Express</span></div>
            <span className="text-border">→</span>
            <div className="flex flex-col items-center"><Radio className="mb-2" size={20} /><span>Socket.IO</span></div>
            <span className="text-border">→</span>
            <div className="flex flex-col items-center"><Database className="mb-2 text-accent-green" size={20} /><span className="text-accent-green">MongoDB</span></div>
            <span className="text-border">→</span>
            <div className="flex flex-col items-center"><FileUp className="mb-2" size={20} /><span>File chunks</span></div>
          </div>
          
          <ProcessTimeline items={workflowSteps} orientation="vertical" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <Share2 className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">landing-page.png</span>
                <img src="/assets/projects/driftshare/landing-page.png" alt="Landing Page" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Page d'accueil" : "Landing Page"}
              </div>
            </div>
            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <Upload className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">create-room.png</span>
                <img src="/assets/projects/driftshare/create-room.png" alt="Create Room" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Création de room (Sender)" : "Room Creation (Sender)"}
              </div>
            </div>
            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <Download className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">receiver-page.png</span>
                <img src="/assets/projects/driftshare/receiver-page.png" alt="Receiver Page" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Page de réception" : "Receiver Page"}
              </div>
            </div>
            <div className="bg-cards border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center text-foreground-secondary relative">
                <Wifi className="w-8 h-8 mb-2 text-foreground-secondary/50" />
                <span className="text-xs">transfer-flow.png</span>
                <img src="/assets/projects/driftshare/transfer-flow.png" alt="Transfer Flow" className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div className="p-4 text-center text-sm text-foreground-secondary">
                {language === "fr" ? "Flux de transfert" : "Transfer Flow"}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 5. Structure technique & Stack */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cards border border-border p-6 rounded-xl">
              <h3 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center">
                <Code2 className="mr-2 text-foreground-secondary" size={24} />
                {language === "fr" ? "Structure technique" : "Technical Structure"}
              </h3>
              <ul className="space-y-3 font-mono text-sm text-foreground-secondary">
                <li className="flex items-start"><span className="text-accent-blue mr-2">📁</span> <strong>public/</strong> : {language === "fr" ? "pages statiques et assets" : "static pages and assets"}</li>
                <li className="flex items-start"><span className="text-accent-blue mr-2">📄</span> <strong>index.html / receiver.html</strong></li>
                <li className="flex items-start"><span className="text-accent-green mr-2">▶️</span> <strong>server.js</strong> : {language === "fr" ? "serveur Node.js / Express" : "Node.js / Express server"}</li>
                <li className="flex items-start"><span className="text-accent-blue mr-2">⚙️</span> <strong>public/assets/js/code.js</strong> : {language === "fr" ? "logique sender" : "sender logic"}</li>
                <li className="flex items-start"><span className="text-accent-blue mr-2">⚙️</span> <strong>public/assets/js/receiver.js</strong></li>
                <li className="flex items-start"><span className="text-accent-blue mr-2">🎨</span> <strong>public/assets/scss/</strong></li>
                <li className="flex items-start"><span className="text-foreground mr-2">📦</span> <strong>package.json / gulpfile.js</strong></li>
              </ul>
            </div>
            
            <div className="bg-background-secondary border border-border p-6 rounded-xl">
              <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center">
                <Server className="mr-2 text-accent-green" size={20} />
                {language === "fr" ? "Stack Technique" : "Tech Stack"}
              </h4>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-semibold text-foreground">Frontend :</span>
                  <p className="text-foreground-secondary">HTML5, SCSS, JavaScript, Bootstrap, jQuery, Font Awesome</p>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Backend :</span>
                  <p className="text-foreground-secondary">Node.js, Express.js, Socket.IO, MongoDB, dotenv</p>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Tools :</span>
                  <p className="text-foreground-secondary">Gulp, BrowserSync, Sass compiler, Autoprefixer, Clean CSS</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 6. Résultats & Limites */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Apports & Limites" : "Insights & Limitations"} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4 text-lg text-accent-green">
                {language === "fr" ? "Ce que ce projet prouve" : "What this project proves"}
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-foreground-secondary">
                <li>{language === "fr" ? "prototype fonctionnel de transfert de fichiers par room ;" : "functional prototype of file transfer via room;"}</li>
                <li>{language === "fr" ? "logique sender / receiver ;" : "sender / receiver logic;"}</li>
                <li>{language === "fr" ? "communication temps réel ;" : "real-time communication;"}</li>
                <li>{language === "fr" ? "transfert par chunks binaires ;" : "transfer via binary chunks;"}</li>
                <li>{language === "fr" ? "gestion d’identifiants de room ;" : "room identifier management;"}</li>
                <li>{language === "fr" ? "bonne base pour comprendre les systèmes temps réel." : "good foundation for understanding real-time systems."}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4 text-lg text-accent-blue">
                {language === "fr" ? "Limites et améliorations possibles" : "Limitations and possible improvements"}
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-foreground-secondary text-sm">
                <li>{language === "fr" ? "ajouter une authentification pour les transferts privés" : "add authentication for private transfers"}</li>
                <li>{language === "fr" ? "ajouter du chiffrement de bout en bout" : "add end-to-end encryption"}</li>
                <li>{language === "fr" ? "améliorer la gestion des gros fichiers" : "improve large file management"}</li>
                <li>{language === "fr" ? "ajouter drag-and-drop et gérer les limites de taille" : "add drag-and-drop and handle size limits"}</li>
                <li>{language === "fr" ? "ajouter des tests automatisés et Docker" : "add automated tests and Docker"}</li>
                <li>{language === "fr" ? "sécuriser les événements Socket.IO et ajouter rate limiting" : "secure Socket.IO events and add rate limiting"}</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-accent-blue/10 border border-accent-blue/20 rounded-lg text-accent-blue text-center font-medium italic">
            {language === "fr" 
              ? "Ce projet est un prototype académique de fin de formation. Il démontre la logique centrale d’un système de partage de fichiers temps réel, mais nécessiterait un renforcement sécurité, robustesse et déploiement avant une utilisation en production." 
              : "This project is an academic prototype from my graduation project. It demonstrates the core logic of a real-time file sharing system, but would require reinforcement in security, robustness, and deployment before production use."}
          </div>
        </AnimatedSection>

        {/* 7. Compétences démontrées */}
        <AnimatedSection>
          <SectionHeading title={language === "fr" ? "Compétences démontrées" : "Demonstrated Skills"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-accent-blue">
              <h4 className="font-heading font-semibold text-foreground mb-3">1. {language === "fr" ? "Backend web" : "Web Backend"}</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Node.js, Express, routes serveur, variables d’environnement.
              </p>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-accent-green">
              <h4 className="font-heading font-semibold text-foreground mb-3">2. {language === "fr" ? "Temps réel" : "Real-time"}</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Socket.IO, événements, rooms, sender / receiver, transfert par chunks.
              </p>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-accent-yellow">
              <h4 className="font-heading font-semibold text-foreground mb-3">3. {language === "fr" ? "Base de données" : "Database"}</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                MongoDB, stockage des room IDs, prévention des doublons actifs.
              </p>
            </div>
            <div className="bg-cards border border-border p-5 rounded-xl border-t-4 border-t-foreground">
              <h4 className="font-heading font-semibold text-foreground mb-3">4. Frontend</h4>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                HTML / SCSS, JavaScript, Bootstrap, interface responsive.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center text-lg text-foreground-secondary max-w-3xl mx-auto italic">
            "{language === "fr" 
              ? "DriftShare montre mes bases en développement web complet : interface, backend, base de données, communication temps réel et structuration d’un workflow utilisateur simple."
              : "DriftShare demonstrates my foundation in full-stack web development: interface, backend, database, real-time communication, and structuring a simple user workflow."}"
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="https://github.com/espoupou/DriftShare"
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

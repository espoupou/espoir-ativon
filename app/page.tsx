import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const projects = [
  {
    title: "Driftshare",
    description: "Peer-to-peer file sharing without size limits, built with MERN and secure connectivity.",
    link: "https://github.com/espoupou/Driftshare"
  },
  {
    title: "MSP PILOTAGE",
    description: "MATLAB project simulating industrial process with control charts, wear simulation, Cp/Cpk analysis.",
    link: "https://github.com/espoupou/MSP-PILOTAGE"
  },
  {
    title: "Kanban Simulation with Stock Sizing",
    description: "Production line simulation using Kanban principles, stock thresholds, and CSV logging.",
    link: "https://github.com/espoupou/Kanban_simulation_with_stock_sizing"
  },
  {
    title: "Health Fitness App",
    description: "Web app with Streamlit for tracking health data and getting AI-powered recommendations.",
    link: "https://github.com/espoupou/Health_fitness_app"
  },
  {
    title: "Les Problèmes d'Ordonnancement",
    description: "Developing various scheduling algorithms with constraints.",
    link: "https://github.com/espoupou/Les_probleme_d_ordonnacement"
  },
  {
    title: "Nq",
    description: "Strategy algorithm for Nasdaq using NinjaTrader.",
    link: "https://github.com/espoupou/Nq"
  },
  {
    title: "Super Cérame",
    description: "Internship project focused on ceramic production optimization.",
    link: "https://github.com/espoupou/super_cerame"
  },
  {
    title: "Simple Shell",
    description: "UNIX shell project from ALX program: custom getline, built-ins, env, cd, etc.",
    link: "https://github.com/espoupou/simple_shell"
  }
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white px-6 py-10 font-sans">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">ONEOF | Boss Overcoming</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">À propos</h2>
        <p className="mt-2 text-sm md:text-base">
          Passionné par l’ingénierie, la programmation et les systèmes de production intelligents. Mon parcours mêle informatique, industrie et optimisation,
          avec une forte orientation vers l’automatisation, la simulation et l’analyse de données. Toujours prêt à apprendre et à construire des solutions concrètes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Projets</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="text-sm mt-1">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-sm md:text-base">📧 espoupou@example.com</p>
        <p className="mt-1 text-sm md:text-base">🔗 <a href="https://github.com/espoupou" className="underline">github.com/espoupou</a></p>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 — sbi7i
      </footer>
    </div>
  );
}

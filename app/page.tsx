"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import "@fortawesome/fontawesome-free/css/all.min.css";

const projects = [
  {
    title: "Driftshare",
    description:
      "Peer-to-peer file sharing without size limits, built with MERN and secured architecture.",
    link: "https://github.com/espoupou/Driftshare",
  },
  {
    title: "MSP PILOTAGE",
    description:
      "Simulate industrial processes with control charts and maintenance/wear integration. MATLAB-based.",
    link: "https://github.com/espoupou/MSP_PILOTAGE",
  },
  {
    title: "Kanban Simulation with Stock Sizing",
    description:
      "Production line simulation using Kanban principles with real-time plotting and CSV logging.",
    link: "https://github.com/espoupou/Kanban_simulation_with_stock_sizing",
  },
  {
    title: "Health Fitness App",
    description:
      "Streamlit-powered dashboard with AI advice, diet and training log, user authentication.",
    link: "https://github.com/espoupou/Health_fitness_app",
  },
  {
    title: "Ordonnancement",
    description:
      "Collection of algorithms and constraints for scheduling optimization problems.",
    link: "https://github.com/espoupou/Les_probleme_d_ordonnacement",
  },
  {
    title: "NQ Nasdaq Strategy",
    description: "Basic Nasdaq strategy simulation using NinjaTrader.",
    link: "https://github.com/espoupou/Nq",
  },
  {
    title: "Super Cérame",
    description:
      "Internship project: process optimization, production tracking, automation & data analysis.",
    link: "https://github.com/espoupou/super_cerame",
  },
  {
    title: "Simple Shell (ALX)",
    description:
      "UNIX shell from scratch: command parsing, PATH handling, builtins like exit, env, cd.",
    link: "https://github.com/espoupou/simple_shell",
  },
];

const achievements = [
  {
    title: "Super Cérame Internship – Optimization Impact",
    description:
      "Improved production tracking with data analysis, saving time and improving accuracy on shop floor decisions.",
    link: "https://github.com/espoupou/super_cerame",
  },
  {
    title: "Internship at SafNet TOGO",
    description:
      "Developing web projects in Django, including a family financial management application and various client-facing projects (authentication, dashboards, dynamic forms)",
    link: "#",
  },
  {
    title: "Internship at Ghiyada Africa",
    description:
      "Web and mobile developer position",
    link: "#",
  },
];

const certifications = [
  {
    title: "Coding Game – Intelo",
    link: "https://drive.google.com/file/d/15sr8v2-3nAH8u-PEZEWyN_RnyCtC9mlg/view",
  },
  {
    title: "Classement national TogoCPC Janvier 2021",
    link: "https://drive.google.com/file/d/1WvAg3iD_lqLkSsmvJZ_CY9ly3z5EcWbf/view",
  },
  {
    title: "Classement national TogoCPC Novembre 2021",
    link: "https://drive.google.com/file/d/1_rjEpv_cmvlnYNJTnwSQQgFzbgGs2Ayz/view",
  },
  {
    title: "Hackathon Afridea 2021",
    link: "https://drive.google.com/file/d/1GvFJ3lEeLTepNsuqmbJD0vCpzppiFRgb/view",
  },
  {
    title: "ACTIONEERS 2025",
    link: "https://drive.google.com/file/d/1HSM793kyOKBO-b_HByZ_jFGfN1JddOu2/view",
  },
  {
    title: "Appreciation de Trésorerie 2023",
    link: "https://drive.google.com/file/d/15c-P3O6-mF48ztrafOxIxKZBnosmi3hN/view",
  },
  {
    title: "Introduction to Cybersecurity 2021",
    link: "https://www.credly.com/badges/fe7ce991-b37a-4953-8169-2878da45d01c",
  },
  {
    title: "Roboticore Arduino Courses 2023",
    link: "https://drive.google.com/file/d/1tY0mvy1Uppu_WYVzQ_MavJWUyxKb5CqS/view",
  },
  {
    title: "Roboticore Tele-Guided Basic 2024",
    link: "http://drive.google.com/file/d/1VWCVk9hTyaEgiwhCC-MarY5rrjhD2cCX/view",
  },
  {
    title: "NDG Linux Unhatched 2020",
    link: "https://drive.google.com/file/d/1iCnY0zxAQOs_dxYSUCfgiGk0A9MLpe88/view",
  },
  {
    title: "CONFEJEL 2019",
    link: "https://drive.google.com/file/d/1GpVptLPc5gloFL4bI7U1v-_acK6ucpq7/view",
  },
];

function Skills() {
  const skills = [
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "MATLAB",
    "C",
    "C++",
    "SQL",
    "Streamlit",
    "MongoDB",
    "Excel VBA",
    "Arena",
    "ERP",
    "IoT (ESP32)",
    "Data Analysis",
    "Simulation",
  ];

  return (
    <div className="pt-6">
      <h3 className="text-xl font-semibold mb-2">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white px-6 md:px-20 py-10 space-y-20 w-full md:w-4/5 mx-auto">
      {/* NAVIGATION */}
      <header className="flex items-center justify-between">
        <div className="font-bold text-2xl"></div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#education" className="hover:underline">
            Education
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#certifications" className="hover:underline">
            Certifications
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600"
        >
          {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </header>

      {/* INTRO */}
      <section id="about" className="space-y-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-4"
        >
          <Image
            src="/avatar.png"
            alt="avatar"
            className="rounded-full"
            width={170}
            height={120}
          />
          <h1 className="text-4xl font-bold">
            Hi, I’m Kokou Espoir ATIVON{" "}
            <span className="text-indigo-500">(AKA Synux)</span>
          </h1>
          <p className="max-w-2xl text-zinc-700 dark:text-zinc-300">
            I’m an industrial engineering student with a strong background in
            software development. I love solving real-world problems with
            efficient and elegant tech solutions. From automation, simulation,
            to web development — I build what matters.
          </p>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="space-y-4">
        {/*<Skills />*/}
        <h2 className="text-2xl font-bold text-center">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 list-disc list-inside text-zinc-700 dark:text-zinc-300">
          <li className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 rounded-full">Python / Streamlit</li>
          <li className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 rounded-full">MATLAB / Simulink</li>
          <li className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 rounded-full">JavaScript / React / Next.js</li>
          <li className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 rounded-full">SQL / MySQL</li>
          <li className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 rounded-full">Node-RED / IoT</li>
          <li className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 rounded-full">Lean / Six Sigma</li>
          <li className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 rounded-full">Data Analysis & Visualization</li>
          <li className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 rounded-full">Simulation / Arena</li>
        </ul>
      </section>

      {/* EDUCATION */}
      <section id="education" className="w-full md:w-[80%] mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
          <p>
            <strong>2023–Now</strong>: Engineering Degree in Industrial
            Engineering – ENSAM Rabat
          </p>
          <p>
            <strong>2021–2023</strong>: DEUG in Computer Science – FS Tétouan
          </p>
          <p>
            <strong>2019–2021</strong>: Software engineering at Polytechnic School (Computer and computing center)  - University of Lomé
          </p>
          <p>
            <strong>2019</strong>: Baccalaureate degree in mathematics and life&earth sciences  - CS Ste Cathérine
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="space-y-8">
        <h2 className="text-2xl font-bold text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="block p-4 border rounded-2xl shadow-sm dark:border-zinc-700 hover:border-indigo-400 dark:hover:border-indigo-400"
            >
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="space-y-8">
        <h2 className="text-2xl font-bold text-center">Experiences</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <motion.a
              key={achievement.title}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="block p-4 border rounded-2xl shadow-sm dark:border-zinc-700 hover:border-indigo-400 dark:hover:border-indigo-400"
            >
              <h3 className="text-xl font-semibold mb-1">
                {achievement.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {achievement.description}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="space-y-4">
        <h2 className="text-2xl font-bold text-center">Certifications & Awards</h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside text-zinc-700 dark:text-zinc-300">
          {certifications.map((cert, index) => (
            <li key={index}>
              <a
                href={cert.link}
                target="_blank"
                className="text-indigo-500 hover:underline"
              >
                {cert.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="w-full md:w-[80%] mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

        <p className="text-zinc-700 dark:text-zinc-300 text-center mb-4">
          I'm always open to new opportunities, collaborations, or just a
          friendly chat. Feel free to reach out!
        </p>

        <form
          action="https://formsubmit.co/72d335bca3d75242e0d294f7e70216b1"
          method="POST"
          className="space-y-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://espoir-ativon.vercel.app#contact"
          />

          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 rounded border dark:bg-gray-900"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 rounded border dark:bg-gray-900"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              required
              className="w-full p-2 rounded border dark:bg-gray-900"
              placeholder="Your message..."
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded hover:scale-105 transition-transform"
          >
            Send
          </button>
        </form>

        <div className="flex justify-center space-x-4 mt-8 text-xl">
          <a
            href="https://github.com/espoupou"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/kokou-espoir-ativon-3404571a6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://wa.me/+212614236814"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp" />
          </a>
          <a href="tel:+212614236814">
            <i className="fas fa-phone" />
          </a>
        </div>

        <p className="text-center text-sm mt-4 text-gray-500">
          Lomé, Togo — espoirativon@gmail.com
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t pt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>
          &copy; {new Date().getFullYear()} Synux. ❤️ All rigths reserved.
        </p>
      </footer>
    </main>
  );
}

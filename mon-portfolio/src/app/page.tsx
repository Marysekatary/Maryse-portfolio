"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import Chatbot from "../components/Chatbot";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <Navbar />

      <section
        id="home"
        className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen text-center md:text-left px-6 md:px-16 gap-12"
      >

        <div className="md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-4"
          >
            Je suis <span className="text-indigo-400">Maryse Katary</span> 👩🏽‍💻
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl mb-8 text-gray-300"
          >
            Étudiante en 3ᵉ année à <span className="text-indigo-400 font-medium">Epitech Paris</span>, 
            passionnée par le développement backend, la résolution de problèmes et le travail en équipe.
            Je suis actuellement à la recherche d'un stage de fin de 3ᵉ année qui durera entre 4 et 6 mois à partir de Mars 2026.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 mb-8 max-w-lg"
          >
            Je construis des solutions logicielles robustes et évolutives, tout en cultivant 
            la collaboration et la rigueur technique. Mon objectif : apprendre vite, 
            créer des outils utiles, et contribuer à des projets à impact.
          </motion.p>

          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-lg font-semibold transition"
          >
            Mes projets
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500">
            <Image
              src="/images/maryse1.jpg"
              alt="Maryse Katary"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-12 px-6 md:px-16 text-center md:text-left bg-gray-900/40 py-20"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 rounded-3xl overflow-hidden shadow-xl border border-gray-700">
            <Image
              src="/images/maryse2.jpg"
              alt="Maryse Katary portrait"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-bold mb-6 text-indigo-400">À propos de moi</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Je m’appelle <span className="text-indigo-400 font-medium">Maryse Katary</span>, 
            étudiante en 3ᵉ année à Epitech Paris, en formation d’experte en technologies de l’information. 
            J’aime comprendre en profondeur comment les systèmes fonctionnent et construire des solutions efficaces.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Mon parcours m’a permis de maîtriser des environnements variés — du développement backend 
            avec <span className="text-indigo-400">Node.js</span>, <span className="text-indigo-400">Django</span>, 
            et <span className="text-indigo-400">Python</span>, à la mise en place de pipelines DevOps 
            avec <span className="text-indigo-400">Docker</span> et <span className="text-indigo-400">GitHub Actions</span>.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Ce qui me définit : ma capacité à apprendre vite, à collaborer efficacement 
            et à trouver des solutions concrètes à des problèmes complexes. 
            Je cherche toujours à allier rigueur et créativité dans mes projets.
          </p>
        </motion.div>
      </section>

      <ExperienceSection />

      <ProjectsSection />

      <section
        id="cv"
        className="min-h-[60vh] flex flex-col justify-center items-center px-6 text-center bg-gray-900"
      >
        <h2 className="text-3xl font-bold mb-4 text-indigo-400">Mon CV</h2>
        <p className="text-gray-300 mb-6 max-w-xl">
          Tu veux en savoir plus sur mon parcours ?  
          Télécharge mon CV dans la langue de ton choix 👇
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <a
            href="/cv/Maryse-Katary-CV-FR.pdf"
            download
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-lg font-semibold transition"
          >
            🇫🇷 Télécharger le CV en Français
          </a>

          <a
            href="/cv/Maryse-Katary-CV-EN.pdf"
            download
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-full text-lg font-semibold transition"
          >
            🇬🇧 Download CV in English
          </a>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-indigo-400">Me contacter</h2>
        <p className="text-gray-300 mb-8 max-w-xl">
          Tu veux collaborer, discuter d’un projet, ou simplement dire bonjour ?  
          N’hésite pas à m’écrire !
        </p>

        <form
          action="https://formspree.io/f/mgvndoyo"
          method="POST"
          className="flex flex-col gap-4 w-full max-w-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Ton nom"
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ton email"
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            name="message"
            placeholder="Ton message"
            rows={5}
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-lg font-semibold transition"
          >
            Envoyer ✉️
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500 border-t border-gray-800 mt-16">
        <p>© {new Date().getFullYear()} Maryse Katary — Tous droits réservés 💻</p>
        <p className="mt-2">
          <a
            href="https://github.com/Marysekatary"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/maryse-katary-702324250/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </footer>

      <Chatbot />
    </main>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import Chatbot from "../components/Chatbot";
import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";


export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <main
      className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden"
      onMouseMove={(e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      }}
    >
      {/* Halo plus petit mais plus marqué */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(93, 108, 238, 0.55), transparent 32%)`,
        }}
      />

      {/* Grille subtile */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.18]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.4)_1px,transparent_0)] [background-size:22px_22px]" />
      </div>

      {/* Quelques orbes lumineux qui flottent */}
      <motion.div
        className="pointer-events-none fixed -top-10 -left-10 w-40 h-40 rounded-full bg-fuchsia-500/20 blur-3xl z-0"
        animate={{ x: [0, 20, 0], y: [0, 10, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none fixed bottom-10 right-[-40px] w-52 h-52 rounded-full bg-indigo-500/25 blur-3xl z-0"
        animate={{ x: [0, -15, 0], y: [0, -8, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Contenu */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />

        <section
          id="cv"
          className="min-h-[60vh] flex flex-col justify-center items-center px-6 text-center bg-gray-900/60 border-y border-white/5"
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
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-lg font-semibold transition shadow-lg shadow-indigo-500/30"
            >
              🇫🇷 Télécharger le CV en Français
            </a>

            <a
              href="/cv/Maryse-Katary-CV-EN.pdf"
              download
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-full text-lg font-semibold transition shadow-lg shadow-pink-500/30"
            >
              🇬🇧 Download CV in English
            </a>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-indigo-400">
            Me contacter
          </h2>
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

        <footer className="py-6 text-center text-gray-500 border-t border-gray-800 mt-16">
          <p>
            © {new Date().getFullYear()} Maryse Katary — Tous droits réservés 💻
          </p>
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
      </div>
    </main>
  );
}

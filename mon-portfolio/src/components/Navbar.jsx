"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 left-0 bg-black/60 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-indigo-400"
        >
          Maryse.dev
        </motion.h1>

        <button onClick={toggleMenu} className="md:hidden">
          ☰
        </button>

        <ul
          className={`md:flex gap-8 font-medium ${
            isOpen ? "block mt-4" : "hidden md:flex"
          }`}
        >
          <li><a href="#home" className="hover:text-indigo-400">Accueil</a></li>
          <li><a href="#about" className="hover:text-indigo-400">À propos</a></li>
          <li><a href="#experience" className="hover:text-indigo-400">Expériences</a></li>
          <li><a href="#projects" className="hover:text-indigo-400">Projets</a></li>
          <li><a href="#cv" className="hover:text-indigo-400">CV</a></li>
          <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
          <li>
            <a
              href="/assistant"
              className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-full font-semibold text-sm transition"
            >
              Maryse.gpt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

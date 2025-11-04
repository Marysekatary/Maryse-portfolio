"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center py-20"
    >
      <h2 className="text-3xl font-bold mb-12 text-indigo-400">Mes projets 🚀</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
        {/* Projet 1 */}
        <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.03] transition flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">
              🌐 Plateforme de centralisation d’informations
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Application web pour la collecte et la centralisation de données
              provenant de plusieurs sources. Développée avec{" "}
              <span className="text-indigo-400">Python</span> et{" "}
              <span className="text-indigo-400">Next.js</span>.
            </p>
            <p className="text-xs text-gray-500 mb-6">#API #Fullstack #Data</p>
          </div>
          <a
            href="https://github.com/ton-projet-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm font-medium transition"
          >
            Voir sur GitHub ↗
          </a>
        </div>

        {/* Projet 2 */}
        <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.03] transition flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">
              💻 Reconstruction d’un terminal UNIX
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Reproduction d’un terminal fonctionnel en{" "}
              <span className="text-indigo-400">C</span> avec gestion des processus, des pipes et des signaux.
            </p>
            <p className="text-xs text-gray-500 mb-6">#C #Systèmes #Algorithmie</p>
          </div>
          <a
            href="https://github.com/ton-projet-2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm font-medium transition"
          >
            Voir sur GitHub ↗
          </a>
        </div>

        {/* Projet 3 */}
        <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.03] transition flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">
              💬 Plateforme de traduction en temps réel
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Projet réalisé en partenariat avec{" "}
              <span className="text-indigo-400">Vueling Airlines</span>.  
              Traduction instantanée via{" "}
              <span className="text-indigo-400">WebSocket</span> et API linguistique.
            </p>
            <p className="text-xs text-gray-500 mb-6">#Python #WebSocket #IA</p>
          </div>
          <a
            href="https://github.com/ton-projet-3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm font-medium transition"
          >
            Voir sur GitHub ↗
          </a>
        </div>

        {/* Projet 4 */}
        <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.03] transition flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">
              🎮 Jeu d’arcade rétro en C++
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Reproduction d’un jeu d’arcade classique en{" "}
              <span className="text-indigo-400">C++</span> avec{" "}
              <span className="text-indigo-400">SDL2</span>. Gestion des collisions, des scores et de la logique du jeu.
            </p>
            <p className="text-xs text-gray-500 mb-6">#C++ #SDL2 #Jeu</p>
          </div>
          <a
            href="https://github.com/ton-projet-4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm font-medium transition"
          >
            Voir sur GitHub ↗
          </a>
        </div>

        {/* Projet 5 */}
        <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.03] transition flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">
              🤖 Maryse.gpt — Assistant personnel
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Chatbot intégré à mon portfolio, conçu avec{" "}
              <span className="text-indigo-400">Next.js</span> et{" "}
              <span className="text-indigo-400">Framer Motion</span>. Interface intuitive et réactive.
            </p>
            <p className="text-xs text-gray-500 mb-6">#Next.js #UI #Chatbot</p>
          </div>
          <a
            href="https://github.com/ton-projet-5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm font-medium transition"
          >
            Voir sur GitHub ↗
          </a>
        </div>

        {/* Projet 6 */}
        <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.03] transition flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">
              🚀 R-Type Clone — Jeu multijoueur en C++
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Reproduction du jeu <span className="text-indigo-400">R-Type</span> en{" "}
              <span className="text-indigo-400">C++</span>, jouable en réseau via{" "}
              <span className="text-indigo-400">UDP</span>.  
              Développement du moteur réseau, synchronisation client-serveur et gestion des entités.
            </p>
            <p className="text-xs text-gray-500 mb-6">#C++ #Réseau #UDP #Jeu</p>
          </div>
          <a
            href="https://github.com/ton-projet-rtype"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-sm font-medium transition"
          >
            Voir sur GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Sender = "bot" | "user";

interface Message {
  sender: Sender;
  text: string;
}

const getBotReply = (msg: string): string => {
  const text = msg.toLowerCase().trim();

  const includesAny = (words: string[]) =>
    words.some((w) => text.includes(w));

  if (
    includesAny(["salut", "bonjour", "bonsoir", "coucou", "hey", "hello"])
  ) {
    return (
      "Salut 👋 Je suis l’assistant de Maryse Katary. " +
      "Je peux te parler de son parcours, de ses projets, de ses expériences pro, ou de ses passions (musique, danse, cinéma). " +
      "Tu veux commencer par quoi ? 🙂"
    );
  }

  if (
    includesAny([
      "qui est maryse",
      "qui es-tu",
      "qui tu es",
      "présente",
      "présentation",
      "parle de maryse",
      "qui est-elle",
    ])
  ) {
    return (
      "Maryse Katary est développeuse, en 3ᵉ année à Epitech Paris (parcours expert en ingénierie logiciel). " +
      "Elle est orientée backend / fullstack, adore structurer des projets propres et adore travailler en équipe 💻✨"
    );
  }

  if (
    includesAny(["stage", "intern", "alternance", "recherche", "disponible"])
  ) {
    return (
      "Maryse est disponible pour un stage de fin d’études de 4 à 6 mois à partir de Mars 2026 🌟 " +
      "Elle vise surtout des postes backend ou fullstack, dans des environnements où elle peut apprendre vite, contribuer à des projets concrets et monter en compétence sur l’architecture et les bonnes pratiques."
    );
  }

  if (
    includesAny([
      "expérience",
      "experiences",
      "travail",
      "jobs",
      "job",
      "professionnel",
      "professionnelles",
      "etn",
      "etna",
      "keynetiks",
      "vico",
    ])
  ) {
    return (
      "Voici un résumé de ses expériences principales 💼\n\n" +
      "• ETNA – Assistante technique : elle accompagne des étudiants (Python, C, Web), les aide à améliorer la qualité de leur code et à résoudre leurs bugs.\n" +
      "• Vico SARL – Développeuse Full Stack : refonte du front en React, amélioration de l’UX, optimisation de la navigation et développement fullstack de nouvelles features.\n" +
      "• Keynetiks – Développeuse logiciel (stage) : conception de modèles de machine learning en Python, optimisation de pipelines de données et déploiement d’outils IA.\n\n" +
      "Si tu veux, je peux te détailler une expérience en particulier 😉"
    );
  }

  if (
    includesAny([
      "tech",
      "stack",
      "technologie",
      "compétence",
      "competence",
      "skills",
      "backend",
      "frontend",
      "langage",
      "langages",
      "framework",
    ])
  ) {
    return (
      "Côté stack technique 💻\n\n" +
      "• Backend : Python (Django), C/C++, Next.js, Nest.js\n" +
      "• Frontend : React, Tailwind CSS\n" +
      "• Bases de données : PostgreSQL, MongoDB\n" +
      "• DevOps & Cloud : Docker, GitHub Actions, AWS, Ansible\n" +
      "• Autres : Assembly, Haskell, API REST, méthodo Agile/Scrum\n\n" +
      "Elle aime particulièrement le backend, les APIs bien pensées et les architectures scalables."
    );
  }

  if (includesAny(["langue", "langues", "anglais", "français", "allemand"])) {
    return (
      "Côté langues 🌍\n\n" +
      "• Français : natif 🇫🇷\n" +
      "• Anglais : niveau C1 🇬🇧\n" +
      "• Allemand : niveau A1 🇩🇪\n\n" +
      "Elle est donc à l’aise dans un environnement international (surtout en anglais)."
    );
  }

  if (includesAny(["musique", "music", "rnb", "r&b", "rap", "lofi", "concentration"])) {
    return (
      "La musique tient une grosse place dans sa vie 🎧\n\n" +
      "• Son genre préféré : le R&B 💜\n" +
      "• Pour coder : beaucoup de musique de concentration (LoFi, chill, ambiant) pour rester focus.\n" +
      "• Et parfois un peu de rap pour l’énergie 🔥\n\n" +
      "En gros : si Maryse code, il y a sûrement un bon son en fond."
    );
  }

  if (includesAny(["danse", "dance", "heels", "afrobeat", "afro", "jazz"])) {
    return (
      "La danse, c’est son moyen de tout lâcher 💃🏾\n\n" +
      "• Elle pratique surtout le heels et l’afrobeat.\n" +
      "• Elle fait aussi un peu de jazz.\n" +
      "• Elle aime travailler l’attitude, la musicalité et la confiance à travers la danse.\n\n" +
      "C’est un équilibre parfait avec son côté très technique en développement ✨"
    );
  }

  if (
    includesAny([
      "cinéma",
      "cinema",
      "film",
      "films",
      "série",
      "series",
      "kdrama",
      "k-drama",
      "marvel",
      "batman",
      "comédie romantique",
      "romantique",
    ])
  ) {
    return (
      "Côté cinéma et séries 🎬\n\n" +
      "• Elle adore les univers Marvel.\n" +
      "• Elle est fan de K-dramas.\n" +
      "• Elle regarde beaucoup de comédies romantiques 💕\n" +
      "• Son super-héros préféré : Batman 🦇\n\n" +
      "Elle aime les histoires qui restent en tête longtemps après le générique."
    );
  }

  if (includesAny(["cv", "curriculum", "resume"])) {
    return (
      "Tu peux consulter son CV complet dans la section “Mon CV” de ce site 📄\n\n" +
      "Il est disponible en Français 🇫🇷 et en Anglais 🇬🇧. " +
      "Tu y trouveras son parcours détaillé, ses expériences, ses compétences techniques et ses langues."
    );
  }

  if (includesAny(["projet", "projects", "project", "portfolio"])) {
    return (
      "Maryse a travaillé sur plusieurs projets techniques 💻\n\n" +
      "• Projets professionnalisants à Epitech (plateforme temps réel, automation type IFTTT, jeu réseau, site de collecte de données scalable).\n" +
      "• Projets web : portfolio, interfaces en React/Next.js, APIs backend.\n" +
      "• Projets IA : modèles de machine learning en Python chez Keynetiks.\n\n" +
      "Tu peux en voir une sélection dans la section “Projets” de ce site 😉"
    );
  }

  if (includesAny(["contact", "contacter", "joindre", "email", "mail"])) {
    return (
      "Pour contacter Maryse 📬\n\n" +
      "• Tu peux utiliser le formulaire de contact en bas de la page.\n" +
      "• Tu peux aussi la retrouver sur LinkedIn et GitHub via les liens dans le footer.\n\n" +
      "Elle sera ravie d’échanger avec toi à propos d’un stage, d’un projet ou d’une collaboration future 🙌"
    );
  }

  return (
    "Je ne suis pas sûr d’avoir bien compris 🤔\n\n" +
    "Je peux t’aider à propos de :\n" +
    "• son parcours / ses expériences (écris par ex. “parle-moi de ses expériences”)\n" +
    "• ses compétences techniques (ex. “c’est quoi sa stack ?”)\n" +
    "• ses passions (musique, danse, cinéma)\n" +
    "• son CV ou son stage\n" +
    "• comment la contacter\n\n" +
    "Pose-moi une question sur un de ces sujets et je te réponds 🙂"
  );
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Salut 👋 Je suis l’assistant de Maryse Katary. Comment puis-je t’aider ?",
    },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen((prev) => !prev);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const botReply = getBotReply(userText);

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userText },
      { sender: "bot", text: botReply },
    ]);

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Bouton flottant */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        className="bg-indigo-500 hover:bg-indigo-600 text-white p-4 rounded-full shadow-lg text-2xl"
      >
        💬
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 bg-gray-900 text-white rounded-2xl shadow-xl border border-gray-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-indigo-600 px-4 py-3 flex justify-between items-center">
              <h3 className="font-semibold">Assistant Maryse 🤖</h3>
              <button
                onClick={toggleChat}
                className="text-white text-xl leading-none"
              >
                ✖
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto max-h-80 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm whitespace-pre-line ${
                      m.sender === "user"
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-700 text-gray-100"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={sendMessage}
              className="flex p-3 border-t border-gray-800"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pose une question sur Maryse..."
                className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="ml-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-3 py-2 text-sm"
              >
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
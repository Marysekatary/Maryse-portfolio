"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Salut 👋 Je suis l’assistant de Maryse Katary. Comment puis-je t’aider ?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { sender: "user", text: input },
      { sender: "bot", text: getBotReply(input) },
    ];

    setMessages(newMessages);
    setInput("");
  };

  const getBotReply = (msg: string) => {
    const text = msg.toLowerCase();

    if (text.includes("bonjour") || text.includes("salut"))
      return "Salut 👋 Ravie de te voir ici ! Je peux te parler de Maryse, de ses projets ou de son CV.";

    if (text.includes("projet"))
      return "Maryse a travaillé sur plusieurs projets web 💻 : un portfolio, une app React et des scripts Python.";

    if (text.includes("cv"))
      return "Tu peux télécharger son CV en Français 🇫🇷 ou en Anglais 🇬🇧 dans la section CV un peu plus haut !";

    if (text.includes("contact"))
      return "Tu peux contacter Maryse via le formulaire de contact tout en bas 📬.";

    return "Je n’ai pas encore compris 🤔, mais je peux te parler de ses projets, de son parcours ou de son CV !";
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
              <button onClick={toggleChat} className="text-white text-xl leading-none">✖</button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto max-h-80">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`mb-3 flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm ${
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
            <form onSubmit={sendMessage} className="flex p-3 border-t border-gray-800">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écris un message..."
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
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AssistantPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center relative px-6 py-10">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-3xl font-medium mb-10 text-gray-200 text-center"
      >
        Hi, I'm <span className="text-indigo-400">Maryse Katary’s</span> assistant 👋
      </motion.h1>

      {/* Chat window */}
      <div className="w-full max-w-2xl bg-[#1a1a1a] rounded-2xl shadow-lg flex flex-col overflow-hidden border border-gray-800">
        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-3 h-[400px] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {messages.length === 0 ? (
            <p className="text-gray-500 text-sm text-center mt-10">
              Ask me anything about Maryse, her projects or her CV 💬
            </p>
          ) : (
            messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800 text-gray-100 px-4 py-2 rounded-lg w-fit max-w-[75%]"
              >
                {msg}
              </motion.div>
            ))
          )}
        </div>

        {/* Input area */}
        <form
          onSubmit={sendMessage}
          className="flex items-center p-4 border-t border-gray-800 bg-[#121212]"
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-[#1f1f1f] text-gray-200 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="ml-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-5 py-3 text-sm transition"
          >
            ➤
          </button>
        </form>
      </div>

      {/* Return to portfolio button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10"
      >
        <Link
          href="/"
          className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-sm md:text-base font-semibold transition"
        >
          ← Retour au portfolio
        </Link>
      </motion.div>

      {/* Footer credit (optionnel) */}
      <p className="text-gray-600 text-xs mt-8">
        © {new Date().getFullYear()} Maryse Katary — Assistant IA 💻
      </p>
    </main>
  );
}

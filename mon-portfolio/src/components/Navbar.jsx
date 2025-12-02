"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [lang, setLang] = useState("fr");

  // Optionnel : garder le choix en localStorage
  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    // Ici plus tard tu pourras brancher ton système de langue
    // ex: changer un contexte, une route, etc.
  }, [lang]);

  return (
    <header className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-1 rounded-full border border-white/25 bg-black/40 backdrop-blur-md px-2 py-1 text-xs shadow-lg shadow-black/40">
        <button
          onClick={() => setLang("fr")}
          className={`px-3 py-1 rounded-full transition ${
            lang === "fr"
              ? "bg-white text-black font-semibold"
              : "text-gray-300 hover:text-white"
          }`}
        >
          FR
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 rounded-full transition ${
            lang === "en"
              ? "bg-white text-black font-semibold"
              : "text-gray-300 hover:text-white"
          }`}
        >
          EN
        </button>
      </div>
    </header>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-between min-h-[110vh] px-6 md:px-16 pt-12 pb-10 gap-12"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full gap-12">
        {/* Colonne texte */}
        <div className="md:w-1/2 max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-gray-300 mb-5"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            En recherche de stage fin d&apos;études — Mars 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
          >
            Je suis{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
              Maryse Katary
            </span>
            .
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-base md:text-lg mb-6 text-gray-200"
          >
            Étudiante en 3ᵉ année à{" "}
            <span className="text-indigo-300 font-semibold">
              Epitech Paris
            </span>{" "}
            et passionnée par le{" "}
            <span className="text-indigo-300 font-semibold">
              développement backend
            </span>{" "}
            &amp; la résolution de problèmes complexes.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-gray-400 mb-6 max-w-lg mx-auto md:mx-0"
          >
            Je crée des services{" "}
            <span className="text-gray-100">stables, performants</span> et
            faciles à faire évoluer. J&apos;adore décortiquer les problèmes,
            travailler en équipe et pousser la qualité du code le plus loin
            possible.
          </motion.p>

          {/* Tags flottants avec micro-animations */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-3 mb-8"
          >
            {["Backend", "APIs", "Problem Solving", "Team Player", "Clean Code"].map(
              (tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: [4, 0, 4], opacity: 1 }}
                  transition={{
                    delay: 1 + index * 0.1,
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="px-3 py-1 rounded-full text-xs md:text-sm border border-white/15 bg-white/5 backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              )
            )}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-7 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-sm md:text-base font-semibold transition shadow-lg shadow-indigo-500/30"
            >
              Voir mes projets
            </a>

            <a
              href="#contact"
              className="text-sm md:text-base text-gray-300 hover:text-white underline-offset-4 hover:underline"
            >
              Me contacter
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-6 text-xs md:text-sm text-gray-500"
          >
            Backend first · Qualité du code · Documentation sérieuse · Bonne
            humeur garantie ✨
          </motion.p>
        </div>

        {/* Colonne photo / orbe néon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glow animé derrière */}
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-sky-500 blur-3xl opacity-70"
              animate={{ scale: [1, 1.06, 1], rotate: [0, 4, -3, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Orbe principale */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_rgba(129,140,248,0.35)] z-20">
              <Image
                src="/images/maryse1.jpg"
                alt="Maryse Katary"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Badge focus déplacé + plus petit pour ne plus cacher le visage */}
            <motion.div
              className="absolute -right-4 bottom-0 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-2 text-[10px] md:text-xs text-left shadow-lg z-30"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="uppercase tracking-[0.16em] text-gray-300 mb-1 text-[9px]">
                Focus
              </p>
              <p className="font-semibold text-white">
                Backend • APIs • Architecture
              </p>
            </motion.div>

            {/* Orbite Epitech repositionnée pour ne pas gêner */}
            <motion.div
              className="absolute -left-2 top-3 w-20 h-20 md:w-24 md:h-24 rounded-full border border-indigo-400/60 bg-indigo-500/10 backdrop-blur-md flex flex-col items-center justify-center text-[9px] md:text-[10px] text-indigo-100 z-10"
              animate={{ x: [0, 6, 0], y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-semibold">Epitech</span>
              <span>3ᵉ année</span>
            </motion.div>

            {/* Petit label sous la photo */}
            <motion.div
              className="absolute left-1/2 -bottom-10 -translate-x-1/2 text-center text-xs text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <p>Développeuse backend en devenir ✨</p>
              <p className="text-[11px] text-gray-500">
                Typescript · Node.js · Architectures modulaires
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bandeau "highlights" en bas du hero pour étirer la page */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="w-full max-w-5xl mt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 bg-white/5 border border-white/10 rounded-2xl px-5 py-6 md:px-8 md:py-7 backdrop-blur-xl">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
              Ce que je cherche
            </p>
            <p className="text-sm md:text-base text-gray-100">
              Stage backend / fullstack (4–6 mois) à partir de{" "}
              <span className="text-indigo-300 font-semibold">Mars 2026</span>.
            </p>
          </div>
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
              Ce que j&apos;apporte
            </p>
            <p className="text-sm md:text-base text-gray-100">
              Rigueur,{" "}
              <span className="text-fuchsia-300 font-semibold">
                esprit d&apos;équipe
              </span>{" "}
              et envie d&apos;apprendre en continu.
            </p>
          </div>
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
              Où tu peux me voir
            </p>
            <p className="text-sm md:text-base text-gray-100">
              <a
                href="https://github.com/Marysekatary"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-indigo-400/60 hover:text-indigo-300"
              >
                GitHub
              </a>{" "}
              &amp;{" "}
              <a
                href="https://www.linkedin.com/in/maryse-katary-702324250/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-indigo-400/60 hover:text-indigo-300"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        {/* Hint scroll */}
        <motion.div
          className="mt-6 flex flex-col items-center gap-2 text-xs text-gray-500"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Scroll pour explorer mon univers</span>
          <span className="h-7 w-[1px] bg-gradient-to-b from-gray-500/80 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

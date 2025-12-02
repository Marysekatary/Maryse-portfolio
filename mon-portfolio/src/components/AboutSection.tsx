"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type PassionId = "music" | "dance" | "cinema" | null;

const passions = [
  {
    id: "music" as const,
    label: "Musique 🎧",
    description:
      "La musique m’aide à me concentrer, à me motiver et parfois à m’évader. Elle rythme mes journées et stimule ma créativité.",
    extra: (
      <ul className="text-sm text-indigo-300 mt-3 list-disc list-inside">
        <li>Playlist focus : LoFi, Afro, RnB</li>
        <li>Je code rarement sans un bon son 🎶</li>
      </ul>
    ),
  },
  {
    id: "dance" as const,
    label: "Danse 💃🏾",
    description:
      "La danse, c’est ma façon de tout lâcher : énergie, émotions, confiance. C’est là que je me dépasse le plus.",
    extra: (
      <p className="text-sm text-pink-300 mt-3">
        Styles : Afro / Urbain / Moderne — j’adore apprendre de nouvelles
        chorégraphies et ressentir la musique dans chaque mouvement 🫶
      </p>
    ),
  },
  {
    id: "cinema" as const,
    label: "Cinéma 🎬",
    description:
      "Le cinéma me fait voyager, réfléchir, rire, pleurer. J’aime les histoires qui restent en tête longtemps après le générique.",
    extra: (
      <ul className="text-sm text-indigo-300 mt-3 list-disc list-inside">
        <li>Genres : Sci-Fi, drame, animation</li>
        <li>J’adore analyser les personnages et les univers 🌌</li>
      </ul>
    ),
  },
];

const bgByPassion: Record<Exclude<PassionId, null> | "default", string> = {
  default:
    "radial-gradient(circle at top, rgba(129, 140, 248,0.20), #020617)",
  music:
    "radial-gradient(circle at top, rgba(96,165,250,0.25), #020617)",
  dance:
    "radial-gradient(circle at center, rgba(236,72,153,0.40), #020617)",
  cinema:
    "radial-gradient(circle at bottom, rgba(248,250,252,0.15), #020617)",
};

export default function AboutSection() {
  const [activePassion, setActivePassion] = useState<PassionId>("music");

  const current = passions.find((p) => p.id === activePassion) ?? passions[0];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center gap-16 px-6 md:px-20 py-24 overflow-hidden"
    >
      {/* Fond dynamique selon la passion */}
      <motion.div
        className="absolute inset-0 -z-20"
        animate={{
          background: bgByPassion[activePassion ?? "default"],
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Grille subtile */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.35)_1px,transparent_0)] [background-size:22px_22px]" />
      </div>

      {/* Orbes lumineux comme le Hero */}
      <motion.div
        className="pointer-events-none absolute -top-20 left-[-40px] w-52 h-52 rounded-full bg-indigo-500/30 blur-3xl -z-10"
        animate={{ x: [0, 20, 0], y: [0, 10, 0], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[-40px] right-[-60px] w-64 h-64 rounded-full bg-fuchsia-500/30 blur-3xl -z-10"
        animate={{ x: [0, -15, 0], y: [0, -8, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-14 lg:gap-20 w-full max-w-6xl">
        {/* Carte image + badges */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative w-72 h-72 md:w-80 md:h-80"
        >
          {/* Halo derrière la carte */}
          <motion.div
            className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-sky-500 blur-3xl opacity-80"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 4, -3, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/15 bg-gray-900/70 backdrop-blur-xl shadow-[0_0_40px_rgba(15,23,42,0.9)]">
            <Image
              src="/images/maryse2.jpg"
              alt="Maryse"
              fill
              className="object-cover"
            />
          </div>

          {/* Badge année */}
          <motion.div
            className="absolute -left-4 top-6 rounded-2xl bg-black/60 border border-white/15 px-3 py-2 text-xs text-gray-100 backdrop-blur-md shadow-lg"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
              Parcours
            </p>
            <p className="font-semibold">3ᵉ année — Epitech Paris</p>
          </motion.div>

          {/* Badge personnalité */}
          <motion.div
            className="absolute -right-3 bottom-4 rounded-2xl bg-white/10 border border-white/20 px-4 py-2 text-xs text-left backdrop-blur-md shadow-lg max-w-[180px]"
            animate={{ x: [0, 4, 0], y: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="font-semibold text-white">
              Déterminée, curieuse, impliquée.
            </p>
            <p className="text-[11px] text-gray-200/80">
              Jamais loin d&apos;un challenge technique ou d&apos;une bonne playlist.
            </p>
          </motion.div>
        </motion.div>

        {/* Texte + infos + passions */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-indigo-200">
            À propos de moi ✨
          </h2>

          <p className="text-gray-200 leading-relaxed mb-3">
            Je suis une développeuse{" "}
            <span className="font-semibold text-indigo-300">passionnée</span>,{" "}
            <span className="font-semibold text-indigo-300">déterminée</span> et
            parfois un peu{" "}
            <span className="font-semibold text-indigo-300">perfectionniste</span>.
            J’aime comprendre en profondeur ce que je fais, aller au bout des
            choses et livrer des projets propres, stables et bien pensés.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Pour moi, le code c&apos;est autant{" "}
            <span className="text-indigo-200 font-medium">de la logique</span>{" "}
            que de la{" "}
            <span className="text-fuchsia-200 font-medium">créativité</span> :
            trouver la bonne architecture, écrire un code lisible, collaborer
            avec les autres… tout ça me motive au quotidien.
          </p>

          {/* Cartes info rapides */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">
                Ce que j&apos;aime dans le code
              </p>
              <p className="text-gray-100">
                Résoudre des problèmes concrets, concevoir des{" "}
                <span className="text-indigo-300 font-medium">
                  APIs propres
                </span>{" "}
                et garder une vision long terme.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">
                Ma façon de travailler
              </p>
              <p className="text-gray-100">
                Communication claire, documentation,{" "}
                <span className="text-fuchsia-300 font-medium">esprit d&apos;équipe</span>{" "}
                et envie de progresser tous les jours.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">
                Actuellement
              </p>
              <p className="text-gray-100">
                À la recherche d&apos;un{" "}
                <span className="text-indigo-300 font-medium">
                  stage backend / fullstack
                </span>{" "}
                (4–6 mois) dès Mars 2026.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-1">
                Ce qu&apos;on dit de moi
              </p>
              <p className="text-gray-100">
                Sérieuse, impliquée, mais toujours avec{" "}
                <span className="text-fuchsia-300 font-medium">
                  de la bonne humeur
                </span>{" "}
                dans l&apos;équipe ✨
              </p>
            </div>
          </motion.div>

          {/* Passions */}
          <div className="mb-4">
            <p className="text-gray-300 text-sm mb-3">
              En dehors du code, je me retrouve dans trois univers qui me
              ressemblent beaucoup :{" "}
              <span className="text-indigo-300 font-medium">la musique</span>,{" "}
              <span className="text-pink-300 font-medium">la danse</span> et{" "}
              <span className="text-indigo-300 font-medium">le cinéma</span>.
              Clique sur une passion pour plonger un peu plus dans mon univers 💜
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {passions.map((p) => (
                <motion.button
                  key={p.id}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setActivePassion(p.id)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg transition border
                    ${
                      activePassion === p.id
                        ? p.id === "dance"
                          ? "bg-pink-500 text-white border-pink-300"
                          : "bg-indigo-500 text-white border-indigo-300"
                        : p.id === "dance"
                        ? "bg-pink-500/20 text-pink-200 border-pink-400/40 hover:bg-pink-500/40"
                        : "bg-indigo-500/15 text-indigo-200 border-indigo-400/40 hover:bg-indigo-500/35"
                    }`}
                >
                  {p.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Carte passion dynamique */}
          <AnimatePresence mode="wait">
            {current && (
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-5 py-4 text-left shadow-xl"
              >
                <h3 className="text-sm font-semibold text-indigo-200 mb-2">
                  {current.label}
                </h3>
                <p className="text-sm text-gray-100">{current.description}</p>
                {current.extra}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

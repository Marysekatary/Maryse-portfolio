"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "ETNA",
    title: "Assistante technique",
    period: "Oct. 2025 — Aujourd’hui",
    location: "Paris · ETNA",
    description:
      "Accompagnement technique d’étudiants (Python, C, Web) et amélioration de la qualité de leurs projets.",
    highlights: [
      "Suivi de projets techniques en développement web et algorithmie.",
      "Mise en place de bonnes pratiques de développement (qualité, lisibilité, structure).",
      "Support en debugging et optimisation des performances des projets.",
    ],
    skills: ["Python", "C", "Web", "Pédagogie", "Debugging", "Bonnes pratiques"],
  },
  {
    company: "Vico SARL",
    title: "Développeuse Full Stack (Temps partiel)",
    period: "Oct. 2025 — Aujourd’hui",
    location: "Remote · Vico SARL",
    description:
      "Participation à la modernisation complète d’un site web et au développement full-stack de nouvelles fonctionnalités.",
    highlights: [
      "Refonte du front en React pour moderniser l’interface et améliorer l’expérience utilisateur.",
      "Optimisation de la navigation et des performances pour un parcours client plus fluide.",
      "Contribution au développement full-stack et à l’intégration continue des nouvelles features.",
    ],
    skills: ["React", "Full Stack", "UX", "Optimisation", "CI/CD", "JavaScript"],
  },
  {
    company: "Keynetiks",
    title: "Développeuse logiciel (Stage)",
    period: "Jul. 2024 — Dec. 2024",
    location: "Keynetiks",
    description:
      "Conception et implémentation de modèles de machine learning pour l’analyse automatisée de données métier.",
    highlights: [
      "Création de modèles d’IA en Python pour analyser et exploiter des données métier.",
      "Optimisation des pipelines de données avec une réduction d’environ 40% du temps de traitement.",
      "Déploiement et industrialisation d’outils IA améliorant la performance et la fiabilité de processus internes.",
    ],
    skills: ["Python", "Machine Learning", "Data Pipelines", "IA", "Performance"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex justify-center px-6 md:px-20 py-24 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 -z-20"
        initial={false}
        animate={{
          background:
            "radial-gradient(circle at top, rgba(129,140,248,0.18), #020617)",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.35)_1px,transparent_0)] [background-size:22px_22px]" />
      </div>
      <motion.div
        className="pointer-events-none absolute -top-24 right-[-40px] w-56 h-56 rounded-full bg-indigo-500/30 blur-3xl -z-10"
        animate={{ x: [0, -18, 0], y: [0, 10, 0], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[-40px] left-[-40px] w-64 h-64 rounded-full bg-fuchsia-500/25 blur-3xl -z-10"
        animate={{ x: [0, 16, 0], y: [0, -10, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-indigo-200 text-center"
        >
          Expériences professionnelles 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-sm md:text-base text-gray-300 text-center max-w-2xl mx-auto"
        >
          Des expériences où je combine{" "}
          <span className="text-indigo-200 font-medium">technique</span>,{" "}
          <span className="text-indigo-200 font-medium">rigueur</span> et{" "}
          <span className="text-fuchsia-200 font-medium">travail d&apos;équipe</span>,
          pour faire grandir des projets… et moi avec.
        </motion.p>

        {/* Timeline */}
        <div className="mt-12 md:mt-14 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex gap-6 md:gap-10"
            >
              {/* Colonne timeline */}
              <div className="flex flex-col items-center">
                <div className="mt-1 h-full w-px bg-gradient-to-b from-indigo-400/70 via-indigo-500/25 to-transparent hidden md:block" />
                <div className="md:absolute md:-left-3 md:top-1">
                  <div className="h-4 w-4 rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.8)]" />
                </div>
              </div>

              {/* Carte expérience */}
              <div className="flex-1">
                <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-5 py-5 md:px-6 md:py-6 shadow-xl hover:shadow-2xl hover:border-indigo-400/60 transition">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4 mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-indigo-100">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-indigo-300">{exp.company}</p>
                    </div>
                    <p className="text-xs md:text-sm text-gray-400">
                      {exp.period}
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-gray-400 mb-2">
                    {exp.location}
                  </p>

                  <p className="text-gray-100 text-sm md:text-base mb-3">
                    {exp.description}
                  </p>

                  <ul className="list-disc list-inside text-sm text-gray-200 space-y-1.5 mb-4">
                    {exp.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] md:text-xs bg-indigo-500/15 text-indigo-200 px-3 py-1 rounded-full border border-indigo-400/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
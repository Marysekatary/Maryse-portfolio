"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "👩🏽‍🏫 Asset – Encadrante technique",
      company: "ETNA, Paris",
      period: "2025 - Aujourd’hui",
      description:
        "Encadrement d’étudiants en développement web et algorithmie. Suivi de projets techniques, accompagnement dans la résolution de problèmes et amélioration de la qualité du code.",
      skills: ["Pédagogie", "Algorithmie", "Travail d’équipe", "Git"],
    },
    {
      title: "🤖 Stagiaire en Intelligence Artificielle",
      company: "Keynetiks",
      period: "2024 (6 mois)",
      description:
        "Participation à la conception de modèles d’IA pour la détection de mouvements et l’analyse de signaux. Développement d’outils d’expérimentation et automatisation de pipelines de données.",
      skills: ["Python", "TensorFlow", "Data Processing", "Machine Learning"],
    },
    {
      title: "💻 Stagiaire Développeuse Web",
      company: "Vico SARL",
      period: "2025 (6 mois)",
      description:
        "Développement d’un site vitrine et d’un tableau de bord interne. Intégration front-end, gestion de base de données et optimisation de l’expérience utilisateur.",
      skills: ["Next.js", "Tailwind CSS", "JavaScript", "React", "SQL"],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gray-900 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-12 text-indigo-400"
      >
        Expériences professionnelles 💼
      </motion.h2>

      <div className="max-w-4xl w-full space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 text-left shadow-md hover:shadow-lg hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-semibold text-indigo-400 mb-1">
              {exp.title}
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              {exp.company} — <span className="italic">{exp.period}</span>
            </p>
            <p className="text-gray-300 mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

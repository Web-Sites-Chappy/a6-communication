"use client";

import { motion } from "framer-motion";

const targets = [
  {
    icon: "⬡",
    title: "Artisans du Bâtiment",
    desc: "Maçons, charpentiers, menuisiers, plombiers — tous ceux qui construisent et rénovent le patrimoine bâti.",
    color: "var(--terra)",
  },
  {
    icon: "⬡",
    title: "Architectes",
    desc: "Cabinets d'architecture, ordres régionaux, associations professionnelles du secteur.",
    color: "var(--sea)",
  },
  {
    icon: "⬡",
    title: "Communes & Mairies",
    desc: "Particulièrement les communes de moins de 1 000 habitants, les intercommunalités et collectivités.",
    color: "var(--olive)",
  },
  {
    icon: "⬡",
    title: "Patrimoine & Culture",
    desc: "Fondations du patrimoine, associations culturelles, institutions, musées et lieux de mémoire.",
    color: "var(--ochre)",
  },
  {
    icon: "⬡",
    title: "Monde Associatif",
    desc: "Associations politiques, sportives, sociales — partout où la communication crée du lien et de la mobilisation.",
    color: "var(--clay)",
  },
  {
    icon: "⬡",
    title: "Domaines Viticoles",
    desc: "Vignerons, coopératives, syndicats d'appellation — la communication au service du terroir et de la filière.",
    color: "var(--terra)",
  },
];

export default function TargetsSection() {
  return (
    <section id="targets" className="py-24 lg:py-32" style={{ backgroundColor: "var(--off-white)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "var(--terra)", fontFamily: "var(--font-dm-sans)" }}
            >
              Nos cibles
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)",
                fontWeight: 300,
                color: "var(--dark)",
              }}
            >
              Ceux pour qui
              <br />
              <em style={{ color: "var(--terra)" }}>nous œuvrons</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="self-end text-base leading-relaxed"
            style={{ color: "rgba(28,20,16,0.65)", fontFamily: "var(--font-dm-sans)" }}
          >
            A6 travaille au cœur des secteurs qui font vivre les territoires — bâtisseurs, gardiens
            du patrimoine, vignerons, élus locaux. Des acteurs essentiels qui méritent une communication
            à la hauteur de leur engagement.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targets.map((target, i) => (
            <motion.div
              key={target.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="p-8 group transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--sand)",
                borderRadius: "12px",
                borderLeft: `3px solid ${target.color}`,
                boxShadow: "0px 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="w-8 h-8 mb-5 flex items-center justify-center text-xl"
                style={{ color: target.color }}
              >
                ✦
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--dark)",
                }}
              >
                {target.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(28,20,16,0.65)", fontFamily: "var(--font-dm-sans)" }}
              >
                {target.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-36" style={{ backgroundColor: "var(--off-white)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: "var(--terra)", fontFamily: "var(--font-dm-sans)" }}
            >
              Qui sommes-nous
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="leading-tight mb-8"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)",
                fontWeight: 300,
                color: "var(--dark)",
              }}
            >
              Deux esprits,
              <br />
              <em style={{ color: "var(--terra)" }}>une vision</em>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 mb-10"
            >
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(28,20,16,0.7)", fontFamily: "var(--font-dm-sans)" }}
              >
                A6 Communication &amp; Événementiel se targue d&apos;être dirigée par deux associés
                complémentaires et atypiques — une association née non pas du hasard, mais du goût
                et de la volonté mutuels de participer à la mutation de la communication et de
                l&apos;événementiel.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(28,20,16,0.7)", fontFamily: "var(--font-dm-sans)" }}
              >
                Là où l&apos;image et son histoire s&apos;identifient dans les 6A, là où chaque projet
                devient une alchimie entre créativité numérique et sensibilité poétique.
              </p>
            </motion.div>

            {/* Manuel & Eric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  name: "Manuel",
                  role: "L'esprit numérique",
                  desc: "Pas encore la trentaine, incontournable maîtrise des outils digitaux et des nouvelles formes de communication.",
                  color: "var(--terra)",
                },
                {
                  name: "Eric",
                  role: "L'esprit poétique",
                  desc: "La cinquantaine passée, indéfectible sens du récit, de l'image et de ce qui fait vibrer un événement.",
                  color: "var(--sea)",
                },
              ].map((person) => (
                <div
                  key={person.name}
                  className="p-6"
                  style={{
                    backgroundColor: "var(--sand)",
                    borderRadius: "8px",
                    borderTop: `3px solid ${person.color}`,
                  }}
                >
                  <p
                    className="font-semibold mb-1"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.4rem", color: "var(--dark)" }}
                  >
                    {person.name}
                  </p>
                  <p
                    className="text-xs tracking-widest uppercase mb-3"
                    style={{ color: person.color, fontFamily: "var(--font-dm-sans)" }}
                  >
                    {person.role}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(28,20,16,0.65)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {person.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: decorative block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div
              className="relative"
              style={{ height: "560px" }}
            >
              {/* Big stat block */}
              <div
                className="absolute inset-0 flex flex-col justify-center items-center"
                style={{
                  backgroundColor: "var(--dark)",
                  borderRadius: "12px",
                }}
              >
                <p
                  className="text-center"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "9rem",
                    fontWeight: 300,
                    color: "var(--terra)",
                    lineHeight: 1,
                  }}
                >
                  6
                </p>
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "rgba(237,224,196,0.5)", fontFamily: "var(--font-dm-sans)" }}
                >
                  Valeurs fondatrices
                </p>
              </div>

              {/* Floating accent cards */}
              <div
                className="absolute -top-6 -right-6 px-5 py-4"
                style={{
                  backgroundColor: "var(--terra)",
                  borderRadius: "8px",
                }}
              >
                <p className="text-white text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Communication
                </p>
              </div>
              <div
                className="absolute -bottom-6 -left-6 px-5 py-4"
                style={{
                  backgroundColor: "var(--sea)",
                  borderRadius: "8px",
                }}
              >
                <p className="text-white text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Événementiel
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

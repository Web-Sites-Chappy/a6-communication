"use client";

import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const values = [
  {
    letter: "A",
    name: "Alchimie",
    color: "var(--terra)",
    text: "Les regards ont un langage que les mots ne peuvent pas capturer. Quand ils coulent naturellement, ils créent une Alchimie intellectuelle, émotionnelle et créatrice qui va bien au-delà des apparences.",
  },
  {
    letter: "A",
    name: "Audace",
    color: "var(--sea)",
    text: "Le courage de croire en ce qui n'est pas encore visible. L'Audace propulse à l'évidence d'être soi-même, dans ses doutes, ses décisions, sa sensibilité et permet de sortir de sa zone de confort.",
  },
  {
    letter: "A",
    name: "Acceptation",
    color: "var(--olive)",
    text: "L'Acceptation ne se commande pas, elle ne se force pas. Conscientiser et accueillir qu'on est dans la résistance libère, allège et nous remet en contact avec nos ressources et notre pouvoir d'action.",
  },
  {
    letter: "A",
    name: "Agilité",
    color: "var(--ochre)",
    text: "Perçue comme un accélérateur d'innovation, l'Agilité est une évidence de nos jours. Elle doit être un facteur proactif, collaboratif et fondamentalement numérique pour mener la transition culturelle.",
  },
  {
    letter: "A",
    name: "Authenticité",
    color: "var(--clay)",
    text: "Communiquer avec honnêteté et ouverture pour accepter sa vulnérabilité procure une transparence constructive. Cette Authenticité génère l'efficacité et crée des relations humaines et durables.",
  },
  {
    letter: "A",
    name: "Assurance",
    color: "var(--terra)",
    text: "Au service de l'humain avant tout, l'Assurance rapproche la théorie de la pratique. En gardant un œil dans le réel et un autre dans le numérique — un outil digital n'est qu'un outil, ce qui compte c'est l'usage.",
  },
];

export default function ValuesSection() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <section id="values" className="py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "var(--dark)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--terra)", fontFamily: "var(--font-dm-sans)" }}
        >
          Notre ADN
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white leading-tight"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            fontWeight: 300,
          }}
        >
          Les 6 piliers
          <br />
          <em>qui nous définissent</em>
        </motion.h2>
      </div>

      {/* Embla carousel */}
      <div className="embla pl-6 lg:pl-10" ref={emblaRef}>
        <div className="embla__container" style={{ gap: "16px" }}>
          {values.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="embla__slide"
            >
              <ValueCard value={v} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  value,
}: {
  value: (typeof values)[0];
}) {
  return (
    <div
      className="relative flex flex-col justify-between p-8 group cursor-default transition-transform duration-300 hover:-translate-y-2"
      style={{
        width: "300px",
        height: "380px",
        backgroundColor: "#251A15",
        borderRadius: "12px",
        border: "1px solid rgba(237,224,196,0.06)",
        boxShadow: "0px 4px 24px rgba(0,0,0,0.3)",
      }}
    >
      {/* Big letter background */}
      <div
        className="absolute top-4 right-6 text-8xl font-bold leading-none select-none opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.12]"
        style={{
          fontFamily: "var(--font-cormorant)",
          color: value.color,
        }}
      >
        {value.letter}
      </div>

      {/* Color accent top bar */}
      <div
        className="w-10 h-px mb-8 transition-all duration-300 group-hover:w-16"
        style={{ backgroundColor: value.color }}
      />

      <div>
        <p
          className="text-xs tracking-widest uppercase mb-3"
          style={{
            color: value.color,
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          {value.name}
        </p>
        <h3
          className="text-white text-3xl mb-5 leading-tight"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
        >
          {value.name}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{
            color: "rgba(237,224,196,0.55)",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          {value.text}
        </p>
      </div>
    </div>
  );
}

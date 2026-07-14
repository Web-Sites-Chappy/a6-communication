"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Congrès de l'Ordre des Architectes",
    subtitle: "Occitanie — 2025",
    category: "Événementiel",
    color: "var(--terra)",
    img: "/photos/DSC_0802.jpg",
  },
  {
    id: 2,
    title: "Journées du Patrimoine",
    subtitle: "Sud de France — 2025",
    category: "Communication",
    color: "var(--sea)",
    img: "/photos/DSC_0836.jpg",
  },
  {
    id: 3,
    title: "Forum des Artisans du Bâtiment",
    subtitle: "Languedoc — 2024",
    category: "Événementiel",
    color: "var(--olive)",
    img: "/photos/DSC_0855.jpg",
  },
  {
    id: 4,
    title: "Conférence Domaines Viticoles",
    subtitle: "Saint-Drézéry — 2024",
    category: "Communication",
    color: "var(--ochre)",
    img: "/photos/DSC_1019.jpg",
  },
  {
    id: 5,
    title: "Assemblée des Associations Culturelles",
    subtitle: "Occitanie — 2024",
    category: "Événementiel",
    color: "var(--clay)",
    img: "/photos/DSC_1091.jpg",
  },
];

export default function ProjectsCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { align: "start", dragFree: true, containScroll: "trimSnaps" },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  return (
    <section id="projects" className="py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "var(--sand)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--terra)", fontFamily: "var(--font-dm-sans)" }}
        >
          Nos réalisations
        </motion.p>
        <div className="flex items-end justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 300,
              color: "var(--dark)",
            }}
          >
            Événements
            <br />
            <em style={{ color: "var(--clay)" }}>qui marquent</em>
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            href="#contact"
            className="hidden lg:flex items-center gap-2 text-xs tracking-widest uppercase pb-2 transition-opacity hover:opacity-60"
            style={{ color: "var(--terra)", fontFamily: "var(--font-dm-sans)", borderBottom: "1px solid var(--terra)" }}
          >
            Voir tout
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </div>
      </div>

      {/* Cards carousel */}
      <div className="embla pl-6 lg:pl-10" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="embla__slide"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      className="group relative overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-2"
      style={{
        width: "300px",
        height: "400px",
        borderRadius: "12px",
        backgroundColor: "#D4C4A8",
        boxShadow: "0px 2px 12px rgba(0,0,0,0.12)",
      }}
    >
      {/* Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.img}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          // Fallback gradient if image not found
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      {/* Fallback gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${project.color}40 0%, rgba(28,20,16,0.3) 100%)`,
        }}
      />

      {/* Overlay gradient bottom */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(28,20,16,0.9) 0%, rgba(28,20,16,0.2) 50%, transparent 100%)",
        }}
      />

      {/* Category badge */}
      <div className="absolute top-5 left-5">
        <span
          className="px-3 py-1 text-white text-xs tracking-widest uppercase"
          style={{
            backgroundColor: project.color,
            borderRadius: "4px",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Content bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p
          className="text-xs tracking-widest uppercase mb-2"
          style={{ color: "rgba(237,224,196,0.6)", fontFamily: "var(--font-dm-sans)" }}
        >
          {project.subtitle}
        </p>
        <h3
          className="text-white leading-tight"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1.4rem",
            fontWeight: 400,
          }}
        >
          {project.title}
        </h3>

        {/* Arrow on hover */}
        <div
          className="mt-4 flex items-center gap-2 text-xs tracking-widest uppercase transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          style={{ color: project.color, fontFamily: "var(--font-dm-sans)" }}
        >
          Voir le projet
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

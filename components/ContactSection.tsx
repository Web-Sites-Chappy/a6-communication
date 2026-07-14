"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32" style={{ backgroundColor: "var(--dark)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: "var(--terra)", fontFamily: "var(--font-dm-sans)" }}
            >
              Contact
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white leading-tight mb-8"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                fontWeight: 300,
              }}
            >
              Parlons de
              <br />
              <em style={{ color: "var(--terra)" }}>votre projet</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base leading-relaxed mb-10"
              style={{ color: "rgba(237,224,196,0.65)", fontFamily: "var(--font-dm-sans)" }}
            >
              Vous avez un projet de communication ou d&apos;événementiel ? Une question sur nos services ?
              Manuel et Eric sont à votre écoute pour construire ensemble quelque chose qui vous ressemble.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {[
                { label: "Email", value: "contact@a6communication.fr" },
                { label: "Région", value: "Occitanie, France" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span
                    className="text-xs tracking-widest uppercase w-16"
                    style={{ color: "rgba(237,224,196,0.4)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "var(--sand)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              {[
                { label: "Votre nom", type: "text", name: "name", placeholder: "Manuel Dupont" },
                { label: "Email", type: "email", name: "email", placeholder: "contact@exemple.fr" },
                { label: "Organisation", type: "text", name: "org", placeholder: "Mairie de Saint-Drézéry" },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color: "rgba(237,224,196,0.5)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(237,224,196,0.06)",
                      border: "1px solid rgba(237,224,196,0.12)",
                      borderRadius: "6px",
                      color: "var(--sand)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "var(--terra)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "rgba(237,224,196,0.12)";
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-xs tracking-widest uppercase mb-2"
                  style={{ color: "rgba(237,224,196,0.5)", fontFamily: "var(--font-dm-sans)" }}
                >
                  Votre message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Décrivez votre projet..."
                  className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    backgroundColor: "rgba(237,224,196,0.06)",
                    border: "1px solid rgba(237,224,196,0.12)",
                    borderRadius: "6px",
                    color: "var(--sand)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLTextAreaElement).style.borderColor = "var(--terra)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLTextAreaElement).style.borderColor = "rgba(237,224,196,0.12)";
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-sm tracking-widest uppercase text-white transition-all duration-300 hover:opacity-80"
                style={{
                  backgroundColor: "var(--terra)",
                  borderRadius: "6px",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications, type Certification } from '../data/portfolioData';

const categories: ('All' | Certification['category'])[] = [
  'All',
  'Web Development',
  'Artificial Intelligence',
  'Data Analytics',
  'Power BI',
  'LLMs',
  'Security',
];

export const CertificationsSection: React.FC = () => {
  const [active, setActive] = useState<'All' | Certification['category']>('All');

  const filtered = useMemo(
    () => (active === 'All' ? certifications : certifications.filter((c) => c.category === active)),
    [active]
  );

  return (
    <section
      id="certifications"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-4 pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            05 / CERTIFICATIONS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              CREDENTIALS &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              PROGRAMS.
            </span>
          </h2>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-3.5 py-2 text-[10px] font-medium tracking-[0.14em] uppercase rounded-sm border transition-all duration-300 ${
                  active === c
                    ? 'border-[#D4AF37] bg-[#D4AF37] text-black'
                    : 'border-[#8C6D4F]/40 bg-[#16120E] text-[#C4B5A5] hover:border-[#D4AF37]/60 hover:text-white'
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((cert) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="relative p-6 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/85 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/70 group flex flex-col"
              >
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors" />

                <span className="text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] mb-3">{cert.category}</span>

                <h3 className="text-lg text-white font-medium mb-1.5 leading-snug group-hover:text-[#F7E7C4] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {cert.title}
                </h3>

                <span className="text-[11.5px] text-[#A8988B] font-light block mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {cert.organization}
                </span>

                {cert.dateRange && <span className="text-[10.5px] font-mono text-[#8C6D4F] block mb-2">{cert.dateRange}</span>}
                {cert.refId && <span className="text-[10px] font-mono text-[#6B5A48] block mb-4">{cert.refId}</span>}

                <button
                  className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#8C6D4F]/40 hover:border-[#D4AF37] text-[#BFA895] hover:text-[#F7E7C4] text-[10px] font-medium tracking-[0.18em] uppercase transition-all duration-300"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  title="Certificate image not yet uploaded"
                >
                  View Certificate
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;

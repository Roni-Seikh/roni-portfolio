import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { profile } from '../data/portfolioData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CERTIFICATIONS', href: '#certifications' },
  { name: 'CONTACT', href: '#contact' },
];

const terminalLines = [
  '$ whoami',
  'roni_seikh — full stack developer & ai/ml enthusiast',
  '',
  '$ cat stack.json',
  '{ "web": ["React", "Next.js", "Node.js", "Flask"],',
  '  "ai_ml": ["Scikit-learn", "Pandas", "NumPy"],',
  '  "db": ["MySQL", "MongoDB", "PostgreSQL"] }',
  '',
  '$ status --current',
  'shipping AI-integrated web apps, always learning.',
];

const TerminalPanel: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 380);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div className="relative w-full max-w-md rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806]/90 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#8C6D4F]/25 bg-[#100D0B]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#8C6D4F]/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#8C6D4F]/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]/70" />
        <span
          className="ml-3 text-[10px] tracking-[0.2em] uppercase text-[#8C6D4F]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          roni@dev — zsh
        </span>
      </div>
      <div className="p-5 space-y-1.5 min-h-[220px]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className={`text-[11px] sm:text-[12px] leading-relaxed font-mono ${
              line.startsWith('$') ? 'text-[#D4AF37]' : 'text-[#C4B5A5]'
            }`}
          >
            {line || '\u00A0'}
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="inline-block w-2 h-3.5 bg-[#D4AF37] animate-pulse align-middle" />
        )}
      </div>
    </div>
  );
};

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-screen min-h-screen overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black">
      {/* Custom cursor (desktop only) */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#D4AF37]/40 hidden lg:flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      {/* Full-screen video background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay so text and the terminal stay readable */}
        {/* Light overlay — just enough for text contrast, video stays visible */}
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />     
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen w-full px-6 sm:px-12 lg:px-16 pt-6 pb-10">
        {/* Nav */}
        <header className="relative flex items-center justify-between w-full">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            RONI SEIKH.
          </a>

          <nav
            className="hidden lg:flex items-center space-x-7 text-[10.5px] tracking-[0.24em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex items-center space-x-2 text-[10.5px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S CONNECT</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">↗</span>
          </a>
        </header>

        {/* Main hero row */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between w-full gap-14 pt-8 pb-2 my-auto">
          {/* Left: headline */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-xl z-20">
            <motion.div variants={fadeUpVariants} className="mb-5 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.4rem] tracking-tight uppercase leading-[0.85]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  RONI SEIKH
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  CODE + AI.
                </span>
              </h1>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="mb-5">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.28em] uppercase text-[#C4B29E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {profile.title}
              </p>
            </motion.div>

            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#A8988B] leading-[1.8] tracking-wide max-w-lg mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
              >
                <span>VIEW MY WORK</span>
                <span className="text-xs">↗</span>
              </motion.a>

              <motion.a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#BFA895] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="text-xs">↓</span>
              </motion.a>

              <motion.a
                href="#contact"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#BFA895] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
              >
                <span>CONTACT ME</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: terminal signature visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex z-20"
          >
            <TerminalPanel />
          </motion.div>
        </div>

        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onViewWorkClick: () => void;
}

export default function Hero({ onViewWorkClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-black flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 relative overflow-hidden"
    >
      {/* Decorative vertical lines / grid lines in background */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.02]">
        <div className="border-r border-white h-full"></div>
        <div className="border-r border-white h-full"></div>
        <div className="border-r border-white h-full"></div>
        <div className="h-full"></div>
      </div>

      <motion.div
        id="hero-content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full relative z-10"
      >
        <div>
          {/* Subheader */}
          <motion.div variants={itemVariants} className="mb-6 flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              PORTFOLIO — 2026
            </span>
          </motion.div>

          {/* Main Name Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-9xl font-serif font-black tracking-tight leading-[0.85] text-white select-none whitespace-pre-wrap uppercase"
          >
            PIYUSH
            <span className="block text-red-600 mt-2 sm:mt-4">TIWARI</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-serif italic text-zinc-400 font-light mt-8 tracking-wide pl-2 border-l-2 border-red-600/30"
          >
            Visual Thinker
          </motion.p>

          {/* Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-12 pl-2">
            <button
              id="hero-view-work"
              onClick={onViewWorkClick}
              className="bg-red-600 hover:bg-red-500 text-black font-display font-medium tracking-widest text-xs uppercase px-8 py-4 transition-all duration-300 flex items-center space-x-2 hover:translate-y-[-2px]"
            >
              <span>View Work</span>
              <ArrowUpRight size={14} className="stroke-[3]" />
            </button>
          </motion.div>
        </div>

        {/* Bottom statistics block */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-6 md:gap-16 pt-16 border-t border-zinc-900 mt-24 max-w-2xl"
        >
          <div className="group">
            <div className="text-3xl sm:text-5xl font-serif text-white font-black group-hover:text-red-500 transition-colors duration-300">
              12+
            </div>
            <div className="text-[10px] tracking-widest text-zinc-500 font-mono mt-1 uppercase group-hover:text-red-600/70 transition-colors duration-300">
              Projects
            </div>
          </div>
          <div className="group">
            <div className="text-3xl sm:text-5xl font-serif text-white font-black group-hover:text-red-500 transition-colors duration-300">
              1
            </div>
            <div className="text-[10px] tracking-widest text-zinc-500 font-mono mt-1 uppercase group-hover:text-red-600/70 transition-colors duration-300">
              Years of Study
            </div>
          </div>
          <div className="group">
            <div className="text-3xl sm:text-5xl font-serif text-white font-black group-hover:text-red-500 transition-colors duration-300">
              5
            </div>
            <div className="text-[10px] tracking-widest text-zinc-500 font-mono mt-1 uppercase group-hover:text-red-600/70 transition-colors duration-300">
              Exhibitions
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

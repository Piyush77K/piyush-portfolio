import { motion } from "motion/react";
import { skillsData, toolsData } from "../data";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const chipContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const chipVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <section id="skills" className="py-24 bg-black border-t border-zinc-900/60 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Skills Progress */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            {/* Header / Subtitle indicator */}
            <motion.div variants={itemVariants} className="mb-6 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
              <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">— SKILLS</span>
            </motion.div>

            {/* Title */}
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-white mb-12">
              What I do <span className="block text-red-500 italic font-sans font-light text-3xl sm:text-4xl mt-1">well.</span>
            </motion.h2>

            {/* Progress list */}
            <div className="space-y-8">
              {skillsData.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  id={skill.id || `skill-item-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-sans text-sm font-semibold tracking-wider text-zinc-200">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-red-500 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  {/* Progress track */}
                  <div className="h-[2px] bg-zinc-900 w-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-red-600"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Tools Grid & Thesis Card */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {/* Header / Subtitle indicator */}
              <motion.div variants={itemVariants} className="mb-6 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">— TOOLS</span>
              </motion.div>

              {/* Tools chips */}
              <motion.div variants={chipContainerVariants} className="flex flex-wrap gap-2.5">
                {toolsData.map((tool) => (
                  <motion.span
                    key={tool}
                    variants={chipVariants}
                    id={`tool-chip-${tool.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-mono text-xs text-zinc-400 bg-zinc-950/80 border border-zinc-900 px-4 py-2 hover:border-red-600 hover:text-white transition-all duration-300 select-none cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Currently Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-zinc-950/80 border border-zinc-900 p-6 sm:p-8 relative overflow-hidden group"
            >
              {/* Subtle top edge hover accent */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-zinc-800 group-hover:bg-red-600 transition-colors duration-500" />
              
              <div className="text-[10px] font-mono tracking-widest text-red-500 font-bold mb-4 uppercase">
                CURRENTLY
              </div>
              
              <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
                First-year B.Des student in 3D Animation and VFX — developing high-fidelity environmental designs, fluid kinetic motions, and immersive virtual interactions that bridge classical artistry with cutting-edge visual technologies.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Hobbies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14
      }
    }
  };

  return (
    <section id="hobbies" className="py-24 bg-black border-t border-zinc-900/60 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Header left */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <div className="flex items-center space-x-2.5 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
              </span>
              <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">OFFLINE</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-white mb-6"
            >
              Hobbies & <span className="block text-red-500 italic font-sans font-light text-3xl sm:text-4xl mt-1">Interests.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed max-w-sm"
            >
              When I&apos;m away from the screen, I&apos;m usually exploring the city or experimenting
              with analog techniques.
            </motion.p>
          </div>

          {/* Grid right */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Gaming Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-950/80 border border-zinc-900 p-8 h-48 flex flex-col justify-between group cursor-pointer hover:border-red-600/45 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <span className="text-red-500 font-mono text-[10px] tracking-widest font-bold">01</span>
                  <ArrowUpRight className="text-zinc-600 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" size={16} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    Gaming
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-sans line-clamp-2 leading-relaxed">
                    Immersive virtual worlds and interactive storytelling.
                  </p>
                </div>
              </motion.div>

              {/* Photography Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-950/80 border border-zinc-900 p-8 h-48 flex flex-col justify-between group cursor-pointer hover:border-red-600/45 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <span className="text-red-500 font-mono text-[10px] tracking-widest font-bold">02</span>
                  <ArrowUpRight className="text-zinc-600 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" size={16} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    Photography
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-sans line-clamp-2 leading-relaxed">
                    Capturing urban landscapes, street narratives, and geometry.
                  </p>
                </div>
              </motion.div>

              {/* Travel Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-950/80 border border-zinc-900 p-8 h-48 flex flex-col justify-between group cursor-pointer hover:border-red-600/45 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <span className="text-red-500 font-mono text-[10px] tracking-widest font-bold">03</span>
                  <ArrowUpRight className="text-zinc-600 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" size={16} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    Travel
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-sans line-clamp-2 leading-relaxed">
                    Exploring diverse cultures, local history, and landscapes.
                  </p>
                </div>
              </motion.div>

              {/* Always Curious block */}
              <motion.div
                variants={cardVariants}
                className="bg-zinc-950/40 border border-dashed border-zinc-900 p-8 h-48 flex items-center justify-center relative group select-none"
              >
                <div className="absolute inset-0 bg-red-950/[0.02] group-hover:bg-red-950/[0.04] transition-colors" />
                <div className="text-center">
                  <span className="font-serif text-xl sm:text-2xl italic text-zinc-500 group-hover:text-red-500 transition-all duration-500 block uppercase tracking-wide">
                    ALWAYS
                  </span>
                  <span className="font-sans text-xs tracking-widest text-zinc-600 font-bold block uppercase mt-1">
                    CURIOUS.
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

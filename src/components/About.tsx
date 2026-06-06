import { motion } from "motion/react";
import { Mail, Instagram, Linkedin } from "lucide-react";
import aboutPortrait from "../assets/images/regenerated_image_1780085216296.jpg";

export default function About() {
  const socialLinks = [
    { label: "EMAIL", href: "mailto:qwspiyushog@gmail.com", icon: <Mail size={14} /> },
    { label: "INSTAGRAM", href: "https://instagram.com", icon: <Instagram size={14} /> },
    { label: "LINKEDIN", href: "https://linkedin.com", icon: <Linkedin size={14} /> },
  ];

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
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-24 bg-black border-t border-zinc-900/60 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header / Subtitle indicator */}
            <motion.div variants={itemVariants} className="mb-6 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
              <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">— ABOUT</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white leading-tight mb-8"
            >
              Making things <span className="block italic text-red-500 text-3xl sm:text-4xl md:text-5xl mt-1 font-normal font-sans">matter.</span>
            </motion.h2>

            {/* Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-6 text-zinc-400 font-sans text-sm sm:text-base leading-relaxed max-w-xl">
              <p>
                My name is Piyush Tiwari. A Graphic Designer based in Delhi, India, passionate about Art, Drawing, and Visual Communication.
              </p>
              <p>
                Currently pursuing a Bachelor of Design (B.Des) in 3D Animation and VFX from AAFT Noida, while creating impactful and visually engaging designs.
              </p>
            </motion.div>

            {/* Socials / Action links */}
            <motion.div variants={itemVariants} className="mt-10 pt-8 border-t border-zinc-900 flex flex-wrap gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  id={`about-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-zinc-500 hover:text-red-500 transition-colors uppercase tracking-widest flex items-center gap-1.5 group"
                >
                  <span className="text-zinc-600 group-hover:text-red-500 transition-colors">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Portrait Column */}
          <div className="lg:col-span-5 relative group flex justify-center">
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden w-full max-w-md aspect-[3/4]"
            >
              {/* Decorative border Frame */}
              <div className="absolute inset-0 border border-zinc-900 group-hover:border-red-600/40 transition-colors duration-500 pointer-events-none z-10" />

              {/* Main Image */}
              <img
                id="about-designer-portrait"
                src={aboutPortrait}
                alt="Piyush Tiwari Cartoon Character Artist"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover cont-img transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Tag bottom right */}
              <div
                id="about-college-badge"
                className="absolute bottom-4 right-4 bg-red-600 text-black px-4 py-2 text-[10px] font-mono tracking-widest uppercase font-bold z-20 shadow-lg"
              >
                PIYUSH TIWARI
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

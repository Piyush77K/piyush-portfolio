import { useState } from "react";
import { motion } from "motion/react";
import { Project } from "../types";
import { projectsData } from "../data";
import { ArrowUpRight } from "lucide-react";
import ProjectDetailModal from "./ProjectDetailModal";

const FALLBACK_IMAGES: Record<string, string> = {
  "proj-1": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop&sat=-100", // Minimalist abstract typographic/grid asset
  "proj-2": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop&sat=-100", // Fine brand design wave
  "proj-3": "https://img.youtube.com/vi/88mkNmDDR9E/maxresdefault.jpg",
  "proj-4": "https://img.youtube.com/vi/zV8wjtsd_RM/maxresdefault.jpg"
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projectsData.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setSelectedProject(projectsData[nextIndex]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-24 bg-black border-t border-zinc-900/60 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header line */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-zinc-900">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">— SELECTED WORK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white">
              Projects
            </h2>
          </div>
          <div className="text-zinc-500 font-mono text-xs tracking-widest uppercase mt-4 sm:mt-0">
            SHOWCASE / 2023 — 2024
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          id="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
        >
          {projectsData.map((project: Project) => (
            <motion.div
              key={project.id}
              id={`project-card-${project.id}`}
              variants={cardVariants}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden bg-zinc-950 border border-zinc-900 aspect-[16/10] mb-6">
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const fallback = FALLBACK_IMAGES[project.id] || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop&sat=-100";
                      e.currentTarget.src = fallback;
                    }}
                    className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 border border-zinc-900/40 relative overflow-hidden group-hover:border-red-900/55 transition-colors duration-500">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))]" />
                    <span className="font-serif text-[6rem] sm:text-[8rem] font-bold text-zinc-900 select-none tracking-tighter leading-none transition-all duration-500 group-hover:text-red-950/40">
                      {project.number}
                    </span>
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
                        {project.category}
                      </span>
                      <span className="font-mono text-[10px] tracking-widest text-zinc-650">
                        {project.year}
                      </span>
                    </div>
                  </div>
                )}

                {/* Animated action indicator in corner on hover */}
                <div className="absolute top-4 right-4 bg-black border border-zinc-800 p-2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-20">
                  <ArrowUpRight className="text-red-500" size={16} />
                </div>
              </div>

              {/* Metadata row */}
              <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs text-zinc-500 mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 font-bold">{project.number}</span>
                  <span className="text-zinc-700">—</span>
                  <span className="tracking-widest uppercase text-zinc-400 font-medium">{project.category}</span>
                </div>
                <div className="text-zinc-600 font-semibold">{project.year}</div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-red-500 transition-colors duration-300 cursor-pointer flex items-center gap-2">
                {project.title}
              </h3>

              <p className="text-zinc-400 font-sans text-xs sm:text-sm mt-3 mb-4 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Tags List */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-widest text-zinc-500 border border-zinc-900 group-hover:border-red-900/35 group-hover:text-zinc-400 px-3 py-1 uppercase rounded-sm transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Embedded Project Showcase Page Overlay Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNextProject={handleNextProject}
      />
    </section>
  );
}

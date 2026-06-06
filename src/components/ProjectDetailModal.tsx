import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ExternalLink, Calendar, Layers, ShieldAlert, X, ChevronRight, Sparkles } from "lucide-react";
import { Project } from "../types";
import { useEffect, useState } from "react";

// Import local case study images for proper bundler path resolution
import proj1Img1 from "../assets/images/regenerated_image_1780041976482.jpg";
import proj1Img2 from "../assets/images/regenerated_image_1780041980160.jpg";
import gamingBanner from "../assets/images/regenerated_image_1780076971645.png";

const FALLBACK_IMAGES: Record<string, string> = {
  "proj-1": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop&sat=-100", // Minimalist abstract typographic/grid asset
  "proj-2": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop&sat=-100", // Fine brand design wave
  "proj-3": "https://img.youtube.com/vi/88mkNmDDR9E/maxresdefault.jpg",
  "proj-4": "https://img.youtube.com/vi/zV8wjtsd_RM/maxresdefault.jpg"
};

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onNextProject?: () => void;
}

interface CaseStudyDetails {
  client: string;
  duration: string;
  role: string;
  deliverables: string[];
  longDescription: string;
  sections: { title: string; content: string }[];
  gallery: string[];
  liveLink?: string;
}

const EXTENDED_CASE_STUDIES: Record<string, CaseStudyDetails> = {
  "proj-1": {
    client: "Central Saint Martins (Academic Thesis)",
    duration: "4 Months (Spring 2024)",
    role: "Lead Researcher & Designer",
    deliverables: ["Interactive Web Atlas", "240-Page Hardcover Specimen", "Silk-screen Poster Series"],
    longDescription: "The Typographic Atlas is a comprehensive historical study and digital visualization tool mapping the architectural evolution of typography. Confronting the transition from gothic blackletter to elegant transitional serif types and geometric grotesques, this project maps two centuries of stylistic progression. Through programmatic data analysis and custom-typeset samples, the work presents a mesmerizing, spatial exploration of typography as a mirroring of social consciousness.",
    sections: [
      {
        title: "HISTORICAL EXCAVATION",
        content: "We scanned over 500 archival foundry catalogues from the St Bride Foundation library in London. Each glyph was digitized, plotted as coordinate paths, and analyzed for weight distribution, transition geometry, and counter-form ratios."
      },
      {
        title: "THE GRID SYSTEM ARCHITECTURE",
        content: "A rigid, modernist responsive column layout controls the system. Every module snaps to the fundamental 8pt vertical rhythm, echoing the mechanical typesetting constraints of the letterpress era while embracing fluid CSS viewport behavior."
      }
    ],
    gallery: [
      proj1Img1,
      proj1Img2
    ],
    liveLink: "#"
  },
  "proj-2": {
    client: "Felt Architectural Materials Co.",
    duration: "3 Months (Winter 2023)",
    role: "Brand Identity Partner",
    deliverables: ["Responsive System", "Modular Logomark", "Bespoke Packaging Guidelines", "Environmental Signage"],
    longDescription: "Complete brand visual architecture designed for an innovative industrial atelier producing tactile acoustic materials. The identity embodies precision, high physical resonance, and eco-consciousness, featuring an responsive generative typography system. The colors represent thermal energy (high-intensity crimson) and structural silence (pure matte black).",
    sections: [
      {
        title: "RESONATING WAVEFORMS",
        content: "The signature logomark responds to acoustic frequencies. We wrote a custom visual engine using vector path generators, creating a responsive mark that reacts dynamically to ambient noise levels in their corporate showrooms."
      },
      {
        title: "TACTILE PACKAGING SOLUTIONS",
        content: "A zero-waste packaging blueprint utilizing high-density compressed felt remnants from flooring production. Materials are secured with heavy-duty red industrial threading, eliminating chemical adhesives completely."
      }
    ],
    gallery: [
      gamingBanner,
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop&sat=-100"
    ],
    liveLink: "#"
  },
  "proj-3": {
    client: "Sonic Arts Collective London / Delhi",
    duration: "6 Weeks (Autumn 2023)",
    role: "Creative Coder & Installation Lead",
    deliverables: ["Physical WebAudio Synthesizer Engine", "Generative Poster Layout Pipeline", "Interactive Digital Projection Screen"],
    longDescription: "Noise & Signal is an experimental installation merging typography with live digital noise. Capturing ambient frequencies at design exhibitions, a custom coordinate engine modifies the stroke weight, typographic tracking, and layout margins in real-time. Visitors can trigger unique audio oscillators to compose custom poster designs, printing them live on-site to build their own physical souvenir.",
    sections: [
      {
        title: "WEBAUDIO TRANSFORMATION",
        content: "Built on high-performance frequency analyzers. The software splits input audio into multiple spectral bands (bass, mids, highs), instantly mapping these structures to CSS variable bindings that alter font weights and line heights without any interface delay."
      },
      {
        title: "EXHIBITION OUTCOME",
        content: "Installed in Shoreditch, London and New Delhi. It processed over 18,000 unique audio frequencies, leading to the creation and mechanical plotting of 1,200 unique guest posters on thick matte cardstock."
      }
    ],
    gallery: [],
    liveLink: "#"
  },
  "proj-4": {
    client: "AAFT Noida (Academic Term Project)",
    duration: "Spring 2026",
    role: "Writer, Director & Actor",
    deliverables: ["Original Short Film", "Cinematography & Compositing", "Sound engineering & Editorial"],
    longDescription: "METRO is an evocative and suspenseful short film capturing the psychological tension of expectations, set against the raw backdrop of a Delhi metro platform. Directed by Piyush Tiwari, the film explores poignant emotional depth, the pressure of expectations, and the isolation of modern transit journeys.",
    sections: [
      {
        title: "THE NARRATIVE PRESSURE",
        content: "Exploring the aesthetic of being 'trapped between expectations' as a central visual metaphor. Every shot was framed to capture the contrast between intimate human gestures and the raw industrial architecture of the busy railway platform."
      },
      {
        title: "COLLABORATION & SYNC",
        content: "Collaborated closely with Sahil Suman Senapati (editing, lyrics, music) and Sonu Kumar (shoot support) to weave together high-contrast color grading, tight pacing, and an immersive soundscape that resonates with the mechanical hum of moving trains."
      }
    ],
    gallery: [],
    liveLink: "https://youtu.be/zV8wjtsd_RM"
  }
};

export default function ProjectDetailModal({ project, onClose, onNextProject }: ProjectDetailModalProps) {
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");

  // Lock scroll and set initial active image when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setActiveImage(project.image || "");
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedGalleryImg) {
          setSelectedGalleryImg(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, selectedGalleryImg]);

  if (!project) return null;

  const details = EXTENDED_CASE_STUDIES[project.id] || {
    client: "Independent Commission",
    duration: "2 Months",
    role: "Visual Creator & Designer",
    deliverables: ["Visual assets", "Design Guidelines"],
    longDescription: project.description,
    sections: [],
    gallery: project.image ? [project.image] : []
  };

  const allImages = Array.from(new Set(project.image ? [project.image, ...(details.gallery || [])] : details.gallery || [])).filter(Boolean) as string[];

  return (
    <AnimatePresence>
      <motion.div
        id="project-detail-overlay-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-black flex justify-center items-stretch"
      >
        {/* Architectural Left Border Element (Fine-line indicator) */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 hidden md:block" />

        {/* Outer content container */}
        <div className="w-full max-w-7xl mx-auto flex flex-col min-h-screen relative">
          
          {/* Header Action Row */}
          <header 
            id="detail-modal-header" 
            className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-zinc-900 px-6 py-6 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <button
                id="detail-modal-back-btn"
                onClick={onClose}
                className="group flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
                title="Go back to portfolio"
              >
                <ArrowLeft size={16} className="text-zinc-500 group-hover:text-red-500 transition-transform group-hover:-translate-x-1" />
                <span>BACK TO PORTFOLIO</span>
              </button>
            </div>

            <div className="flex items-center space-x-6">
              {/* Close Button */}
              <button
                id="detail-modal-close-btn"
                onClick={onClose}
                className="bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 text-zinc-400 hover:text-white p-2.5 rounded-sm transition-all hover:scale-105"
                title="Close Showcase"
                aria-label="Close project showcase"
              >
                <X size={18} />
              </button>
            </div>
          </header>

          {/* MAIN PAGE BODY */}
          <main id="project-detail-main-content" className="flex-1 px-6 md:px-12 py-12">
            
            {/* Quick Hero Banner */}
            <div className="max-w-3xl mx-auto mb-16">
              
              {/* Title & Stats */}
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex items-center space-x-3">
                  <span className="font-mono text-xs text-red-500 font-bold bg-red-950/40 border border-red-900/40 px-2 py-0.5 rounded-sm">
                    {project.number}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white uppercase leading-tight mb-6">
                  {project.title}
                </h1>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[9px] font-mono tracking-widest border border-zinc-800 text-zinc-400 px-3 py-1 rounded-sm uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Main Hero Showcase (Video Player or Showcase Image/Thumbnails) */}
                {project.videoUrl ? (
                  <div className="relative overflow-hidden border border-zinc-905 bg-black aspect-video mb-8 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
                    <iframe
                      src={project.videoUrl}
                      title={`${project.title} Video Player`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  </div>
                ) : (
                  <>
                    {activeImage && (
                      <div className="relative group overflow-hidden border border-zinc-900 bg-zinc-950 aspect-[16/10] mb-4">
                        <img
                          src={activeImage}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.currentTarget;
                            const fallback = FALLBACK_IMAGES[project.id] || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop&sat=-100";
                            if (target.src !== fallback) {
                              target.src = fallback;
                              setActiveImage(fallback);
                            }
                          }}
                          onClick={() => setSelectedGalleryImg(activeImage)}
                          className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700 cursor-zoom-in"
                        />
                        <div className="absolute bottom-4 right-4 bg-black/80 border border-zinc-800 text-zinc-400 font-mono text-[9px] uppercase tracking-wider px-2.5 py-1">
                          CLICK TO ZOOM
                        </div>
                      </div>
                    )}

                    {/* Thumbnails switcher (if more than 1 image available) */}
                    {allImages.length > 1 && (
                      <div className="flex flex-wrap gap-2 mb-8">
                        {allImages.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImage(img)}
                            className={`w-16 h-16 border transition-all duration-300 relative overflow-hidden bg-zinc-950 ${
                              activeImage === img ? "border-red-600 scale-105" : "border-zinc-900 hover:border-zinc-700"
                            }`}
                          >
                            <img
                              src={img}
                              alt={`Showcase view ${idx + 1}`}
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                const fallback = FALLBACK_IMAGES[project.id] || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop&sat=-100";
                                e.currentTarget.src = fallback;
                              }}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}



                {/* Optional Case Study Editorial Sections */}
                {details.sections && details.sections.length > 0 && (
                  <div className="mt-8 space-y-8 border-t border-zinc-900/40 pt-8">
                    {details.sections.map((sect, index) => (
                      <div key={index} className="group">
                        <h4 className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase mb-2 flex items-center space-x-2">
                          <span className="text-red-500">0{index + 1} //</span>
                          <span>{sect.title}</span>
                        </h4>
                        <p className="font-sans text-sm text-zinc-400 leading-relaxed pl-4 border-l border-zinc-900 group-hover:border-red-650 transition-colors duration-500">
                          {sect.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}


              </div>

            </div>

            {/* Bottom Navigator Footer */}
            {onNextProject && (
              <div className="mt-24 pt-10 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-6 pb-12">
                <div className="text-center sm:text-left">
                  <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest block mb-1">
                    NEXT PROJECT SHOWCASE
                  </span>
                  <span className="font-serif text-lg text-zinc-400 font-bold">
                    Explore another select creation
                  </span>
                </div>

                <button
                  id="detail-modal-next-project-btn"
                  onClick={onNextProject}
                  className="bg-zinc-950 hover:bg-zinc-900 text-white font-mono tracking-widest text-xs uppercase px-8 py-4 border border-zinc-800 hover:border-red-600 rounded-sm flex items-center space-x-3 group transition-all"
                >
                  <span>PROCEED</span>
                  <ChevronRight size={14} className="text-red-500 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            )}

          </main>
        </div>

        {/* INNER GALLERY ENLARGEMENT SPOTLIGHT */}
        <AnimatePresence>
          {selectedGalleryImg && (
            <motion.div
              layoutId="emerge-highlight-frame"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGalleryImg(null)}
              className="fixed inset-0 z-55 bg-black/98 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            >
              <div className="relative max-w-5xl max-h-[85vh] overflow-hidden border border-zinc-800">
                <img
                  src={selectedGalleryImg}
                  alt="Spotlight frame zoom"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const fallback = FALLBACK_IMAGES[project.id] || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop&sat=-100";
                    e.currentTarget.src = fallback;
                  }}
                  className="max-h-[80vh] max-w-full object-contain"
                />
                <div className="absolute top-3 right-3 bg-black/90 text-zinc-400 font-mono text-[9px] uppercase tracking-wider px-3 py-1.5 border border-zinc-800">
                  PRESS ESC OR CLICK ANYWHERE TO CLOSE
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}

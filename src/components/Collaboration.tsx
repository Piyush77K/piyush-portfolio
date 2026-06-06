import React, { useState } from "react";
import { ArrowUpRight, Check, X, FileText, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Collaboration() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [projectBrief, setProjectBrief] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    "BRAND IDENTITY",
    "EDITORIAL DESIGN",
    "MOTION & INTERACTION",
    "TYPE DESIGN",
    "GENERATIVE ART",
    "ART DIRECTION"
  ];

  const handleServiceToggle = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleStartProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSuccessModalOpen(true);
      // Reset brief form
      setProjectBrief("");
      setSelectedServices([]);
    }, 1000);
  };

  return (
    <section id="collab" className="py-24 bg-black border-t border-zinc-900/60 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Text & Dynamic Toggle Options (Left) */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">— COLLABORATION</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">OPEN FOR OFFERS</span>
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white leading-none mb-6">
              Let&apos;s work <span className="block text-red-500 italic font-sans font-light text-3xl sm:text-4xl md:text-5xl mt-1">creatively.</span>
            </h2>

            <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed max-w-xl mb-12">
              I&apos;m always open to interesting briefs, collaborations, and conversations. Whether
              you&apos;re a studio, a brand, or a fellow student — let&apos;s make something worth talking about.
              Select services you want to discuss below to customize your brief.
            </p>

            {/* Selection tags filter */}
            <div id="service-selector-grid" className="flex flex-wrap gap-2.5 max-w-xl">
              {services.map((service) => {
                const isActive = selectedServices.includes(service);
                return (
                  <button
                    key={service}
                    id={`service-toggle-${service.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleServiceToggle(service)}
                    className={`font-mono text-[10px] tracking-widest border transition-all duration-300 px-4 py-2.5 flex items-center space-x-2 ${
                      isActive
                        ? "bg-red-600 border-red-600 text-black font-bold scale-[1.02]"
                        : "border-zinc-900 bg-zinc-950/30 text-zinc-400 hover:border-zinc-800 hover:text-white"
                    }`}
                  >
                    <span>{isActive ? "●" : "+"}</span>
                    <span>{service}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact Box Layout (Right) */}
          <div className="lg:col-span-5">
            <form
              id="collab-interest-form"
              onSubmit={handleStartProject}
              className="bg-zinc-950/80 border border-zinc-900 p-6 sm:p-8 space-y-5"
            >
              <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase pb-2 border-b border-zinc-900">
                START A BRIEF
              </div>

              <div>
                <label htmlFor="collab-email-input" className="block text-[10px] font-mono tracking-widest text-zinc-500 mb-2 uppercase">
                  Your Email
                </label>
                <input
                  id="collab-email-input"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-black border border-zinc-900/80 hover:border-zinc-800 focus:border-red-600 focus:ring-1 focus:ring-red-600/20 px-4 py-3 font-sans text-sm text-white rounded-none outline-none transition-all placeholder:text-zinc-700"
                />
              </div>

              <div>
                <label htmlFor="collab-message-input" className="block text-[10px] font-mono tracking-widest text-zinc-500 mb-2 uppercase">
                  Project Details / Brief (Optional)
                </label>
                <textarea
                  id="collab-message-input"
                  rows={4}
                  placeholder={`Let's build a typography experiment...`}
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                  className="w-full bg-black border border-zinc-900/80 hover:border-zinc-800 focus:border-red-600 focus:ring-1 focus:ring-red-600/20 px-4 py-3 font-sans text-sm text-white rounded-none outline-none transition-all placeholder:text-zinc-700 resize-none"
                />
              </div>

              <div className="flex flex-col gap-3 pt-3">
                <button
                  id="collab-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-500 disabled:bg-zinc-800 text-black font-display font-medium uppercase tracking-widest text-xs py-4 flex items-center justify-center space-x-2 transition-all"
                >
                  <span>{loading ? "PROPOSING BRIEF..." : "START A PROJECT"}</span>
                  <ArrowUpRight size={14} className="stroke-[3]" />
                </button>

                <button
                  id="collab-cv-btn"
                  type="button"
                  onClick={() => setIsCVModalOpen(true)}
                  className="w-full bg-transparent hover:bg-zinc-900 border border-zinc-900 text-zinc-400 hover:text-white font-mono uppercase tracking-widest text-[10px] py-3 flex items-center justify-center space-x-2 transition-all"
                >
                  <FileText size={12} />
                  <span>DOWNLOAD CV</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* Success Modal Dialogue */}
      <AnimatePresence>
        {isSuccessModalOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-zinc-950 border border-zinc-900 p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setIsSuccessModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                aria-label="Close success details"
              >
                <X size={20} />
              </button>

              <div id="collab-success-modal-indicator" className="w-12 h-12 bg-red-950/20 text-red-500 border border-red-500/20 flex items-center justify-center rounded-full mb-6 mx-auto">
                <Check size={24} />
              </div>

              <h3 className="font-serif text-2xl text-white text-center font-bold mb-3">Project brief sent!</h3>
              <p className="font-sans text-sm text-zinc-400 text-center leading-relaxed mb-6">
                Thank you for reaching out, Piyush will review your brief for{" "}
                <span className="text-red-500 font-bold">
                  {selectedServices.length > 0 ? selectedServices.join(", ") : "Design Collaboration"}
                </span>{" "}
                and get back to you at <span className="text-white underline">{contactEmail}</span> within 24 hours.
              </p>

              <button
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full bg-red-600 text-black py-3 uppercase tracking-widest font-bold text-xs"
              >
                GOT IT
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Dynamic CV Resume Modal */}
      <AnimatePresence>
        {isCVModalOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-zinc-950 border border-zinc-900 p-8 sm:p-10 max-w-2xl w-full relative my-8"
            >
              <button
                onClick={() => setIsCVModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-2"
                aria-label="Close CV viewer"
              >
                <X size={20} />
              </button>

              {/* Modal header */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-900 mb-8">
                <div>
                  <h3 className="font-serif text-3xl font-black text-white">PIYUSH TIWARI</h3>
                  <p className="font-mono text-xs text-red-500 mt-1">VISUAL THINKER & DESIGNER</p>
                </div>
                <div className="text-right text-zinc-500 font-mono text-[10px]">
                  DELHI / LONDON
                </div>
              </div>

              {/* CV details list */}
              <div className="space-y-8 text-sm">
                <div>
                  <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-3 border-l-2 border-red-600 pl-2">EDUCATION</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between font-bold text-zinc-200">
                        <span>Central Saint Martins (CSM), London</span>
                        <span className="font-mono font-normal text-xs text-zinc-500">2021 — 2024</span>
                      </div>
                      <p className="text-zinc-400 text-xs mt-1">BA (Hons) Graphic Communication Design</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-3 border-l-2 border-red-600 pl-2">ACCOMPLISHMENTS & EXHIBITIONS</h4>
                  <ul className="space-y-3.5 text-zinc-400 text-xs leading-relaxed list-disc list-inside">
                    <li><strong className="text-zinc-200 font-sans">CSM Degree Showcase</strong> (London, 2024): Displayed "Typographic Atlas" interactive installation.</li>
                    <li><strong className="text-zinc-200 font-sans">Design Future Talent Award</strong> (Runner up, 2023): Category Type Design.</li>
                    <li><strong className="text-zinc-200 font-sans">Off-Grid Print Fair</strong> (Prague, 2023): Featured "Superlocal Zine" micro-zine selection.</li>
                    <li><strong className="text-zinc-200 font-sans">Generative Posters Exhibition</strong> (Berlin, 2022): Interactive "Noise & Signal" poster live demonstration.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-3 border-l-2 border-red-600 pl-2">EXPERIENCE</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between font-bold text-zinc-200">
                        <span>Felt Studio — Graphic Intern</span>
                        <span className="font-mono font-normal text-xs text-zinc-500">Summer 2023</span>
                      </div>
                      <p className="text-zinc-400 text-xs mt-1">Participated in rebranding system visual guidelines and mockups for international architectural partners.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CV Action trigger */}
              <div className="flex gap-4 pt-8 mt-10 border-t border-zinc-900 justify-end">
                <button
                  onClick={() => setIsCVModalOpen(false)}
                  className="font-mono text-xs text-zinc-500 hover:text-white uppercase tracking-widest px-4 py-2 border border-zinc-900 transition-colors"
                >
                  CLOSE
                </button>
                <a
                  href="mailto:qwspiyushog@gmail.com?subject=Requesting%20CV%20PDF&body=Hi%20Piyush,%20I%20would%20love%20to%20receive%20your%20CV%20in%20PDF."
                  className="bg-red-600 hover:bg-red-500 text-black font-display font-medium tracking-widest text-xs uppercase px-6 py-2.5 flex items-center space-x-2 transition-transform duration-300"
                >
                  <Download size={13} />
                  <span>REQUEST PDF</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

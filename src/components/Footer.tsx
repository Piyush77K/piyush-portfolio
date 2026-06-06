import { MouseEvent } from "react";

export default function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };

  const handleBackToTop = (e: MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-black border-t border-zinc-900/60 py-16 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-zinc-900">
          
          {/* Logo & Student Info */}
          <div>
            <a
              id="footer-logo"
              href="#"
              onClick={handleBackToTop}
              className="text-2xl font-display font-bold tracking-tighter text-white hover:text-red-500 transition-colors"
            >
              PT<span className="text-red-600">.</span>
            </a>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-wider mt-4">
              PIYUSH TIWARI — DESIGN STUDENT, DELHI
            </p>
          </div>

          {/* Status Indicator */}
          <div className="max-w-xs md:text-right">
            <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
              Available for internship & freelance from summer 2026.
            </p>
            <a
              id="footer-email-link"
              href="mailto:qwspiyushog@gmail.com"
              className="inline-flex items-center text-red-500 hover:text-red-400 text-sm font-mono mt-3 uppercase tracking-widest font-bold group"
            >
              <span>Say hello</span>
              <span className="ml-1 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </a>
          </div>

        </div>

        {/* Legal Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
          <div>
            © {getYear()} PIYUSH TIWARI — BUILT WITH INTENTION
          </div>
          <div>
            <a
              id="footer-back-to-top"
              href="#"
              onClick={handleBackToTop}
              className="hover:text-red-500 font-bold transition-colors"
            >
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

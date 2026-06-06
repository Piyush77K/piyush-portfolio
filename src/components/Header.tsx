import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "about", href: "#about" },
    { label: "projects", href: "#projects" },
    { label: "skills", href: "#skills" },
    { label: "hobbies", href: "#hobbies" },
    { label: "collab", href: "#collab" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6 px-6 md:px-12 ${
        isScrolled ? "bg-black/85 backdrop-blur-md border-b border-zinc-900/50 py-4" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          id="nav-logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-display font-bold tracking-tighter text-white hover:text-red-500 transition-colors"
        >
          PT<span className="text-red-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              id={`nav-item-${item.label}`}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`font-display text-sm uppercase tracking-widest transition-all duration-300 relative py-1 ${
                activeSection === item.label
                  ? "text-red-500 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.label && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 rounded" />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-zinc-400 hover:text-white transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden absolute top-full left-0 w-full bg-black border-b border-zinc-900 py-8 px-6 animate-fade-in"
        >
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                id={`mobile-nav-item-${item.label}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-display text-lg uppercase tracking-wider transition-colors ${
                  activeSection === item.label ? "text-red-500 font-bold" : "text-zinc-400"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

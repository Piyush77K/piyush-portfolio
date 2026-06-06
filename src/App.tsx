/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["about", "projects", "skills", "hobbies", "collab"];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Trigger active section when it is in the middle of screen
      threshold: 0
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="portfolio-app-root" className="bg-black text-white min-h-screen font-sans selection:bg-red-600 selection:text-black">
      {/* Header and Scroll-tracker Navbar */}
      <Header activeSection={activeSection} />

      {/* Hero Welcome Unit */}
      <Hero
        onViewWorkClick={() => handleScrollToSection("projects")}
      />

      {/* Main Sections Hierarchy */}
      <main id="main-content-flow">
        {/* About Section */}
        <About />

        {/* Portfolio Showroom */}
        <Projects />

        {/* Skills & Tools Progression Dashboard */}
        <Skills />

        {/* Offline analog Hobbies */}
        <Hobbies />

        {/* Let's Work Creatively Pitch & Forms */}
        <Collaboration />
      </main>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
}

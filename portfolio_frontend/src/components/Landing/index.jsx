import React from 'react';
import Hero from './Hero';
import ProjectsGrid from './ProjectsGrid';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

/**
 * PUBLIC_INTERFACE
 * LandingPage composes the full home page out of sections that mirror the Figma structure.
 */
const LandingPage = () => {
  return (
    <main className="landing">
      <Hero />
      <ProjectsGrid />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default LandingPage;

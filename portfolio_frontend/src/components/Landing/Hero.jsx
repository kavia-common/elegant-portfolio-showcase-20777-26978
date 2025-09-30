import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Hero section of the landing page.
 * Renders the main headline, subtitle, and a call-to-action following the Ocean Professional theme.
 */
const Hero = () => {
  return (
    <section className="lp-section hero">
      <div className="lp-container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Crafting delightful user experiences
          </h1>
          <p className="hero-subtitle">
            I’m a UI/UX Designer focused on building elegant, accessible, and user-centric interfaces.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/assets/figma_image_16_343.png"
            alt="Portfolio showcase"
            className="hero-image"
          />
        </div>
      </div>
      <div className="hero-gradient" aria-hidden />
    </section>
  );
};

export default Hero;

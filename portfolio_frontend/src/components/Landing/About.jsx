import React from 'react';

/**
 * PUBLIC_INTERFACE
 * About section highlighting designer background and skills.
 */
const About = () => {
  return (
    <section id="about" className="lp-section about">
      <div className="lp-container about-layout">
        <div className="about-media">
          <img src="/assets/figma_image_16_361.png" alt="Designer portrait" />
        </div>
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I’m a UI/UX designer with a passion for intuitive interfaces and thoughtful interactions.
            I design products that are visually appealing and accessible, focusing on solving real user problems.
          </p>
          <ul className="about-skills">
            <li>Wireframing & Prototyping</li>
            <li>Design Systems</li>
            <li>User Research</li>
            <li>Accessibility (a11y)</li>
          </ul>
          <a href="#contact" className="btn btn-primary">Let’s Work Together</a>
        </div>
      </div>
    </section>
  );
};

export default About;

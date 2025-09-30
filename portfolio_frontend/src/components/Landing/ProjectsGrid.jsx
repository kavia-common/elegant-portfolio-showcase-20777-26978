import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ProjectsGrid component displays a responsive grid of featured projects.
 * Replace the sample projects with real content as needed.
 */
const sampleProjects = [
  { id: 1, title: 'E-commerce Redesign', tag: 'UX Case Study', img: '/assets/figma_image_16_352.png' },
  { id: 2, title: 'SaaS Dashboard', tag: 'UI Visuals', img: '/assets/figma_image_16_353.png' },
  { id: 3, title: 'Mobile App Flow', tag: 'Prototype', img: '/assets/figma_image_16_356.png' },
  { id: 4, title: 'Marketing Website', tag: 'Responsive', img: '/assets/figma_image_16_358.png' },
];

const ProjectsGrid = () => {
  return (
    <section id="projects" className="lp-section projects">
      <div className="lp-container">
        <header className="section-header">
          <h2 className="section-title">Featured Work</h2>
          <p className="section-desc">
            A selection of projects highlighting design thinking, visuals, and usability.
          </p>
        </header>
        <div className="projects-grid">
          {sampleProjects.map((p) => (
            <article className="project-card" key={p.id}>
              <div className="project-media">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="project-info">
                <span className="project-tag">{p.tag}</span>
                <h3 className="project-title">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;

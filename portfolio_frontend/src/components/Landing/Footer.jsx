import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Footer with quick navigation and social links.
 */
const Footer = () => {
  return (
    <footer className="lp-footer">
      <div className="lp-container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">UI/UX</span>
          <p className="brand-tagline">Design that feels effortless.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-social">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Dribbble">dr</a>
          <a href="#" aria-label="Behance">be</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="lp-container">
          <small>© {new Date().getFullYear()} UI/UX Portfolio. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

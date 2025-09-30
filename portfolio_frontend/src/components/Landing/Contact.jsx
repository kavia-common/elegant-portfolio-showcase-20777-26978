import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Contact section with a basic contact form structure (no backend).
 */
const Contact = () => {
  return (
    <section id="contact" className="lp-section contact">
      <div className="lp-container">
        <header className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-desc">Have a project in mind or want to collaborate? Let’s talk.</p>
        </header>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message..." required />
          </div>
          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

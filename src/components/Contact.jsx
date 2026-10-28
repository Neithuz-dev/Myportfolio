import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* Background Decorative Elements */}
      <div className="section-bg-deco contact-deco" aria-hidden="true">
        <div className="deco-circle deco-circle-contact"></div>
        <div className="deco-rings"></div>
      </div>

      <div className="container">
        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              Let's Build<br />Something Great
            </h2>
            <p className="contact-description">
              Have a project in mind or just want to chat? I'm always open to discussing new opportunities
              and creative collaborations.
            </p>

            <div className="contact-details">
              <a href="mailto:neithalprince@gmail.com" className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">neithalprince@gmail.com</span>
                </div>
              </a>

              <a href="tel:+918289977343" className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91 8289977343</span>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Kollam, Kerala, India</span>
                </div>
              </div>
            </div>

            <div className="social-links-footer">
              <a href="https://github.com/Neithuz-dev" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/neithal-prince-74478a261" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:neithalprince@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="contact-visual" data-aos="fade-left">
            <div className="cta-card">
              <div className="cta-glow"></div>
              <h3>Ready to collaborate?</h3>
              <p>Download my resume or reach out directly</p>
              <a href="assests/NEITHAL PRINCE.pdf" className="btn-download" download>
                <i className="fas fa-download"></i>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

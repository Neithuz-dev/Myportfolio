import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar-custom ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <a className="logo-text" href="#" onClick={(e) => handleNavClick(e, '#root')}>
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">NP</span>
            <span className="logo-bracket">/&gt;</span>
          </a>

          <div className={`nav-menu ${isMobileOpen ? 'active' : ''}`} id="navMenu">
            <a
              className="nav-item"
              href="#about"
              data-text="About"
              onClick={(e) => handleNavClick(e, '#about')}
            >
              About
            </a>
            <a
              className="nav-item"
              href="#skills"
              data-text="Skills"
              onClick={(e) => handleNavClick(e, '#skills')}
            >
              Skills
            </a>
            <a
              className="nav-item"
              href="#projects"
              data-text="Work"
              onClick={(e) => handleNavClick(e, '#projects')}
            >
              Work
            </a>
            <a
              className="nav-item"
              href="#contact"
              data-text="Contact"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Contact
            </a>
            <a href="assests/NEITHAL PRINCE.pdf" className="nav-cta" download>
              <span>Resume</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <button
            className={`mobile-toggle ${isMobileOpen ? 'active' : ''}`}
            id="mobileToggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

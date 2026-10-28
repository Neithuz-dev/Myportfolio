import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Hero Background Decorative Elements */}
      <div className="hero-decorations" aria-hidden="true">
        <div className="hero-orbital-ring hero-orbital-ring-1"></div>
        <div className="hero-orbital-ring hero-orbital-ring-2"></div>
        <div className="hero-orbital-ring hero-orbital-ring-3"></div>
        <div className="hero-ambient-glow"></div>
        <div className="hero-geo-line hero-geo-line-1"></div>
        <div className="hero-geo-line hero-geo-line-2"></div>
        <div className="hero-marker hero-marker-1"><i className="fas fa-plus"></i></div>
        <div className="hero-marker hero-marker-2"><i className="fas fa-plus"></i></div>
      </div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content" data-aos="fade-up">
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>Available for opportunities</span>
            </div>

            <h1 className="hero-title">
              <span className="title-line">Transforming Data Into</span>
              <span className="title-line title-gradient">Actionable Insights</span>
              <span className="title-line">& Strategic Growth</span>
            </h1>

            <p className="hero-description">
              Junior Data Analyst with hands-on experience in SQL, Python, Excel, Power BI, and ETL.
              Passionate about data cleaning, exploratory analysis, interactive dashboards, and driving business decisions.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                <span>View Work</span>
                <div className="btn-shine"></div>
              </a>
              <a href="#contact" className="btn-secondary">
                <span>Let's Talk</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">7.25</div>
                <div className="stat-label">CGPA</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">1st</div>
                <div className="stat-label">Prize</div>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-glow"></div>

              <div className="profile-image-wrapper">
                <img src="assests/profile.png" alt="Neithal Prince" className="profile-image" />
                <div className="profile-border"></div>
              </div>

              {/* Name overlapping under the image */}
              <div className="profile-name-overlay">
                <h1>Neithal Prince</h1>
                <h3>Junior Data Analyst</h3>
              </div>

              {/* Social buttons below */}
              <div className="profile-info">
                <div className="social-buttons">
                  <a href="https://github.com/Neithuz-dev" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/neithal-prince-74478a261" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <i className="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:neithalprince@gmail.com" className="social-btn">
                    <i className="fas fa-envelope"></i>
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

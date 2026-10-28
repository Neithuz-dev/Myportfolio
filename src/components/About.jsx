import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* Background Decorative Elements */}
      <div className="section-bg-deco about-deco" aria-hidden="true">
        <div className="deco-circle deco-circle-about"></div>
        <div className="deco-accent-line"></div>
      </div>

      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Building Tomorrow's<br />Solutions Today
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-content" data-aos="fade-right">
            <p className="about-text">
              I'm a Computer Science Engineering graduate and Junior Data Analyst with hands-on experience in data analysis, SQL, Python, Excel, Power BI, and ETL.
            </p>
            <p className="about-text">
              Skilled in data cleaning, exploratory data analysis (EDA), visualization, and extracting insights using MySQL, Pandas, NumPy, Matplotlib, and Power Query. Also experienced in full-stack development, with strong problem-solving skills and a passion for turning data into strategic business decisions.
            </p>

            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="achievement-content">
                <h4>1st Prize Winner</h4>
                <p>TinkerHub HerHack Hackathon 3.0</p>
                <span className="achievement-year">2024</span>
              </div>
            </div>
          </div>

          <div className="education-card" data-aos="fade-left">
            <div className="card-glow"></div>
            <div className="education-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Education</h3>
            <h4>B.Tech in Computer Science & Engineering</h4>
            <p className="institution">UKF College of Engineering, Paripally, Kollam</p>
            <div className="education-details">
              <span className="detail-item">
                <i className="fas fa-calendar"></i>
                2022 – 2026
              </span>
              <span className="detail-item">
                <i className="fas fa-chart-line"></i>
                CGPA: 7.25
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

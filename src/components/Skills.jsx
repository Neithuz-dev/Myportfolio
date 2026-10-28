import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      {/* Background Decorative Elements */}
      <div className="section-bg-deco skills-deco" aria-hidden="true">
        <div className="deco-circle deco-circle-skills"></div>
        <div className="deco-line-accents"></div>
      </div>

      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">Technical Arsenal</span>
          <h2 className="section-title">Tools & Technologies</h2>
        </div>

        <div className="skills-categories">
          {/* BI & Excel */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="100">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-chart-pie"></i>
              </div>
              <h3>BI & Excel</h3>
            </div>
            <div className="tech-grid">
              <div className="tech-item">
                <i className="fas fa-chart-column"></i>
                <span>Power BI</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-bolt"></i>
                <span>Power Query</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-table-cells"></i>
                <span>Power Pivot</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-calculator"></i>
                <span>DAX</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-file-excel"></i>
                <span>MS Excel</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-chart-line"></i>
                <span>Dashboards</span>
              </div>
            </div>
          </div>

          {/* Data Analytics & ETL */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-magnifying-glass-chart"></i>
              </div>
              <h3>Data Analytics</h3>
            </div>
            <div className="tech-grid">
              <div className="tech-item">
                <i className="fas fa-broom"></i>
                <span>Data Cleaning</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-chart-area"></i>
                <span>EDA</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-table"></i>
                <span>Pandas</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-square-root-variable"></i>
                <span>NumPy</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-chart-simple"></i>
                <span>Matplotlib</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-arrow-right-arrow-left"></i>
                <span>ETL</span>
              </div>
            </div>
          </div>

          {/* Programming & Databases */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="300">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-database"></i>
              </div>
              <h3>Programming & SQL</h3>
            </div>
            <div className="tech-grid">
              <div className="tech-item">
                <i className="fas fa-database"></i>
                <span>SQL</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-server"></i>
                <span>MySQL</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-python"></i>
                <span>Python</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-js"></i>
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-git-alt"></i>
                <span>Git</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="400">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Web Development</h3>
            </div>
            <div className="tech-grid">
              <div className="tech-item">
                <i className="fab fa-html5"></i>
                <span>HTML</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-css3-alt"></i>
                <span>CSS</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-js"></i>
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <i className="fab fa-react"></i>
                <span>React</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-database"></i>
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          {/* Soft & Analytical Skills */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="500">
            <div className="category-header">
              <div className="category-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Analytical Skills</h3>
            </div>
            <div className="tech-grid">
              <div className="tech-item">
                <i className="fas fa-lightbulb"></i>
                <span>Problem Solving</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-brain"></i>
                <span>Analytical Thinking</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-puzzle-piece"></i>
                <span>Critical Thinking</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-chart-pie"></i>
                <span>Data Viz</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-comments"></i>
                <span>Communication</span>
              </div>
              <div className="tech-item">
                <i className="fas fa-users"></i>
                <span>Teamwork</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

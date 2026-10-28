import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      {/* Background Decorative Elements */}
      <div className="section-bg-deco experience-deco" aria-hidden="true">
        <div className="deco-circle deco-circle-exp"></div>
        <div className="deco-accent-line"></div>
      </div>

      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">Professional Journey</span>
          <h2 className="section-title">Experience & Training</h2>
        </div>

        <div className="experience-timeline">
          {/* Professional Training: Data Analytics with Power BI */}
          <div className="timeline-item" data-aos="fade-up">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>Data Analytics with Power BI</h3>
                  <p className="company">Professional Training | Luminar Technolab, Kochi</p>
                </div>
                <span className="timeline-date">2026</span>
              </div>
              <p className="timeline-location">
                <i className="fas fa-map-marker-alt"></i>
                Kochi, Kerala
              </p>
              <ul className="timeline-highlights">
                <li>Mastered SQL, Python, Excel, Power BI, data cleaning, exploratory data analysis (EDA), ETL, and data visualization.</li>
                <li>Gained practical experience analyzing structured datasets and extracting meaningful insights using MySQL, Pandas, NumPy, Matplotlib, and Power BI.</li>
                <li>Developed interactive dashboards, complex DAX KPI metrics, and data models to drive business insights.</li>
              </ul>
            </div>
          </div>

          {/* SDE Intern */}
          <div className="timeline-item" data-aos="fade-up">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>SDE Intern</h3>
                  <p className="company">Algon Solutions Pvt. Ltd., Kochi</p>
                </div>
                <span className="timeline-date">Jun 2025 – Jul 2025</span>
              </div>
              <p className="timeline-location">
                <i className="fas fa-map-marker-alt"></i>
                Kochi, Kerala
              </p>
              <ul className="timeline-highlights">
                <li>Contributed to web application development and debugging using JavaScript during a one-month internship.</li>
                <li>Deepened expertise in advanced JavaScript, dynamic rendering concepts, and underlying web application architecture.</li>
                <li>Implemented state/session management using cookies and worked with Git for version control and collaborative workflows.</li>
              </ul>
            </div>
          </div>

          {/* Symptom-Based Predictor */}
          <div className="timeline-item" data-aos="fade-up">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>AI Symptom‑Based Disease Predictor</h3>
                  <p className="company">Personal Project | ASAP Training & Certification</p>
                </div>
                <span className="timeline-date">Dec 2025 – Jan 2026</span>
              </div>
              <p className="timeline-location">
                <i className="fas fa-map-marker-alt"></i>
                Remote
              </p>
              <ul className="timeline-highlights">
                <li>Built a Streamlit app that predicts diseases from natural‑language symptom input.</li>
                <li>Implemented smart symptom suggestions, confidence scoring, and high‑risk alerts.</li>
                <li>Integrated multi‑fallback internet insights using DuckDuckGo, Google Search, and Wikipedia.</li>
                <li>Leveraged Scikit‑learn (Multinomial Naïve Bayes) with TF‑IDF vectorization for ML inference.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

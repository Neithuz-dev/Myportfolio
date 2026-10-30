import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      {/* Background Decorative Elements */}
      <div className="section-bg-deco projects-deco" aria-hidden="true">
        <div className="deco-circle deco-circle-projects"></div>
        <div className="deco-line-accents"></div>
      </div>

      <div className="container">
        {/* Data Analyst Projects */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">Featured Analytics</span>
          <h2 className="section-title">Data Analyst Projects</h2>
        </div>

        <div className="projects-grid">
          {/* Data Analyst Project 1: AI Usage & ROI Analytics Dashboard */}
          <div className="project-card" data-aos="fade-up">
            <div className="project-image">
              <img src="assests/ai_roi_ss.png" alt="AI Usage & ROI Analytics Dashboard" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <span className="project-tag">Power BI &amp; Business Intelligence</span>
              <h3>AI Usage &amp; ROI Analytics Dashboard</h3>
              <p>
                Developed an interactive three-page Power BI dashboard to analyze AI tool usage, cost and business value across teams, departments, tools and models, using a synthetic dataset of four CSV files. Cleaned and transformed the data in Power Query (date locale fix, currency conversion, data type correction) and built a star-schema-style model with two fact tables and three dimension tables, including a DAX Calendar table. Created DAX measures to track KPIs including total AI cost, business value, net benefit, ROI %, cost per task, cost per 1K tokens, value per employee and month-over-month net benefit change, using SUMX, RELATED, DIVIDE, DATEADD and RANKX. Designed interactive visualizations including a cost vs value combo chart, net benefit waterfall, provider donut, department funnel, team ROI bar charts, an adoption gauge, model token comparisons, a ribbon chart and a tool-and-model cost treemap, with slicers, a Top N rank parameter, cross-filtering and page navigation buttons.
              </p>
              <div className="project-tech">
                <span><i className="fas fa-chart-column"></i> Power BI</span>
                <span><i className="fas fa-calculator"></i> DAX</span>
                <span><i className="fas fa-bolt"></i> Power Query</span>
                <span><i className="fas fa-sitemap"></i> Data Modeling</span>
                <span><i className="fas fa-chart-pie"></i> KPI Dashboards</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Neithuz-dev/AI_Roi_Analytics_Dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i>
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Data Analyst Project 2: Retail Sales Analytics Dashboard */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="100">
            <div className="project-image">
              <img src="assests/Retail sales.png" alt="Retail Sales Analytics Dashboard" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <span className="project-tag">Power BI & Business Intelligence</span>
              <h3>Retail Sales Analytics Dashboard</h3>
              <p>
                Developed an interactive Power BI dashboard to analyze retail sales performance across countries, product
                categories, and customer segments. Created DAX measures to track KPIs including total sales, previous-year
                sales, year-over-year (YoY) growth, and average sales per order. Designed interactive visualizations including
                sales comparison charts, country-wise sales treemaps, category-wise sales charts, customer segment donut
                charts, and yearly top-selling product ribbon charts with slicers and navigation buttons for dynamic filtering.
              </p>
              <div className="project-tech">
                <span><i className="fas fa-chart-column"></i> Power BI</span>
                <span><i className="fas fa-calculator"></i> DAX</span>
                <span><i className="fas fa-bolt"></i> Power Query</span>
                <span><i className="fas fa-file-excel"></i> MS Excel</span>
                <span><i className="fas fa-chart-pie"></i> KPI Dashboards</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Neithuz-dev/Retail_sales_Analysis_Dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i>
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Data Analyst Project 3: Amazon Sales & E-Commerce Data Analysis */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="200">
            <div className="project-image">
              <img src="assests/amazon_sales_sql.jpeg" alt="Amazon Sales & E-Commerce Data Analysis" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <span className="project-tag">SQL & Data Analytics</span>
              <h3>Amazon Sales & E-Commerce Data Analysis</h3>
              <p>
                Analyzed Amazon e-commerce sales data using MySQL to identify customer, product, revenue, and sales trends.
                Designed relational Customers and Orders tables and solved 20+ business problems using joins, aggregations,
                subqueries, window functions, and stored procedures. Generated actionable business insights through SQL-based
                data analysis and reporting.
              </p>
              <div className="project-tech">
                <span><i className="fas fa-server"></i> MySQL</span>
                <span><i className="fas fa-database"></i> SQL Queries</span>
                <span><i className="fas fa-table-cells"></i> Relational DB</span>
                <span><i className="fas fa-chart-line"></i> Window Functions</span>
                <span><i className="fas fa-file-lines"></i> Business Insights</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Neithuz-dev/Amazon_Sales_Sql_Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i>
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Academic and Other Projects */}
        <div className="section-header project-group-header" data-aos="fade-up">
          <span className="section-label">Engineering & Development</span>
          <h2 className="section-title">Academic and other projects</h2>
        </div>

        <div className="projects-grid">
          {/* Academic Project 1 */}
          <div className="project-card" data-aos="fade-up">
            <div className="project-image">
              <img src="assests/final_dashboard_screenshot.webp" alt="Point-Supervised YOLOv8" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <span className="project-tag">Machine Learning</span>
              <h3>Point-Supervised YOLOv8</h3>
              <p>
                Real-time crowd detection system using advanced point supervision methodology for accurate density
                analysis and people counting in complex environments.
              </p>
              <div className="project-tech">
                <span><i className="fab fa-python"></i> Python</span>
                <span><i className="fas fa-eye"></i> YOLOv8</span>
                <span><i className="fas fa-camera"></i> OpenCV</span>
              </div>
            </div>
          </div>

          {/* Academic Project 2 */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="100">
            <div className="project-image">
              <img src="assests/blood_donar.webp" alt="Blood Donation Tracker" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <span className="project-tag">Full-Stack</span>
              <h3>Smart Blood Donation Tracker</h3>
              <p>
                Comprehensive MERN stack application streamlining blood donation management with real-time
                donor-recipient matching and secure authentication.
              </p>
              <div className="project-tech">
                <span><i className="fab fa-react"></i> React</span>
                <span><i className="fab fa-node-js"></i> Node.js</span>
                <span><i className="fas fa-database"></i> MongoDB</span>
                <span><i className="fas fa-code"></i> Express</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Neithuz-dev/Blood-Life-TinkerHub.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i>
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Academic Project 3 */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="200">
            <div className="project-image">
              <img src="assests/diagnose.webp" alt="DiagnosAI" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <span className="project-tag">AI / Healthcare</span>
              <h3>DiagnoseAI – Smart Health Diagnosis</h3>
              <p>
                AI-powered web application that predicts possible diseases based on user-described symptoms with
                confidence score and risk alerts.
              </p>
              <div className="project-tech">
                <span><i className="fab fa-python"></i> Python</span>
                <span><i className="fas fa-stream"></i> Streamlit</span>
                <span><i className="fas fa-brain"></i> Scikit-learn</span>
                <span><i className="fas fa-robot"></i> ML</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Neithuz-dev/ASAP_Internship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i>
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>
          {/* Academic Project 4: Elora – MERN TypeScript e‑commerce Study */}
          <div className="project-card" data-aos="fade-up" data-aos-delay="300">
            <div className="project-image">
              <img src="assests/elora_mockup.png" alt="Elora MERN e‑commerce" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <span className="project-tag">MERN &amp; TypeScript</span>
              <h3>Elora – Study e‑commerce Site</h3>
              <p>
                Self‑study full‑stack project building a MERN (MongoDB, Express, React, Node.js) e‑commerce platform using TypeScript. Covers authentication, product CRUD, cart management, deployment, and Razorpay demos.
              </p>
              <div className="project-tech">
                <span><i className="fab fa-react"></i> React</span>
                <span><i className="fab fa-node-js"></i> Node.js</span>
                <span><i className="fas fa-database"></i> MongoDB</span>
                <span><i className="fas fa-code"></i> TypeScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Neithuz-dev/Elora-Everything-She-Needs-All-in-One-Place" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i>
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}


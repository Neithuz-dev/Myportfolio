# Neithal Prince — Developer & Data Analyst Portfolio

🌐 **Live Portfolio**: [https://neithal.vercel.app/](https://neithal.vercel.app/)

A modern, high-performance, neon-cyberpunk personal portfolio built with **React**, **Vite**, **CSS3**, and **AOS**. Designed with modular components, fluid glassmorphism, dynamic animations, and curated typography to showcase Data Analytics, Machine Learning, and Full-Stack Engineering projects.

---

## ⚡ Overview

- **Core Specializations**: Data Analytics, Business Intelligence (Power BI, DAX, SQL), Machine Learning, and Full-Stack Web Development.
- **Featured Analytics**: Enterprise AI Usage & ROI Power BI Dashboard, Retail Sales BI Dashboard, and Amazon MySQL Sales Analytics.
- **Engineering Highlights**: Real-time crowd counting with Point-Supervised YOLOv8, MERN Stack blood donation tracker, DiagnosAI clinical prediction platform, and Elora TypeScript e-commerce study.
- **Experience & Training**:
  - *Data Analytics with Power BI* — Professional Training at Luminar Technolab, Kochi (2026)
  - *SDE Intern* — Algon Solutions Pvt. Ltd., Kochi (Jun 2025 – Jul 2025)
  - *AI Symptom-Based Predictor* — ASAP Training & Certification (Dec 2025 – Jan 2026)
- **Education**: B.Tech in Computer Science & Engineering (UKF College of Engineering & Technology, 2022–2026, CGPA: 7.02)
- **Honors**: 1st Prize Winner in TinkerHub HerHack Hackathon 3.0 (2024)

---

## ✨ Key Features & Design System

### 🎨 Dark Neon & Glassmorphism Aesthetic
- Multi-layered dark canvas with animated radial gradient mesh and ambient glow.
- Glassmorphic card surfaces with fine borders (`backdrop-filter: blur(16px)`).
- Cyberpunk neon accent palette: Cyan (`#00f0ff`), Electric Blue (`#3b82f6`), Neon Green (`#00ff88`), and Magenta.
- Dynamic glowing hover micro-interactions across cards, navigation, and skill badges.

### 🎭 Animation & Interactivity
- Scroll-triggered reveal animations powered by **AOS (Animate on Scroll)**.
- Alternating staggered card layouts with smooth hover scale and elevation transitions.
- Interactive mobile hamburger drawer menu with backdrop blur.
- Sticky navbar with backdrop blur and dynamic scroll shadow transitions.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework & Core** | React 18, Vite, JavaScript (ES6+), HTML5 Semantic Structure |
| **Styling & Effects** | Vanilla CSS3 (Custom Variables, Flexbox, Grid), Glassmorphism, Bootstrap 5 Grid |
| **Data Analytics & BI** | Power BI, DAX, Power Query, Data Modeling (Star Schema), MS Excel |
| **Databases & Querying**| MySQL, Relational Database Design, Window Functions, MongoDB |
| **Machine Learning & AI**| Python, YOLOv8, OpenCV, Scikit-learn, Streamlit, Pandas, NumPy |
| **Full-Stack & Tools** | Node.js, Express, TypeScript, Git, GitHub, Vercel |
| **Typography & Icons** | Space Grotesk, JetBrains Mono, Font Awesome 6 |

---

## 🚀 Projects Showcase

### 📊 Data Analyst Projects
1. **AI Usage & ROI Analytics Dashboard** *(Power BI & Business Intelligence)*
   - Interactive 3-page executive Power BI dashboard analyzing AI tool usage, cost ($85.52K), and business value ($399.83K) with an ROI of 367.5% across departments, tools, and models.
   - Built a star-schema model with 2 fact tables, 3 dimension tables, and a DAX Calendar.
   - Measures created with `SUMX`, `RELATED`, `DIVIDE`, `DATEADD`, and `RANKX`.
   - Visuals: Cost vs. value combo charts, MoM waterfall chart, provider cost donut, department funnel, team ROI bars, and model cost treemaps.

2. **Retail Sales Analytics Dashboard** *(Power BI & Business Intelligence)*
   - Analyzed retail performance across global countries, product categories, and customer segments.
   - Implemented YoY sales growth, previous year comparisons, and average sales per order KPIs.
   - Dynamic drill-down treemaps, ribbon charts, and slicer navigation.
   - [GitHub Repository](https://github.com/Neithuz-dev/Retail_sales_Analysis_Dashboard)

3. **Amazon Sales & E-Commerce Data Analysis** *(SQL & Data Analytics)*
   - In-depth MySQL analysis on customer orders, revenue distributions, and product trends.
   - Solved 20+ business problems utilizing multi-table joins, CTEs, subqueries, and window functions.
   - [GitHub Repository](https://github.com/Neithuz-dev/Amazon_Sales_Sql_Project)

### 💻 Engineering & Machine Learning Projects
1. **Point-Supervised YOLOv8 Crowd Detection** *(Computer Vision & ML)*
   - Real-time density analysis and crowd counting system in complex video feeds using point supervision.
2. **Smart Blood Donation Tracker** *(MERN Full-Stack)*
   - Real-time donor-recipient matching platform with secure authentication.
   - [GitHub Repository](https://github.com/Neithuz-dev/Blood-Life-TinkerHub.git)
3. **DiagnoseAI – Smart Health Diagnosis** *(AI / Healthcare)*
   - Disease prediction web app using symptom input with confidence scoring and risk alerts.
   - [GitHub Repository](https://github.com/Neithuz-dev/ASAP_Internship)
4. **Elora – Study E-Commerce Platform** *(MERN & TypeScript)*
   - Full-stack study platform with JWT authentication, cart flows, and payment demo.
   - [GitHub Repository](https://github.com/Neithuz-dev/Elora-Everything-She-Needs-All-in-One-Place)

---

## 📁 Project Directory Structure

```
Myportfolio/
├── public/
│   └── assests/             # Static assets (images, project screenshots, resume PDF)
├── src/
│   ├── components/
│   │   ├── About.jsx        # Personal background & education details
│   │   ├── Background.jsx   # Ambient mesh & particle background elements
│   │   ├── Contact.jsx      # Contact links, social icons, and resume CTA
│   │   ├── Experience.jsx   # Timeline of professional experience & training
│   │   ├── Footer.jsx       # Footer copyright & branding
│   │   ├── Hero.jsx         # Hero banner with dynamic badges & stats
│   │   ├── Navbar.jsx       # Responsive navigation with scroll effects
│   │   ├── Projects.jsx     # Data Analyst & Engineering project cards
│   │   ├── SectionDivider.jsx # Glowing decorative section dividers
│   │   └── Skills.jsx       # Categorized technical skill cards & badges
│   ├── App.jsx              # Main React application assembly
│   ├── main.jsx             # React DOM entry point
│   └── style.css            # Modular design system & global styles
├── assests/                 # Asset repository mirrors
├── index.html               # Single Page Application HTML root
├── package.json             # NPM dependencies & scripts
├── vite.config.js           # Vite bundler configuration
└── README.md                # Project documentation
```

---

## 💻 Local Development Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Neithuz-dev/Myportfolio.git
   cd Myportfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled bundle will be generated in the `dist/` directory.

---

## 📱 Responsive Breakpoints

- **Desktop (Large Screens)**: 1200px+
- **Laptops / Standard Desktops**: 992px – 1199px
- **Tablets**: 768px – 991px
- **Mobile Devices**: Below 768px

---

## 📬 Contact & Connect

- **Email**: [neithalprince@gmail.com](mailto:neithalprince@gmail.com)
- **Phone**: +91 8289977343
- **Location**: Kollam, Kerala, India
- **GitHub**: [@Neithuz-dev](https://github.com/Neithuz-dev)
- **LinkedIn**: [Neithal Prince](https://linkedin.com/in/neithal-prince-74478a261)

---

## 📄 License

This portfolio is open source and licensed under the [MIT License](LICENSE).

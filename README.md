# ⚡ Charan — Software Engineer Portfolio (2025 Graduate)

A high-performance, minimalist, dark-themed static developer portfolio engineered with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scrolling.

Tailored for **Charan** (2025 Graduate) highlighting skills in **C, Java, Python, HTML/CSS, DevOps Tools, SQL, and Linux**.

---

## 🚀 Key Modifications Made

1. **Natural Feathered Spotlight Reveal:**
   - Completely removed the gun scope, crosshairs, cardinal ticks, spinning rings, and sci-fi text.
   - Revealing now happens naturally at the cursor position.
   - The spotlight circle edge has a smooth, feathered radial gradient falloff (`radial-gradient(circle 240px ...)`), seamlessly blending both photos without any visible harsh border lines.
2. **Profile & Identity (Charan - 2025 Graduate):**
   - Updated with 2025 graduation year, active job seeker status, and immediate joiner availability.
   - Resume button linked to `/resume.pdf` for Charan.
3. **Curated 4 Projects:**
   - **Project 1 (Java Internship Project):** *Employee Management & Payroll System* (Java, Spring Boot, MySQL, Hibernate, REST APIs).
   - **Project 2 (Portfolio Project):** *Interactive Developer Portfolio & Static Engine* (React, Vite, Tailwind, Framer Motion, Lenis).
   - **Project 3 (DevOps Practical Project):** *Automated CI/CD Pipeline & Containerized App* (Docker, Jenkins, Linux Bash, Git, Nginx).
   - **Project 4 (Core Python & SQL Project):** *Student Database & Academic Analytics Terminal* (Python, MySQL 3NF, HTML5/CSS3).
4. **Enhanced UI/UX & Cleaned Design:**
   - Removed unwanted sci-fi clutter and Stark references.
   - Elevated professional recruiter-focused visual hierarchy.
   - Asymmetrical glass cards for C, Java, Python, Web, DevOps, SQL, and Linux with upward lift and neon border glow.
   - Contact form customized for recruiter inquiries with static Google Sheets backend.

---

## 📁 File Structure

```text
portfolio/
├── google-apps-script/
│   └── Code.gs                  # Google Sheets contact form backend
├── public/
│   ├── ironman-desktop.jpg      # Desktop 16:9 base cover (1920x1080)
│   ├── myphoto-desktop.jpg      # Desktop 16:9 revealed photo of Charan (1920x1080)
│   ├── ironman-mobile.jpg       # Mobile 4:5 base cover (1080x1350)
│   ├── myphoto-mobile.jpg       # Mobile 4:5 crossfade photo of Charan (1080x1350)
│   ├── resume.pdf               # Charan's resume (PDF)
│   └── projects/                # Project preview mockups
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Clean glassmorphic navigation with hire me CTA
│   │   ├── Hero.jsx             # Hero with 2025 graduate beacon & magnetic resume button
│   │   ├── SpotlightReveal.jsx  # Feathered cursor blend (NO gun scopes)
│   │   ├── MagneticButton.jsx   # Spring magnetic pull button with glowing border
│   │   ├── About.jsx            # 2025 graduate background & key strengths
│   │   ├── Skills.jsx           # C, Java, Python, Web, DevOps, SQL, Linux
│   │   ├── Projects.jsx         # Java internship + Portfolio + 2 Practical projects
│   │   ├── Contact.jsx          # Recruiter contact form + Google Sheets dispatch
│   │   ├── Toast.jsx            # Sleek floating notification toast
│   │   └── Footer.jsx           # Clean station clock telemetry & socials
│   ├── data/
│   │   └── portfolioData.js     # Charan's profile, skills, projects, and contact config
│   ├── hooks/
│   │   ├── useLenis.js          # Lenis smooth scrolling hook
│   │   └── useWindowDimensions.js # Screen size & touch detection
│   ├── styles/
│   │   └── index.css            # Tailwind & custom glassmorphism styles
│   ├── App.jsx                  # Main layout
│   └── main.jsx                 # Entry point
```

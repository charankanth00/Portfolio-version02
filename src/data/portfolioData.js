export const portfolioData = {
  personal: {
    name: "Charan",
    role: "Aspiring Software Engineer & 2025 Graduate",
    tagline: "Solid foundation in C, Java, Python, and modern Web Technologies, paired with practical DevOps and Linux systems experience.",
    location: "India · Open to Relocation & Remote",
    graduationYear: "2025 Graduate",
    status: "Actively Seeking Software Engineer / Developer Opportunities",
    availability: "Immediate Joiner",
    bio: [
      "I am a motivated 2025 engineering graduate driven by a passion for clean code, problem-solving, and robust software architecture.",
      "With hands-on experience as a Java Developer Intern, I have built real-world backend services with Spring Boot and SQL, while continuously expanding into DevOps tooling (Docker, Jenkins, Linux) and modern web technologies (HTML, CSS, JavaScript).",
      "Proficient in C, Java, and Python with a strong understanding of Data Structures, Object-Oriented Programming, and Linux command-line workflows. Ready to make an immediate impact on engineering teams."
    ],
    resumeUrl: "https://github.com/charankanth00/Portfolio-version02.github.io/blob/main/public/resume.pdf",
    email: "charanbandaru869@gmail.com",
    socials: {
      github: "https://github.com/charankanth00/",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    metrics: [
      { label: "Graduation Batch", value: "2025" },
      { label: "Core Languages", value: "C / Java / Py" },
      { label: "Internship Project", value: "Java / Spring" },
      { label: "Joining Availability", value: "Immediate" },
    ]
  },

  images: {
    desktop: {
      ironman: "/ironman-desktop.jpg",
      myphoto: "/myphoto-desktop.jpg",
    },
    mobile: {
      ironman: "/ironman-mobile.jpg",
      myphoto: "/myphoto-mobile.jpg",
    }
  },

  skillsCategories: [
    {
      id: "programming",
      title: "Programming Languages",
      subtitle: "Strong foundational logic, OOP, and data structures",
      colSpan: "lg:col-span-6",
      accent: "cyan",
      borderColor: "hover:border-cyan-400/50",
      glowColor: "hover:shadow-[0_0_35px_rgba(0,240,255,0.25)]",
      skills: [
        { name: "Java", level: "Core & Advanced", desc: "OOP, Collections Framework, Multithreading, JDBC" },
        { name: "C Language", level: "Proficient", desc: "Pointers, Memory Management, Algorithms, Low-level logic" },
        { name: "Python", level: "Proficient", desc: "Data Structures, Scripting, Automation, OOP" },
      ]
    },
    {
      id: "web",
      title: "Web Technologies",
      subtitle: "Clean semantics & modern responsive interfaces",
      colSpan: "lg:col-span-6",
      accent: "purple",
      borderColor: "hover:border-purple-400/50",
      glowColor: "hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]",
      skills: [
        { name: "HTML5", level: "Proficient", desc: "Semantic markup, Accessibility (a11y), SEO basics" },
        { name: "CSS3 & Modern Styling", level: "Proficient", desc: "Flexbox, CSS Grid, Media Queries, Tailwind CSS" },
        { name: "JavaScript Fundamentals", level: "Working Knowledge", desc: "DOM Manipulation, ES6+ syntax, Fetch API" },
      ]
    },
    {
      id: "devops",
      title: "DevOps & Cloud Tools",
      subtitle: "Automated pipelines, containers, and version control",
      colSpan: "lg:col-span-6",
      accent: "amber",
      borderColor: "hover:border-amber-400/50",
      glowColor: "hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]",
      skills: [
        { name: "Docker", level: "Intermediate", desc: "Dockerfiles, Images, Container Lifecycle, Multi-stage builds" },
        { name: "Jenkins & CI/CD", level: "Working Knowledge", desc: "Automated Build, Test & Deployment pipelines" },
        { name: "Kubernetes Basics", level: "Foundational", desc: "Pods, Deployments, Services, Cluster architecture" },
        { name: "Git & GitHub", level: "Proficient", desc: "Branching workflows, Pull Requests, Merge Conflict resolution" },
      ]
    },
    {
      id: "database-linux",
      title: "Databases & Linux Environment",
      subtitle: "Relational query optimization & OS-level workflows",
      colSpan: "lg:col-span-6",
      accent: "emerald",
      borderColor: "hover:border-emerald-400/50",
      glowColor: "hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]",
      skills: [
        { name: "SQL (MySQL & PostgreSQL)", level: "Proficient", desc: "Complex Joins, Subqueries, Normalization, Indexing, CRUD" },
        { name: "Linux Administration", level: "Proficient", desc: "Bash Scripting, Process Management, Permissions, Arch / Omarchy / Ubuntu" },
        { name: "Shell Scripting", level: "Intermediate", desc: "Automating routine tasks, file batch processing, CLI utilities" },
      ]
    }
  ],

  projects: [
    {
      id: "java-internship",
      title: "Employee Management & Payroll System",
      category: "Java Developer Internship Project",
      badge: "Internship Project",
      description: "Engineered during my Java Developer internship to automate employee records, attendance logging, and salary disbursement. Built RESTful endpoints with Spring Boot, managed database persistence using Hibernate and MySQL, and implemented role-based security.",
      image: "/projects/project-1.jpg",
      tags: ["Java", "Spring Boot", "MySQL", "Hibernate", "REST APIs", "Postman"],
      metrics: "Internship Deliverable · 99.9% Calculation Accuracy",
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "portfolio-website",
      title: "Interactive Developer Portfolio & Static Engine",
      category: "Featured Portfolio Project",
      badge: "Portfolio Project",
      description: "A fast, responsive static portfolio built with React and Vite. Features a smooth, feathered cursor spotlight reveal, Lenis inertial scrolling, modern dark glassmorphism, and a serverless contact form submitting directly to Google Sheets.",
      image: "/projects/project-2.jpg",
      tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lenis", "Google Apps Script"],
      metrics: "100/100 Lighthouse Performance · Pure Static Export",
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "devops-cicd",
      title: "Automated CI/CD Pipeline & Containerized App",
      category: "DevOps & Cloud Automation",
      badge: "Practical Project",
      description: "Designed an automated continuous integration and continuous deployment pipeline using Docker and Jenkins on Linux. Automates code testing, multi-stage Docker container builds, and deployment to an Nginx web server upon GitHub push.",
      image: "/projects/project-3.jpg",
      tags: ["DevOps", "Docker", "Jenkins", "Linux (Bash)", "Git/GitHub", "Nginx"],
      metrics: "Automated Build under 45s · Zero Downtime Deployments",
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: "student-db",
      title: "Student Database & Academic Analytics Terminal",
      category: "Full-Stack Python & SQL Application",
      badge: "Core Project",
      description: "A structured relational database system developed for academic management. Combines Python backend logic with a normalized MySQL database (3NF) to manage enrollments, compute GPA, and render responsive student dashboards with HTML and CSS.",
      image: "/projects/project-4.jpg",
      tags: ["Python", "SQL (MySQL)", "HTML5", "CSS3", "Database Design", "Linux"],
      metrics: "Normalized 3NF Database · Complete CRUD Operations",
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      featured: false,
    }
  ],

  contactConfig: {
    googleScriptUrl: "https://script.google.com/macros/s/AKfycbyPLACEHOLDER/exec",
    responseTime: "Within 24 hours",
    directEmail: "charanbandar869@gmail.com",
    hiringStatus: "Immediate Joiner for 2025 Graduate roles",
  }
};

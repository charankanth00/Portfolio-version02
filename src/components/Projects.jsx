import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Sparkles, Briefcase, Code, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * Projects Section (Enhanced for Charan's Portfolio)
 * Features:
 * 1. Java Developer Internship Project
 * 2. Interactive Portfolio Website
 * 3. DevOps & CI/CD Pipeline Project
 * 4. Student Database & Python Application
 */
export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const getBadgeIcon = (id) => {
    switch (id) {
      case 'java-internship':
        return <Briefcase className="w-3.5 h-3.5 text-amber-400" />;
      case 'portfolio-website':
        return <Sparkles className="w-3.5 h-3.5 text-cyan-400" />;
      case 'devops-cicd':
        return <Terminal className="w-3.5 h-3.5 text-purple-400" />;
      case 'student-db':
        return <Code className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#05070D] overflow-hidden">
      <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -left-60 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">
                // 03. FEATURED WORK &amp; INTERNSHIP
              </span>
              <div className="h-[1px] w-16 bg-gradient-to-r from-cyan-500/60 to-transparent" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white"
            >
              Practical Projects &amp; Experience.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 max-w-md text-sm sm:text-base font-light"
          >
            Demonstrating enterprise Java backend development from my internship, web architectures, DevOps deployment pipelines, and relational database design.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-cyan-500/40 transition-all duration-500 flex flex-col justify-between"
            >
              {/* IMAGE CONTAINER WITH ZOOM EFFECT ON HOVER */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#0A0D18]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#090D18] via-[#090D18]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

                {/* Top badges inside preview */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-cyan-300">
                    {project.category}
                  </span>

                  <span className="flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white">
                    {getBadgeIcon(project.id)}
                    {project.badge}
                  </span>
                </div>

                {/* SLIDING "VIEW PROJECT" BAR */}
                <div className="absolute bottom-4 inset-x-4 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-[#090D18]/95 backdrop-blur-xl border border-white/15 shadow-2xl">
                    <span className="text-xs font-mono text-cyan-300 pl-2 hidden sm:inline-block">
                      {project.metrics}
                    </span>

                    <div className="flex items-center gap-2 ml-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 transition-colors"
                        title="View Source on GitHub"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs font-mono tracking-wider transition-colors shadow-lg"
                        aria-label={`Inspect ${project.title}`}
                      >
                        <span>VIEW REPO / DEMO</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD BODY CONTENT */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm font-light mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-6 mt-4 border-t border-white/5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-gray-300 group-hover:border-white/15 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

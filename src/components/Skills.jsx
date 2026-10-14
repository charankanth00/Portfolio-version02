import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Server, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * Skills Section (Enhanced for Charan's Core Skills)
 * Clean asymmetrical grid with upward lift, semi-transparent glass cards,
 * and neon border glows highlighting C, Java, Python, Web, DevOps, SQL, and Linux.
 */
export default function Skills() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'web':
        return <Globe className="w-5 h-5 text-purple-400" />;
      case 'devops':
        return <Server className="w-5 h-5 text-amber-400" />;
      case 'database-linux':
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getAccentColor = (accent) => {
    switch (accent) {
      case 'cyan':
        return {
          pill: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
          badge: 'bg-cyan-400/20 text-cyan-300',
          bar: 'bg-cyan-400',
          hoverBorder: 'hover:border-cyan-400/70',
          hoverShadow: 'hover:shadow-[0_0_35px_rgba(0,240,255,0.25)]',
        };
      case 'purple':
        return {
          pill: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
          badge: 'bg-purple-400/20 text-purple-300',
          bar: 'bg-purple-400',
          hoverBorder: 'hover:border-purple-400/70',
          hoverShadow: 'hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]',
        };
      case 'amber':
        return {
          pill: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
          badge: 'bg-amber-400/20 text-amber-300',
          bar: 'bg-amber-400',
          hoverBorder: 'hover:border-amber-400/70',
          hoverShadow: 'hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
        };
      case 'emerald':
        return {
          pill: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
          badge: 'bg-emerald-400/20 text-emerald-300',
          bar: 'bg-emerald-400',
          hoverBorder: 'hover:border-emerald-400/70',
          hoverShadow: 'hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]',
        };
      default:
        return {
          pill: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
          badge: 'bg-cyan-400/20 text-cyan-300',
          bar: 'bg-cyan-400',
          hoverBorder: 'hover:border-cyan-400/70',
          hoverShadow: 'hover:shadow-[0_0_35px_rgba(0,240,255,0.25)]',
        };
    }
  };

  return (
    <section id="skills" className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#05070D] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none" />

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
                // 02. TECHNICAL SKILLS
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
              Core Engineering Arsenal.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 max-w-md text-sm sm:text-base font-light"
          >
            A solid foundation spanning structured programming, web interfaces, containerized DevOps tooling, relational databases, and Linux environments.
          </motion.p>
        </div>

        {/* Asymmetrical Floating Glass Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {portfolioData.skillsCategories.map((cat, index) => {
            const colors = getAccentColor(cat.accent);

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`${cat.colSpan} relative rounded-3xl p-7 sm:p-8 backdrop-blur-2xl bg-white/[0.02] border border-white/10 ${colors.hoverBorder} ${colors.hoverShadow} transition-all duration-300 group overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-white">
                        {cat.title}
                      </h3>
                      <p className="text-xs font-mono text-gray-400 mt-0.5">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${colors.pill}`}>
                    VERIFIED
                  </span>
                </div>

                {/* Skills Inside Card */}
                <div className="space-y-3.5 relative z-10">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-white/[0.015] hover:bg-white/[0.04] border border-white/5 hover:border-white/15 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.bar}`} />
                        <span className="text-sm font-medium text-gray-200 font-sans">
                          {skill.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-auto">
                        <span className="text-xs text-gray-400 font-mono hidden md:inline">
                          {skill.desc}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${colors.badge}`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom line glow */}
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 group-hover:via-cyan-400/40 to-transparent transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

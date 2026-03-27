import { motion } from 'motion/react';
import { FaGithub } from 'react-icons/fa';
import { LuExternalLink, LuFolder } from 'react-icons/lu';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-200">Featured Projects</h2>
          <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/30 hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full shadow-lg shadow-black/20"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <LuFolder size={24} />
                </div>
                <div className="flex gap-4 text-slate-400">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="GitHub Repository">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="Live Website">
                    <LuExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-emerald-400 transition-colors">
                <a href={project.live} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-emerald-400/80 bg-emerald-400/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

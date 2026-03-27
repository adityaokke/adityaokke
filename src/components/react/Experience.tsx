import { motion } from 'motion/react';
import { experiences } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-200">Experience</h2>
          <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-2 md:mb-0 text-slate-400 font-mono text-sm mt-1">
                  {exp.date}
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold text-slate-200">
                    {exp.title} <span className="text-emerald-400">@ {exp.company}</span>
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">{exp.location}</p>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-slate-400 flex items-start gap-2">
                        <span className="text-emerald-400 mt-1.5 text-xs">▹</span>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

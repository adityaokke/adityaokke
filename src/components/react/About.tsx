import { motion } from 'motion/react';
import { LuDatabase, LuFileCode2, LuLayoutDashboard, LuServer } from 'react-icons/lu';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-200">About Me</h2>
          <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-slate-400 space-y-4 leading-relaxed">
            <p>
              Hello! I'm Aditya, a Senior Software Engineer with over five years of experience in backend and full-stack development.
              I specialize in using <span className="text-emerald-400">Golang</span> and <span className="text-emerald-400">NodeJS</span> to build scalable and efficient systems.
            </p>
            <p>
              My journey in web development started back in 2014, and since then, I've had the privilege of working in various environments from freelance projects to dynamic startups and established technology companies.
            </p>
            <p>
              I am passionate about creating robust architectures, integrating complex services, and optimizing performance. I'm currently seeking a challenging role where I can leverage my skills in cloud deployment and backend development to contribute to innovative projects.
            </p>
            <p>
              When I'm not coding, you can usually find me exploring new technologies, contributing to team knowledge sharing, or looking for the next complex problem to solve.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-colors">
              <LuServer className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-slate-200 font-semibold mb-2">Backend</h3>
              <p className="text-sm text-slate-500">Golang, NodeJS, Python, C#, PHP</p>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-colors">
              <LuLayoutDashboard className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-slate-200 font-semibold mb-2">Frontend</h3>
              <p className="text-sm text-slate-500">VueJS, ReactJS, HTML/CSS</p>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-colors">
              <LuDatabase className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-slate-200 font-semibold mb-2">Database</h3>
              <p className="text-sm text-slate-500">MongoDB, Redis Streams, PostgreSQL</p>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-colors">
              <LuFileCode2 className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-slate-200 font-semibold mb-2">Architecture</h3>
              <p className="text-sm text-slate-500">Microservices, GraphQL, Docker, GCP</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

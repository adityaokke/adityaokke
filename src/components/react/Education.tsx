import { motion } from 'motion/react';
import { LuAward, LuGraduationCap } from 'react-icons/lu';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-200">Education & Awards</h2>
          <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <LuGraduationCap className="text-emerald-400" size={28} />
              <h3 className="text-xl font-semibold text-slate-200">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-slate-300">Duta Wacana Christian University</h4>
                <p className="text-emerald-400 text-sm mb-2">Bachelor of Science in Informatics</p>
                <p className="text-slate-500 text-sm mb-3">2011 - 2016</p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 text-xs">▹</span>
                    Member of Information Technology and Documentation Ministry on Executive Board University 2014
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 text-xs">▹</span>
                    Won internal IT Competition Festival 2013 and 2014
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <LuAward className="text-emerald-400" size={28} />
              <h3 className="text-xl font-semibold text-slate-200">Honors & Awards</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1.5 bg-emerald-500/10 rounded-full text-emerald-400">
                  <LuAward size={16} />
                </div>
                <div>
                  <h4 className="text-slate-300 font-medium">Best Employee</h4>
                  <p className="text-slate-500 text-sm">Xtreamax Technology Indonesia (2021)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1.5 bg-emerald-500/10 rounded-full text-emerald-400">
                  <LuAward size={16} />
                </div>
                <div>
                  <h4 className="text-slate-300 font-medium">1st Place (x2)</h4>
                  <p className="text-slate-500 text-sm">Team Programming Competition</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1.5 bg-emerald-500/10 rounded-full text-emerald-400">
                  <LuAward size={16} />
                </div>
                <div>
                  <h4 className="text-slate-300 font-medium">Award of Completion</h4>
                  <p className="text-slate-500 text-sm">Accomplishment of Systems, Application and Products</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1.5 bg-emerald-500/10 rounded-full text-emerald-400">
                  <LuAward size={16} />
                </div>
                <div>
                  <h4 className="text-slate-300 font-medium">JavaScript (Basic) Certificate</h4>
                  <p className="text-slate-500 text-sm">HackerRank</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'motion/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-emerald-400 font-mono mb-4 text-sm tracking-widest uppercase">What's Next?</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6">Get In Touch</h3>
        
        <p className="text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 mb-12">
          <a href="mailto:adityaokke@gmail.com" className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/50 hover:bg-slate-800 transition-all w-full md:w-auto">
            <LuMail className="text-emerald-400" size={24} />
            <div className="text-left">
              <p className="text-xs text-slate-500 uppercase tracking-wider">Email</p>
              <p className="text-slate-300 font-medium">adityaokke@gmail.com</p>
            </div>
          </a>
          
          <a href="tel:+6282127883337" className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/50 hover:bg-slate-800 transition-all w-full md:w-auto">
            <LuPhone className="text-emerald-400" size={24} />
            <div className="text-left">
              <p className="text-xs text-slate-500 uppercase tracking-wider">Phone</p>
              <p className="text-slate-300 font-medium">+62 82127883337</p>
            </div>
          </a>

          <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/50 hover:bg-slate-800 transition-all w-full md:w-auto">
            <LuMapPin className="text-emerald-400" size={24} />
            <div className="text-left">
              <p className="text-xs text-slate-500 uppercase tracking-wider">Location</p>
              <p className="text-slate-300 font-medium">Bandung / Tangerang, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/adityaokke" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/aditya-okke-sugiarso-a49a7aa0" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://medium.com/@adityaokke" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors font-bold text-xl">
            M
          </a>
          <a href="https://hackerrank.com/adityaokke" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors font-bold text-xl">
            H
          </a>
        </div>
      </motion.div>
    </section>
  );
}

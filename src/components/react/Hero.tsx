import { AnimatePresence, motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { LuFileText } from 'react-icons/lu';

export default function Hero() {
  const resumeBtnRef = useRef<HTMLAnchorElement>(null);
  const isResumeInView = useInView(resumeBtnRef, { margin: "0px" });
  const isDragging = useRef(false);

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-emerald-400 font-mono mb-4">Hi, my name is</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-200 mb-4 tracking-tight">
            Aditya Okke Sugiarso.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6 tracking-tight">
            I build scalable backend systems.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm a Senior Software Engineer specializing in Golang and NodeJS. 
            I build efficient, scalable, and robust backend services and full-stack applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <a href="#contact" className="px-8 py-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/50 rounded-full hover:bg-emerald-500/20 transition-all font-medium">
            Get In Touch
          </a>
          <a ref={resumeBtnRef} href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-transparent text-slate-300 border border-slate-700 rounded-full hover:border-slate-500 hover:text-white transition-all font-medium">
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>

      <AnimatePresence>
        {!isResumeInView && (
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            drag
            dragMomentum={false}
            onDragStart={() => {
              isDragging.current = true;
            }}
            onDragEnd={() => {
              setTimeout(() => {
                isDragging.current = false;
              }, 150);
            }}
            onClick={(e) => {
              if (isDragging.current) {
                e.preventDefault();
              }
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-5 py-3 bg-emerald-500 text-slate-950 rounded-full shadow-lg shadow-emerald-500/25 font-bold cursor-grab active:cursor-grabbing"
            style={{ touchAction: "none" }}
          >
            <LuFileText size={20} />
            <span className="hidden sm:inline">Resume</span>
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}

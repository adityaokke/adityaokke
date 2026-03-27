import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Education', href: '/#education' },
    { name: 'Contact', href: '/#contact' },
  { name: 'Blog', href: 'https://dev.to/adityaokke', target: '_blank' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md shadow-lg shadow-black/20 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-emerald-400 tracking-tighter">
          AOS.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-emerald-400 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

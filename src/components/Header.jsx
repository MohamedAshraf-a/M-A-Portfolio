import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about"); // Default section

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = ["About", "Skills", "Projects", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className={`text-2xl font-bold transition-colors ${
            isScrolled
              ? 'text-slate-800 dark:text-slate-100'
              : 'text-white dark:text-slate-100'
          } hover:text-cyan-500`}
        >
          MA.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={link}
                href={`#${id}`}
                className={`relative transition-colors duration-300 font-medium ${
                  isActive
                    ? "text-cyan-500 font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-cyan-500 after:rounded-full"
                    : isScrolled
                    ? "text-slate-700 dark:text-slate-300 hover:text-cyan-500"
                    : "text-white dark:text-slate-100 hover:text-cyan-300"
                }`}
              >
                {link}
              </a>
            );
          })}
          <a
            href="https://drive.google.com/file/d/1-t9vmNqWt5p-C8ZdJRKvuDb0cWSpK8U-/view?usp=sharing"
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border ${
              isScrolled
                ? 'border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-cyan-600'
            }`}
          >
            Resume
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none ${
              isScrolled
                ? 'text-slate-800 dark:text-slate-100'
                : 'text-white dark:text-slate-100'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg"
          >
            <div className="px-6 pt-4 pb-6 space-y-2 flex flex-col items-center">
              {navLinks.map((link) => {
                const id = link.toLowerCase();
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={link}
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`block py-2 transition-all duration-300 font-medium ${
                      isActive
                        ? "text-cyan-500 font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:text-cyan-500"
                    }`}
                  >
                    {link}
                  </motion.a>
                );
              })}
              <motion.a
                href="https://drive.google.com/file/d/1-t9vmNqWt5p-C8ZdJRKvuDb0cWSpK8U-/view?usp=sharing"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full text-center mt-2 border border-cyan-500 text-cyan-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../data/portfolioData';
import { sectionVariant, itemVariant } from '../utils/animationVariants';
import AnimatedText from '../components/AnimatedText';
import { GithubIcon, LinkedinIcon } from '../components/icons';
import profilePic from '../../public/profile2.jpg';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gray-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* خلفية متحركة */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-cyan-900/50 animate-gradient-xy"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row-reverse items-center gap-12">
        
        {/* ✅ صورة شخصية */}
        <motion.div
          className="relative group cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
        >
          <div className="p-[3px] rounded-full bg-gradient-to-tr from-cyan-400 via-blue-400 to-purple-500">
            <motion.img
              src={profilePic}
              alt="Profile"
      className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-1 border-cyan-500 shadow-lg cursor-pointer"
            />
          </div>
        </motion.div>

        {/* ✅ النصوص */}
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
        >
          <motion.p
            variants={itemVariant}
            className="text-lg text-cyan-500 dark:text-cyan-400 mb-2 font-mono"
          >
            Hi, my name is
          </motion.p>
          
          <AnimatedText
            text={portfolioData.name + "."}
            className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 
                       dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent mb-4"
          />

          <motion.h2
            variants={itemVariant}
            className="text-3xl md:text-6xl font-extrabold text-slate-700 dark:text-slate-300 mb-6"
          >
            I bring <span className="text-cyan-500">ideas</span> to life on the web.
          </motion.h2>

          <motion.p
            variants={itemVariant}
            className="text-slate-600 dark:text-slate-400 max-w-xl mb-8 leading-relaxed"
          >
            I'm a {portfolioData.title} with a passion for creating dynamic and intuitive
            user interfaces. I love turning <span className="font-semibold text-cyan-600 dark:text-cyan-400">complex problems</span> into
            <span className="font-semibold text-blue-600 dark:text-blue-400"> elegant solutions</span>.
          </motion.p>

          {/* أزرار */}
    
          <motion.div variants={itemVariant} className="flex items-center space-x-6">
                      <motion.div
      className="flex flex-col sm:flex-row gap-1 "
      variants={itemVariant}
    >
      
      <a
        href="/resume.pdf"
        download
        className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-500 font-medium hover:bg-cyan-500 hover:text-white transition-colors shadow-md"
      >
        Download Resume
      </a>
    </motion.div>

            <a
              href="#projects"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-8 py-3 
                         rounded-md hover:opacity-90 transition-transform duration-300 hover:scale-105 
                         shadow-lg shadow-cyan-500/30"
            >
              View My Work
            </a>
            <div className="flex space-x-10 ">
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-7 h-7" />
              </a>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-7 h-7" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ✅ Modal لعرض الصورة الكبيرة */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative"
            >
              <img
                src={profilePic}
                alt="Profile Large"
                className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl border-4 border-cyan-400"
              />
              {/* زر إغلاق */}
              <button
                className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/70 
                           rounded-full w-10 h-10 flex items-center justify-center text-2xl"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { sectionVariant, itemVariant } from '../utils/animationVariants';
import portfolioData from '../data/portfolioData';
import ProfilePic from '../../public/profile1.jpg'; // استيراد الصورة

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionWrapper id="about" title="About Me">
      <motion.div
        variants={sectionVariant}
        className="grid md:grid-cols-5 gap-10 items-center"
      >
         <motion.div
        variants={itemVariant}
        className="md:col-span-3 text-slate-700 dark:text-slate-300 space-y-6 text-lg leading-relaxed"
      >
        <p>
          Hello! I'm <span className="font-bold text-cyan-600 dark:text-cyan-400">Mohamed</span>, 
          a front-end developer based in Alexandria, EG. My journey into web development started with 
          a curiosity for how things work on the internet, which quickly blossomed into a full-fledged 
          passion for coding and design.
        </p>
        <p>
          I specialize in <span className="font-semibold text-blue-600 dark:text-blue-400">JavaScript</span> 
          and have extensive professional experience working with 
          <span className="font-semibold text-cyan-600 dark:text-cyan-400"> React</span> and its ecosystem. 
          I enjoy the process of turning an idea or a design into a real, living product that people can interact with.
        </p>
        <p>
          When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
          or grabbing a coffee ☕ and planning my next project.
        </p>
      </motion.div>

        {/* الصورة */}
        <motion.div
          variants={itemVariant}
          className="md:col-span-2 flex justify-center md:justify-end"
        >
          <div
            onClick={() => setIsOpen(true)}
            className="w-64 h-64 rounded-lg bg-slate-200 dark:bg-slate-800 relative group overflow-hidden border-2 border-cyan-500/50 dark:border-cyan-400/50 shadow-2xl shadow-cyan-500/10 cursor-pointer"
          >
            <img
              src={ProfilePic}
              alt={portfolioData.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-cyan-500/10 dark:bg-cyan-500/20 group-hover:bg-transparent transition-all duration-500"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.img
              loading="lazy"

              src={ProfilePic}
              alt={portfolioData.name}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()} // عشان ما يقفلش لو ضغطت ع الصورة نفسها
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default About;

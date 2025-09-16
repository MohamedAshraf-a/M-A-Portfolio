import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import portfolioData from '../data/portfolioData';

const Skills = () => {
  // نضاعف المصفوفة لتكرار الشريط بشكل مستمر
  const scrollingSkills = [...portfolioData.skills, ...portfolioData.skills];

  return (
    <SectionWrapper id="skills" title="My Skills">
      <div className="overflow-hidden py-6">
        <motion.div
          className="flex gap-5"
animate={{ x: ["0%", "-50%"] }}
transition={{ repeat: Infinity, repeatType: "mirror", duration: 20, ease: "linear" }}
        >
          {scrollingSkills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-3 
                         bg-white/80 dark:bg-slate-800/50 
                         border border-slate-200 dark:border-slate-700 
                         px-6 py-4 rounded-2xl font-mono text-base shadow-md 
                         hover:border-cyan-500 dark:hover:border-cyan-400 
                         hover:shadow-lg hover:shadow-cyan-500/30 
                         transition-all cursor-default"
            >
              <span className="text-3xl">
                {typeof skill.icon === 'string' ? skill.icon : <skill.icon />}
              </span>
              <span className="text-slate-700 dark:text-slate-300 font-semibold">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;

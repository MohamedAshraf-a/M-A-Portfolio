import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import portfolioData from '../data/portfolioData';
import { itemVariant } from '../utils/animationVariants';

const Contact = () => {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <motion.div
        variants={itemVariant}
        className="text-center max-w-xl mx-auto space-y-6"
      >
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          I'm currently open to new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>

        {/* زر الإيميل يفتح البريد */}
        <motion.a
          href={`${portfolioData.contact.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 
                     text-white font-semibold px-8 py-3 rounded-lg shadow-lg 
                     hover:shadow-cyan-400/40 transition-all duration-300"
        >
          Say Hello
        </motion.a>

        {/* عرض الإيميل أسفل الزر */}
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
          {portfolioData.contact.email}
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default Contact;

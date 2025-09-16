import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { sectionVariant, itemVariant } from '../utils/animationVariants';

const SectionWrapper = ({ id, title, children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    return (
        <motion.section id={id} className="py-20 md:py-28" ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={sectionVariant}>
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2 variants={itemVariant} className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-16 relative text-center">
                        <span className="relative z-10">{title}</span>
                        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-6xl md:text-8xl font-extrabold text-gray-200/50 dark:text-slate-800/50 -z-10 opacity-70">{title}</span>
                    </motion.h2>
                    {children}
                </div>
            </div>
        </motion.section>
    );
};

export default SectionWrapper;
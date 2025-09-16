import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className }) => {
    const letters = Array.from(text);
    const container = { hidden: { opacity: 0 }, visible: (i = 1) => ({ opacity: 1, transition: { staggerChildren: 0.05, delayChildren: i * 0.04 } }) };
    const child = {
        visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 400 } },
        hidden: { opacity: 0, y: 20 }
    };
    return (
        <motion.div style={{ display: "flex", overflow: "hidden" }} variants={container} initial="hidden" animate="visible" className={className} data-hoverable>
            {letters.map((letter, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    whileHover={{ y: -10, color: '#06b6d4', transition: { type: 'spring', stiffness: 400, damping: 10 } }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedText;
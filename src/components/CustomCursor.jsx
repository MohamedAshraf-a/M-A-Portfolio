import React, { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isHoveringLink, setIsHoveringLink] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, [data-hoverable]')) {
                setIsHoveringLink(true);
            }
        };
        const handleMouseOut = (e) => {
            if (e.target.closest('a, button, [data-hoverable]')) {
                setIsHoveringLink(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        document.body.addEventListener('mouseover', handleMouseOver);
        document.body.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.removeEventListener('mouseover', handleMouseOver);
            document.body.removeEventListener('mouseout', handleMouseOut);
        };
    }, [cursorX, cursorY]);

    const cursorVariants = {
        default: { scale: 1, opacity: 1 },
        hoverLink: { scale: 2.5, opacity: 0.8, backgroundColor: "rgb(14 165 233)", mixBlendMode: 'difference' },
    };

    return (
        <motion.div
            className="fixed left-0 top-0 w-8 h-8 rounded-full bg-cyan-400/80 pointer-events-none z-[9999] hidden md:block"
            style={{ translateX: cursorX, translateY: cursorY, x: '-50%', y: '-50%' }}
            variants={cursorVariants}
            animate={isHoveringLink ? "hoverLink" : "default"}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        />
    );
};

export default CustomCursor;
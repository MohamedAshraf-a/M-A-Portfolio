import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon } from './icons';
import { itemVariant } from '../utils/animationVariants';

const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / rect.width - 0.5) * 30; // قوة الميل
    const yPct = (mouseY / rect.height - 0.5) * 30;
    x.set(xPct);
    y.set(-yPct); // عكس المحور لتوافق الميل الطبيعي
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: x,
        rotateX: y,
        transformStyle: 'preserve-3d',
        boxShadow: `0px ${y.get() / 2}px ${Math.abs(y.get()) + 20}px rgba(0,0,0,0.2)`
      }}
      variants={itemVariant}
      className="relative h-80 rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 border border-slate-300 dark:border-slate-700 cursor-pointer"
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="absolute inset-5 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">{project.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-mono text-cyan-800 dark:text-cyan-300 bg-cyan-100/50 dark:bg-cyan-900/50 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"><GithubIcon className="w-6 h-6" /></a>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"><ExternalLinkIcon className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

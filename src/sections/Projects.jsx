import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import portfolioData from '../data/portfolioData';
import { sectionVariant } from '../utils/animationVariants';

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4); // 👈 أول 4 مشاريع
  const [selectedTag, setSelectedTag] = useState("All"); // 👈 الفلتر

  // استخراج كل الـ tags بشكل فريد
  const allTags = ["All", ...new Set(portfolioData.projects.flatMap(p => p.tags))];

  // فلترة المشاريع
  const filteredProjects = selectedTag === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.tags.includes(selectedTag));

  return (
    <SectionWrapper id="projects" title="My Projects">
      {/* 🔽 فلتر بالأزرار */}
      <div className="flex flex-wrap gap-3 mb-6">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => { setSelectedTag(tag); setVisibleCount(4); }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedTag === tag 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-blue-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 🔽 المشاريع */}
      <motion.div variants={sectionVariant} className="grid md:grid-cols-2 gap-8">
        {filteredProjects.slice(0, visibleCount).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>

      {/* 🔽 زر See More */}
    {visibleCount < filteredProjects.length && (
  <div className="flex justify-center mt-6">
    <button
      onClick={() => setVisibleCount(prev => prev + 4)} 
      className="inline-block bg-transparent border-2 border-cyan-500 text-cyan-500 font-semibold px-8 py-3 rounded-md hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
    >
      See More ({filteredProjects.length - visibleCount} left)
    </button>
  </div>
)}
    </SectionWrapper>
  );
};

export default Projects;

import React from 'react';
import portfolioData from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './icons';

const Footer = () => (
    <footer className="bg-gray-50 dark:bg-slate-900 text-slate-500 py-6">
        <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center space-x-4 mb-4">
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"><GithubIcon className="w-6 h-6" /></a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
            </div>
            <p className="font-mono text-sm">Designed & Built by Mohamed Ashraf</p>
        </div>
    </footer>
);

export default Footer;
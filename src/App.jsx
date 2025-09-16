import React, { useState, useEffect } from 'react';
import TextType from './components/TextType'; // الـ typing effect component

// Components
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // نخفي الرسالة بعد 3 ثواني (يمكنك تعديل الوقت)
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" bg-slate-900 text-slate-800 dark:text-white font-sans leading-relaxed selection:bg-cyan-300 selection:text-cyan-900">
      {showWelcome ? (
      <div className="bg-slate-900 fixed inset-0 flex items-center justify-center z-50
                 bg-opacity-30 backdrop-blur-md">
  <TextType 
    text={["Welcome to my website!", "Happy coding!"]}
    typingSpeed={75}
    pauseDuration={1500}
    showCursor={true}
    cursorCharacter="|"
    className="text-5xl font-bold text-white text-center"
  />
</div>

      ) : (
        <>
          <CustomCursor />
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

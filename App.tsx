import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesList from './components/ServicesList';
import Advantages from './components/Advantages';
import Footer from './components/Footer';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for the top bar
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background Parallax Elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={containerRef} className="relative min-h-screen text-brand-dark selection:bg-brand-accent selection:text-white">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-brand-primary z-50 origin-right"
        style={{ scaleX }}
      />

      {/* Animated Fixed Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          style={{ y: y1, rotate }}
          className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-brand-primary/5 rounded-full blur-[100px]"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-brand-accent/5 rounded-full blur-[120px]"
        />
      </div>

      <main className="relative z-0 flex flex-col items-center w-full">
        <HeroSection />
        
        <div className="w-full max-w-3xl mx-auto space-y-24 pb-24 px-4 md:px-8">
          <AboutSection />
          <ServicesList />
          <Advantages />
        </div>
        
        <Footer />
      </main>

      {/* Floating Action Button (Call) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-40"
      >
          <a 
              href="tel:02612345678"
              className="flex items-center justify-center w-16 h-16 bg-brand-primary text-white rounded-full shadow-2xl shadow-brand-primary/40 hover:scale-110 transition-transform duration-300 group"
          >
              <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75"></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </a>
      </motion.div>
    </div>
  );
};

export default App;
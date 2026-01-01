import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { COMPANY_INFO } from '../constants';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden mb-12">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-brand-primary -z-20"></div>
      
      {/* Decorative shapes that move with scroll */}
      <motion.div 
        style={{ y: textY }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        style={{ y: logoY }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -z-10" 
      />

      <div className="relative z-10 text-center px-4">
        <motion.div 
          style={{ y: logoY, opacity: logoOpacity }}
          className="mb-8"
        >
          <div className="mx-auto flex flex-col items-center justify-center">
             <img 
               src="logo.png" 
               alt="Simaye Mehr Alborz Logo" 
               className="w-48 md:w-64 h-auto object-contain drop-shadow-2xl mb-6 hover:scale-105 transition-transform duration-500"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.nextElementSibling?.classList.remove('hidden');
               }}
             />
             <div className="hidden w-32 h-32 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl mb-6">
                <span className="text-6xl font-bold text-white">S</span>
             </div>
          </div>
        </motion.div>
        
        <motion.div 
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
            {COMPANY_INFO.name}
          </h1>
          <div className="h-1.5 w-24 bg-brand-accent mx-auto my-6 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>
          <h2 className="text-xl md:text-2xl text-purple-200 font-light tracking-wide">
            {COMPANY_INFO.proposalTitle}
          </h2>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default HeroSection;
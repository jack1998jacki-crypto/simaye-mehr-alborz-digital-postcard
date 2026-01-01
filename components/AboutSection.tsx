import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section className="py-10 md:py-20 relative">
      
      {/* Introduction with Spotlight Effect */}
      <div className="mb-24 px-4 md:px-0">
        <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ margin: "-100px", once: true }}
            transition={{ duration: 1 }}
            className="border-r-4 border-brand-primary pr-6"
        >
            <h3 className="text-brand-accent font-bold text-xl md:text-2xl mb-6">
            معرفی مجموعه
            </h3>
            <p className="text-gray-800 text-lg md:text-2xl leading-loose font-medium text-justify">
                {COMPANY_INFO.introduction}
            </p>
        </motion.div>
      </div>

      {/* Grid for Problem & Goal - Slide In Effect */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-brand-light relative overflow-hidden group hover:border-brand-primary/30 transition-colors"
        >
             <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
             
             <h3 className="text-brand-dark font-black text-2xl mb-4 relative z-10">مسئله و ضرورت</h3>
             <p className="text-gray-600 leading-relaxed text-base relative z-10">
                {COMPANY_INFO.problem}
             </p>
        </motion.div>

        <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="bg-brand-dark p-8 rounded-3xl shadow-xl relative overflow-hidden text-white"
        >
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-accent/20 rounded-tr-full -ml-4 -mb-4"></div>

             <h4 className="text-brand-accent font-black text-2xl mb-4 relative z-10">هدف ما</h4>
             <p className="text-purple-100 text-base font-medium leading-relaxed relative z-10">
                {COMPANY_INFO.goal}
             </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
import React from 'react';
import { motion } from 'framer-motion';
import { ADVANTAGES, COMPANY_INFO } from '../constants';

const Advantages: React.FC = () => {
  return (
    <motion.section 
        initial={{ opacity: 0, borderRadius: "100px" }}
        whileInView={{ opacity: 1, borderRadius: "24px" }}
        transition={{ duration: 0.8 }}
        className="bg-brand-dark text-white p-8 md:p-12 relative overflow-hidden my-12 mx-2 md:mx-0 shadow-2xl"
    >
       {/* Decorative Background Elements */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary opacity-20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
       <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent opacity-20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white border-r-4 border-brand-accent pr-4">
                چرا سیمای مهر البرز؟
            </h3>
            
            <div className="space-y-6">
            {ADVANTAGES.map((item, index) => (
                <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring" }}
                className="flex items-center group"
                >
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <item.icon size={20} />
                </div>
                <span className="mr-4 text-lg font-light text-purple-100 group-hover:text-white transition-colors">{item.text}</span>
                </motion.div>
            ))}
            </div>
        </div>

        <motion.div 
            initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="hidden md:flex bg-gradient-to-br from-brand-primary to-brand-accent p-10 rounded-[3rem] text-center shadow-xl flex-col items-center justify-center aspect-square"
        >
            <span className="text-6xl mb-4 opacity-50">❝</span>
            <p className="text-white font-black text-2xl leading-relaxed tracking-wide">
                {COMPANY_INFO.slogan}
            </p>
            <span className="text-6xl mt-4 opacity-50">❞</span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Advantages;
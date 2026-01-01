import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const ServicesList: React.FC = () => {
  return (
    <section className="py-10">
      <div className="text-center mb-16">
        <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-brand-dark inline-block relative"
        >
          خدمات پیشنهادی
          <span className="absolute -bottom-2 right-0 w-full h-3 bg-brand-accent/20 -z-10 skew-x-12"></span>
        </motion.h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
            }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            className="flex flex-col items-center text-center p-8 bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-sm border border-brand-surface hover:border-brand-accent transition-all cursor-default"
          >
            <div className="w-16 h-16 bg-brand-surface rounded-2xl flex items-center justify-center text-brand-primary mb-6 shadow-inner transform rotate-3 group-hover:rotate-6 transition-transform">
              <service.icon size={32} strokeWidth={1.5} />
            </div>
            
            <h4 className="font-bold text-brand-dark text-xl mb-3">{service.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
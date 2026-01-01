import React from 'react';
import { Phone, Mail, Calendar, UserCheck, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white relative z-20">
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-brand-light to-white -mt-12"></div>
        
        <footer className="max-w-3xl mx-auto px-6 py-16">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
            <h3 className="text-2xl font-bold text-brand-dark mb-4">آغاز یک همکاری ماندگار</h3>
            <p className="text-gray-500 leading-relaxed max-w-md mx-auto">
            ما آماده‌ایم تا داستان برند شما را بازنویسی کنیم. برای دریافت مشاوره رایگان همین حالا تماس بگیرید.
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
            <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${COMPANY_INFO.contact.phone}`} 
                className="flex items-center justify-between p-6 bg-brand-surface rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-brand-surface hover:border-brand-accent"
            >
                <div className="flex items-center">
                    <div className="bg-white p-3 rounded-full text-brand-primary">
                        <Phone size={24} />
                    </div>
                    <div className="mr-4 flex flex-col">
                        <span className="text-xs text-brand-primary font-bold mb-1">شماره تماس</span>
                        <span className="text-lg font-bold text-brand-dark dir-ltr">{COMPANY_INFO.contact.phone}</span>
                    </div>
                </div>
            </motion.a>

            <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${COMPANY_INFO.contact.email}`} 
                className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
                <div className="flex items-center">
                    <div className="bg-brand-light p-3 rounded-full text-brand-accent">
                        <Mail size={24} />
                    </div>
                    <div className="mr-4 flex flex-col">
                         <span className="text-xs text-gray-400 font-bold mb-1">ایمیل</span>
                         <span className="text-sm md:text-base font-medium text-gray-700">{COMPANY_INFO.contact.email}</span>
                    </div>
                </div>
            </motion.a>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
            <div className="flex items-center gap-2">
                <UserCheck size={16} />
                <span>{COMPANY_INFO.contact.manager}</span>
            </div>
            
            <div className="flex items-center gap-2">
                <span>سیمای مهر البرز {COMPANY_INFO.contact.year}</span>
                <Calendar size={14} />
            </div>
        </div>

        <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="mx-auto mt-16 w-16 h-16 bg-brand-dark text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-brand-primary transition-colors duration-300"
        >
            <ArrowUp size={24} />
        </motion.button>
        </footer>
    </div>
  );
};

export default Footer;
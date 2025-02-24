import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('./assets/heroimg.jpg')" }}>
      <div className="absolute inset-0   opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Compassionate Care, Advanced Medicine
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl text-gray-200 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Your health is our priority. Experience world-class healthcare services.
        </motion.p>

        <motion.div 
          className="mt-8 flex space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a 
            href="#" 
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Book an Appointment
          </a>
          <a 
            href="#" 
            className="bg-white hover:bg-gray-100 text-blue-600 py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

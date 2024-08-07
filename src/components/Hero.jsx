// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className=" text-[#25283B] font-bold  py-20 min-h-screen flex items-center z-[20]">
      <div className="container mx-auto text-center z-[20]">
        <motion.h2
          className="hero-context text-5xl font-bold mb-4 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        >
          WELCOME TO NEXUS INFO
        </motion.h2>
        <motion.p
          className="text-xl font-mono font-bold mb-8 text-red-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          INNOVATING THE FUTURE WITH CUTTING-EDGE TECHNOLOGY SOLUTIONS.
        </motion.p>
        {/* <p className="text-xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">INNOVATING THE FUTURE WITH CUTTING-EDGE TECHNOLOGY SOLUTIONS.</p> */}
        <motion.button
          className="bg-gray-800 font-mono font-normal text-white px-6 py-3 rounded-full border border-black hover:text-red-600 hover:border-red-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
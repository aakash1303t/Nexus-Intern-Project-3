// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "John Doe",
    feedback: "Techy Software Company transformed our business with their innovative solutions. Their expertise in AI and software development has significantly enhanced our operational efficiency and helped us achieve new heights of success. We are grateful for their dedication and exceptional service."
  },
  {
    name: "Jane Smith",
    feedback: "Exceptional service and reliable software from a talented team. Techy Software Company provided us with a custom solution tailored to our needs. Their attention to detail and customer support are unmatched. We highly recommend their services to any business looking to modernize and streamline their operations."
  }
];


const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-black text-gray-300 py-40 relative"
      style={{ 
        backgroundImage: 'url(/bg.png),url(/bgpunk.jpeg)',
        backgroundSize: '100%, cover',
        backgroundRepeat: 'no-repeat',
        opacity: '96%',
        backgroundPosition: 'top center'
      }}
    >
      <div className="container mx-auto px-5 text-center p-10 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl text-red-600 font-bold mb-6">TESTIMONIALS</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900 bg-opacity-80 border hover:border-red-600 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <p className="font-mono">"{testimonial.feedback}"</p>
              <p className="mt-4 font-bold">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

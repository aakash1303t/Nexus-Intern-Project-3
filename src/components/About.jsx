// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section 
      id="about"
      className="bg-black text-gray-300 py-40 px-5"
      style={{ 
        backgroundImage: 'url(/bg.png),url(/bgpunk.jpeg)',
        backgroundSize: '100%, cover',
        backgroundRepeat: 'no-repeat',
        opacity: '96%',
        backgroundPosition: 'top center'
      }}
    >
      <div className="container mx-auto max-w-3xl text-center p-8 bg-gray-900 border hover:border-red-600 bg-opacity-80 rounded-2xl shadow-lg">
        <h2 className="text-2xl md:text-3xl text-red-600 font-bold mb-6">ABOUT US</h2>
        <p className="text-base md:text-lg font-mono">
          Techy Software Company is dedicated to providing innovative and reliable software solutions to businesses worldwide. Our team of experts specializes in AI and computer technology, helping companies transform their operations and achieve new heights of success.
        </p>
      </div>
    </section>
  );
};

export default About;

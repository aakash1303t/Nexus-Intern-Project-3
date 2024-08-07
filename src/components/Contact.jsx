// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="text-white py-40 z-[20]">
      <div 
        className="container mx-auto py-20 text-center max-w-3xl bg-gray-900 bg-opacity-90 border-4 border-red-600 rounded-xl shadow-lg z-[20]"
        style={{ 
          backgroundImage: 'url(/bg.png),url(/bgcyber.jpeg)',
          backgroundSize: '100%,cover',
          backgroundRepeat: 'no-repeat',
          opacity: '96%',
          backgroundPosition: 'top center'
        }}
      >
        <h2 className="text-3xl text-red-600 font-bold mb-6 z-20">CONTACT US</h2>
        <form 
          action="https://formspree.io/f/movadgzw" 
          method="POST"
          className="max-w-md mx-auto z-[20]" 
          style={{ zIndex: 20, position: 'relative' }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="mb-4 p-2 bg-gray-600 text-white border hover:border-2 border-red-600 rounded-3xl w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="mb-4 p-2 bg-gray-600 text-white border hover:border-2 border-red-600 rounded-3xl w-full"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="mb-4 p-2 bg-gray-600 text-white border hover:border-2 border-red-600 rounded-3xl w-full"
            required
          ></textarea>
          <button 
            type="submit" 
            className="bg-gray-800 text-white px-6 py-3 rounded-full border border-red-600 hover:text-red-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar font-mono border-2 border-red-600 z-[40] hidden md:block">
      <div className="nav-container border-2 border-red-600">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#testimonials" className="nav-link">Testimonials</a>
        <a href="#contact" className="nav-link contact-button">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

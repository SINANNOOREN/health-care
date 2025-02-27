import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    
    <nav className="w-full  bg-opacity-30 backdrop-blur-md  shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">HealthCare+</Link>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
      
          <ul className="flex space-x-6 text-gray-800">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/QuickOverview" className="hover:text-blue-600">About</Link></li>
            <li><Link to="/doctors" className="hover:text-blue-600">Doctors</Link></li>
            <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
          
            <li><Link to="/testimonials" className="hover:text-blue-600">Testimonials</Link></li>
            <li><Link to="/faqs"      className="hover:text-blue-600">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
         
          </ul>
        </div>

        {/* CTA Button */}
        <Link to="/appointment"
          className="hidden md:inline-block bg-blue-600 text-white py-2 px-4 rounded-xl shadow hover:bg-blue-700"
      
        >
          Book an Appointment
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button 
          className="md:hidden text-gray-600" 
          onClick={toggleMenu}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden  bg-opacity-30 backdrop-blur-md  shadow-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
          <li><Link  onClick={() => setOpen(false)} to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link  onClick={() => setOpen(false)} to="/QuickOverview" className="hover:text-blue-600">About</Link></li>
            <li><Link  onClick={() => setOpen(false)} to="/doctors" className="hover:text-blue-600">Doctors</Link></li>
            <li><Link  onClick={() => setOpen(false)} to="/services" className="hover:text-blue-600">Services</Link></li>
          
            <li><Link  onClick={() => setOpen(false)} to="/testimonials" className="hover:text-blue-600">Testimonials</Link></li>
            <li><Link  onClick={() => setOpen(false)} to="/faqs" className="hover:text-blue-600">FAQs</Link></li>
            <li><Link  onClick={() => setOpen(false)} to="/contact" className="hover:text-blue-600">Contact</Link></li>
            <li><Link  onClick={() => setOpen(false)} to="/appointment" className="text-blue-600">Book an Appointment</Link></li>
      
          </ul>
    
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

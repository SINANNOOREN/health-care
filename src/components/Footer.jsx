import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">HealthCare+</h3>
          <p className="text-gray-300">
            Committed to compassionate care and advanced medical services.
            Your health is our priority.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link to="/appointment" className="hover:text-blue-400">Appointment</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
          </ul>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">123 Health St., Wellness City</p>
          <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
          <p className="text-gray-300">Email: info@healthcareplus.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-400"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400"><FaLinkedin size={24} /></a>
          </div>
        </motion.div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} HealthCare+. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSection;

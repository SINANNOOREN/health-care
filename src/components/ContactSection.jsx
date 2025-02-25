import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
            <textarea 
              placeholder="Your Message" 
              rows="5" 
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button 
              type="submit" 
              className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Information</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-600 mr-3" size={24} />
              <p>123 Health St., Wellness City</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-blue-600 mr-3" size={24} />
              <p>Phone: +1 (555) 123-4567</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 mr-3" size={24} />
              <p>Email: info@healthcareplus.com</p>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-500 hover:text-blue-600"><FaFacebook size={30} /></a>
            <a href="#" className="text-gray-500 hover:text-blue-600"><FaTwitter size={30} /></a>
            <a href="#" className="text-gray-500 hover:text-blue-600"><FaInstagram size={30} /></a>
            <a href="#" className="text-gray-500 hover:text-blue-600"><FaLinkedin size={30} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

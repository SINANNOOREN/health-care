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
      
      </div>
    </section>
  );
};

export default ContactSection;

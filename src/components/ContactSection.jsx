import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-lg text-center text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          We'd love to hear from you! Reach out with any questions or feedback.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-full bg-blue-600 text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">123 Main St, City, Country</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-full bg-blue-600 text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-full bg-blue-600 text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">info@example.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Subject</label>
              <input
                type="text"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              <Send className="mr-2" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

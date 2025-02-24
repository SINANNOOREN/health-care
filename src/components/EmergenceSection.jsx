import React from 'react';
import { motion } from 'framer-motion';
import { Phone, AlarmCheck, HeartPulse, Ambulance } from 'lucide-react';

const EmergencySection = () => {
  return (
    <section className="bg-red-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-red-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Emergency Services
        </motion.h2>
        <motion.p
          className="text-lg text-center text-red-600 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          24/7 Emergency Care and Quick Response Services
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AlarmCheck className="text-red-700 mx-auto text-4xl" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              24/7 Availability
            </h3>
            <p className="text-gray-600 mt-2">
              Our emergency team is available round the clock to provide quick and effective care.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <HeartPulse className="text-red-700 mx-auto text-4xl" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Critical Care Unit
            </h3>
            <p className="text-gray-600 mt-2">
              Specialized critical care units equipped with advanced medical technology.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Ambulance className="text-red-700 mx-auto text-4xl" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Quick Ambulance Service
            </h3>
            <p className="text-gray-600 mt-2">
              Fast and reliable ambulance service with fully equipped emergency response vehicles.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
          >
            <Phone className="text-red-700 mx-auto text-4xl" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Emergency Helpline
            </h3>
            <p className="text-gray-600 mt-2">
              Call our 24/7 emergency helpline for immediate medical assistance.
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-10">
          <motion.a
            href="tel:+1234567890"
            className="inline-block bg-red-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md hover:bg-red-700 transition-colors duration-300"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            Call Emergency Now
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;

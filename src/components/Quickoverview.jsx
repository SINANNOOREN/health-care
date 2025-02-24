import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope, Users, Award } from 'lucide-react';

const QuickOverview  = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Compassionate Care, Exceptional Expertise
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Our commitment to providing world-class healthcare with a personal touch.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {/* Card 1 */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <HeartPulse className="text-blue-600 w-12 h-12 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Emergency Care</h3>
            <p className="text-gray-600 mt-2">
              24/7 emergency services with rapid response and advanced care.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Stethoscope className="text-blue-600 w-12 h-12 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Specialized Treatments</h3>
            <p className="text-gray-600 mt-2">
              Advanced medical procedures and personalized treatment plans.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Users className="text-blue-600 w-12 h-12 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">5000+ Patients</h3>
            <p className="text-gray-600 mt-2">
              Trusted by thousands of satisfied patients worldwide.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Award className="text-blue-600 w-12 h-12 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">25+ Years Experience</h3>
            <p className="text-gray-600 mt-2">
              Delivering healthcare excellence for over two decades.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickOverview;

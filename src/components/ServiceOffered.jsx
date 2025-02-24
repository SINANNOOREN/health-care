import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Brain, Baby, XCircle, Stethoscope,Pill } from 'lucide-react';

const services = [
  {
    icon: <HeartPulse className="text-red-500 w-12 h-12 mx-auto" />,
    title: "Cardiology",
    description: "Comprehensive heart care and advanced cardiac treatments."
  },
  {
    icon: <Brain className="text-blue-500 w-12 h-12 mx-auto" />,
    title: "Neurology",
    description: "Expert care for neurological disorders and brain health."
  },
  {
    icon: <Baby className="text-yellow-500 w-12 h-12 mx-auto" />,
    title: "Pediatrics",
    description: "Child-focused healthcare from newborns to adolescents."
  },
  {
    icon: <XCircle className="text-green-500 w-12 h-12 mx-auto" />,
    title: "Orthopedics",
    description: "Specialized treatments for bones, joints, and muscles."
  },
  {
    icon: <Stethoscope className="text-indigo-500 w-12 h-12 mx-auto" />,
    title: "General Medicine",
    description: "Comprehensive medical care for all age groups."
  },
  {
    icon: <Pill className="text-pink-500 w-12 h-12 mx-auto" />,
    title: "Pharmacy",
    description: "In-house pharmacy for all your medical needs."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const ServicesOffered = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Medical Services
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Delivering compassionate care with advanced medical expertise.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg p-6 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-2"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;

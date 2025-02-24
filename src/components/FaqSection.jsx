import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How can I book an appointment?',
    answer:
      'You can book an appointment through our website by visiting the Appointment section or by calling our reception.',
  },
  {
    question: 'Do you accept health insurance?',
    answer:
      'Yes, we accept a wide range of health insurance policies. Please contact us to verify if your provider is included.',
  },
  {
    question: 'What are the visiting hours?',
    answer:
      'Visiting hours are from 10:00 AM to 8:00 PM. Special arrangements can be made for critical patients.',
  },
  {
    question: 'Do you offer emergency services?',
    answer:
      'Yes, we have a 24/7 emergency department equipped with state-of-the-art medical facilities.',
  },
  {
    question: 'How can I get my medical records?',
    answer:
      'You can access your medical records by logging into the patient portal or by visiting the records department.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-lg text-center text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Find answers to the most common questions.
        </motion.p>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUp className="text-gray-600" />
                ) : (
                  <ChevronDown className="text-gray-600" />
                )}
              </div>

              {activeIndex === index && (
                <motion.div
                  className="px-6 pb-6 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

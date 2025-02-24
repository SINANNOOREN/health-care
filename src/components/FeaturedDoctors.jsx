import React from 'react';
import { motion } from 'framer-motion';

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    image: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg",
    description: "Expert in cardiovascular health and advanced heart procedures."
  },
  {
    name: "Dr. Michael Lee",
    specialization: "Orthopedic Surgeon",
    image: "https://static.vecteezy.com/system/resources/previews/028/287/384/non_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg",
    description: "Specialized in joint replacements and sports injuries."
  },
  {
    name: "Dr. Emily ",
    specialization: "Pediatrician",
    image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
    description: "Dedicated to child healthcare and preventive care."
  },
  {
    name: "Dr. David Wilson",
    specialization: "Neurologist",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5L8r9nxaya9e6A4EOXtS-DjADV7SleMWsM56J0Xr_o0WLC9TG0duYeXKB9V3kwDtlrY&usqp=CAU",
    description: "Expert in neurological disorders and advanced treatments."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const FeaturedDoctors = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Meet Our Specialists
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Our team of experienced doctors is here to provide exceptional care.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {doctors.map((doctor, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
                <p className="text-blue-600 font-medium">{doctor.specialization}</p>
                <p className="text-gray-600 mt-2 text-sm">{doctor.description}</p>
                <a 
                  href="#" 
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
                >
                  View Profile →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDoctors;

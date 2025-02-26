import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

const testimonials = [
  {
    name: "John Doe",
    feedback: "The doctors were highly professional and the staff was very caring. I felt at ease throughout my treatment.",
    image: "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg",
  },
  {
    name: "Sarah Williams",
    feedback: "Amazing experience! The facilities are top-notch and the care I received was exceptional. Highly recommended.",
    image: "https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M=",
  },
  {
    name: "Michael Johnson",
    feedback: "From booking an appointment to the follow-up, everything was seamless. The medical team is very knowledgeable.",
    image: "https://thumbs.dreamstime.com/b/confident-businessman-12518542.jpg",
  }
];

const PatientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Swipeable Handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextTestimonial,
    onSwipedRight: prevTestimonial,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What Our Patients Say
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Real experiences from patients who received compassionate care.
        </motion.p>

        <div className="relative mt-10" {...handlers}>
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-10 text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full border-4 border-blue-500"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {testimonials[currentIndex].name}
              </h3>
              <p className="mt-2 text-gray-600 max-w-md text-center">
                <FaQuoteLeft className="inline-block text-blue-500 mr-2" />
                {testimonials[currentIndex].feedback}
                <FaQuoteRight className="inline-block text-blue-500 ml-2" />
              </p>
            </div>
          </motion.div>

          {/* Three Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;

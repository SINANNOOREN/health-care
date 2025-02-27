import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';

import QuickOverview from './components/Quickoverview';
import FeaturedDoctors from './components/FeaturedDoctors';
import ServicesOffered from './components/ServiceOffered';
import AppointmentBooking from './components/AppoinmentBooking';
import PatientTestimonials from './components/PatientTestimonials';
import HomePage from './Pages/Home';
import FooterSection from './components/Footer';
import FAQSection from './components/FaqSection';
import ContactSection from './components/ContactSection';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='m-0 p-0'>
      <AnimatePresence mode='wait'>
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/quickoverview" element={<QuickOverview />} />
              <Route path="/doctors" element={<FeaturedDoctors/>} />
              <Route path="/services" element={<ServicesOffered />} />
              <Route path="/appointment" element={<AppointmentBooking/>} />
              <Route path="/testimonials" element={<PatientTestimonials/>} />
              <Route path="/FAQs" element={<FAQSection/>} />
              <Route path="/Contact" element={<ContactSection/>} />
            </Routes>
            <FooterSection/>
          </Router>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

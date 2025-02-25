import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Navbar from './components/Navbar';


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
  return (
<div className='m-0 p-0'>
<Router>
      <Navbar />
    
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/quickoverview" element={<QuickOverview />} />
        <Route path="/doctors" element={<FeaturedDoctors/>} />
        <Route path="/services" element={<ServicesOffered />} />
        <Route path="/appointment" element={< AppointmentBooking/>} />
        <Route path="/testimonials" element={<PatientTestimonials/>} />
        <Route path="/FAQs" element={<FAQSection/>} />
        <Route path="/Contact" element={<ContactSection/>} />
  



      </Routes>
      <FooterSection/>
    </Router>
</div>
 
  );
};

export default App;

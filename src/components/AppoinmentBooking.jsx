import React, { useState } from 'react';
import { motion } from 'framer-motion';

const departments = ["Cardiology", "Neurology", "Pediatrics", "Orthopedics", "General Medicine"];
const doctors = {
  Cardiology: ["Dr. Sarah Johnson", "Dr. William Roberts"],
  Neurology: ["Dr. David Wilson", "Dr. Emma Thompson"],
  Pediatrics: ["Dr. Emily Brown", "Dr. Olivia Martinez"],
  Orthopedics: ["Dr. Michael Lee", "Dr. Jason Chen"],
  GeneralMedicine: ["Dr. Sophia Kim", "Dr. Daniel Patel"]
};

const AppointmentBooking = () => {
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientConcern, setPatientConcern] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment successfully booked!");
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Book an Appointment
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Schedule your visit with our specialists easily.
        </motion.p>

        <motion.form 
          onSubmit={handleSubmit} 
          className="bg-white rounded-2xl shadow-lg p-8 mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-left font-semibold text-gray-700">Department</label>
              <select 
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedDept}
                onChange={(e) => {
                  setSelectedDept(e.target.value);
                  setSelectedDoctor('');
                }}
                required
              >
                <option value="">Select Department</option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-left font-semibold text-gray-700">Doctor</label>
              <select 
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                required
              >
                <option value="">Select Doctor</option>
                {selectedDept && doctors[selectedDept]?.map((doctor, index) => (
                  <option key={index} value={doctor}>{doctor}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-left font-semibold text-gray-700">Date</label>
              <input 
                type="date" 
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-left font-semibold text-gray-700">Time</label>
              <input 
                type="time" 
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-left font-semibold text-gray-700">Patient Name</label>
              <input 
                type="text" 
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-left font-semibold text-gray-700">Email Address</label>
              <input 
                type="email" 
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={patientEmail}
                onChange={(e) => setPatientEmail(e.target.value)}
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-left font-semibold text-gray-700">Health Concern</label>
              <textarea 
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={patientConcern}
                onChange={(e) => setPatientConcern(e.target.value)}
                placeholder="Describe your health concern..."
                required
              />
            </div>
          </div>

          <motion.button 
            type="submit"
            className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Confirm Appointment
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default AppointmentBooking;

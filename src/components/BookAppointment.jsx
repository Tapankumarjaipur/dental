import React, { useState } from "react";
import { FaUser, FaPhone, FaCalendarAlt, FaClock, FaTooth } from "react-icons/fa";

const BookAppointment = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "General Checkup",
  });

  const services = [
    "General Checkup",
    "Teeth Cleaning",
    "Dental Filling",
    "Root Canal",
    "Teeth Whitening",
    "Orthodontic Consultation",
  ];

  const availableTimes = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);

  return (
    <div
      id="book"
      className="scroll-mt-20 min-h-screen bg-gradient-to-br from-sky-50 to-sky-50 py-12 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Book Your Perfect Smile
          </h1>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-12">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-100 rounded-full z-0"></div>
            <div
              className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full z-10 transition-all duration-500"
              style={{ width: `${(activeStep - 1) * 50}%` }}
            ></div>

            <div className="flex justify-between relative z-20">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => activeStep > step && setActiveStep(step)}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activeStep >= step
                        ? "bg-gradient-to-b from-sky-500 to-sky-600 text-white shadow-lg"
                        : "bg-white text-gray-300 border-2 border-gray-200"
                    } transition-all duration-300 font-bold mb-3`}
                  >
                    {activeStep > step ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step
                    )}
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      activeStep >= step ? "text-sky-600" : "text-gray-400"
                    } transition-colors`}
                  >
                    {["Your Info", "Schedule", "Confirm"][step - 1]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step forms */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {activeStep === 1 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaUser className="mr-3 text-sky-500" />
                Personal Information
              </h2>
              <div className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none transition"
                    required
                  />
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-sky-500 focus:ring-sky-200 outline-none transition"
                  />
                  <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={nextStep}
                  className="px-6 py-3 bg-sky-600 text-white rounded-xl shadow hover:bg-sky-700 transition"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Schedule */}
          {activeStep === 2 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaCalendarAlt className="mr-3 text-sky-500" />
                Schedule Appointment
              </h2>

              <div className="grid gap-6">
                {/* Date */}
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-sky-500 outline-none transition"
                />

                {/* Time */}
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-sky-500 outline-none transition"
                >
                  <option value="">Select Time</option>
                  {availableTimes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>

                {/* Service */}
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-sky-500 outline-none transition"
                >
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={prevStep}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl shadow hover:bg-gray-300 transition"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="px-6 py-3 bg-sky-600 text-white rounded-xl shadow hover:bg-sky-700 transition"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirm */}
          {activeStep === 3 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaTooth className="mr-3 text-sky-500" />
                Confirm Appointment
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <strong>Name:</strong> {formData.name}
                </p>
                <p>
                  <strong>Phone:</strong> {formData.phone}
                </p>
                <p>
                  <strong>Date:</strong> {formData.date}
                </p>
                <p>
                  <strong>Time:</strong> {formData.time}
                </p>
                <p>
                  <strong>Service:</strong> {formData.service}
                </p>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={prevStep}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl shadow hover:bg-gray-300 transition"
                >
                  Back
                </button>
                <button
                  onClick={() => alert("Appointment Booked Successfully!")}
                  className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
                >
                  Confirm
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;

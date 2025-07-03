import React, { useEffect } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // الأنيميشن يتكرر عند الدخول والخروج
    });
  }, []);

  return (
    <section id="contact" className="pt-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 shadow-lg rounded-2xl p-8 lg:p-16">
        
        {/* Left Side - Info */}
        <div
          className="flex-1 space-y-6 text-center lg:text-left"
          data-aos="fade-right"
        >
          <h2 className="header text-3xl font-bold text-gray-800">
            Let’s <span>Work Together</span>
          </h2>
          <p className="text-gray-600 text-sm header1">
            Ambition is the primary driver of success; it always propels us
            toward the best. With continuous effort and dedication, we make a
            difference and achieve accomplishments. When we unite and work as a
            team, we become stronger and achieve our goals more quickly.
          </p>

          {/* Phone */}
          <div className="flex items-center gap-4 p-4 rounded-xl">
            <div className="bg-orange-100 p-4 rounded-2xl box1">
              <FaPhoneAlt className="text-orange-500 text-2xl" />
            </div>
            <a href="https://wa.me/01011205794" className="text-left">
              <h4 className="font-semibold phone">Phone</h4>
              <p className="text-sm text-gray-600">(+02) 01011205794</p>
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-4 rounded-xl">
            <div className="bg-orange-100 p-4 rounded-2xl box1">
              <FaEnvelope className="text-orange-500 text-2xl" />
            </div>
            <a href="mailto:moatazmoata56@gmail.com" className="text-left">
              <h4 className="font-semibold email">Email</h4>
              <p className="text-sm text-gray-600">moatazmoata56@gmail.com</p>
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4 p-4 rounded-xl">
            <div className="bg-orange-100 p-4 rounded-2xl box1">
              <FaMapMarkerAlt className="text-orange-500 text-2xl" />
            </div>
            <a
              href="https://www.google.com/maps/place/Zakaria+ellithy"
              className="text-left"
            >
              <h4 className="font-semibold address">Address</h4>
              <p className="text-sm text-gray-600">
                Zakaria El-Laithy Street, Omrania Gharbia, Giza, Egypt
              </p>
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          className="contact flex-1 space-y-4 w-full bg-white p-6 rounded-2xl box"
          data-aos="fade-left"
        >
          <h2 className="text-3xl font-bold text-center header">
            Contact <span>Me!</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-md focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-md focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 rounded-md focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Email Subject"
              className="w-full p-3 rounded-md focus:outline-none"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-md focus:outline-none resize-none"
            required
          ></textarea>

          <div className="lg:text-left" data-aos="zoom-in" data-aos-delay="300">
            <button
              type="submit"
              className="text-center bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-semibold transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

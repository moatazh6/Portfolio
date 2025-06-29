import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className=" py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10  shadow-lg rounded-2xl p-8 lg:p-16">
        
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-800">
            Let’s <span>Work Together</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Ambition is the primary driver of success; it always propels us
            toward the best. With continuous effort and dedication, we make a
            difference and achieve accomplishments. When we unite and work as a
            team, we become stronger and achieve our goals more quickly.
          </p>

         <div className="flex items-center gap-4 p-4 rounded-xl">
  <div className="bg-orange-100 p-4 rounded-2xl">
    <FaPhoneAlt className="text-orange-500 text-2xl" />
  </div>
  <a href="https://wa.me/01011205794" className="text-left">
    <h4 className="font-semibold">Phone</h4>
    <p className="text-sm text-gray-600">(+02) 01011205794</p>
  </a>
</div>

    <div className="flex items-center gap-4 p-4 rounded-xl">
  <div className="bg-orange-100 p-4 rounded-2xl">
    <FaEnvelope className="text-orange-500 text-2xl" />
  </div>
  <a href="mailto:moatazmoata56@gmail.com" className="text-left">
    <h4 className="font-semibold">Email</h4>
    <p className="text-sm text-gray-600">moatazmoata56@gmail.com</p>
  </a>
</div>
          
<div className="flex items-center gap-4 p-4 rounded-xl">

  <div className="bg-orange-100 p-4 rounded-2xl">
            <FaMapMarkerAlt className="text-orange-500 text-2xl" />
            </div>
            <a href="https://www.google.com/maps/place/Zakaria+ellithy/@29.9281173,31.8582742,10z/data=!4m10!1m2!2m1!1sZakaria+El-Laithy+Street,+Omrania+Gharbia,+Giza,+Egypty!3m6!1s0x145849ebf62e0349:0x7bd919fa9fba1a0b!8m2!3d29.9281173!4d31.248533!15sCjZaYWthcmlhIEVsLUxhaXRoeSBTdHJlZXQsIE9tcmFuaWEgR2hhcmJpYSwgR2l6YSwgRWd5cHSSAQ9ob3VzaW5nX2NvbXBsZXiqAYoBEAEqLCIoemFrYXJpYSBlbCBsYWl0aHkgc3RyZWV0IG9tcmFuaWEgZ2hhcmJpYSgAMh8QASIbwCCU7jjYHaR6iYfCq5FaWNId0zblZrfSPeQ5MjcQAiIzemFrYXJpYSBlbCBsYWl0aHkgc3RyZWV0IG9tcmFuaWEgZ2hhcmJpYSBnaXphIGVneXB04AEA!16s%2Fg%2F11nssk1xxl?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" className="text-left">
              <h4 className="font-semibold">Address</h4>
              <p className="text-sm text-gray-600">Zakaria El-Laithy Street, Omrania Gharbia, Giza, Egypty</p>
</a>
          </div>
        </div>

        <form className="contact flex-1 space-y-4 w-full bg-white p-6 rounded-2xl">
          <h2 className="text-3xl font-bold text-center">
            Contact <span>Me!</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-4 bg-white">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-md focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full  p-3 rounded-md focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full  p-3 rounded-md focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Email Subject"
              className="w-full  p-3 rounded-md focus:outline-none"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full  p-3 rounded-md focus:outline-none resize-none"
            required
          ></textarea>

          <div className="text-center lg:text-left">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-semibold transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

import React from 'react';
import './Content.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";

export default function Content() {
  return (
    <section className="bg-[#f3f4f6] py-20 flex flex-col items-center justify-center">
      <div className="max-w-2xl text-center px-4">
        <h3 className="text-gray-600 text-xl mb-2">Welcome to my world</h3>

      <h1 className="text-4xl md:text-6xl font-bold mb-4">
  Hi, I am{" "}
  <span className="animate-cursor-wrapper">
    Moataz Hassan
    <span className="animate-cursor"></span>
  </span>
</h1>



        <h3 className="text-xl md:text-2xl font-medium mb-3">
          Creative <span className="text-orange-500 font-semibold">Frontend Developer</span> 
        </h3>

        <p className="text-gray-500 leading-relaxed mb-6">
       I'm Moataz Hassan. I am a dedicated and aspiring Frontend Developer with a strong passion for web
development, specializing in React.js. Eager to expand my skills and knowledge, I continuously seek out
learning opportunities and hands-on projects. My goal is to contribute to innovative web applications that
provide exceptional user experiences. I am on a journey to becoming a Front-end Developer, driven by curiosity
and a commitment to excellence.
        </p>

        <a target='blank' href='https://drive.google.com/file/d/1doNNgAsDUa-PDKdUamUPjPHHs5ITQqvN/view?usp=sharing' className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
          Download CV
        </a>
      </div>
    <div className='social flex flex-col items-center gap-5 mt-16 md:flex-row'>
  <h3 className='text-2xl mt-1'>FollowMe</h3>
  <div className='flex gap-6 flex-wrap justify-center'>
    <a className='text-2xl text-white mt-2 whatsapp' target='blank' href="https://wa.me/01011205794"><FaWhatsapp /></a>
    <a className='text-2xl text-white mt-2 facebook' target='blank' href="https://www.facebook.com/moataz.hassan.355744"><FaFacebook /></a>  
    <a className='text-2xl X text-white mt-2' target='blank' href="https://x.com/Mo3tazh3"><FaXTwitter /></a> 
    <a className='text-2xl mt-2 text-white linkedin' target='blank' href="https://www.linkedin.com/in/moataz-hassan-8960332a4/"><FaLinkedin /></a>
    <a className='text-2xl text-white mt-2 github' target='blank' href="https://github.com/moatazh6"><FaGithub /></a>
  </div>
</div>

    </section>
    
  );
}

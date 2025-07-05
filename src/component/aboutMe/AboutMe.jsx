import React, { useEffect } from 'react'
import './AboutMe.css'
import { FaGlobe} from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { TbApi } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutMe() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  })
  
      const services = [
      {
        icon: <FaGlobe size={24} />,
        title: "Website Development",
        desc: "I build responsive and dynamic websites using HTML, CSS, JavaScript, and modern frameworks like React. I focus on clean code and performance optimization to ensure fast and smooth user experiences.",
      },
      {
        icon: <FaPaintBrush size={24} />,
        title: "UI/UX Design",
        desc: "I turn Figma or Adobe XD designs into pixel-perfect code. I care deeply about design systems, color contrast, spacing, and accessibility to deliver a polished final product.",
      },
      {
        icon: <IoIosSettings size={24} />,
        title: "Front-End Tools & Frameworks",
        desc: "I work with tools like React.js, Next.js, Tailwind CSS, and SCSS. I also use Git for version control and tools like Vite or Webpack for optimized builds.",
      },
      {
        icon: <TbApi size={24} />,
        title: "API Integration",
        desc: "I integrate front-end applications with RESTful APIs using Axios or Fetch, handling data dynamically and creating interactive, real-world applications.",
      },
      {
        icon: <CiMobile3 size={24} />,
        title: "Responsive Design",
        desc: "I make sure that all websites I build are mobile-friendly and work seamlessly across all screen sizes and devices.",
      },
    ];



  return (
    <section id="about" className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center ">
        <div className="card flex flex-col justify-center items-center text-3xl   rounded-2xl py-32 bg-orange-500 mt-24"    data-aos="fade-right" data-aos-delay="50">
          <h1 className="mb-2">+05</h1>
          <h3 className="text-base md:text-lg text-center font-medium text-white">The technology I have</h3>
        </div>

        <div className="md:col-span-2 text-center md:text-left"    >
          <div className="header" data-aos="fade-left">
            <h6 className='header1' >About myself</h6>
            <h5>What I Do as a Front-End Developer</h5>
            <p>I specialize in building modern, responsive, and interactive web interfaces. My focus is on creating user-friendly experiences using the latest front-end technologies. I also collaborate with teams to ensure seamless integration between front-end and back-end system</p>
            </div>
               <div className="py-12 px-4 bg-[#f3f4f6]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex items-start gap-4 " data-aos="fade-left">
            <div className="bg-orange-500 text-white rounded-l-3xl p-3">
              {service.icon}
            </div>
            <div className='content'>
              <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
            </div>
        </div>
    </section>
  );
}



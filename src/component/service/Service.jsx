import React from 'react';
import './service.css'; 
import { FaLaptopCode } from "react-icons/fa";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { MdDevices } from "react-icons/md";
import { FaPlug } from "react-icons/fa";

export default function Service() {
  const services = [
    {
      title: 'Web Development',
      description: 'Building fast, modern, and user-friendly websites',
      icon: <FaLaptopCode />,
      icon2: <BsArrowDownRightCircleFill />,
    },
    {
      title: 'UI/UX Design',
      description: 'Designing clean and user-friendly interfaces for web and mobile.',
      icon: <FaPaintBrush />,
      icon2: <BsArrowDownRightCircleFill />,

    },
    {
      title: 'SPA Development',
      description: 'Creating single-page applications using React or Next.js.',
      icon: <FaReact />,
      icon2: <BsArrowDownRightCircleFill />,

    },
    {
      title: 'Performance Optimization',
      description: 'Improving speed, loading time, and user experience.',
      icon: <MdSpeed />,
      icon2: <BsArrowDownRightCircleFill />,

    },
    {
      title: 'Responsive Design',
      description: 'Making websites look great on all screen sizes.',
      icon: <MdDevices />,
       icon2: <BsArrowDownRightCircleFill />,

    },
    {
      title: 'API Integration',
      description: 'Connecting front-end with back-end using APIs.',
      icon: <FaPlug />,
      icon2: <BsArrowDownRightCircleFill />,
    },
  ];


  return (
    <section id="service" className="services-section">
      <h2 className="services-header"> My <span className='services-title'>Services</span></h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon flex flex-col-3 justify-between">{service.icon} {service.icon2}</div>
            <h3 className="service-title">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

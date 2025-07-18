import React, { useEffect } from "react";
import './Portfolio.css';
import {Link} from 'react-router-dom'
import freshcart from '../../assets/freshcart.png';
import recipe from '../../assets/recipe.png';
import weather from '../../assets/weather.png';
import masar from '../../assets/masar.png';
import Bookmarker from '../../assets/Bookmarker.png';
import login from '../../assets/login.png';
import danile from '../../assets/daniel.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const projects = [
  {
    id: 1,
    title: "freshcart Website",
    description: "Modern responsive e-commerce site with cart and payment.",
    image: freshcart, 
    link: "https://fresh-cart-beta-ten.vercel.app",
  },
  {
    id: 2,
    title: "Food Recipe",
    description: "Responsive app to explore global recipes.",
    image: recipe ,
    link: "https://recipe-ten-navy.vercel.app/",
  },
  {
    id: 3,
    title: "Weather App",
    description: "Shows current weather using OpenWeatherMap API.",
    image: weather,
    link: "https://moatazh6.github.io/Weather-app/",
  },
  {
    id: 4,
    title: "Masar Project",
    description: "A website for a construction company.",
    image: masar,
    link: "https://moatazh6.github.io/Masar-Project/",
  },
  {
    id: 5,
    title: "Bookmarker",
    description: "Manage your favorite links with full CRUD features.",
    image: Bookmarker,
    link: "https://moatazh6.github.io/CRUDS/",
  },
  {
    id: 6,
    title: "Login App",
    description: "Login UI with localStorage validation.",
    image: login,
    link: "https://moatazh6.github.io/Login-and-Local-Storage/",
  },
  {
    id: 7,
    title: "Daniel Portfolio",
    description: "A portfolio showcasing my work.",
    image: danile,
    link: "https://moatazh6.github.io/Daniels-Exam/",
  },
];



export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, 
    });
  }, []);


  return (
    <section className="projects-section">
      <h2 className="projects-title" data-aos="fade-down">My <span>Projects</span></h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index} data-aos="zoom-in">
            <img src={project.image} alt={project.title} loading="lazy" className="project-image" />

            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
          <Link className="button" to={`/project/${project.id}`}>
          Read More
           </Link> 
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

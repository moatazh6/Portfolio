import React from "react";
import './Portfolio.css';

import freshcart from '../../assets/freshcart.png';
import recipe from '../../assets/recipe.png';
import weather from '../../assets/weather.png';
import masar from '../../assets/masar.png';
import Bookmarker from '../../assets/Bookmarker.png';
import login from '../../assets/login.png';
import danile from '../../assets/daniel.png';


const projects = [
  {
    title: "freshcart Website",
    description: "Modern responsive e-commerce site with cart and payment.",
    image: freshcart, 
    link: "https://fresh-cart-beta-ten.vercel.app",
  },
  {
    title: "Food Recipe",
    description: "Responsive app to explore global recipes.",
    image: recipe ,
    link: "https://recipe-ten-navy.vercel.app/",
  },
  {
    title: "Weather App",
    description: "Shows current weather using OpenWeatherMap API.",
    image: weather,
    link: "https://moatazh6.github.io/Weather-app/",
  },
  {
    title: "Bookmarker",
    description: "Manage your favorite links with full CRUD features.",
    image: Bookmarker,
    link: "https://moatazh6.github.io/CRUDS/",
  },
  {
    title: "Masar Project",
    description: "A website for a construction company.",
    image: masar,
    link: "https://moatazh6.github.io/Masar-Project/",
  },
  {
    title: "Login App",
    description: "Login UI with localStorage validation.",
    image: login,
    link: "https://moatazh6.github.io/Login-and-Local-Storage/",
  },
  {
    title: "Daniel Portfolio",
    description: "A portfolio showcasing my work.",
    image: danile,
    link: "https://moatazh6.github.io/Daniels-Exam/",
  },
];



export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My <span>Projects</span></h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />

            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a className="button" href="../project-details/ProjectDetails.jsx">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

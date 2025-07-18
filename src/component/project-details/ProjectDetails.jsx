import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectDetails.css';
import { useParams } from 'react-router-dom';

import freshcart from '../../assets/freshcart.png';
import recipe from '../../assets/recipe.png';
import weather from '../../assets/weather.png';
import masar from '../../assets/masar.png';
import Bookmarker from '../../assets/Bookmarker.png';
import login from '../../assets/login.png';
import danile from '../../assets/daniel.png';

const projectDetails = [
  {
    id: 1,
    number: '01',
    title: 'FreshCart Website',
    description: 'FreshCart is a modern, fully responsive e-commerce web application built with React. It provides a smooth and intuitive shopping experience, allowing users to browse a variety of products, view detailed information, and manage their shopping cart with ease..',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS','react-router-dom'],
    screenshot: freshcart,
    githubLink: 'https://github.com/moatazh6/Fresh-Cart',
    liveLink: 'https://fresh-cart-beta-ten.vercel.app/',
  },
  {
    id: 2,
    number: '02',
    title: 'Food Recipe',
    description: 'Food Recipe is a user-friendly and visually engaging web application built with React that allows users to explore a variety of delicious meal recipes from different categories. The app provides detailed cooking instructions, ingredients, and images for each recipe, making it perfect for food enthusiasts and home cooks.',
    technologies: ['HTML', 'CSS', 'JavaScript', "SCSS", React.js],
    screenshot: recipe,
    githubLink: 'https://github.com/moatazh6/Recipe',
    liveLink: 'https://recipe-ten-navy.vercel.app/',
  },
  {
    id: 3,
    number: '03',
    title: 'Weather App',
    description: 'Built a dynamic weather application using JavaScript and integrated it with a weather API to fetch real-time data.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    screenshot: weather,
    githubLink: 'https://github.com/moatazh6/Weather-app',
    liveLink: 'https://moatazh6.github.io/Weather-app/',
  },
  {
    id: 4,
    number: '04',
    title: 'Masar Project',
    description: 'Masar is a professional and modern website developed for a Saudi construction company. The site showcases the company’s services, projects, and values with a clean and elegant user interface that reflects trust and expertise in the construction industry.',
    technologies: ['HTML', 'CSS', 'JavaScript','tailwindcss','emailjs'],
    screenshot: masar,
    githubLink: 'https://github.com/moatazh6/Masar-Project',
    liveLink: 'https://moatazh6.github.io/Masar-Project/',
  },
  {
    id: 5,
    number: '05',
    title: 'Bookmarker',
    description: 'Bookmarker is a simple yet powerful web application that helps users save, organize, and manage their favorite websites and links. Inspired by tools like Trello, the app provides an intuitive interface to add, categorize, and revisit useful resources at any time.',
    technologies: ['HTML', 'CSS', 'JavaScript','bootstrap'],
    screenshot: Bookmarker,
    githubLink: 'https://github.com/moatazh6/CRUDS',
    liveLink: 'https://moatazh6.github.io/CRUDS/',
  },
  {
    id: 6,
    number: '06',
    title: 'Login Page',
    description: 'This is a clean and modern Login Page built using HTML, CSS, JavaScript, and Bootstrap. It offers a responsive and user-friendly interface suitable for web applications that require user authentication.',
    technologies: ['HTML', 'CSS', 'JavaScript','bootstrap'],
    screenshot: login,
    githubLink: 'https://github.com/moatazh6/Login-and-Local-Storage',
    liveLink: 'https://moatazh6.github.io/Login-and-Local-Storage/',
  },
  {
    id: 7,
    number: '07',
    title: 'Daniel Portfolio',
    description: 'Daniel Portfolio is a clean, responsive personal portfolio website built using HTML, CSS, and Bootstrap. It showcases professional skills, projects, and contact information in a sleek, modern layout that’s perfect for freelancers, developers, and creatives.',
    technologies: ['HTML', 'CSS', 'bootstrap'],
    screenshot: danile,
    githubLink: 'https://github.com/moatazh6/Daniels-Portfolio',
    liveLink: ' https://moatazh6.github.io/Daniels-Portfolio/',
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="text-center mt-20 text-red-500">Project not found!</div>;
  }

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8" id='details'>
      <div className="max-w-6xl mx-auto">
        <header>
          <h1 className='text-2xl md:text-4xl font-bold mb-4'>Latest<span> Project</span></h1>
        </header>
        <div className="project flex flex-col lg:flex-row bg-white rounded-lg shadow-xl overflow-hidden mb-12">
          <div className="lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <p className="num text-6xl font-extrabold text-gray-300 mb-4">{project.number}</p>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h3>
            <p className="desc text-gray-600 mb-4">{project.description}</p>
            <p className="tech text-gray-700 font-semibold mb-6">{project.technologies.join(', ')}</p>
            <div className="flex gap-4 flex-wrap">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded transition"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded transition"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </a>
            </div>
          </div>

     <div className="image lg:w-1/2 flex justify-center items-center bg-gray-100 p-6 md:p-10">
  <img
    src={project.screenshot}
    alt={project.title}
    loading='lazy'
    className=" max-w-md shadow-lg"
    style={{ borderRadius: "0 100px 0 100px" }} 
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

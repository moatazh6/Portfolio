import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

import Home from './component/home/Home';
import AboutMe from './component/aboutMe/AboutMe';
import Contact from './component/contact/Contact';
import Portfolio from './component/portfolio/Portfolio';
import Service from './component/service/Service';
import NavBar from './component/navBar/NavBar';
import Skills from './component/skills/Skills';
import ProjectDetails from './component/project-details/ProjectDetails';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutMe />
              <Skills />
              <Portfolio />
              <Service />
              <Contact />
            </>
          }
        />

        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;

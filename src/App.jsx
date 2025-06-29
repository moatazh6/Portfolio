import { useState } from 'react'
import './App.css'
import './index.css';
import Home from './component/home/Home';
import AboutMe from './component/aboutMe/AboutMe';
import Contact from './component/contact/Contact';
import Portfolio from './component/portfolio/Portfolio';
import Service from './component/service/Service';
import NavBar from './component/navBar/NavBar';
import Skills from './component/skills/Skills';




function App() {

  return (
    <>
  <NavBar/>
  <Home/>
  <AboutMe/>
  <Skills/>
  <Portfolio/>
  <Service/>
  <Contact/>
    </>
  )
}

export default App

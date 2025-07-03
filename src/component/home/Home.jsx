import React, { useEffect } from 'react'
import ProfileCard from '../profileCard/ProfileCard';
import './Home.css';
import Content from '../content/Content';
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Home() {

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

  return (
<section id="home" className="bg-white flex flex-col-reverse md:flex-row items-center bg-gray-50 mt-60 px-6 gap-10">
      <div className="justify-start w-1/2"  data-aos="fade-right">
    <Content/>
      </div>
      <div className='justify-end w-1/2'   data-aos="fade-left">
        <ProfileCard/>
      </div>
    </section>
  );
}



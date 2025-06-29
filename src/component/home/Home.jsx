import React from 'react'
import ProfileCard from '../profileCard/ProfileCard';
import Content from '../content/Content';

export default function Home() {
  return (
<section id="home" className="bg-white flex flex-col-reverse md:flex-row items-center bg-gray-50 mt-60 px-6 gap-10">
      <div className="justify-start w-1/2">
    <Content/>
      </div>
      <div className='justify-end w-1/2'>
        <ProfileCard/>
      </div>
    </section>
  );
}



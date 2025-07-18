import React from 'react';
import './ProfileCard.css';
import img from '../../assets/Moataz.png';

export default function ProfileCard() {
  return (
    <div className="profile-wrapper">
        <div className="profile-decor"></div>
        <div className="profile-decor2"></div>
        <div className="profile-decor3"></div>
        <div className="profile-decor4"></div>
   <div className="overlay">
  <div className="stat">
    <h1 className='text-2xl'>1</h1>
    <p>years of experience</p>
  </div>
  <div className="stat">
    <h1 className='text-2xl'>+10</h1>
    <p>completed projects</p>
  </div>
  <div className="stat">
    <h1 className='text-2xl'>100%</h1>
    <p>success rate</p>
  </div>
</div>

      <div className="profile-card">

        <div className="profile-img-container">
          <img
            src={img}
            loading='lazy'
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>
    </div>
  );
}

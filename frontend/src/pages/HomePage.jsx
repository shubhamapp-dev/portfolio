import React from 'react';
import "../styles/Home.css";
import HeroImage from "../assets/heroImg.png"
const HomePage = () => {
  return (
    <div className="main">
      <div className="heading">
        <h1>Shubham Sharma</h1>
      </div>
      <div className="container">
        <ul className='list-1'>
          <li>Blogs</li>
          <li>Work</li>
          <li>About</li>
        </ul>
        <img src={HeroImage} alt="admin looking at the camera in thinking position" className='hero-img'/>
        <ul className='list-2'>
          <li>Skills</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage
import React from 'react';
import "../styles/Home.css";
import HeroImage from "../assets/heroImg.png"
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="main">
      <div className="heading">
        <h1>Shubham Sharma</h1>
      </div>
      <div className="container">
        <div>

        </div>
        <ul className='list-1'>
          <Link to="/blogs"><li>Blogs</li></Link>
          <Link to="/work"><li>Work</li></Link>
          <Link to="/about"><li>About</li></Link>
        </ul>
        <img src={HeroImage} alt="admin looking at the camera in thinking position" className='hero-img'/>
        <ul className='list-2'>
          <Link to="/skills"><li>Skills</li></Link>
          <Link to=""><li>Resume</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default HomePage
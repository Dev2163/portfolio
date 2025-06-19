// src/components/Home.jsx
import React from 'react';
import SocialIcons from './SocialIcons';
import profile from '../assets/profile.png'; // Make sure this file exists exactly

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Dev Suthar</h1>
        <h3 className="typing-text">And I'm a <span></span></h3>
        <p>I’m a full-stack developer passionate about building web applications using the MERN stack.</p>
        <SocialIcons />
        <a href="#contact" className="btn">Contact Me</a>
      </div>
      <div className="home-img">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
}

export default Home;

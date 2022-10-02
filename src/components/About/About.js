import React from "react";
import "./App.css";

const About = () => {
  return (
    <>
      <header className="container" id="hero">
        <navbar className="navbar">
          <div className="logo">
            <a href="/">
              <span>CP</span>
            </a>
          </div>
          <div className="navigation">
            <span>Home</span>
            <span>About</span>
            <span>Resume</span>
            <span>Contact</span>
          </div>
        </navbar>
        <div className="about-content">
          <div className="about-text">
            <h1>
              Hi, I am <span>Colette Parker</span> 👋
            </h1>
            <h2>
              I am a <span>junior full stack developer</span> based in Berlin.
              <br></br>
              Hi, I’m Colette. I’m a full stack web developer with a background
              in digital healthcare. I transitioned to software development
              because of my understanding of user experience and strong sense of
              curiosity that makes me want to develop my own technical
              solutions. Recent roles in medical startups have satisfied my
              desire to develop products that are helpful in customers day to
              day life. I am currently working on an Angular project building a
              client side for my marvel movies application based on my existing
              server side code (REST API and database).
            </h2>
          </div>
        </div>
      </header>
    </>
  );
};

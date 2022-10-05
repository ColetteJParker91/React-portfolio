import "./App.css";
import React from "react";

function About() {
  return (
    <>
      <header className="container" id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h3>
              Hi, I’m Colette. I’m a full stack web developer with a background
              in digital healthcare. I transitioned to software development
              because of my understanding of user experience and strong sense of
              curiosity that makes me want to develop my own technical
              solutions. Recent roles in medical startups have satisfied my
              desire to develop products that are helpful in customers day to
              day life. I am currently working on an Angular project building a
              client side for my marvel movies application based on my existing
              server side code (REST API and database).
            </h3>
          </div>
        </div>
      </header>
      <section className="container" id="projects">
        <div className="project-heading">
          <span>My latest projects</span>
        </div>
        <div className="p-heading-description">
          <span>Below you can find some of my latest projects</span>
        </div>
        <div className="project-list">
          <div className="project-one"></div>
          <div className="project-two"></div>
          <div className="project-three"></div>
          <div className="project-four"></div>
          <div className="project-five"></div>
          <div className="project-six"></div>
        </div>
      </section>
      <section className="container" id="call-to-action"></section>
      <footer className="container" id="footer">
        <div className="copyright">
          © 2022 Colette Parker. All rights reserved.
        </div>
        <div className="icons">
          <img src="linkedin.svg" alt="linkedin" className="linkedin"></img>
          <img src="github.svg" alt="github" className="github"></img>
          <img src="twitter.svg" alt="twitter" className="twitter"></img>
          <img src="medium.svg" alt="medium" className="medium"></img>
        </div>
      </footer>
    </>
  );
}

export default About;

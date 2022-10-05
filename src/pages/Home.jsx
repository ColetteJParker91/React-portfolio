import "./App.css";
import React from "react";

function Home() {
  return (
    <>
      <header className="container" id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I am <span>Colette Parker</span> 👋
            </h1>
            <h2>
              I am a <span>junior full stack developer</span> based in Berlin
            </h2>
          </div>
          <img
            src="portrait.jpg"
            className="portrait"
            alt="Colette Parker profile picture"
          ></img>
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
        </div>
      </section>
      <section className="container" id="call-to-action">
        <div className="call-to-action-text">
          <div className="get-in-touch">Get in touch✉️</div>
          <div className="work-together">
            Want to work together or have questions?
          </div>
        </div>
        <button className="email-button">
          <div className="email-button-text">Send me an email🚀</div>
        </button>
      </section>
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

export default Home;

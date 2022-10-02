import logo from "./logo.svg";
import "./App.css";

function App() {
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
            <button
              onClick={() =>
                (window.location = "mailto:colette.joy.parker@gmail.com")
              }
              className="mailto"
            >
              Contact
            </button>
          </div>
        </navbar>
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
        <div className="twitter"></div>
      </footer>
    </>
  );
}

export default App;

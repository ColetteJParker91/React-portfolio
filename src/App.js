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
            <span>Contact</span>
          </div>
        </navbar>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I am Colette Parker 👋</h1>
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
      <section className="container" id="projects"></section>
      <section className="container" id="call-to-action"></section>
      <footer className="container" id="footer"></footer>
    </>
  );
}

export default App;

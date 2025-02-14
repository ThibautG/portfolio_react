import '../styles/App.css';
import Navbar from "./Navbar";
import ButtonHome from "./ButtonHome";
import React from "react";
import Presentation from "./Presentation";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
      <React.Fragment>
          <Navbar />
          <ButtonHome />
          <Presentation />
          <Skills />
          <About />
          <Projects />
          <Footer />
      </React.Fragment>

  );
}

export default App;

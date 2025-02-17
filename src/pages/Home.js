import React from 'react';
import ButtonHome from "../components/ButtonHome";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";

function Home(props) {
    return (
        <div>
            <ButtonHome />
            <Presentation />
            <Skills />
            <About />
            <Projects />
        </div>
    );
}

export default Home;
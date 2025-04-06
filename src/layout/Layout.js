import React from 'react';
import Navbar from "../components/Navbar";
import ButtonHome from "../components/ButtonHome";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";

function Layout(props) {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
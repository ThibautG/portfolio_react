import React from 'react';
import '../styles/Navbar.css'
import {Link, useLocation} from "react-router-dom";

function Navbar(props) {
    const location = useLocation();

    return (
        <header id="main-header">
            <h2 className="logo">Thibaut GAUDINAT</h2>
            <nav id="main-nav">
                {location.pathname === '/' ? (
                    <ul>
                        <li><a href="#competences"> Compétences</a></li>
                        <li><a href="#a-propos"> A propos</a></li>
                        <li><a href="#projets"> Projets</a></li>
                    </ul>
                ) : location.pathname === '/legals' ? (
                    <Link to={'/'}>Accueil</Link>
                ) : null}
            </nav>
        </header>
    );
}

export default Navbar;
import React from 'react';
import '../styles/Navbar.css'

function Navbar(props) {
    return (
        <header id="main-header">
            <h2 className="logo">Thibaut GAUDINAT</h2>
            <nav id="main-nav">
                <ul>
                    <li><a href="#competences"> Compétences</a></li>
                    <li><a href="#a-propos"> A propos</a></li>
                    <li><a href="#projets"> Projets</a></li>
                </ul>

            </nav>
        </header>
    );
}

export default Navbar;
import React from 'react';
import '../styles/Footer.css'
import {Link, useLocation} from "react-router-dom";

function Footer(props) {
    const location = useLocation();

    return (
        <footer id="main-footer">
            {location.pathname === '/' ? (
                <Link to={'/legals'}>mentions légales</Link>
            ) : location.pathname === '/legals' ? (
                <Link to={'/'}>retour à l'accueil</Link>
            ) : null}
        </footer>
    );
}

export default Footer;
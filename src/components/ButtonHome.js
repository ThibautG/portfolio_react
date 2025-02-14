import React from 'react';
import '../styles/Navbar.css'
import arrow from '../assets/arrow-up-solid.svg';

function ButtonHome(props) {
    window.addEventListener('scroll', function() {
        let stickyButton = document.querySelector('.sticky');
        if (window.scrollY > 0) { // Affiche le bouton quand on commence à scroller
            stickyButton.style.display = 'block';
        } else {
            stickyButton.style.display = 'none';
        }
    });

    return (
        <a href="#main-header" className="sticky"><img src={arrow} alt=""/></a>);
}

export default ButtonHome;
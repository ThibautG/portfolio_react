import React from 'react';

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
        <a href="#main-header" className="sticky"><img src="./img/arrow-up-solid.svg" alt=""/></a>);
}

export default ButtonHome;
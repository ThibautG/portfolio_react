import React, {useEffect} from 'react';
import '../styles/Navbar.css'
import arrow from '../assets/arrow-up-solid.svg';

function ButtonHome(props) {
    useEffect(() => {
        const handleScroll = () => {
            let stickyButton = document.querySelector('.sticky');
            if (stickyButton) { // Vérifie que l'élément existe
                if (window.scrollY > 0) {
                    stickyButton.style.display = 'block';
                } else {
                    stickyButton.style.display = 'none';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'event listener quand le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // [] = S'exécute seulement une fois au montage du composant

    return (
        <a href="#main-header" className="sticky"><img src={arrow} alt="Retour en haut"/></a>);
}

export default ButtonHome;
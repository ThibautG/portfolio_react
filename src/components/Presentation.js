import React from 'react';
import photo_big from '../assets/photo-big.png';
import '../styles/Presentation.css'

function Presentation(props) {
    return (
        <section className={"presentation"}>
            <div className="presentation-texte">
                <p></p>
                <h1>Développeur web et web mobile</h1>
                <div className="btn">
                    <a href="tel:+33685096561" className="btn-phone"> &nbsp; 06.85.09.65.61</a>
                    <a href="../assets/GaudinatThibaut_CV.pdf" target="_blank" className="btn-cv"> &nbsp; Téléchargez mon
                        CV</a>
                </div>
                <p>Après une formation intensive de 6 mois à <a
                    href="https://www.campus-centre.fr/lafabriquenumerique41/"
                    target="_blank">La F@brique Numérique 41</a>, je suis à la
                    recherche d’un <strong>contrat de professionnalisation</strong> d’un an à partir du 22 avril 2025.
                </p>
                <ul className="reseaux">
                    <li><a href="mailto:thibaut.gaudinat@gmail.com" className="gmail">thibaut.gaudinat@gmail.com</a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/thibaut-gaudinat" target="_blank"
                           className="linkedin">LinkedIn</a></li>
                </ul>
            </div>
            <div className="presentation-image">
                <img src={photo_big} alt="portrait"/>
            </div>
        </section>

    );
}

export default Presentation;
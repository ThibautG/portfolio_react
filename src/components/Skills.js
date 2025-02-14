import React from 'react';
import '../styles/Skills.css'
import logo_resilient_big from "../assets/logo-resilient-big.png";
import logo_ecoute_big from "../assets/logo-ecoute-big.png";
import logo_autonomie_big from "../assets/logo-autonomie-big.png";
import logo_travail_equipe_big from "../assets/logo-travail-equipe-big.svg";
import logo_gestion_stress_big from "../assets/logo-gestion-stress-big.svg";
import logo_organisation_big from "../assets/logo-organisation-big.svg";
import logo_html5_big from "../assets/logo-html5-big.png";
import logo_css_3 from "../assets/logo-css3-big.svg";
import logo_javascript_big from "../assets/logo-javascript-big.svg";
import logo_react_big from "../assets/logo-react-big.png";
import logo_wordpress_big from "../assets/logo-wordpress-big.svg";
import logo_php_big from "../assets/logo-php-big.svg";


function Skills(props) {
    return (
        <section id="competences" className="competences">
            <h2>Compétences</h2>
            <div className="competences-bloc-global">

                <div className="competences-bloc soft-skills">
                    <h3>Soft Skills</h3>
                    <ul>

                        <li><img src={logo_resilient_big} alt="logo résilience"/></li>
                        <li><img src={logo_ecoute_big} alt="logo écoute"/></li>
                        <li><img src={logo_autonomie_big} alt="logo autonomie"/></li>
                        <li>Résilience</li>
                        <li>Ecoute</li>
                        <li>Autonomie</li>

                        <li><img src={logo_travail_equipe_big} alt="logo equipe"/></li>
                        <li><img src={logo_gestion_stress_big} alt="logo gestion du stress"/></li>
                        <li><img src={logo_organisation_big} alt="logo organisation"/></li>
                        <li>Travail d'équipe</li>
                        <li>Gestion du stress</li>
                        <li>Organisation</li>

                    </ul>
                </div>

                <div className="competences-bloc hard-skills">
                    <h3>Hard Skills</h3>
                    <ul>

                        <li><img src={logo_html5_big} alt="logo html5"/></li>
                        <li><img src={logo_css_3} alt="logo css3"/></li>
                        <li><img src={logo_javascript_big} alt="logo javascript"/></li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>

                        <li><img src={logo_react_big} alt="logo reactJS"/></li>
                        <li><img src={logo_wordpress_big} alt="logo wordpress"/></li>
                        <li><img src={logo_php_big} alt="logo php"/></li>
                        <li>ReactJS</li>
                        <li>Wordpress</li>
                        <li>PHP</li>

                    </ul>
                </div>

            </div>
        </section>
    );
}

export default Skills;
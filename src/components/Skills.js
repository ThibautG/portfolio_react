import React from 'react';

function Skills(props) {
    return (
        <div id="competences" className="competences">
            <h2>Compétences</h2>
            <div className="competences-bloc-global">

                <div className="competences-bloc soft-skills">
                    <h3>Soft Skills</h3>
                    <ul>
                        
                        <li><img src="./img/logo-resilient-big.png" alt="logo résilience"/></li>
                        <li><img src="./img/logo-ecoute-big.png" alt="logo écoute"/></li>
                        <li><img src="./img/logo-autonomie-big.png" alt="logo autonomie"/></li>
                        <li>Résilience</li>
                        <li>Ecoute</li>
                        <li>Autonomie</li>

                        <li><img src="./img/logo-travail-equipe-big.svg" alt="logog equipe"/></li>
                        <li><img src="./img/logo-gestion-stress-big.svg" alt="logo gestion du stress"/></li>
                        <li><img src="./img/logo-organisation-big.svg" alt="logo organisation"/></li>
                        <li>Travail d'équipe</li>
                        <li>Gestion du stress</li>
                        <li>Organisation</li>

                    </ul>
                </div>

                <div className="competences-bloc hard-skills">
                    <h3>Hard Skills</h3>
                    <ul>

                        <li><img src="./img/logo-html5-big.png" alt="logo html5"/></li>
                        <li><img src="./img/logo-css3-big.svg" alt="logo css3"/></li>
                        <li><img src="./img/logo-javascript-big.svg" alt="logo javascript"/></li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>

                        <li><img src="./img/logo-react-big.png" alt="logo reactJS"/></li>
                        <li><img src="./img/logo-wordpress-big.svg" alt="logo wordpress"/></li>
                        <li><img src="./img/logo-php-big.svg" alt="logo php"/></li>
                        <li>ReactJS</li>
                        <li>Wordpress</li>
                        <li>PHP</li>

                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Skills;
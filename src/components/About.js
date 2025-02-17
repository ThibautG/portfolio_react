import React from 'react';
import '../styles/About.css'

function About(props) {
    return (
        <section id="a-propos" className="a-propos">
            <h2>A propos</h2>
            <div className={"a-propos-blocs"}>
                <div>
                    <p>Après deux ans de Classe Préparatoire aux Grandes Ecoles (Math Sup Math Spé) et une Licence en
                        Sciences et Techniques pour l’Ingénieur, j’ai étudié les techniques du son pendant trois ans.</p>
                    <p>J’ai ensuite travaillé pendant 10 ans pour le compte de Radio France en tant qu’Opérateur du Son.</p>
                </div>
                <div>
                    <p>En parallèle j’ai pu mener une carrière de musicien et de régisseur son pour des spectacles.</p>
                    <p>En 2023 j’ai effectué un bilan de compétences qui m’a mené à me reconvertir dans le développement web
                        et web mobile.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
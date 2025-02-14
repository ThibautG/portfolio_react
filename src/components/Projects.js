import React from 'react';

function Projects(props) {
    return (
        <div id="projets" className="projets">
            <h2> Projets</h2>
            <div className="projets-bloc">
                <div className="projets-sous-bloc">
                    <div className="projets-image image1"></div>
                    <div className="projets-detail detail1">
                        <h3>Projet 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis culpa fugit illo
                            quasi quisquam. Id repellendus veniam quaerat doloremque vel magni perspiciatis, hic quasi
                            eius, asperiores, reiciendis deleniti accusantium!</p>
                    </div>
                </div>
                <div className="projets-sous-bloc">
                    <div className="projets-detail detail2">
                        <h3>Projet 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis culpa fugit illo
                            quasi quisquam. Id repellendus veniam quaerat doloremque vel magni perspiciatis, hic quasi
                            eius, asperiores, reiciendis deleniti accusantium!</p>
                    </div>
                    <div className="projets-image image2"></div>
                </div>
                <div className="projets-sous-bloc">
                    <div className="projets-image image3"></div>
                    <div className="projets-detail detail3">
                        <h3>Projet 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis culpa fugit illo
                            quasi quisquam. Id repellendus veniam quaerat doloremque vel magni perspiciatis, hic quasi
                            eius, asperiores, reiciendis deleniti accusantium!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
import React from 'react';
import Card from '../../components/Card';
import './aboutme.css';

const AboutMe = () => {
    return (
        <div className="AboutMe" id="About-me">
            <h2>About Me</h2>
            <div className="CardGroup">
                <Card title="What I love">
                Desde niño me gusta componer y escuchar música. Se convirtió en mi terapia favorita hace ya algunos años. 
                Actualmente me encuentro estudiando programación. Hago cursos diariamente, con el objetivo de  ampliar mis conocimientos, y poder aplicarlos en mis futuros trabajos.
                Me considero una persona simple, disfruto una cerveza con amigos, viajar, conocer gente nueva. Esto siempre me motivó a tener como prioridad sentirme cómodo donde estoy.
                </Card>
                <Card title="What I'm Doing">
                Actualmente me encuentro en Madrid, estudiando desde mi casa y analizando nuevos proyectos de los cuales quiero formar parte.
                </Card>
                <Card title="What I hope to do">
                Quiero recibirme de ingeniero en informatica, publicar mi material musical en linea, 
                y seguir trabajando en las cosas que mas me gusta 
                </Card>
            </div>
        </div>
    )
}
export default AboutMe

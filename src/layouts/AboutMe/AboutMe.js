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
                Actualmente me encuentro en Madrid, estudiando desde mi casa, creando musica y analizando nuevos proyectos de programacion de los cuales quiero formar parte. Siento que cada dia que estoy trabajando es una nueva experiencia que voy adquiriendo.
                </Card>
                <Card title="What I hope to do">
                Espero seguir desarrollandome profesionalmente, adquiriendo conocimientos y poder reflejarlos tanto proyectos que esté realizando como en el trabajo en equipo. Ademas, pretendo seguir creando musica, y poder publicar en linea mis futuras composiciones.  
                </Card>
            </div>
        </div>
    )
}
export default AboutMe

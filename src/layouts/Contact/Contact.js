import React from 'react';
import MapSection from './MapSection/MapSection';
import "./contact.css";

import linkedin from '../../images/dev/linkedin.png';
import gitlab from '../../images/dev/gitlab.png';
import github from '../../images/dev/github.png';

const Contact = () => {


    const handleClick = (e) => {
        e.preventDefault();

        document.addEventListener('copy', e => {
            e.clipboardData.setData('text/plain', 'joaquinlosada1998@gmail.com');
            e.preventDefault();
        })

        document.execCommand('copy');
    }

    const handleHover = (e, value) => {
        if(value){
            e.target.text = 'Add to Clipboard';
        }else{
            e.target.text = 'joaquinlosada1998@gmail.com';
        }
    }

    return (
        <div className="Contact" id="Contact-Me">
            <h2>Contact Me</h2>

            <div className="ContactGroup">
                <div className="Form">
                    <h3>Let's get in touch</h3>
                    <p>Estoy a la escucha de oportunidades para trabajar en proyectos de largo plazo o tiempo indefinido.</p>
                    <h3>Social Accounts: </h3>
                    <div className="ContactList">
                        <a href="/mail" id="mail" 
                            onClick={handleClick} 
                            onMouseOver={(e) => handleHover(e, true)}
                            onMouseOut={(e) => handleHover(e, false)}
                        >
                            joaquinlosada1998@gmail.com
                        </a>
                        <div className="Links">
                            <a href="https://www.linkedin.com/in/joaquin-losada/"><img alt="linkedin" src={linkedin}/></a>
                            <a href="https://gitlab.com/joaquinlosada1998"><img alt="gitlab" src={gitlab}/></a>
                            <a href="https://github.com/joaquinlosada98?tab=repositories"><img alt="github" src={github}/></a>
                        </div>
                        <div className="Cvs">
                            <a href="/pdfs/myPdf-english.pdf" download="myPdf-english.pdf">CV in English</a>
                            <a href="/pdfs/myPdf-spanish.pdf" download="myPdf-spanish.pdf" >CV en Español</a>
                        </div>
                    </div>
                </div>
                <MapSection/>
            </div>
        </div>
    );
}
 
export default Contact;
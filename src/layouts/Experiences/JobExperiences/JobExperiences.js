import React from 'react';
import "./jobexperiences.css";

const JobExperiences = () => {

    return(

        <div className="JobExperiences">
            
            <div className="firstCard">
                <h2>Job Experiences</h2>
                
                <div className="Job">
                    <h3 className="title">System Analyst (2018-2021) </h3>
                    <p className="description">
                        I worked for 3 years in AACI  (Argentinian Asociation of English Culture).
                        I worked on multiple projects aimed at students, teachers and the insitute's executives
                        to impact positively on the communication, accesibility and recognition of the institute.    
                    </p>
                </div>
                <div className="tools">
                    <h3>Tools used: </h3>
                    <img  alt="laravel" src="../../../images/dev/logo-laravel.png"/>  
                    <img  alt="vuejs" src="../../../images/dev/logo-vuejs.png"/> 
                    <img  alt="mysql" src="../../../images/dev/logo-mysql.png"/> 
                    <img  alt="bootstrap" src="../../../images/dev/logo-bootstrap.png"/> 
                </div>
                
            </div>
            <div className="secondCard">
                <div className="Job">
                    <h3 className="title">Senior AR developer (2020)</h3>
                    <p className="description">
                        I worked for one of the biggest cannabis seeds banks in Amsterdam.
                        I was in charge of the development team and  we created an augmented reality (AR) platform that 
                        showcases 3d animated models of the entire bank's catalog.
   
                    </p>
                </div>
                <div className="tools">
                    <h3>Tools used: </h3>
                    <img  alt="a-frame" src="../../../images/dev/logo-aframe.png"/>  
                    <img  alt="js" src="../../../images/dev/logo-js.png"/> 
                    <img  alt="css" src="../../../images/dev/logo-css.png"/> 
                </div>
            </div>
        </div>
    )
}

export default JobExperiences
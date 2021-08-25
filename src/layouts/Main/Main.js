import React from 'react';
import Wave from '../../components/Wave';
import './main.css';

const Main = () => {
    return (
        <div className="Main">
            <div className="MainGroup">
                <h1>
                    <span className="MainHello">Hi!</span><span className="MainName"> I'm Joaquín</span><br />
                    <span className="MainSubtitle">I'm a web developer and a musician</span>
                </h1>
                <p>
                    I work as front-end and fullstack 
                </p>
            
                <div className="links">
                    <a href="/contact">Contact Me</a> <br />
                    <a href="/about-me">More about me</a>
                </div>   
            </div>

            <Wave/>

        </div>
    );
}
 
export default Main;
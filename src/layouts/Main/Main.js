import React from 'react';
import Wave from '../../components/Wave';
import { Link } from 'react-scroll';
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
                    <Link
                        activeClass="active"
                        to="Contact-Me"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                    >
                        Contact Me
                    </Link>

                    <br />

                    <Link
                        activeClass="active"
                        to="About-me"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1000}
                    >
                        More about me
                    </Link>
                </div>   
            </div>

            <Wave/>

        </div>
    );
}
 
export default Main;
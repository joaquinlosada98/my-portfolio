import React, { useEffect, useState }  from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, animateScroll} from 'react-scroll';
import './header.css';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    const handleScroll = (e) => {
        let scrollTop = window.pageYOffset;
        if(scrollTop > 50){
            setScroll(true);
        }else{
            setScroll(false);
        }
    }

    const scrollToTop = (e) => {
        e.preventDefault();
        animateScroll.scrollToTop();

    }

    return (  
        <div className={scroll ? "Header HeaderScroll" : "Header"}>
            <div className="HeaderGroup">
                <a href="top" onClick={scrollToTop}>
                    <StaticImage 
                        src="../../images/logo-trasparente.png"
                        alt="Logo"
                    />
                </a>

                <Link
                    activeClass="active"
                    to="About-me"
                    spy={true}
                    smooth={true}
                    offset={-140}
                    duration={1000}
                >
                    About Me
                </Link>
                
                <Link
                    activeClass="active"
                    to="Experiences"
                    spy={true}
                    smooth={true}
                    offset={-140}
                    duration={600}
                >
                    Experiences
                </Link>

                <Link
                    activeClass="active"
                    to="Studies"
                    spy={true}
                    smooth={true}
                    offset={150}
                    duration={1000}
                >
                    Studies
                </Link>

                <Link
                    activeClass="active"
                    to="Contact-Me"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                >
                    <button>Contact Me</button>
                </Link>

            </div>
        </div>
    );
}
 
export default Header;

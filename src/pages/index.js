import * as React from "react"
import Header from "../layouts/Header/Header";
import Main from "../layouts/Main/Main";
import AboutMe from "../layouts/AboutMe/AboutMe";
import Experiences from "../layouts/Experiences/Experiences";
import Studies from "../layouts/Studies/Studies";
import Contact from '../layouts/Contact/Contact';

import './index.css';

const IndexPage = () => {
  return (
    <div>
        <Header/>
        <Main/>
        <AboutMe/>
        <Experiences/>
        <Studies/>
        <Contact/>   
    </div>
  )
}

export default IndexPage

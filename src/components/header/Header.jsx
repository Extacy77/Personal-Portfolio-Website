import React from 'react';
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { HiRocketLaunch } from "react-icons/hi2";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
       <div className="about_me">
       <h5> Hello I'm</h5>
        <h2>Jyoti Gurung</h2>
        <p className="prompt">I am an aspiring Software Engineer who relishes learning and creating. <HiRocketLaunch /></p>
       </div>
        <HeaderSocials />
        <CTA />
        <a href="#footer" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header

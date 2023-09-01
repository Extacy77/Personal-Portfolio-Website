import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";



const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/jyotigurung/" target="_blank">< BsLinkedin/></a>
        <a href="https://github.com/Extacy77?tab=repositories" target="_blank"><BsGithub /></a>
        <a href="mailto:tamujyoti123@gmail.com" target="_blank"><MdEmail/></a>  
    </div>
  )
}

export default HeaderSocials

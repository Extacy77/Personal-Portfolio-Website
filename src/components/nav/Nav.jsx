import React, { useState } from 'react';
import "./Nav.css";
import { 
  AiOutlineHome, 
  AiOutlineUser 
} from "react-icons/ai";
  import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
  import { GoRocket } from "react-icons/go"

const Nav = () => {

  const [activeNav, setActiveNav] = useState("#");
 
  return (
    <nav>
      <a href="#" 
      onClick={()=>setActiveNav("#")} 
      className={activeNav==="#" ? "active":""}> <AiOutlineHome /></a>
      <a href="#about" 
      onClick={()=>setActiveNav("#about")} 
      className={activeNav==="#about" ? "active":""}><AiOutlineUser /></a>
      <a href="#skill" onClick={()=>setActiveNav("#skill")} 
      className={activeNav==="#skill" ? "active":""}><BiBook /></a>
      <a href="#projects" onClick={()=>setActiveNav("#projects")} 
      className={activeNav==="#projects" ? "active":""}><GoRocket /></a>
      <a href="#contact" onClick={()=>setActiveNav("#contact")} 
      className={activeNav==="#contact" ? "active":""}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav

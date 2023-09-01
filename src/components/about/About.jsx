import React from 'react';
import "./About.css";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import Resume from "../../assets/Jyoti_Gurung_Resume.pdf"
import "./About.css";

const About = () => {
  return (
   <section id="about">
   <div className="about_desc">
    <h1>About Me</h1>
   <div className="about_body">
   <p>I am a recent graduate, having successfully completed my studies and earned a bachelor's degree in the field of computer science.</p>
    <p>In my pursuit of becoming a Software Engineer, I have developed a deep affinity for challenges and derive genuine satisfaction from problem-solving. I combine my technical knowledge with a keen eye for detail. I consistently endeavor to craft applications that not only meet immediate requirements but also exhibit scalability and operational efficiency, aligning with my objective of delivering impactful and sustainable technological solutions.</p>
    <p>When I'm not in front of a computer screen. You'll likely find me engrossed in a variety of engaging pursuits. Delving into books to expand my knowledge, I embrace culinary adventures by experimenting with novel recipes. I practice various physical fitness activities. This dynamic blend of activities not only keeps me well-rounded but also fuels my enthusiasm for both professional and personal growth.</p>
    <a href={Resume} rel="noreferrer" target="_blank">View my resume <BsFillArrowUpRightCircleFill /></a>
   </div>
   </div>
   </section>
  )
}

export default About;

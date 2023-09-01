import React from 'react';
import "./Skills.css";
import { SkillsList } from "./SkillsList";

const Skills = () => {
  return (
    <section id="skill">
    <div className="skill"> 
    <h5>Skills & Tools</h5>
      <h1>My Toolbox & Things I can Do.</h1>
      <p>The skills, tool and technologies I use to bring your product to life:</p>
      <div className=" container skill_container">
        {
         SkillsList.map(({id, icon, title})=> {
          return (
            <div id={id} className="skill_item">
              <span>{icon}</span>
              <h3 className="skill_item-title">{title}</h3>
              </div>
          );
         })
        }
         </div>  
    </div>
   </section>
  )
}

export default Skills;

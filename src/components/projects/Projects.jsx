import React from 'react'
import "./Projects.css";
import { ProjectList } from "./ProjectList";

//dynamically generated projects
const Projects = () => {
  return (
    <section id="projects">
    <h5>My Personal Projects</h5>
    <h2>Project</h2>
    <div className="container project_container">
     {
      ProjectList.map(({id, image, title, description, github, demo}) => {
        return (
          <article
          id={id} className="project_item">
        <div className="project_item-image">
          <img src={image} alt="" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project_item-cta">
          
        <a href={github} className="btn" target="_blank">Github</a>
        <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
        )
      })
     }     
    </div>
    
    <div>
    <a href="https://github.com/Extacy77?tab=repositories" className="more-projects" target="_blank">Click to Explore More Projects on My Github...</a>
    </div>
   </section>
  )
}

export default Projects

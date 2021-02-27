import React from 'react';
import { ImGithub } from "react-icons/im";

export default function ProjectCard(props) {

   return(
      <div className="project-card">
         <div className="project-card-top">
            <p className="project-name">{props.projectName}</p>
         </div>
         <div className="project-card-content">
            <p className="project-card-description">{props.projectDesc}</p>
         </div>
         <div className="project-card-footer">
            <ul className="project-technologies">
               {props.projectTechList.map((tech) => ( <li>{tech}</li> ))}
            </ul>
            <a className="project-github-link" href={props.projectLink}><ImGithub/></a>
         </div>
      </div>
   );
}
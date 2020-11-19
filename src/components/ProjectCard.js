import React from 'react';
import { ImGithub } from "react-icons/im";

export default function ProjectCard(props) {
   return(
      <div className="project-card">
         <div className="card-top">
            <p className="project-name">{props.projectName}</p>
         </div>
         <div className="card-content">
            {props.projectDesc}
         </div>
         <div className="card-footer">
            <p className="project-technologies">
               {props.projectTech}
            </p>
            <a className="github-link" href={props.projectLink}><ImGithub/></a>
         </div>
      </div>
   );
 }
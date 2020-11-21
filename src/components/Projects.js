import React from 'react';
import ProjectCard from './ProjectCard.js';

export default function Projects(props) {
   return(
      <div className="projects-container">
         <ProjectCard
            projectName="Computer Assisted Deep Learning Package"
            projectDesc="
            An online interactive example that makes use of google's TensorFlow.js in an attempt
            to teach people about Deep Learning.
            "
            projectTech={["JavaScript", "TensorFlow.js", "HTML", "CSS"]}
            projectLink="https://cindered.github.io/nnpackage/"
         />
         <ProjectCard
            projectName="Weather-App"
            projectDesc="
            A simple weather web application search engine created using React.js and WeatherStack API.
            "
            projectTech={["React.js", "React Spring", "WeatherStack API"]}
            projectLink="https://github.com/cindered/weather-app/"
         />
         <ProjectCard
            projectName="Chittr"
            projectDesc="
            A 'Twitter-Like' phone application created using React-Native which allows
            users to interact with eachother. Includes user profiles, logins, posts, geolocation,
            following and unfollowing features.
            "
            projectTech={["React-Native", "Node.js", "HTML", "CSS"]}
            projectLink="https://github.com/cindered/chittr/"
         />
      </div>
   );
 }
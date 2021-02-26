import React from 'react';
import Skills from './Skills.js';

export default function About(props) {
   return(
      <div className="about-container">
         <p className="about-name">
         Asaas Baig
         </p>
         <p className="about-title">
         Software Engineer
         </p>
         <section className="about-content">
            <p>
               Software Engineer from Manchester, UK. Educated in Full Stack Web Development, 
               Mobile Applications and Desktop Applications. Currently focussing on back-end development.
            </p>
         </section>
         <Skills
            skillsList={["Java","JavaScript", "Python", "C#", "PHP", "HTML", "CSS"]}
         />
      </div>
   );
 }
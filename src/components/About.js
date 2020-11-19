import React from 'react';

export default function Intro(props) {
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
         <section className="skills-container">
            <p className="skills-title">Languages</p>
            <ul className="skills">
               <li>
                  Java
               </li>
               <li>
                  JavaScript
               </li>
               <li>
                  Python
               </li>
               <li>
                  C#
               </li>
               <li>
                  PHP
               </li>
               <li>
                  HTML
               </li>
               <li>
                  CSS
               </li>
            </ul>
         </section>
      </div>
   );
 }
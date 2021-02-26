import React from 'react';

export default function Skills(props) {
   return (
      <section className="skills-container">
         <p className="skills-title">Languages</p>
         <ul className="skills">
            {props.skillsList.map((skill) => ( <li>{skill}</li> ))}
         </ul>
      </section>
   );
}
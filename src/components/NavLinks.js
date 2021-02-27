import React from 'react';
import { Link } from 'react-scroll';

export default function NavLinks(props) {
   return(
      <div>
         <ul className="nav-links">
            <li>
               <Link
                  activeClass="active"
                  to="about-container"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}>about
               </Link>
            </li>
            <li>
               <Link
                  activeClass="active"
                  to="projects-container"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}>projects
               </Link>
            </li>
            <li>
               <Link
                  activeClass="active"
                  to="contact-container"
                  spy={true}
                  smooth={true}
                  offset={-275}
                  duration={500}>contact
               </Link>
            </li>
         </ul>
      </div>
   );
 }
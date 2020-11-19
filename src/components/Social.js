import React from 'react';
import { ImGithub, ImInstagram, ImLinkedin } from "react-icons/im";

export default function Social(props) {
   return(
      <div className="social">
         <ul className="social-links">
            <li>
               <a href='https://www.github.com/cindered'><ImGithub/></a>
            </li>
            <li>
               <a href='https://www.linkedin.com/in/asaas-baig-55975a183/'><ImLinkedin/></a>
            </li>
            <li>
               <a href='https://www.instagram.com/asaasbaig/'><ImInstagram/></a>
            </li>
         </ul>
      </div>
   );
 }
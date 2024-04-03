import React from "react";
import {  Link,  Router } from "react-router-dom";


export const Section = () => {
  return (
  <>
      <div className="section">
        <ul className="sectionList">
          <li className="sectionPart">
            <Link to="/future/Ring">
              <h2>Прикраси</h2>
              <img src="./img/logo/section/ring.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <Link to="/future/Diamond">
              <h2>Коштовне каміння</h2>
              <img src="./img/logo/section/diamond.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <Link to="/future/Services">
              <h2>Послуги</h2>
              <img src="./img/logo/section/Services.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <Link to="/future/Care">
              <h2>Рекомендації догляду</h2>
              <img src="./img/logo/section/care.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <Link to="/future/Reviews">
              <h2>Відгуки</h2>
              <img src="./img/logo/section/reviews.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <Link to="/future/About">
              <h2>Про нас</h2>
              <img src="./img/logo/section/team.png" alt="" />
            </Link>
          </li>
        </ul>
     
      </div>
    </> 
  );
};

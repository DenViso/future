import React from "react";
import { Link } from "react-router-dom";
export const Ring = () => {
  return (
    <div className="ring">
      <Link to="/future/">На головну</Link>
      <h1>Прикраси</h1>
      <ul className="ringList">
        <li>
          <Link to="/future/Engagement">
            Заручини
            <img src="./img/subsect/1.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/future/WeddingRings">
            Обручки
            <img src="./img/subsect/2.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/future/Women">
            Жіночі
            <img src="./img/subsect/3.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/future/Men">
            Чоловічі
            <img src="./img/subsect/4.png" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

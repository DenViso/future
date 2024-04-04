import React from "react";
import { Link } from "react-router-dom";
export const Ring = () => {
  return (
    <div className="ring">
      <Link to="/future/">На головну</Link>
      <h1>Прикраси</h1>
      <ul className="ringList">
        <li>
          <Link to="/future/Ring/1">
            Заручини
            <img src="./img/subsect/1.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/future/Ring/1">
          Обручки
            <img src="./img/subsect/2.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/future/Ring/1">
          Жіночі
            <img src="./img/subsect/3.png" alt="" />
          </Link>
          </li>
          <li>
                      <Link to="/future/Ring/1">
          Чоловічі
            <img src="./img/subsect/4.png" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

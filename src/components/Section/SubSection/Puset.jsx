import React from "react";
import { Link } from "react-router-dom";

export const Puset = () => {
  return (
    <div className="ring">
      <Link to="/future/Ring"> До прикрас</Link>
      <h2>Обручки</h2>
              <ul className="ringList">
          <li>
            <Link to="">
              Соло
              <img src="" alt="" />
            </Link>
          </li>
          <li>
            <Link to="">
              Соло + розсип
              <img src="" alt="" />
            </Link>
          </li>
          <li>
            <Link to="">
              {" "}
              Фантазія соло
              <img src="" alt="" />
            </Link>
          </li>
          <li>
            <Link to="">
              {" "}
              Фантазія + розсип
              <img src="" alt="" />
            </Link>
          </li>
          <li>
            <Link to="">
              {" "}
              Кольорові
              <img src="" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    
  );
};



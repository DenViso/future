import React from "react";
import { Link } from "react-router-dom";
export const Diamond = () => {
  return (
    <div className="diamond">
      <Link to="/future/">На головну</Link>
      <h1>Коштовне каміння</h1>
      <ul className="diamondList">
        <li>
          <Link>
          <h2>  Діамант</h2>
            <img src="./img/stoun/1.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>Авамарин</h2>
            <img src="./img/stoun/2.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>Смарагд</h2>
            <img src="./img/stoun/3.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>Сапфір</h2>
            <img src="./img/stoun/4.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>Рубін</h2>
            <img src="./img/stoun/5.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>Танзаніт</h2>
            <img src="./img/stoun/6.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>Турмалін</h2>
            <img src="./img/stoun/1.jpeg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>Гранат</h2>
            <img src="./img/stoun/7.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>Топаз</h2>
            <img src="./img/stoun/8.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>Інше каміння</h2>
            <img src="./img/stoun/9.jpg" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

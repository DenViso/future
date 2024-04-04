import React from "react";
import { Link } from "react-router-dom";
export const Women = () => {
  return (
    <div className="ring">
      <Link to="/future/Ring"> До прикрас</Link>
      <h2>Жіночі</h2>
      <ul className="ringList">
        <li>
          <Link to="">
            Каблучка
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            Доріжка
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            Пусети
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {" "}
            Сережки
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            Хрестик
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            Підвіс
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            Ланцюг
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {" "}
            Браслет
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            Інше
            <img src="" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

// export default Women

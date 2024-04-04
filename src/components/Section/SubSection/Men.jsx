import React from "react";
import { Link } from "react-router-dom";

export const Men = () => {
  return (
    <div className="ring">
      <Link to="/future/Ring"> До прикрас</Link>
      <h2>Чоловічі</h2>
      <ul className="ringList">
        <li>
          <Link to="">
            Перстень
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
            {" "}
            Хрест
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {" "}
            Інше
            <img src="" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

// export default Men

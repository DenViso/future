import React from "react";
import "./dropStyle.css";

export const MenuDrop = ({hideDropMenu}) => {
  // const hideDropMenu = () => {
  //   const menuDrop = document.querySelector(".menuDrop");
  //   menuDrop.classList.remove("drop-active");
  // }
  return (
    <div className="menuDrop" onMouseLeave={hideDropMenu}>
      <ul className="menuDropList">
        <li className="menuDropPart">
          <p>Прикраси</p>
        </li>
        <li className="menuDropPart">
          <p>Пусет</p>
        </li>
        <li className="menuDropPart">
          <p>Жіночі каблучки</p>
        </li>
        <li className="menuDropPart">
          <p>Сережки</p>
        </li>
        <li className="menuDropPart">
          <p>Обручки</p>
        </li>
        <li className="menuDropPart">
          <p>Доріжки</p>
        </li>
        <li className="menuDropPart">
          <p>Підвіс</p>
        </li>
        <li className="menuDropPart">
          <p>Жіночі хрестики</p>
        </li>
        <li className="menuDropPart">
          <p>Жіночі браслети</p>
        </li>
        <li className="menuDropPart">
          <p>Чоловічі браслети</p>
        </li>
        <li className="menuDropPart">
          <p>Ланцюги</p>
        </li>
        <li className="menuDropPart">
          <p>Чоловічі хрестикиб,підвіси</p>
        </li>
        <li className="menuDropPart">
          <p>Чоловічі персні</p>
        </li>
        <li className="menuDropPart">
          <p>Броши,запонки та інше</p>
        </li>
      </ul>
    </div>
  );
};

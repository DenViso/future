import React from "react";
import "./dropStyle.css";
import { Link } from "react-router-dom";

export const MenuDrop = ({hideDropMenu}) => {
  
  return (
    <div className="menuDrop" onMouseLeave={hideDropMenu}>
      <ul className="menuDropList">
        <li className="menuDropPart" onClick={hideDropMenu}>
          <Link to="/future/Ring" > <p>Прикраси</p>
          <img src="./img/logo/section/ring.png" alt="" />
          </Link>
          
        </li>
        <li className="menuDropPart" onClick={hideDropMenu}>
        <Link to="/future/Diamond" > <p>Камінці</p>
          <img src="./img/logo/section/diamond.png" alt="" />
          </Link>
          
        </li>
        <li className="menuDropPart" onClick={hideDropMenu}>
        <Link to="/future/Services" > <p>Послуги</p>
          <img src="./img/logo/section/Services.png" alt="" />
          </Link>
          
        </li>
        <li className="menuDropPart" onClick={hideDropMenu}>
        <Link to="/future/Care" >  <p>Поради</p>
          <img src="./img/logo/section/reviews.png" alt="" />
          </Link>
         
        </li>
        <li className="menuDropPart" onClick={hideDropMenu}>
        <Link to="/future/Reviews" >  <p>Відгуки</p>
          <img src="./img/logo/section/care.png" alt="" />
          </Link>
        
        </li>
        <li className="menuDropPart" onClick={hideDropMenu}>
        <Link to="/future/About" >  <p>Про нас</p>
          <img src="./img/logo/section/team.png" alt="" />
          </Link>
         
        </li>
        {/* <li className="menuDropPart">
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
        </li> */}
      </ul>
    </div>
  );
};

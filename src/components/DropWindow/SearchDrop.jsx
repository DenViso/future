import React from "react";
import "./dropStyle.css";

export const SearchDrop = ({ hidenSearchMenu, t }) => {
  // const hidenSearchDrop = () => {
  //   const searchDrop = document.querySelector(".searchDrop");
  //   searchDrop.classList.remove("search-active");
  // }
  return (
    <div className="searchDrop"onMouseLeave={hidenSearchMenu}>
      <div className="search">
        <input type="text " placeholder={t("dropMenu.sec7")} />
        <button>
          <img
            src="./img/headerIcon/search.png"
            alt=""
            // style={{ width: "20px", height: "20px" }}
          />
        </button>
      </div>
    </div>
  );
};

// export default SearchDrop

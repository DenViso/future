import React from "react";

export const CreatedBy = ({ t }) => {
  return (
    <div className="createdBy">
      <h2 className="createdByTitle">{t("created.title")}</h2>
      <ul>
        <li className="createdByList">
          <img
            loading="lazy"
            className="cBImg"
            src="/img/createdBy/1.png"
            alt=""
          />
          <img
            loading="lazy"
            className="cBImg"
            src="/img/createdBy/2.png"
            alt=""
          />

          <div className="cBTel">
            <a className="address" href="tel:+380 0634545828">
              063/45/45/828
            </a>

            <a className="address" href="tel:+380 0961080804">
              096/108/08/04
            </a>
          </div>
        </li>

        <li className="createdByList">
          <img
            loading="lazy"
            className="cBImg"
            src="/img/createdBy/3.png"
            alt=""
          />
          <a className="address" href="mailto:itdeniro00@gmail.com">
            itdeniro00@gmail.com
          </a>
        </li>
      </ul>
      <h2>{t("created.title1")}</h2>
    </div>
  );
};

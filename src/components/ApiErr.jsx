import React from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";
import "./err.css";

export const ApiErr = () => {
  return (
    <>
      <div
        style={{
          position: "relative",

          textAlign: "center",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "300px",
            objectFit: "contain",
            zIndex: "1",
          }}
          sty
          src="/img/logo/logo.svg"
          alt=""
        />

        <img
          style={{
            width: "70%",
            height: "164%",
            position: "absolute",
            top: "10rem",
          }}
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt=""
        />
        <h1 className="error_404-animation">Error "404"</h1>

        <div
          style={{
            marginTop: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            position: "relative",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              textAlign: "center",
              color: "black",
              position: "absolute",
              top: "18rem",
            }}
          >
            Поки ви можете відвідать наші соціальні мережі, або зв'яжіться з
            нами
          </h2>
          <div
            style={{
              padding: "5rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              position: "absolute",
              top: "10rem",
              left: "0",
              marginTop: "5rem",
            }}
          >
            <div
              style={{
                width: "300px",
                height: "200px",
                color: "white",
                position: "absolute",
                top: "14rem",
                left: "3rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <a href="https://www.instagram.com/future.jewelry/?igsh=MXUyNGZlZHc3cDUxMg%3D%3D">
                <img
                  style={{ width: "90%", height: "100%", margin: "1rem" }}
                  loading="lazy"
                  src="/img/soc.svg"
                  alt=""
                />
              </a>
              <a href="https://www.tiktok.com/@futurejewelry.silver">
                <img
                  style={{ width: "140%", height: "100%", margin: "1rem" }}
                  loading="lazy"
                  src="/img/tiktok.png"
                  alt=""
                />
              </a>
            </div>

            <div
              style={{
                width: "40%",
                height: "200px",
                position: "absolute",
                top: "10rem",
                right: "0",
                marginTop: "5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{ width: "40px", height: "40px", marginRight: "1rem" }}
                  src="/img/createdBy/1.png"
                  alt=""
                />
                <a
                  href="tel:+380936918998"
                  style={{
                    color: "black",
                    fontSize: "4rem",
                    lineHeight: "5rem",
                  }}
                >
                  +38 (093) 691-89-98
                </a>
              </div>
              <br />
              <a
                style={{ color: "black", fontSize: "4rem", lineHeight: "5rem" }}
                href="future.com.ua@gmail.com"
              >
                future.com.ua@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

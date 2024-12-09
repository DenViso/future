import React from "react";
import "../../App.css";

import { SimpleSlider } from "../SimpleSlider/SimpleSlider";
import { Section } from "../Section/Section";

export const MainePage = ({ t }) => {
  return (
    <main>
<<<<<<< HEAD
    <section>
      <div className="mainVideo">
        <video
          
          src={"/video/intro1.mp4"}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
         
        />
        <div className="mainText">
          
          <h1>Look to the future, become more beautiful... </h1>
          <span></span>
=======
      <section>
        <div className="mainVideo">
          <video
            loading="lazy"
            src={"/video/intro.webm"}
            type="video/mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="mainText">
            <h1>Look to the future, become more beautiful... </h1>
            <span></span>
          </div>
>>>>>>> 4aa21f9e89a8129d88f631398e9c76aec0a2d996
        </div>
      </section>

      <section style={{ backgroundColor: "white" }}>
        <SimpleSlider />
      </section>

      <section>
        <Section t={t} />
      </section>
    </main>
  );
};

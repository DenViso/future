import React from 'react'
import "../../App.css" 

import {SimpleSlider} from '../SimpleSlider/SimpleSlider'
import {Section} from '../Section/Section'

export const MainePage = () => {
  return (
    
    <main>
    <section>
      <div className="mainVideo">
        <video
          
          src={"./video/intro.mp4"}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
         
        />
        <div className="mainText">
          <div className="logo">
            <img src="./img/logo/logo.png" alt="Logo" />
          </div>
          <h1>Look to the future, become more beautiful... </h1>
          <span></span>
        </div>
      </div>
    </section>

    <section style={{ backgroundColor: "white" }}>
      <SimpleSlider />
    </section>

    <section>
      <Section  />
    </section>
  </main>
  )
}

 
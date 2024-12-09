import React from 'react'
import "../../App.css" 

import {SimpleSlider} from '../SimpleSlider/SimpleSlider'
import {Section} from '../Section/Section'

export const MainePage = ({t}) => {
  return (
    
    <main>
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
        </div>
      </div>
    </section>

    <section style={{ backgroundColor: "white" }}>
      <SimpleSlider />
    </section>

    <section>
      <Section t={t} />
    </section>
  </main>
  )
}

 
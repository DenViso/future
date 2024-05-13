import React from 'react'
import { Link } from "react-router-dom";
export const WeddingRings = ({t}) => {

  return (

    <div className="ring">
           <Link to="Ring">{t("back.toJewelry")}</Link>
    <h2>{t("section.title2")}</h2>
      
    </div>
   
  )
}

// export default WeddingRings
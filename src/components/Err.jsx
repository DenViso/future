import React from 'react'
import { Link } from 'react-router-dom'
import './err.css'

export const Err = ({t}) => {
  return (
    <section class="page_404">
    <div class="container">
      <div class="row"> 
      <div class="col-sm-12 ">
      <div class="col-sm-10 col-sm-offset-1  text-center">
      <div class="four_zero_four_bg">
        <h1 class="text-center ">{t("err.err-h1")}</h1>
      
      
      </div>
      
      <div class="contant_box_404">
      <h3 class="h2">
      {t("err.err-h3")}
      </h3>
      
      <p>{t("err.err-p")}</p>
      
      <Link className='link_404' to ="/" class="back">{t("back.toMain")}</Link>
    </div>
      </div>
      </div>
      </div>
    </div>
  </section>)
}

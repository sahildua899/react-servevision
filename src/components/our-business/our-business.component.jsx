import React, { Fragment } from 'react';
import './our-business.styles.scss'
import Services from '../services/services.component';
const OurBusiness = () => {
  return (
    <Fragment>
    <div className="business-we-own">
            <h2 id="business-that-own">Our Businesses</h2>
            <div className="logos-section">
             <a href="https://outreachkart.com/"><img src="https://outreachkart.com/static/media/logo.fb7b207e9f9b8f2eeac6d019ad7da7c5.svg" alt="Outreach Kart" /></a> 
              <a href="https://trendingnewsbuzz.com/"><img src="https://trendingnewsbuzz.com/wp-content/uploads/2023/02/Trendingnewsbuzz-1.png" alt="Trending News Buzz" /></a>
              <a href="https://hsim.in/"><img src="https://hsim.in/wp-content/uploads/2022/02/png-hsim-logo.png" alt="HSIM" /></a>
            </div>
          </div>
          <Services />
          </Fragment>
  )
}

export default OurBusiness
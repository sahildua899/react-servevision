import './footer.styles.scss';

import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
        <div class="footer-container">
            <h2>Our Locations</h2>
            <div class="locations-container">
              {/* <!-- location 1 --> */}
              <div class="location">
                <h4>Karnal Office</h4>
                <p>Sco-112, Second Floor, Old Tehsil Complex, Near Haryana Photo State, Karnal, Haryana – 132001</p>
              </div>
              {/* <!-- Location 2 --> */}
              <div class="location">
                <h4>Gurugram Office</h4>
                <p>407, Vipul Business Park , Sohna road, <br/>Gurugram – 122018</p>
              </div>
              {/* <!-- Location 3 --> */}
              <div class="location">
                <h4>UK Office</h4>
                <p>Office 2279 182-184 , High Street North, East Ham, <br/>London E6 2JA, GB</p>
              </div>
            </div>
          </div>
          <div class="subfooter-container">
            <ul class="subfooter-ul">
              <li>Portfolio</li>
              <li>Our Team</li>
              <li>Career</li>
              <li>Case Studies</li>
              <li>Services</li>
              <li>Blog</li>
            </ul>
          </div>
    </Fragment>
  )
}

export default Footer
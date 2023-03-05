import React, { Fragment } from 'react'
import './glimpse.styles.scss';
import OurBusiness from '../our-business/our-business.component';
const Glimpse = () => {
  return (
    <Fragment >
    <div className="glimpse-section">
            <div className="glimpse-section-content">
            <h2>A Glimpse of us</h2>
            <p>Serve Vision is a performance marketing firm that specializes in increasing digital brand awareness and online conversions. We have a lot of experience in digital strategy, media execution, and analytics management. We also provide branding, content, and copy & design services</p>
            <h2>Mission</h2>
            <p>Our goal is to provide the finest possible results in terms of affordability, and effectiveness for our customers and to give them a "WOW" Experience with our expertise in services.</p>
            <h2>Vision</h2>
            <p>Our vision is to become a global leader in providing the best and unique web design and marketing services to improve our client’s productivity and business strength.</p>
          </div>
          <div className="glimpse-section-video">
            <iframe  src="https://www.youtube.com/embed/VHlF5qMszgA?autoplay=1" title="Corporate Video - Serve Vision" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <OurBusiness />
        </Fragment>
  )
}

export default Glimpse
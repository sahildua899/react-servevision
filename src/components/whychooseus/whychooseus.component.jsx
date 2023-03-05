import './whychooseus.styles.scss';
import WhyUs from '../../assets/whychooseus.jpg';
import ClientTestimonial from '../clientTestimonial/clientTestimonail.component';

import React, { Fragment } from 'react'

const WhyChooseUs = () => {
  return (
    <Fragment>
        <div class="after-case-studies">
            <div class="main-after-case">
            <div class="after-case-image">
              <img src={WhyUs} alt="Why Choose Us" data-aos="flip-left" />
            </div>
            <div class="after-case-text" data-aos="fade-right">
              <h2>Why Choose Us ?</h2>
              <h4 class="why-choose-para">We help business drivers develop a staggered strategy and align their priorities with the company’s vision.</h4>
              {/* <!-- First --> */}
              <div class="why-icons-section">
                <i class="fa-solid fa-square-check"></i>
                <h4>Amazing Work Process</h4>
              </div>
              <p>We generate A Good Idea First and Applying ideas and Finish the task & Deliver the project</p>
              {/* <!-- Second --> */}
              <div class="why-icons-section">
                <i class="fa-solid fa-square-check"></i>
                <h4>Connecting Potential</h4>
              </div>
              <p>We build a strong client relationship by making them feel comfortable being open and honest.</p>
              {/* <!-- Third --> */}
              <div class="why-icons-section">
                <i class="fa-solid fa-square-check"></i>
                <h4>Increase Productivity</h4>
              </div>
              <p>Productivity requires a well-organised, transparent marketing strategy. We gathers plans, aligns, and mobilises resources and people toward the proper overall objectives.</p>
            </div>
          </div>
        </div>
        <ClientTestimonial />
    </Fragment>
  )
}

export default WhyChooseUs
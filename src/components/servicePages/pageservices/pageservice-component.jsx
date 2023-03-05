// import './pageservice.styles.scss';

import React, {Fragment} from 'react'

const PageService = ({service}) => {
  return (
    <Fragment >
        <div className="service-section-2">
            <h2 className="main-service-heading">Our Services</h2>
            {
                service.map(({services})=> {
                    return(
                        <div className="service-row-one">
                            <div className="services-container">
                                {
                                    services.map(({image, heading, paragraph})=>(
                                        <div className="services">
                                            <div className="image-section">
                                                <img src={image} alt={heading} />
                                            </div>
                                            <h2>{heading}</h2>
                                            <p>{paragraph}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
       


{/* <div class="service-section-2">
          <h2 class="main-service-heading">Our Services</h2>
          <!-- Service Row 1 -->
          <div class="service-row-one">
            <div class="services-container">
              <!-- Service One -->
            <div class="service-one services">
              <div class="image-section">
                <img src="../media/images/guestpost.png" alt="testing Service Section">
              </div>
              <h2>Top-Rated Sites</h2>
              <p>Not every site makes our Power Squad — we choose sites using a 15-point criterion.
                We'll show you our work: Not only do we examine domain authority, but also organic traffic flow, site appearance, domain life, indexed pages, traffic location, etc.
                
              </p>
            </div> */}
   </Fragment>
  )
}

export default PageService
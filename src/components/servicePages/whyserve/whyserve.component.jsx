import './whyserve.styles.scss';

import React, { Fragment } from 'react'

const WhyServevision = ({data}) => {

  return (
    <Fragment>
        <div className="why-servevision-section">
            <div className="why-servevision-testing-section">
            {
            data.map(({heading, paragraphs})=>(
                <div>
                <h2 className="main-service-heading">{heading}</h2>
                {
                    paragraphs.map(({paragraph})=>(
                        <p>{paragraph}</p>
                    ))
                }
                </div>
            ))
        }
            </div>
        </div>
        

{/* <div class="why-ppc-main-container">
          <div class="why-servevision-testing-section">
            <h2 class="main-service-heading">Why Serve Vision For Guest Post </h2>
           <p>Our niche-specific, influential guest posting service is expertly crafted to help your business become visible, authoritative, and well-recognized on websites with high visitor volumes.</p>
            <p>Unlike some companies, we don’t advertise our guest blogging services as a quick fix to improve your search engine rankings and build brand authority. We believe in pursuing the difficult path in order to provide data-driven results that are durable and advantageous for your long-term business success.
            </p>
            <p>Our guest post service is focused on adhering to the natural and proper practices to provide you the best return on your investment, from manually contacting the finest blogger sites to putting contextual links.</p>
            
          </div></div> */}

    </Fragment>
  )
}

export default WhyServevision
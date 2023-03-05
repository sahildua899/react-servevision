import './whyservice.styles.scss'

import React, { Fragment } from 'react'

const WhyServicePage = ({title, description, WhyService}) => {
  return (
    <Fragment>
        <div className="why-ppc-main-container">
            <div className="why-servevision-section">
                <h2>{title}</h2>
                <p>{description}</p>
                {
                    WhyService.map(({service})=>(
                        <div className="why-cards-section">
                            {
                                service.map(({heading, paragraph})=>(
                                    <div className="cards">
                                        <div className="paper">
                                            <h1>{heading}</h1>
                                            <hr />
                                            <p>{paragraph}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    </Fragment>
  )
}

export default WhyServicePage
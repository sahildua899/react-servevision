import './buyservice.styles.scss'

import React, { Fragment } from 'react'

const BuyServicePage = ({data}) => {
  return (
    <Fragment>
        {
            data.map(({heading, paragraph})=>(
                <div className="consultation-section">
            <h4>{heading}</h4>
            <h5>{paragraph}</h5>
            <button className="consult-button">GET PROFESSIONAL ASSISTANCE</button> 
          </div>
            ))
        }
    </Fragment>
  )
}

export default BuyServicePage
import './punchline.styles.scss';

import React, { Fragment } from 'react'

const Punch = ({line}) => {
  return (
    <Fragment>
        <div className="punch-line-section">
            <h2>{line}</h2>
        </div>
        
    </Fragment>
  )
}

export default Punch
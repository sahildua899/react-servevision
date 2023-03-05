import './topclients.styles.scss';

import React, { Fragment } from 'react'

const TopClients = () => {
  return (
    <Fragment>
        <div class="top-clients-work">
            <h2>Top Clients we work with</h2>
            <div class="logos-section">
              <img src="https://honknews.com/wp-content/uploads/2022/04/Honknews-1.png" alt="Honk News"/>
              <img src="https://trendingnewsbuzz.com/wp-content/uploads/2023/02/Trendingnewsbuzz-1.png" alt="Trending News Buzz"/>
              <img src="https://hsim.in/wp-content/uploads/2022/02/png-hsim-logo.png" alt="HSIM"/>
            </div>
          </div>
    </Fragment>
  )
}

export default TopClients
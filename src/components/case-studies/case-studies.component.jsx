
import './case-studies.styles.scss'
import SocialMedia from '../../assets/casestudies/socialmediaconcept.jpg';
import SEOOptimization from '../../assets/casestudies/seooptimization.jpg';
import Advertising from '../../assets/casestudies/advertising.jpg';
import WhyChooseUs   from '../whychooseus/whychooseus.component';

import React, { Fragment } from 'react'

const Casestudies = () => {
  return (
    <Fragment>
        <div class="case-studies">
            <h2 class="main-service-heading">Our Case Studies</h2>
            <div class="case-studies-container">
              {/* <!-- Case Study One --> */}
              <div class="case-study-one">
                <div class="hero-container">
                  <div class="poster-main-container">
                    <div class="poster-container">
                        <img src={SocialMedia} class="poster" alt='social media strategy' />
                    </div>
                    <div class="ticket-container">
                      <div class="ticket__content">
                        {/* <!-- <h4 class="ticket__movie-title">Social Media Strategy</h4> --> */}
                        <p class="ticket__movie-slogan">
                          We set business goals that make sense.The emphasis is on “realistic.” We recommend setting smaller goals that let you grow your social work in a way that is both reasonable and affordable.
                        </p>
                        <button class="ticket__buy-btn">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Case Study Two --> */}
              <div class="case-study-one">
                <div class="hero-container">
                  <div class="poster-main-container">
                    <div class="poster-container">
                      <img src={SEOOptimization} class="poster"  alt='Seo optmization Website'/>
                    </div>
                    <div class="ticket-container">
                      <div class="ticket__content">
                        {/* <!-- <h4 class="ticket__movie-title">SEO Optimization Website</h4> --> */}
                        <p class="ticket__movie-slogan">
                          We create action plan to boost organic search traffic and website rankings.We focous on five most effective SEO tactics to save your time.SEO Outsourcing, Keyword Research, Content Marketing, On-Page SEO, and Link Building
                        </p>
                        <button class="ticket__buy-btn">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Case Study Three --> */}
              <div class="case-study-one">
                <div class="hero-container">
                  <div class="poster-main-container">
                    <div class="poster-container">
                      <img src={Advertising} class="poster" alt='web and media solution' />
                    </div>
                    <div class="ticket-container">
                      <div class="ticket__content">
                        {/* <!-- <h4 class="ticket__movie-title">Web & Mobile Solution</h4> --> */}
                        <p class="ticket__movie-slogan">
                          We use the 5P framework to create strategies that will contact customers and convince them to purchase a product or service.You need to make decisions in the following five different areas: product, price, promotion, place, and people.
                        </p>
                        <button class="ticket__buy-btn">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <WhyChooseUs />
    </Fragment>
  )
}

export default Casestudies
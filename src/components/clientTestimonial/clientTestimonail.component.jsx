import './clientTestimonial.styles.scss';

import React, { Fragment } from 'react'
import TopClients from '../topclients/topclients.component';

const Testimonail = [
    {
        paragraph:'My experience with Serve Vision has been amazing. Not only they delivered an outstanding audit of my website and SEO, they also came up with different new ideas that will benefit my company and increase its online presence.'
    },
    {
        paragraph:'The team at Serve Vision have really built my online presence and this is now converting into increased business levels. Great communication and the team are always on hand if I have any questions.'
    },
    {
        paragraph:'Great service and team. Friendly, professional and engaging. Yes the increased sales, revenue and margins you will see are amazing, but what is the biggest benefit to me is the peace of mind that having Serve Vision as an extension of your own business provides.'
    }
]

const ClientTestimonial = () => {
  return (
    <Fragment>
        <div className="testimonials-section">
            <h2 className="main-service-heading">Client Testimonail</h2>
            <div className="testimonial-main-section">
                {
                    Testimonail.map((test)=>{
                        return (
                            <div className="testimonials">
                                <article>
                                    <figure>
                                    <img alt="A rather marvellous macaw, opening one of its wings to support the cause." src="https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                    </figure>
                                    <div>
                                        <p>{test.paragraph}</p>
                                    </div>
                                </article>
                            </div>
                        )
                    })
                }
            </div>
        </div>
                <TopClients />
    </Fragment>




    // <div class="testimonials-section">
    // <h2 class="main-service-heading">Client Testimonial</h2>
    // <div class="testimonial-main-section">
    //   <!-- testimonail One -->
    //   <div class="testimonial-one testimonials">
    //   <article>
    //     <figure>
    //         <img alt="A rather marvellous macaw, opening one of its wings to support the cause." src="https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    //     </figure>
    
    //     <div>
    //         <p>
    //           My experience with Serve Vision has been amazing. Not only they delivered an outstanding audit of my website and SEO, they also came up with different new ideas that will benefit my company and increase its online presence.
    //         </p>
    //         <!-- <h1>
    //             Marvellous Macaw
    //         </h1> -->
    //     </div>
    //    </article>
    //   </div>
  )
}

export default ClientTestimonial
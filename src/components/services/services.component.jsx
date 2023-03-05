import './services.styles.scss';
import React, { Fragment } from 'react';
import SERVICE_DATA from '../../services';
import Casestudies from '../case-studies/case-studies.component';
import { useNavigate } from 'react-router-dom';
const Services = () => {

    const navigate = useNavigate()
  return (
   <Fragment >
        <div className="service-section-2">
            <h2 className="main-service-heading">Our Services</h2>
                {
                   SERVICE_DATA.map((serviceRow)=>{
                    return (
                        <div className="service-row-one">
                            <div className="services-container">
                                {
                                    serviceRow.services.map((service)=>{
                                        return(
                                            <div onClick={() =>navigate(`/service/${service.id}`)} className="services" id={service.id}>
                                                <div className="image-section">
                                                    <img src={service.image} alt={service.heading} />
                                                </div>
                                                <h2>{service.heading}</h2>
                                                <p>{service.paragraph}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                   })
                }
        </div>
        <Casestudies />
   </Fragment>
  )
}

export default Services
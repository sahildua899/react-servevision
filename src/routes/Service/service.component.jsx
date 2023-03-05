import './service.styles.scss';
import MainService from '../../servicesApi/mainservice';
import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom';
import Punch from '../../components/servicePages/punchline/punchline.component';
import KeypointSection from '../../components/servicePages/keypoints-image/keypoints-image.component';
import PageService from '../../components/servicePages/pageservices/pageservice-component';
import WhyServevision from '../../components/servicePages/whyserve/whyserve.component';
import WhyServicePage from '../../components/servicePages/whyService/whyservice.component';
import BuyServicePage from '../../components/servicePages/buyService/buyservice.component';
import FrequentlyPage from '../../components/servicePages/frequently/frequently.component';
import Footer from '../Footer/footer.component'

const Service = () => {
    const {page} = useParams();
  return (  
        <Fragment>
           {
           MainService.map(({title, content})=>{
            if(title === page) {
                return (
                    <div>
                       {
                        content.map((check)=>{
                            const {punchLine, keypointsSection, Services, WhyServe, title, description, WhyService, BuyService, Frequently} = check;
                            return(
                                <div key={Math.random()}>
                               <Punch line={punchLine} />
                               <KeypointSection data={keypointsSection}  />
                               <PageService service={Services} />
                               <WhyServevision data={WhyServe}  />
                               <WhyServicePage title={title} description={description} WhyService={WhyService} />
                               <BuyServicePage data={BuyService} />
                               <FrequentlyPage data={Frequently} />
                               <Footer />
                               </div>
                            )
                        })
                       }
                    </div>
                )
            }
           })
           }
        </Fragment>
  )
}

export default Service
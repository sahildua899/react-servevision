import './home.styles.scss';
import HomepageVideo from '../../components/homepage-video/homepage-video.component';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Glimpse from '../../components/glimpse/glimpse.component';
import Navigation from '../navigation/navigation.component';
import Footer from '../Footer/footer.component';

const HomePage = () => {
  return (
    <div>
        <Navigation />
        <Outlet />  
        <HomepageVideo />
        <Glimpse />
        <Footer />
    </div>
  )
}

export default HomePage
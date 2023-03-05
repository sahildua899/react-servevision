import React from 'react';
import LvideoBg from '../../assets/video/background.mp4';
import MvideoBg from '../../assets/video/backgroundmobile.mp4';
import './homepage-video.styles.scss';


const HomepageVideo = () => {
  return (
    <div className='video-main'>
        <video src={LvideoBg} autoPlay muted className='laptop-video'></video>
        <video src={MvideoBg} autoPlay muted className='mobile-video'></video>
        <div className="content">
            <h2 className="video-heading">Vision is Something That <br />Drives you Today...</h2>
            <h3 className="need-service">Need Any Services?</h3>
            <div className="image-button-section">
                <button className="image-button">Inquire Here</button>
            </div>
        </div>
    </div>
  )
}

export default HomepageVideo;
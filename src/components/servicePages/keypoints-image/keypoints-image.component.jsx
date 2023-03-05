import './keypoint-image.styles.scss'

import React, { Fragment } from 'react'

const KeypointSection = ({data}) => {
    const {heading, keypoints, image} = data[0]
  return (
    <Fragment>
        <div className="keypoints-image-section">
            <div className="keypoints-image-main-section">
                <div className="keypoints-section">
                    <h2 className="keypoint-title">{heading}</h2>
                    {
                        keypoints.map(({keypoint})=>(
                            <div>
                            <div className="keypoint">
                                <i class="fa-solid fa-square-check"></i>
                                <p>{keypoint}</p>
                            </div>
                            
                            </div>
                        ))
                    }
                    <div className="image-button-section">
                            <div className="image-button" id="image-button"data-toggle="modal" data-target="#exampleModalCenter">Send Me A Proposal</div>
                            </div>
                </div>
                {/* Image Section */}
                    <div className="main-image-section">
                        <img src={image} alt="Content" />
                    </div>
            </div>
        </div>





{/* <div class="keypoints-image-section">
            <div class="keypoints-image-main-section">
            <div class="keypoints-section">
                <h2 class="keypoint-title">Our Authority Guest Posting<br> Service is Custom</h2>
                <!-- Keypoint 1 -->
                <div class="keypoint">
                    <i class="fa-solid fa-square-check"></i>
                    <p>We provide quality posts that build your reputation as an expert </p>
                </div>
                <!-- Keypoint 2 -->
                <div class="keypoint">
                    <i class="fa-solid fa-square-check"></i>
                    <p>Our service enables you to expand your audience</p>
                </div>
                <!-- Keypoint 3 -->
                <div class="keypoint">
                    <i class="fa-solid fa-square-check"></i>
                    <p>We provide quality backlinks and improved follower growth.</p>
                </div>
                <!-- Button -->
        <div class="image-button-section">
          <div class="image-button" id="image-button"data-toggle="modal" data-target="#exampleModalCenter">Send Me A Proposal</div></div>
            </div>
            <div class="main-image-section">
                <img src="../media/pagesslider/guestpostservice.jpg" alt="Content Image">
            </div>
        </div>
        
        </div> */}
    </Fragment>
  )
}

export default KeypointSection
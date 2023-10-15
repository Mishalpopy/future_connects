import VideoPopup from '@/src/modals/video-popup';
import React, { useState } from 'react';


const feture_content = {
    bg_img: "/assets/img/feature/fea-4-hm.jpg",
    title: "Exploring Our Journey Through Innovation",
    info: <>Our journey began with a vision of revolutionizing the way people connect and engage with the world around them. Over the years, we have evolved into a dynamic force in the technology industry, fueling the progress of digital transformation and development. We are proud of the milestones we've reached and the impact we've made on the businesses and lives we touch. Explore our story to see how we've grown, adapted, and led in an ever-changing tech landscape.</>,

    fetures: [
        "Innovative Beginnings",
        "Growth and Adaptation",
        "Leading the Digital Revolution",
        "Making Impact, Shaping the Future",
    ]
}
const {bg_img, title, info,job_info, fetures}  = feture_content

const FeatureArea = () => {
    const [isVideoOpen,setIsVideoOpen] = useState(false);
    return (
        <>
            <div className="feature-area-hm-4 mb-120 p-relative theme-bg">
                <div className="fea-hm-4-item " style={{backgroundImage: `url(${bg_img})`}}>
                   
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-12">
                        <div className="tp-about-4-wrapper about-htm-page">
                            <div className="tp-section-box">
                                <span className="tp-section-subtitle right-white p-0">Our Story</span>
                                <h2 className="tp-section-title mb-15">
                                    {title}
                                </h2>
                            </div>
                            <div className="fea-4-box mt-10 p-relative">
                                <p className="m-0">{info}</p>
                                    <h6>{job_info}</h6>
                                    <i className="flaticon-quote-1 flaticon-quote"></i>
                            </div>
                            <div className="tp-sv-feature-list tp-sv-feature-list-2 pt-35">
                                <ul>{fetures.map((feture, i) => <li key={i}><i className="fal fa-check"></i>{feture}</li>)}</ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* video modal start */}
            <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"ZShulVioUqg"}
            />
             {/* video modal end */}
        </>
    );
};

export default FeatureArea;
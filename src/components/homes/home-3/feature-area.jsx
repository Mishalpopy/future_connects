import Link from 'next/link';
import React from 'react';


const feature_data = [
    {
        id: 1, 
        icon: "flaticon-spy-camera",
        title: "Proven Excellence",
        desc: "Future Connect has a track record of excellence, ensuring reliable and top-quality solutions."
    },
    {
        id: 2, 
        icon: "flaticon-secure",
        title: "Continuous Innovation",
        desc: "We are dedicated to staying at the forefront of technology, providing innovative solutions that keep you ahead of the curve."
    },
    {
        id: 3, 
        icon: "flaticon-global",
        title: "Expert Team",
        desc: "Our team of experts is committed to your success, guaranteeing that your needs are met with professionalism and proficiency."
    },
    {
        id: 4, 
        icon: "flaticon-database",
        title: "Expert Team",
        desc: "Our dedicated team of experts is at the heart of our success. We employ industry-leading professionals who are passionate about what they do."
    },
]

const FeatureArea3 = () => {
    return (
        <>
    <div className="feature-third-area feature-bg-img pt-110 pb-110" style={{backgroundImage: `url(/assets/img/feature/feature-bg.jpg)`}}>
      <div className="container">
         <div className="row justify-content-lg-end">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
               <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                  <span className="tp-section-subtitle d-inline-block right mb-10">Why Choose Us</span>
                  <h2 className="tp-section-title">
                  Why Future Connect Stands Out
                  </h2>
               </div>
               <div className="row">
                  {feature_data.map((item, i)  => 
                    <div key={i} className="col-lg-6 d-flex col-md-6">
                        <div className="fea-list  d-flex align-items-center mb-30">
                        <i className={item.icon}></i>
                        <div className="fea-ctn pl-20">
                            <h5 className="m-0">{item.title}</h5>
                            <p className="m-0">{item.desc}</p>

                        </div>
                        </div>
                    </div>
                  )} 
                  <div className="fea-button pt-20">
                     <Link className="tp-btn mr-25" href="/contact">Get In Touch <i className="fal fa-long-arrow-right"></i></Link>
                    
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
        </>
    );
};

export default FeatureArea3;
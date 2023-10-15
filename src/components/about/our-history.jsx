import Link from 'next/link';
import React from 'react';


const history_data = {
    history: "WHY",
    title: "Future Connect Stands Out",
    description: <>Choosing Future Connect is choosing excellence, innovation, and peace of mind. With a proven track record of success, a dedicated team of experts, and a commitment to staying at the forefront of technological advancements, we offer unmatched solutions for your connectivity, security, automation, and digital transformation needs. When you choose us, you choose a partner who is dedicated to your success. Join us on the journey to a brighter and more connected future. </>,

    yearly_info: [
        {
            id: 1, 
            year: "Our Vission",
            title: "Journey Was Started",
            info: <>Future Connect envisions a connected world, driving innovation and progress through advanced technology solutions.</>,
        },
        {
            id: 1, 
            year: "Our Mission",
            title: "Noman Design Award 2010",
            info: <>"Our mission is to innovate, secure data, transform businesses, and empower individuals, guided by integrity, innovation, collaboration, and excellence.</>,
        },
        {
            id: 1, 
            year: "Expert Team",
            title: "Best Agency In World 2023",
            info: <>Our team of experts is committed to your success, guaranteeing that your needs are met with professionalism and proficiency.</>,
        },
    ]
}
const {history, title, description, yearly_info} = history_data

const OurHistory = () => {
    return (
        <>
            <div className="tp-history-area pb-85 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-5 col-lg-8 ">
                        <div className="tp-about-wrapper about-page">
                            <div className="tp-section-box tp-section-box-2  p-relative">
                                <span className="tp-section-subtitle right d-inline-block">{history}</span>
                                <h2 className="tp-section-title mb-20">
                                    {title}
                                </h2>
                                <p>{description}</p>
                            </div>
                                <Link className="tp-btn mt-30" href="/contact">Learn More <i className="fal fa-long-arrow-right"></i></Link>
                        </div>
                        </div>
                        <div className="col-xxl-6 col-xl-7 col-lg-12">
                            {yearly_info.map((item, i)  => 
                                <div key={i} className="tp-ab-4-right d-flex align-items-center">
                                    <h4>{item.year}</h4>
                                    <div className="ab-4-content">
                                       
                                        <p>{item.info}</p>
                                    </div>
                                </div>                            
                            )}                             
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurHistory;
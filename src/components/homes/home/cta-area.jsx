import Link from 'next/link';
import React from 'react';


const cta_data = [
    {
        id: 1, 
        bg_img: "/assets/img/cta/cta1.jpg",
        title: "Need Appointment?",
        description: <> Initiate your journey towards a smarter, <br />  connected future</>,
    },
    {
        id: 2, 
        bg_img: "/assets/img/cta/cta2.jpg",
        title: "Get in Touch",
        description: <>Reach out to us for<br></br> insights into innovation and digital transformation</>,
    },
]


const CtaArea = () => {
    return (
        <>
            <div className="cta-area">
                <div className="container-fluid p-0">
                    <div className="row g-0">  
                      {cta_data.map((item, i)  => 
                            <div key={i} className=" col-xl-6 col-lg-12">
                                <div className="tp-cta p-relative text-center tp-cta-space" 
                                    style={{backgroundImage: `url(${item.bg_img})`}}>
                                    <div className="tp-cta-text-wapper">
                                        <span>{item.title}</span>
                                        <h3 className="cta-title">{item.description}</h3>
                                        <div className="cta-link pt-110">
                                            <Link href="/contact"><i className="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )} 
                    </div>
                </div>
            </div>
        </>
    );
};

export default CtaArea;
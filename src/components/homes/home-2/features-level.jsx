import React from 'react';

const fetures_data = {
    fetures_one : [
        {
            id: 1, 
            sirial: "01",
            icon: "flaticon-shield",
            title: "Integrity as Our Foundation",
            description: <>At Future Connect, integrity is not just a word; it's our foundational value. We prioritize honesty and ethical conduct in every aspect of our operations.</>,
        },
        {
            id: 2, 
            sirial: "02",
            icon: "flaticon-hacker",
            title: "Innovative Spirit",
            description: <> Innovation is in our DNA. We continuously explore cutting-edge technologies and creative solutions to drive progress and stay at the forefront of the tech industry.</>,
        },
    ],

    fetures_two : [
        {
            id: 1, 
            sirial: "03",
            icon: "flaticon-cctv-11",
            title: "Collaboration is Key",
            description: <> We firmly believe that collaboration breeds success. Working together with our clients and partners, we aim to achieve remarkable results and solve complex challenges.</>,
        },
        {
            id: 2, 
            sirial: "04",
            icon: "flaticon-shield-1",
            title: "Customer-Centric Excellence",
            description: <>ur commitment to excellence is driven by a customer-centric approach. We are dedicated to exceeding your expectations and providing top-notch solutions in networking, security, automation, and digital transformation.</>,
        },
    ],

    circle_img: "/assets/img/feature/fea-big.png",
    circle_data: [
        {cls_1: "icon", cls_2: "text", info: <>Integrity: We operate with unwavering honesty and transparency.</>,},
        {cls_1: "icon2", cls_2: "text2", info: <>Innovation: We push the boundaries to find creative solutions.</>,},

    ]
}
const {fetures_one, fetures_two, circle_img, circle_data}  = fetures_data

const FeaturesLevel = () => {
    return (
        <>
            <div className="tp-feature-area  pb-120">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-xl-12">
                        <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                            <span className="tp-section-subtitle d-inline-block pre mb-10">value</span>
                            <h2 className="tp-section-title">
                                Our Core Values
                            </h2>
                        </div>
                        </div>
                    </div>
                    <div className="row  align-items-center justify-content-center">

                        <div className="col-xl-3 col-lg-6 col-md-6">
                            {fetures_one.map((item, i)  => 
                                <div key={i} className="tp-fea-item p-relative mb-30">
                                    <div className="tp-fea-icon d-flex">
                                        <i className={item.icon}></i>
                                        <div className="fea-big-text">
                                            <span>{item.sirial}</span>
                                        </div>
                                    </div>
                                    <div className="tp-fea-content pt-20">
                                        <h5>{item.title}</h5>
                                        <p className="m-0">{item.description}</p>
                                    </div>
                                </div>
                            )} 
                        </div>

                        <div className="col-lg-6 justify-content-center p-relative d-none d-xl-flex">
                            <div className="tp-fea-big-img p-relative">
                                <img src={circle_img} alt="theme-pure" />
                                {circle_data.map((item, i)  => 
                                    <div key={i} className={`tp-fea-plus-${item.cls_1}`}>
                                        <a href="#"><i className="fal fa-plus"></i></a>
                                        <div className={`fea-plus-icon-${item.cls_2}`}>
                                            <h4 className="m-0">{item.info}</h4>
                                        </div>
                                    </div>
                                )} 
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6">
                            {fetures_two.map((item, i)  => 
                                <div key={i} className="tp-fea-item p-relative mb-30">
                                    <div className="tp-fea-icon d-flex">
                                        <i className={item.icon}></i>
                                        <div className="fea-big-text">
                                            <span>{item.sirial}</span>
                                        </div>
                                    </div>
                                    <div className="tp-fea-content pt-40">
                                        <h5>{item.title}</h5>
                                        <p className="m-0">{item.description}</p>
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

export default FeaturesLevel;
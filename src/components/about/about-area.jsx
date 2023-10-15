import Link from 'next/link';
import React from 'react';


const about_content = {
    img: "/assets/img/about/ab-hm-4.jpg",
    title: <>Experience <br /> In Industry</>,
    year_count: "6",
    year: "Years",
    about: "About Us",
    about_title: " Empowering Connectivity, Security, and Automation for a Digital World",
    post_img: "/assets/img/about/ab-sm-4-4.jpg",
    post : <>At Future Connect, we are passionate about paving the way for innovation, connectivity, and a safer, more automated world. With a deep commitment to harnessing cutting-edge technology, we deliver integrated solutions that empower businesses, organizations, and individuals to thrive in the digital age. Our dedicated team of experts is always ready to provide you with top-notch services that will elevate your connectivity, security, and automation. Discover a brighter future with Future Connect!
    </>,
    author: <><b>Alonso D. Dowson</b> <i>-Head Of Idea</i></>,
    fetoure_1: "New Business Ideas create",
    fetoure_2: "Grow corporate financial system",


}  
const {img, title, year_count, year, about, about_title, post_img, post, author, fetoure_1, fetoure_2}  = about_content


const AboutArea = () => {
    return (
        <>
           <div className="tp-about-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                        <div className="ab-wrapper-4 p-relative">
                            <div className="ab-right-img">
                                <img src={img} alt="theme-pure" />
                            </div>
                            <div className="tp-ab-left-meta">
                                <h3>{title}</h3>
                                <h4>{year_count}</h4>
                                <h5>{year}</h5>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                        <div className="tp-about-info-wrapper pl-0">
                            <div className="tp-section-box tp-section-box-2  p-relative">
                                <span className="tp-section-subtitle right d-inline-block">{about}</span>
                                <h2 className="tp-section-title mb-15">
                                   {about_title}
                                </h2>
                            </div>
                            <hr className="mt-25 mb-30" />
                            <div className="tp-ab-meta">
                                <div className="about-meta-img d-flex">
                                   
                                    <div className="tp-ab-meta-text pl-0">
                                    <p>{post}</p>
                                    
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-30 mb-25" />
     
                            <Link className="tp-btn-border" href="/contact">Get Started Now</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default AboutArea;
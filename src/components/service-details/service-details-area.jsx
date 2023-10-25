import CallToAction from '@/src/forms/call-to-action';
import React from 'react';
import { FaHotel,FaVoteYea } from 'react-icons/fa';
import { GrTechnology,GrShieldSecurity,GrSystem } from 'react-icons/gr';
import { AiOutlineSolution } from 'react-icons/ai';
import { MdAnalytics,MdReviews } from 'react-icons/md';
import { LiaFileInvoiceSolid } from 'react-icons/lia';




const service_details_content = {
    img: "/assets/img/services/service-details-bg.jpg",
    title: "Service Overview",
    info_1: <>At Future Connect, we understand the importance of a strong online presence and efficient connectivity in today's digital age. Our Connectivity and Digital Presence services are designed to help businesses and organizations establish a robust online footprint, engage with their audience, and thrive in the digital world.</>,
    info_2: <>In partnering with Future Connect, you can expect a range of benefits that will enhance your online presence and connectivity. These advantages include:

    Our Connectivity and Digital Presence services are designed to help businesses and organizations establish a robust online footprint, engage with their audience, and thrive in the digital world.</>,

over_veiw_list: [
    {id: 1, icon: <MdAnalytics />, title: "ERP Solutions"},
    {id: 2, icon: <LiaFileInvoiceSolid />, title: "E-invoicing"},
    {id: 3, icon: <MdAnalytics />, title: "Document Management"},
    {id: 4, icon: <MdAnalytics />, title: "Website Development"},
    {id: 5, icon: <MdAnalytics />, title: "Digital Marketing"},
    {id: 6, icon: <MdAnalytics />, title: "Social Media Marketing"},
    {id: 6, icon: <MdAnalytics />, title: "Google Ads"},

],
    
    overview: <>In today's digital age, a strong online presence and efficient connectivity are pivotal for the success of businesses and organizations. At Future Connect, we recognize the significance of these elements in the modern business landscape. Our "Connectivity and Digital Presence Services" are designed to help you establish a robust online footprint, engage effectively with your audience, and thrive in the digital realm.</>,

    overview_features: [
        {
            id: 1, 
            features: [
                "Enhanced Online Visibility: Stand out in the digital crowd with a strong online presence.",
                "Targeted Advertising: Reach the right audience with precision and efficiency.",
                "Boost brand recognition and customer engagement.",

            ],
        },
        {
            id: 2, 
            features: [
                "Improved User Experience: Create a user-friendly online environment that ensures customer satisfaction.", 
                "Data-Driven Strategies: Benefit from data-backed strategies that provide measurable results.", 
            ],
        },
    ],

    bottom_info_title: "Why Choose Future Connect",
    bottom_info: <>Our team of experts is dedicated to staying at the forefront of digital trends and technology. We understand the critical role of a strong digital presence in today's competitive landscape, and we work tirelessly to deliver effective solutions for your connectivity and digital needs.</>,

service: [
    { id: 1, icon: <GrTechnology />, title: "Digital Solutions" },
    { id: 2, icon: <GrShieldSecurity />, title: "Security Solutions" },
    { id: 3, icon: <AiOutlineSolution />, title: "Operations Solutions" },
    { id: 4, icon: <FaHotel />, title: "Hospitality Solutions" },
],


    materials: [
        {id: 1, icon: "fas fa-file-pdf", title: "Company Profile"},
        {id: 2, icon: "fas fa-file-image", title: "Service Details"},
        {id: 3, icon: "fas fa-file-prescription", title: "Service Technician"},
    ]


}
const {img , title, info_1, info_2, over_veiw_list, overview, overview_features, bottom_info_title, bottom_info, service , materials}  = service_details_content


const ServiceDetailsArea = () => {
    return (
        <>
            <div className="tp-service-details-area pt-115 pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9">
                        <div className="tp-service-overveiw-area mr-20">
                            <img className="w-100" src={img} alt="theme-pure" />
                            <div className="tp-overview-details">
                                <h2 className="overview-title">{title}</h2>
                                <p>{info_1}</p>
                                    <p>{info_2}</p>
                                <div className="row over-veiw-list counter-row">
                                    {over_veiw_list.map((item, i) => 
                                        <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                            <div className="tp-over-view-item mb-30">
                                                <div className="over-veiw-counter"></div>
                                                {React.cloneElement(item.icon, { className: 'icon-serverlist', size: '50px', color: '#2a8e5c' })}
                                                <h5>{item.title}</h5>
                                            </div>
                                        </div>                                    
                                    )} 
                                </div>
                                <div className="tp-overview-fea-list">
                                    <p>{overview}</p>
                                    <div className="row">
                                        {overview_features.map((item, i) => 
                                            <div key={i} className="col-xl-6">
                                                <div className="tp-overview-feature">
                                                    <ul>
                                                        {item.features?.map((feature, index) => 
                                                            <li key={index}>
                                                            <FaVoteYea color="#2a8e5c" size="30px" />
                                                                <p> {feature}</p>
                                                            </li>
                                                        )} 
                                                    </ul>
                                                </div>
                                            </div>  
                                        )} 
                                    </div>

                                    <div className="tp-bottom-info pt-20">
                                        <h4>{bottom_info_title}</h4>
                                        <p>{bottom_info}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-3">
                        <div className="tp-sidebar-widget">
                            <h4 className="tp-widget-title">Our Services</h4>
                            <div className="tp-widget-item">
                                <ul>
                                    {service.map((item, i) => 
                                        <li key={i}>
                                            <a href="#"><span>
                    {React.cloneElement(item.icon, { className: 'icon-colored' })} {item.title}
                </span></a>
                                        </li>                                    
                                    )} 
                                </ul>
                            </div>
                        </div>
                        <div className="tp-sidebar-widget pt-50">
                            <h4 className="tp-widget-title">Call To Action</h4>
                            <div className="widget-form grey-bg">
                                <CallToAction /> 
                            </div>
                        </div>
                        <div className="tp-sidebar-widget pt-50">
                            <h4 className="tp-widget-title">Our Materials</h4>
                            <div className="tp-widget-item-2">
                                <ul>
                                    {materials.map((item , i) => 
                                        <li key={i}>
                                            <a href="#"><span><i className={item.icon}></i>{item.title}</span></a>
                                        </li>
                                    )} 
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsArea;
import SocialLinks, { CopyRight } from '@/src/common/social-links';
import React from 'react';

const footer_content = {
   about: "About Us",
   about_des: <>At Future Connect, we are dedicated to transforming the future with cutting-edge technology, connectivity, and automation. Our commitment is to your success and a connected world.</>,
   get_in_touch: "Get In Touch",
   location: <>Al-Baghdadiyah Al-Gharbiyah <br /> Jeddah, KSA</>,
   phone: <>+971 56 371 7846 <br /> +971 56 371 7846</>,
   pages_title: "Main Pages",
   home_link: <>Home</>,
   about_link: <>About Us</>,
   service_link: <>Services</>,
   contact_link: <>Contact Us</>,

   pages: [
      {title: "About Us", link: "/about"},
      {title: "Contact Us", link: "#"},
      {title: "Careers", link: "#"},
      {title: "Partners", link: "#"}, 
   ]
   
   
   
   
}
const {about, about_des, get_in_touch, location, office_time, phone, pages_title, pages, home_link, about_link, service_link, contact_link}  = footer_content

const Footer = ({style_1}) => {
    return (
        <>
     <footer>
      <div className={`footer-widget-area pt-90 pb-50 ${style_1 ? "footer-area-white" : "footer-bg "}`}>
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-md-6">
                  <div className={`${style_1 ? "footer-widget-1" : "footer-widget"} footer-col-1 mb-50`}>
                     <h3 className="footer-widget-title">{about}</h3>
                     <p>{about_des}</p>
                     {style_1 && <a className="footer-link" href="#">Get Started Now <i className="far fa-long-arrow-alt-right"></i></a>}
                  </div>
               </div>
               <div className="col-lg-2 col-md-6">
                  <div className={`${style_1 ? "footer-widget-2" : "footer-widget"} footer-col-2 mb-50`}>
                     <h3 className="footer-widget-title">{get_in_touch}</h3>
                     <div className="footer-contact">
                        <div className="footer-contact-item">
                           <p>{location}</p>
                        </div>
                        <div className="footer-contact-item">
                           <p>{office_time}</p>
                        </div>
                        <div className="footer-contact-item">
                           <p>{phone}</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-2 col-md-6">
                  <div className={`${style_1 ? "footer-widget-2" : "footer-widget"} footer-col-2 mb-50`}>
                     <h3 className="footer-widget-title">{get_in_touch}</h3>
                     <div className="footer-contact">
                        <div className="footer-contact-item">
                          <a href='/'>{home_link}</a>
                        </div>
                        <div className="footer-contact-item">
                        <a href='/'>{about_link}</a>
                        </div>
                        <div className="footer-contact-item">
                        <a href='/'>{service_link}</a>
                        </div>

                        <div className="footer-contact-item">
                        <a href='/'>{contact_link}</a>
                        </div>
                     </div>
                  </div>
               </div>
       
               <div className="col-lg-3 col-md-6"> 
                  <div className={`footer-widget ${style_1 ? "footer-widget-2 footer-col-3" : "footer-col-4"} mb-50`}>
                     <h3 className="footer-widget-title">Get Newsletter</h3>
                     <p>Sign up today for hints, tips & the
                        latest product news</p>
                     <div className="footer-subscribe">
                        <form onSubmit={e => e.preventDefault()}>
                           <input type="email" placeholder="Email address" />
                           <button type="submit"> <i className="far fa-envelope-open"></i></button>
                        </form>
                     </div>
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="copyright-area theme-bgfoo pt-20 pb-20">
         <div className="container">
            <div className="row">
               <div className="col-xl-7 col-lg-7 text-lg-start col-12 text-center ">
                  <div className="copyright-text">
                     <p><CopyRight /> </p> 
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5 text-lg-end col-12 text-center ">
                  <div className="footer-menu">
                     <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
        </>
    );
};

export default Footer;
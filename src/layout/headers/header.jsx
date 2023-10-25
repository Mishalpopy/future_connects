import React, { useEffect, useState } from 'react';
import NavMenu from './nav-menu';
import Sidebar from './sidebar';
import Link from 'next/link';


const HeaderOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [isToggleSearch, setToggleSearch] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const navbar = document.querySelector('.theme-navbar');
//       if (window.scrollY > 0) {
//         navbar.classList.add('scrolled');
//       } else {
//         navbar.classList.remove('scrolled');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

  const offerHadle = () => {
    setIsHide(true);
  };

    return (
        <>
         <header className='theme-navbar'>
            <div className=" navbar-expand-lg navbar-light pl-30 pr-30">
               <div className="container-fluid  navbar-inverse ">
                  <div className="row align-items-center">
                     <div className="col-xl-2 col-lg-6 col-md-5 col-7">
                        <div className="logo">
                           <Link href="/"><img src="/assets/img/logo/fc-logo.png" alt="logo" /></Link>
                        </div>
                     </div>
                     <div className="col-xl-7 d-none d-xl-block text-end">
                        <div className="tp-main-menu text-center">
                           <nav id="mobile-menu">
                           <NavMenu /> 
                           </nav>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-6 col-md-7 col-5">
                        <div className="search-main p-relative">
                              <div className="tp-header-right">
                                
                                
                                 <Link href="/contact" className="tp-btn-2 ml-20 d-none d-md-inline-block">Get In Touch</Link>
                                 <button onClick={() => setIsOpen(true)} className="tp-menu-toggle tp-header-icon ml-20 d-xl-none">
                                    <i className="far fa-bars"></i>
                                 </button>
                              </div>
                
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default HeaderOne;
import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react"; 
import AboutArea from "./about-area";
import OurHistory from "./our-history";
import FeatureArea from "./feature-area";
import Footer from "@/src/layout/footers/footer";
import FeaturesLevel from "../homes/home-2/features-level";
import TestimonialArea from "../homes/home/testimonial-area";

const About = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb  title="About"  innertitle="Transforming the Future"  />
      <AboutArea />
      <OurHistory /> 
     
      <FeatureArea />
      <FeaturesLevel />
     <TestimonialArea />
  
      <Footer />
    </>
  );
};

export default About; 

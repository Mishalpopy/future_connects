import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import Footer from "@/src/layout/footers/footer";
import BreadcrumbDigital from "@/src/common/breadcrumbs/breadcrumbDigital";

const ServiceDetails = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbDigital title="Digital Solutions" innertitle="Commercial CCTV System" />
      <ServiceDetailsArea />
      <Footer />
    </>
  );
};

export default ServiceDetails;

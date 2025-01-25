/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Hero from "./Hero/Hero";
import BrandsLogo from "./BrandsLogo/BrandsLogo.jsx";
import Services from "./Services/Services";
import Footer from "./Footer/Footer";
import About from "./about/About.jsx";
// import Contact from "./contact/Contact.jsx";
import Partners from "./paterner/Patterners.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";

const MainLayout = () => {
  const whatsappNumber = "+250788457408"; // Replace with your WhatsApp number

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partners />
      {/* <Contact /> */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber={whatsappNumber} />
    </>
  );
};

export default MainLayout;

/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Hero from "./Hero/Hero";
import BrandsLogo from "./BrandsLogo/BrandsLogo.jsx";
import Services from "./Services/Services";
import Footer from "./Footer/Footer";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";
import Partners from "./paterner/Patterners.jsx";
import { FaWhatsapp } from "react-icons/fa";

const MainLayout = () => {
  const whatsappNumber = "+250788457408"; // Replace with your WhatsApp number

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partners />
      <Contact />
      <Footer />

      {/* WhatsApp Icon */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
};

export default MainLayout;

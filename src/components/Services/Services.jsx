/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Home, Navigation, CreditCard, Map, ChevronLeft, ChevronRight } from "lucide-react";

const skillsData = [
  {
    name: "Home Detention Monitoring",
    icon: <Home className="w-8 h-8 text-black" />,
    link: "#",
    description: "We provide continuous home detention monitoring to ensure individuals stay within the boundaries of their release agreement. Our advanced technology tracks their movements in real time, offering peace of mind to both clients and authorities.",
    aosDelay: "0",
  },
  {
    name: "Real-Time Tracking",
    icon: <Navigation className="w-8 h-8 text-black" />,
    link: "#",
    description: "With our real-time tracking system, clients and authorities can access up-to-the-minute updates on the detainee's status and location. We ensure full transparency and compliance with the terms of the release agreement.",
    aosDelay: "300",
  },
  {
    name: "Fair Payment Agreement",
    icon: <CreditCard className="w-8 h-8 text-black" />,
    link: "#",
    description: "Our payment system is designed to be fair and transparent, ensuring that both the company and the client are satisfied with the terms. We offer flexible payment options based on the individual's situation and the service provided.",
    aosDelay: "500",
  },
  {
    name: "Accessible Prison Information",
    icon: <Map className="w-8 h-8 text-black" />,
    link: "#",
    description: "We provide clients with real-time access to important prison-related information. This includes data about the detainee's accessibility, status, and any changes to their conditions, helping both clients and authorities stay informed.",
    aosDelay: "700",
  },
];

const Services = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const servicesPerPage = 3;

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = skillsData.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(skillsData.length / servicesPerPage);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const drag = startX - e.pageX;
    if (Math.abs(drag) > 50) {
      if (drag > 0 && currentPage < totalPages) {
        setCurrentPage(prev => prev + 1);
      } else if (drag < 0 && currentPage > 1) {
        setCurrentPage(prev => prev - 1);
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="service">
      <div className="bg-gray-100 dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12 text-center space-y-3">
            <div className="bg-gray-300 py-2 mt-2">
              <h1 data-aos="fade-up" className="text-3xl font-semibold sm:text-3xl text-black dark:text-black">
                Explore Our Services
              </h1>
            </div>
          </div>

          <div 
            className="relative"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 transition-all duration-300">
              {currentServices.map((skill) => (
                <div
                  key={skill.name}
                  data-aos="fade-up"
                  data-aos-delay={skill.aosDelay}
                  className="card space-y-3 sm:space-y-4 p-4"
                >
                  <div>{skill.icon}</div>
                  <h1 className="text-lg font-semibold text-black">{skill.name}</h1>
                  <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-end items-center space-x-4 mt-8">
              <button 
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-300' : 'text-primary hover:bg-gray-200'}`}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button 
                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-300' : 'text-primary hover:bg-gray-200'}`}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-8"
          >
            <button 
              onClick={handleGetStarted}
              className="primary-btn bg-blue-950 hover:bg-gray-700 hover:text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
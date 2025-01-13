/* eslint-disable no-unused-vars */
import React from "react";
import hero from "../../assets/pictures/bracelet4.png";

const Hero = () => {
  const handleGetStarted = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="bg-gradient-to-b from-gray-100 to-gray-200 pt-36 relative"
      id="home"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensures the background covers the full height
      }}
    >
      {/* Optional overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/40 px-4"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center px-16 ml-8 mt-16">
        {/* Text section with enhanced visibility */}
        <h1
          data-aos="fade-up"
          className="text-4xl sm:text-5xl font-bold text-white leading-tight"
        >
          Revolutionizing Home Monitoring with{" "}
          <span className="text-blue-700 extrabold">
            Crystal Bracelet Ltd
          </span>
        </h1>{" "}
        <br />
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-white text-lg leading-relaxed py-4"
        >
          The SecureTrack Ankle Bracelet offers unparalleled accuracy,
          reliability, and convenience for house arrest monitoring. Our
          innovative technology ensures compliance, safety, and peace of mind,
          making it the trusted choice for authorities and families alike.
        </p>{" "}
        <br />
        <div data-aos="fade-up" data-aos-delay="400" className="pt-4 mb-8">
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-8"
          >
            <button
              onClick={handleGetStarted}
              className="primary-btn bg-sky-600 text-white hover:bg-black hover:text-white"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

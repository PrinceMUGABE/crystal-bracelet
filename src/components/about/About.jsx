/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import AboutImg from '../../assets/pictures/bracelet8.png';
import image2 from '../../assets/pictures/bracelet1.png';
import image3 from '../../assets/pictures/bracelet2.jpg';
import image4 from '../../assets/pictures/bracelet3.jpg';
import image5 from '../../assets/pictures/bracelet4.png';
import image6 from '../../assets/pictures/bracelet5.png';
import image8 from '../../assets/pictures/bracelet7.jpeg';
import image9 from '../../assets/pictures/watch.jpg'

function About() {
    
    // Array of images
    const images = [
        AboutImg,
        image2,
        image3,
        image4,
        image5,
        image6,
        image8,
        image9
    ];

    // State to keep track of the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // useEffect hook to change the image every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3000 ms = 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="about" className="py-10 bg-slate-100 dark:text-white">
            <div className='bg-gray-300 mt-2 py-2'>
                <h2
                    data-aos="fade-up"
                    className="text-center text-4xl font-bold mb-10 text-black dark:text-black py-2"
                >
                    About Us
                </h2>
            </div>
            
            <main className="container mx-auto flex flex-col items-center justify-center">

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4 md:p-8 bg-white rounded-lg shadow-lg">
                    <div data-aos="fade-right">
                        <img
                            src={images[currentImageIndex]} // Display image based on the current index
                            alt="No image"
                            className="w-full h-80 object-cover rounded-lg"
                        />
                    </div>
                    <div data-aos="fade-left" className="flex flex-col gap-4">
                        <div className="p-4 border-l-4 border-gray-700">
                            <h3 className="text-2xl font-semibold mb-2 text-black">Who We Are</h3>
                            <p className="text-sm dark:text-slate-800">
                                We are a justice-driven company focused on providing secure home detention services to individuals under legal supervision. Our mission is to collaborate with legal authorities to ensure that detainees remain within the boundaries of their release agreements, utilizing advanced tracking technology and transparent systems for monitoring and reporting.
                            </p>
                        </div>
                        <div className="p-4 border-l-4 border-gray-700">
                            <h3 className="text-2xl font-semibold mb-2 text-black">Vision</h3>
                            <p className="text-sm dark:text-slate-800">
                                Our vision is to become the leading provider of secure home detention services in East Africa, enabling individuals to serve their time within the safety of their homes while ensuring full compliance with justice regulations. We aim to expand our services regionally, contributing to fair and humane treatment within the legal system.
                            </p>
                        </div>
                        <div className="p-4 border-l-4 border-gray-700">
                            <h3 className="text-2xl font-semibold mb-2 text-black">Mission</h3>
                            <p className="text-sm dark:text-slate-800">
                                Our mission is to offer reliable, affordable, and efficient home detention services, ensuring both detainees and authorities are informed and engaged through real-time tracking and accessible data. We strive to maintain high standards of integrity, fairness, and transparency in every aspect of our operations, building trust with clients, families, and justice institutions.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
}

export default About;

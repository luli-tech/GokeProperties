import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);

    return (
        <section className="flex flex-col md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-12 bg-white">
            {/* Text Section */}
            <div
                className="md:w-1/2 text-center md:text-left"
                data-aos="fade-down" // AOS animation for text section
            >
                <h3 data-aos='fade-up' className="text-orange-500 text-[30px] font-bold uppercase mb-2">
                    About Goke-Properties
                </h3>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    Uplifting Life, Enhancing Humanity
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    GokeProperties help people build their REAL ESTATE portfolio by partnering with reputable Real Estate companies that give credible offers which comes with outright/instalment payment plans —that are not only affordable, but also, properly documented; and with our properties in strategic locations across Ibadan, Abeokuta and Lagos State.
                    <br />
                    <br />
                    We sell a piece of land with peace of mind!
                </p>
            </div>

            {/* Image Section */}
            <div
                className="md:w-1/2 flex justify-center"
                data-aos="fade-left" // AOS animation for image section
            >
                <img
                    src="https://cdn.filestackcontent.com/9JaF1kvlRwS9Si6dh0js"
                    alt="About Foundation"
                    className="rounded-md w-full md:w-96 object-cover"
                />
            </div>
        </section>
    );
};

export default AboutSection;

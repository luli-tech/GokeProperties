import React from "react";

const AboutSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center gap-8 px-4 py-8 md:px-16 md:py-12">
            {/* Image Section */}
            <div className="flex-shrink-0">
                <img
                    src="https://via.placeholder.com/150" // Replace with your image source
                    alt="Our Mission"
                    className="w-full md:w-64 rounded-md"
                />
            </div>

            {/* Text Section */}
            <div className="text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">About us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">

                    GokeProperties help people build their REAL ESTATE portfolio by partnering with reputable Real Estate companies that give credible offers which comes with outright/instalment payment plans —that are not only affordable, but also, properly documented; and with our properties in strategic locations across Ibadan, Abeokuta and Lagos State.

                    We sell a piece of land with peace of mind!
                </p>

            </div>
        </section>
    );
};

export default AboutSection;

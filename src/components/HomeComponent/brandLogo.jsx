import React from "react";
import "./brand.css";

const Marquee = () => {
    const logos = [
        "https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk",
        "https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk",
        "https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk",
        "https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk",
        "https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk",
        "https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk",
        "https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk",
        "https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk",
    ];

    return (
        <section
            id="partnered-brands"
            className="py-16 mt-[70px] rounded-3xl bg-gray-100"
        >
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                    Our Partnered Brands
                </h2>
                <p className="text-lg text-gray-600 mt-4 px-4">
                    We are proud to collaborate with some of the most innovative
                    and trusted brands in the industry. Together, we bring
                    unmatched quality and value to our customers, ensuring
                    excellence at every step.
                </p>
            </div>
            <div className="marquee">
                <div className="logo-slide">
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt={`Brand Logo ${index + 1}`} />
                    ))}
                    {/* Duplicate the logos for seamless scrolling */}
                    {logos.map((logo, index) => (
                        <img key={`duplicate-${index}`} src={logo} alt={`Brand Logo ${index + 1}`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;

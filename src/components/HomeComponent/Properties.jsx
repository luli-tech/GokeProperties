import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const properties = [
    {
        id: 1,
        name: "Luxury Villa",
        price: "$1,200,000",
        image: "https://via.placeholder.com/400",
    },
    {
        id: 2,
        name: "Cozy Apartment",
        price: "$500,000",
        image: "https://via.placeholder.com/400",
    },
];

const Properties = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);

    return (
        <section id="properties" className="py-16" data-aos="fade-up">
            <div className="text-center mb-12 px-4" data-aos="fade-down">
                <h2 className="text-4xl font-bold mb-4">Welcome to Your Dream Home</h2>
                <p className="text-lg text-gray-700">
                    Discover the perfect blend of elegance and comfort with our handpicked
                    featured properties. Whether you're seeking the grandeur of a{" "}
                    <strong>Luxury Villa</strong> or the charm and convenience of a{" "}
                    <strong>Cozy Apartment</strong>, we have something tailored just for
                    you. Designed to meet the highest standards of modern living, these
                    homes offer stunning architecture, prime locations, and unparalleled
                    amenities.
                </p>
                <p className="text-lg font-semibold text-blue-600 mt-4">
                    Your perfect home is just a step away—make it yours today!
                </p>
            </div>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                data-aos="zoom-in-up"
            >
                {properties.map((property) => (
                    <div
                        key={property.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay={property.id * 100} // Add delay for each card
                    >
                        <img
                            src={property.image}
                            alt={property.name}
                            className="w-full h-[13rem] object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{property.name}</h3>
                            <p className="text-lg text-blue-600">{property.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Properties;

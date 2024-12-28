import React from "react";
import { CardHoverEffectDemo } from "../aceternity/cardHover";

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
    return (
        <section id="properties" className="py-16">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((property) => (
                    <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={property.image} alt={property.name} className="w-full h-64 object-cover" />
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

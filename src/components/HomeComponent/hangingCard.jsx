import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HangingCard = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, }); // Initialize AOS
    }, []);

    return (
        <div className="m-auto mt-[0px] md:flex-row flex flex-col md:justify-center items-center md:items-stretch space-x-0 md:space-x-5 md:space-y-0 space-y-5 min-h-screen">
            {/* Card 1 */}
            <div
                className="bg-white md:max-h-[200px] rounded-lg shadow-lg p-4 text-center flex-none basis-[250px] w-[90%] h-full overflow-hidden"
                data-aos="fade-up"
            >
                <div className="mb-4">
                    <img
                        src="https://via.placeholder.com/64"
                        alt="Icon"
                        className="mx-auto"
                    />
                </div>
                <h2 className="text-xl font-bold mb-2">Scholarships</h2>
                <p className="text-gray-600 w-[90%] truncate mb-3">
                    For students at all levels of education, including opportunities
                    to study abroad.
                </p>
                <a href="#" className="text-primary-600 hover:underline">
                    Learn More →
                </a>
            </div>

            {/* Card 2 */}
            <div
                className="bg-white md:max-h-[200px] rounded-lg shadow-lg p-4 truncate text-center flex-none basis-[250px] w-[90%] h-full overflow-hidden"
                data-aos="fade-up"
            >
                <div className="mb-4">
                    <img
                        src="https://via.placeholder.com/64"
                        alt="Icon"
                        className="mx-auto"
                    />
                </div>
                <h2 className="text-xl font-bold mb-2">Social Supports</h2>
                <p className="text-gray-600 w-[90%] truncate mb-3">
                    For those who face emotional, financial, and social challenges.
                </p>
                <a href="#" className="text-primary-600 hover:underline">
                    Learn More →
                </a>
            </div>

            {/* Card 3 */}
            <div
                className="bg-white md:max-h-[200px] rounded-lg shadow-lg p-4 truncate text-center flex-none basis-[250px] w-[90%] h-full overflow-hidden"
                data-aos="fade-up"
            >
                <div className="mb-4">
                    <img
                        src="https://via.placeholder.com/64"
                        alt="Icon"
                        className="mx-auto"
                    />
                </div>
                <h2 className="text-xl font-bold mb-2">
                    Developmental Projects
                </h2>
                <p className="text-gray-600 w-[90%] truncate mb-3">
                    Designed to uplift communities, focusing on sustainability and
                    growth.
                </p>
                <a href="#" className="text-primary-600 hover:underline">
                    Learn More →
                </a>
            </div>
        </div>
    );
};

export default HangingCard;

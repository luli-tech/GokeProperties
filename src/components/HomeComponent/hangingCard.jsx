import React from 'react';

const HangingCard = () => {
    return (
        <div className="m-auto mt-[20px] md:flex-row flex flex-col md:justify-center items-center md:items-stretch space-x-0 md:space-x-5 md:space-y-0 space-y-5 min-h-screen">
            {/* Card 1 */}
            <div className="bg-white md:max-h-[250px] rounded-lg shadow-lg p-6 text-center flex-none basis-[300px] w-[90%] h-full">
                <div className="mb-4">
                    <img
                        src="https://via.placeholder.com/64"
                        alt="Icon"
                        className="mx-auto"
                    />
                </div>
                <h2 className="text-xl font-bold mb-2">Scholarships</h2>
                <p className="text-gray-600 mb-4">
                    For students at all levels of education, including opportunities
                    to study abroad.
                </p>
                <a href="#" className="text-primary-600 hover:underline">
                    Learn More →
                </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white md:max-h-[250px] rounded-lg shadow-lg p-6 text-center flex-none basis-[300px] w-[90%] h-full">
                <div className="mb-4">
                    <img
                        src="https://via.placeholder.com/64"
                        alt="Icon"
                        className="mx-auto"
                    />
                </div>
                <h2 className="text-xl font-bold mb-2">Social Supports</h2>
                <p className="text-gray-600 mb-4">
                    For those who face emotional, financial, and social challenges.
                </p>
                <a href="#" className="text-primary-600 hover:underline">
                    Learn More →
                </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white md:max-h-[250px] rounded-lg shadow-lg p-6 text-center flex-none basis-[300px] w-[90%] h-full">
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
                <p className="text-gray-600 mb-4">
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

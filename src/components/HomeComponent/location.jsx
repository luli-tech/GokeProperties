import AnimatedTestimonialsDemo from "./demo";

const Locations = () => {
    return (
        <section id="properties" className="py-15">
            <h2 className="text-3xl font-bold text-center mb-8">Location</h2>
            <div className="text-center mb-12 px-4">
                <p className="text-lg text-gray-700">
                    Discover your ideal haven in prime locations that combine convenience,
                    beauty, and accessibility. Our properties are situated in some of the most
                    sought-after neighborhoods, offering stunning surroundings, proximity to
                    key amenities, and vibrant communities.
                </p>
                <p className="text-lg font-semibold text-blue-600 mt-4">
                    A location that enhances your lifestyle is just as important as the home itself.
                </p>
            </div>
            <AnimatedTestimonialsDemo />
        </section>
    );
};

export default Locations;

const ServicesSection = () => (
    <section id="services" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-2">Property Buying</h3>
                <p className="text-gray-700">Helping you find and purchase your dream property with ease.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-2">Property Selling</h3>
                <p className="text-gray-700">Assisting in selling properties at the best market prices.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-2">Consultation</h3>
                <p className="text-gray-700">Providing expert advice for all your real estate needs.</p>
            </div>
        </div>
    </section>
);

export default ServicesSection;
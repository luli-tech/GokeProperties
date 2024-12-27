const TestimonialsSection = () => (
    <section id="testimonials" className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimony) => (
                <div key={testimony} className="bg-white p-6 shadow-lg rounded-lg">
                    <p className="text-gray-700 italic">"Amazing service! Highly recommended."</p>
                    <p className="mt-4 text-right text-gray-900 font-bold">- Client {testimony}</p>
                </div>
            ))}
        </div>
    </section>
);

export default TestimonialsSection;
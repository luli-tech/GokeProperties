const GallerySection = () => (
    <section id="gallery" className="py-16 rounded-3xl px-5 bg-gray-100">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Our Achievements and Awards</h2>
            <p className="text-lg text-gray-600 mt-4 px-4">
                We take pride in our journey of excellence, marked by numerous achievements and prestigious awards.
                This gallery highlights moments of recognition and milestones that reflect our unwavering commitment
                to quality, innovation, and success.
            </p>
        </div>
        <div className="grid mt-[50px] grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((photo) => (
                <img
                    key={photo}
                    src={`/path-to-photo-${photo}.jpg`}
                    alt={`Award or Achievement ${photo}`}
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
            ))}
        </div>
    </section>
);

export default GallerySection;

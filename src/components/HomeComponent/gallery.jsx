const GallerySection = () => (
    <section id="gallery" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((photo) => (
                <img key={photo} src={`/path-to-photo-${photo}.jpg`} alt="Property" className="w-full h-48 object-cover rounded-lg shadow-lg" />
            ))}
        </div>
    </section>
);

export default GallerySection;

const VideoSection = () => (
    <section id="video" className="bg-gray-200 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Property Tour</h2>
        <div className="flex justify-center">
            <video controls className="w-full max-w-4xl rounded-lg shadow-lg">
                <source src="/path-to-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </section>
);

export default VideoSection;
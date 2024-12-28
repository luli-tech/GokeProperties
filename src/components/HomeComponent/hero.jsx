import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://www.w3schools.com/html/movie.mp4" // Replace with your video URL
                autoPlay
                loop
                muted
            />

            {/* Overlay to darken the video */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            {/* Hero Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-9">
                {/* Animated Hero Title */}
                <motion.h1
                    className="text-2xl font-bold mb-4"
                    initial={{ opacity: 0, scale: 0.5, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                >
                    Welcome to Goke-Properties
                </motion.h1>

                {/* Animated Hero Description */}
                <motion.p
                    className="text-2xl mb-6"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                >
                    Discover the best real estate properties with us.
                </motion.p>

                {/* Container for the Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    {/* First Animated Button */}
                    <motion.div
                        className="inline-block px-6 py-3 bg-blue-600 rounded-full cursor-pointer text-lg"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    >
                        Explore Now
                    </motion.div>

                    {/* Second Animated Button */}
                    <motion.div
                        className="inline-block px-6 py-3 bg-green-600 rounded-full cursor-pointer text-lg"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                    >
                        Contact Us
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

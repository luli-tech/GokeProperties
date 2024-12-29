import React, { useState, useEffect } from "react";

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true); // Controls loader visibility
    const [typedText, setTypedText] = useState(""); // Stores the typed text
    const [progress, setProgress] = useState(0); // Progress percentage
    const fullText = "Welcome to Goke Properties"; // The full text to type
    const typingSpeed = 70; // Speed of typing in milliseconds

    useEffect(() => {
        let textIndex = 0;

        // Ensure the fullText is valid
        if (!fullText || typeof fullText !== "string") {
            console.error("Error: fullText is not defined or is not a string");
            return;
        }

        // Start typing effect
        const typeInterval = setInterval(() => {
            setTypedText((prev) => {
                if (textIndex < fullText.length) {
                    return prev + fullText[textIndex];
                }
                return prev;
            });

            // Calculate percentage progress
            const newProgress = Math.floor((textIndex / fullText.length) * 100);
            setProgress(newProgress);

            textIndex++;

            // Stop typing once all text is typed
            if (textIndex >= fullText.length) {
                clearInterval(typeInterval);
            }
        }, typingSpeed);

        // Timer to hide loader after typing finishes + 2 seconds delay
        const loaderTimeout = setTimeout(() => {
            setIsLoading(false);
        }, fullText.length * typingSpeed + 2000); // Add extra delay after typing ends

        // Cleanup interval and timeout on component unmount
        return () => {
            clearInterval(typeInterval);
            clearTimeout(loaderTimeout);
        };
    }, []); // Empty dependency array to run only once

    // Ensure that when loading is false, nothing renders
    if (!isLoading) return null; // Loader will disappear after the text is typed and delay ends

    return (
        <div className="fixed inset-0 bg-blue-900 text-white flex flex-col items-center justify-center z-[100000]">
            {/* Typewriting effect text */}
            <h1 className="text-3xl font-bold mb-4">{typedText}</h1>

            {/* Progress bar with adjustable width */}
            <div className="w-2/4 bg-gray-300 rounded-full mt-4"> {/* Adjust width here */}
                <div
                    className="bg-white text-xs font-semibold text-center p-0.5 leading-none rounded-full"
                    style={{ width: `${progress}%` }}
                >
                    {progress}%
                </div>
            </div>

            {/* Spinning loader icon */}
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white mt-4"></div>
        </div>
    );
};

export default Loader;

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with options
    }, []);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-15">
            <div
                className="relative grid grid-cols-1 md:grid-cols-2 gap-20"
                data-aos="fade-up" // Add AOS animation
            >
                <div>
                    <div className="relative h-80 w-full" data-aos="zoom-in">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.src}
                                className={`absolute inset-0 ${index === active ? "opacity-100" : "opacity-0"
                                    } transition-opacity duration-500`}
                            >
                                <img
                                    src={testimonial.src}
                                    alt={testimonial.name}
                                    className="h-full w-full rounded-3xl object-cover object-center"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="flex justify-between flex-col py-4"
                    data-aos="fade-left"
                >
                    <div>
                        <h3 className="text-2xl font-bold dark:text-white text-black">
                            {testimonials[active].name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                            {testimonials[active].designation}
                        </p>
                        <p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
                            {testimonials[active].quote}
                        </p>
                    </div>
                    <div className="flex gap-4 pt-12 md:pt-0">
                        <button
                            onClick={handlePrev}
                            className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                        >
                            <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                        >
                            <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

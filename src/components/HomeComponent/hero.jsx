import React from "react";
import { motion } from "framer-motion";
import HangingCard from "./hangingCard";
import { TypewriterEffectDemo } from "../aceternity/heroSection.jsx/hero";

const HeroSection = () => {
    return (
        <section className="relative bg-[lavender] dark:bg-gray-900 pb-[170px] bg-[url(https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk)] bg-cover bg-center lg:h-2xl md:min-h-2xl md:mb-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
            >
                <a
                    href="#"
                    className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    role="alert"
                >
                    <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
                    <span className="text-sm font-medium">Bonus for the first five People</span>
                    <svg
                        className="ml-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </a>
                <h1 className="mb-10 text-4xl mt-[10px] font-sans font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    {/* We buy, we sell, we make you happy */}
                    Welcome!
                </h1>
                <TypewriterEffectDemo />
            </motion.div>
            <div className="hidden md:block md:absolute md:top-[20]  md:left-1/2 md:transform md:-translate-x-1/2 m-auto">
                <HangingCard />
            </div>


        </section>
    );
};

export default HeroSection;

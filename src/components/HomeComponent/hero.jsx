import React from "react";
import { motion } from "framer-motion";
import HangingCard from "./hangingCard";
import { TypewriterEffectDemo } from "../aceternity/heroSection.jsx/hero";

const HeroSection = () => {
    return (
        <section className="relative bg-[lavender] dark:bg-gray-900 pb-[100px] bg-[url(https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk)] bg-cover bg-center lg:h-2xl md:min-h-2xl md:mb-[150px]">
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
                <h1 className="mb-10 text-4xl mt-[50px] font-sans font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    {/* We buy, we sell, we make you happy */}
                    Welcome!
                </h1>
                {/* <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Here at Goke Properties, we focus on markets where investment, innovation, and capital can unlock long-term value and drive economic growth.
                </p> */}
                {/* <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex mt-[50px] flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
                >
                    <a
                        href="#"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                    >
                        Learn more
                        <svg
                            className="ml-2 -mr-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        <svg
                            className="mr-2 -ml-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                        </svg>
                        Watch video
                    </a> */}
                {/* </motion.div> */}
                <TypewriterEffectDemo />
            </motion.div>
            <div className="hidden md:block md:absolute md:top-[50]  md:left-1/2 md:transform md:-translate-x-1/2 m-auto">
                <HangingCard />
            </div>


        </section>
    );
};

export default HeroSection;

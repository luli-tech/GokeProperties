import React, { useEffect } from "react";
import { Compare } from "./compare";
import BeforeContent from "../../HomeComponent/beforeContent";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

function CompareDemo() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with options
    }, []);

    return (
        <div className="p-6">
            <h4
                className="text-2xl font-bold text-center mb-6"
                data-aos="fade-up" // AOS animation for the heading
            >
                Before and After
            </h4>
            <div
                className="mb-6"
                data-aos="fade-right" // AOS animation for the BeforeContent
            >
                <BeforeContent />
            </div>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-3xl"
                data-aos="zoom-in" // AOS animation for the grid container
            >
                <Compare
                    firstImage="https://assets.aceternity.com/code-problem.png"
                    secondImage="https://assets.aceternity.com/code-solution.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[250px] w-full md:h-[300px]"
                    slideMode="hover"
                    data-aos="flip-left" // AOS animation for individual Compare elements
                />
                <Compare
                    firstImage="https://assets.aceternity.com/code-problem.png"
                    secondImage="https://assets.aceternity.com/code-solution.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[250px] w-full md:h-[300px]"
                    slideMode="hover"
                    data-aos="flip-up" // AOS animation for individual Compare elements
                />
                <Compare
                    firstImage="https://assets.aceternity.com/code-problem.png"
                    secondImage="https://assets.aceternity.com/code-solution.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[250px] w-full md:h-[300px]"
                    slideMode="hover"
                    data-aos="flip-right" // AOS animation for individual Compare elements
                />
            </div>
        </div>
    );
}

export default CompareDemo;

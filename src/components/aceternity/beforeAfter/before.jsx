import React from "react";
import { Compare } from "./compare";
import BeforeContent from "../../HomeComponent/beforeContent";

function CompareDemo() {
    return (
        <div className="p-6">
            <h4 className="text-2xl font-bold text-center mb-6">Before and After</h4>
            <div className="mb-6">
                <BeforeContent />
            </div>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-3xl">
                <Compare
                    firstImage="https://assets.aceternity.com/code-problem.png"
                    secondImage="https://assets.aceternity.com/code-solution.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[250px] w-full md:h-[300px]"
                    slideMode="hover"
                />
                <Compare
                    firstImage="https://assets.aceternity.com/code-problem.png"
                    secondImage="https://assets.aceternity.com/code-solution.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[250px] w-full md:h-[300px]"
                    slideMode="hover"
                />
                <Compare
                    firstImage="https://assets.aceternity.com/code-problem.png"
                    secondImage="https://assets.aceternity.com/code-solution.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[250px] w-full md:h-[300px]"
                    slideMode="hover"
                />
            </div>
        </div>
    );
}

export default CompareDemo;

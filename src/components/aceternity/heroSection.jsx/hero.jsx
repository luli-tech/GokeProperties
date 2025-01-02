import { TypewriterEffect } from "./herocomponent";

export function TypewriterEffectDemo() {
    const words = [
        {
            text: "We-",
        },
        {
            text: "Buy- ",
        },
        {
            text: "We-",
        },
        {
            text: "Sell- ",
        },
        {
            text: "We-",
        },
        {
            text: "Make-",
        },
        {
            text: "you-",
        },
        {
            text: "Happy",
        },
        {
            text: "@GokeProperties",
            className: "w-5 text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        (<div className="flex flex-col items-center justify-center h-[18rem] ">
            <p className="text-black  dark:text-neutral-200 text-base mt-10  mb-5">
                Here at Goke Properties, we focus on markets where investment, innovation, and capital can unlock long-term value and drive economic growth.
            </p>
            <TypewriterEffect words={words} />
            <div
                className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
                <button
                    className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                    Join now
                </button>
                <button
                    className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                    Signup
                </button>
            </div>
        </div>)
    );
}

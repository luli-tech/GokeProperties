import React, { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-black md:h-[100px] text-white md:mb-[3.5rem] shadow-md">
            <div className="container mx-auto px-4">
                {/* Top Section: Logo and Contact Info */}
                <div className="flex m-auto sm:w-full  lg:w-[50%] bg-black items-center  justify-between py-4">
                    {/* Logo Section */}
                    <div className="flex  items-center">
                        <img
                            src="path/to/logo.png" // Replace with your logo path
                            alt="Logo"
                            className="h-10"
                        />
                        <h1 className="text-lg font-bold uppercase ml-2">
                            Goke-Properties
                        </h1>
                    </div>

                    {/* Contact Info */}
                    <div className="hidden md:flex flex-col items-center">
                        <span className="mr-2">Have Any Questions?</span>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-orange-500 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 7.89a1 1 0 001.32 0L21 8m-9-5v10"
                                />
                            </svg>
                            <span className="font-bold text-white">
                                +234-9012749504
                            </span>
                        </div>
                    </div>

                    {/* Hamburger Icon (Mobile Only) */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Section */}
                <nav
                    className={`${menuOpen ? "block" : "hidden"} rounded lg:w-[75%] md:w-[100%] w-full  md:block overflow-hidden m-auto shadow-lg px-[20px] bg-white text-black py-4`}
                >
                    <ul className="flex flex-col md:flex-row justify-around md:justify-center m-auto items-center w-[fit-content] space-y-2 md:space-y-0 sm:space-x-2 lg:space-x-9 md:space-x-7">
                        {[
                            "Home",
                            "About Us",
                            "Our Programs",
                            "Our Gallery",
                            "News & Events",
                            "Contact Us",
                        ].map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className="hover:border-blue-500 font-bold py-[10px] hover:text-blue-900 border-transparent border-b-2 transition-colors duration-300 truncate w-[20px]"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

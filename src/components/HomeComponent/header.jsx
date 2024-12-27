import React, { useState, useEffect } from "react";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // State to control visibility
    const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
    const [scrollingDown, setScrollingDown] = useState(false); // Track if scrolling down

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 200) {
            // If the scroll position is greater than 10, hide the header when scrolling down
            if (currentScrollY > lastScrollY) {
                setIsVisible(false); // Scrolling down, hide header
            } else {
                setIsVisible(true); // Scrolling up, show header
            }
        } else {
            // When scroll position is less than 10, make sure the header is visible
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        return () => {
            // Clean up the event listener
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            {/* Header */}
            <header
                className={`bg-blue-900 text-white p-4 fixed w-full z-10 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Goke-Properties</h1>
                    {/* Hamburger Button */}
                    <button
                        className="sm:hidden text-white text-2xl focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        ☰
                    </button>
                    {/* Desktop Navigation */}
                    <nav className="hidden sm:flex space-x-4">
                        <a href="#hero" className="hover:underline">Home</a>
                        <a href="#about" className="hover:underline">About</a>
                        <a href="#services" className="hover:underline">Services</a>
                        <a href="#testimonials" className="hover:underline">Testimonials</a>
                        <a href="#gallery" className="hover:underline">Gallery</a>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full bg-blue-900 text-white w-64 z-20 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 sm:hidden`}
            >
                <div className="p-4">
                    <button
                        className="text-2xl focus:outline-none mb-4"
                        onClick={toggleSidebar}
                    >
                        ✕
                    </button>
                    <nav className="space-y-4">
                        <a href="#hero" className="block hover:underline">Home</a>
                        <a href="#about" className="block hover:underline">About</a>
                        <a href="#services" className="block hover:underline">Services</a>
                        <a href="#testimonials" className="block hover:underline">Testimonials</a>
                        <a href="#gallery" className="block hover:underline">Gallery</a>
                        <a href="#contact" className="block hover:underline">Contact</a>
                    </nav>
                </div>
            </aside>

            {/* Overlay for Sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10 sm:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
};

export default Header;

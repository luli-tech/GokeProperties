import React from "react";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitch, IconBrandTwitter, IconBrandWhatsapp } from "@tabler/icons-react";
function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {/* About Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">About Us</h2>
                    <p className="text-sm leading-relaxed">
                        We are committed to helping you find your dream property. With a wide range of listings and a dedicated team, we make the process seamless and efficient.
                    </p>
                </div>

                {/* Navigation Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="/properties" className="hover:underline">Properties</a></li>
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/blog" className="hover:underline">Blog</a></li>
                    </ul>
                </div>

                {/* Contact & Social Media */}
                <div>

                    <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                    <p className="text-sm">
                        No 15, Major Salawu, Agbowo UI Ibadan<br />
                        City, State, ZIP<br />
                        Phone: (+234) 0901-274-9501<br />
                        Email: gokeproperties001@gmail.com
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a
                            href="#"
                            className="hover:text-gray-300 text-xl"
                            aria-label="Facebook"
                        >
                            <IconBrandFacebook />
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-300 text-xl"
                            aria-label="Twitter"
                        >
                            <IconBrandTwitter />
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-300 text-xl"
                            aria-label="Instagram"
                        >
                            <IconBrandWhatsapp />
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-300 text-xl"
                            aria-label="Instagram"
                        >
                            <IconBrandInstagram />
                        </a>
                    </div>
                </div>
            </div>

            {/* Subscription Form */}
            <div className="mt-10 bg-blue-700 py-6">
                <div className="container mx-auto text-center">
                    <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
                    <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-md w-full sm:w-auto focus:outline-none text-gray-700"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-400 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-6 border-t border-blue-500 pt-6 text-center">
                <p className="text-sm">© 2025 Goke-Properties Co. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

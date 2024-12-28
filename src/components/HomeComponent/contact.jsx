import React, { useState } from "react";

const ContactSection = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        // Handle form submission
    };

    return (
        <section id="contact" className="py-16 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" className="px-8 py-3 bg-blue-600 text-white rounded-full">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactSection;

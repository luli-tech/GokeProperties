import React, { useState } from "react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for unused and unopened items. Contact our support team for more details."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship internationally. Shipping costs and delivery times vary by destination."
        },
        {
            question: "How can I track my order?",
            answer: "You can track your order through the tracking link sent to your email after your purchase."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and other local payment options."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can contact us via email at gokeproperties@gmail.com or call us 090."
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="py-10 mb-10 rounded-2xl bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4 border-b border-gray-300">
                        <button
                            className="w-full text-left py-4 px-6 bg-white text-lg font-medium text-gray-800 flex justify-between items-center"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span className="text-2xl font-bold">
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </button>
                        <div
                            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out`}
                            style={{
                                maxHeight: activeIndex === index ? "200px" : "0",
                                opacity: activeIndex === index ? 1 : 0,
                                padding: activeIndex === index ? "16px" : "0",
                            }}
                        >
                            <p className="text-gray-700">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;

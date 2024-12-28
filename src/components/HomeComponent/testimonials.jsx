import React from 'react';

const TestimonialsSection = () => {
    return (
        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold text-center mb-8">How We Help People</h2>
            <p className="text-center mb-12">
                With serious savings, a seamless online application, and unique community
                benefits, our members have a lot to say about our loans!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="text-red-500 text-5xl font-bold mb-4">
                        "
                    </div>
                    <p className="text-gray-700 text-lg mb-4">
                        Article evident arrived express highest men did boy. Mistress
                        sensible entirely am so. Quick can manor smart money hopes
                        worth too. Comfort produce husband boy her had hearing.
                    </p>
                    <div className="flex items-center mt-4">
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf37702a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="Paul Smith"
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <p className="text-gray-900 font-medium">Paul Smith</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="text-red-500 text-5xl font-bold mb-4">
                        "
                    </div>
                    <p className="text-gray-700 text-lg mb-4">
                        Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.
                    </p>
                    <div className="flex items-center mt-4">
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf37702a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="Jane Doe"
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <p className="text-gray-900 font-medium">Jane Doe</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="text-red-500 text-5xl font-bold mb-4">
                        "
                    </div>
                    <p className="text-gray-700 text-lg mb-4">
                        Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.
                    </p>
                    <div className="flex items-center mt-4">
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf37702a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="John Doe"
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <p className="text-gray-900 font-medium">John Doe</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
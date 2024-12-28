import React from "react";

const Blog = () => {
    return (
        <section id="blog" className="py-16">
            <h2 className="text-3xl font-bold text-center mb-8">Real Estate Tips</h2>
            <div className="max-w-2xl mx-auto text-center">
                <p className="text-xl mb-4">
                    Stay informed with the latest trends and tips in real estate. Whether you're buying or selling, our blog provides valuable insights.
                </p>
                <button className="px-8 py-3 bg-blue-600 rounded-full text-lg text-white">
                    Read More
                </button>
            </div>
        </section>
    );
};

export default Blog;

import "./brand.css";

const Marquee = () => {
    return (
        <section id="partnered-brands" className="py-16 mt-[70px] rounded-3xl bg-gray-100">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Our Partnered Brands</h2>
                <p className="text-lg text-gray-600 mt-4 px-4">
                    We are proud to collaborate with some of the most innovative and trusted brands
                    in the industry. Together, we bring unmatched quality and value to our customers,
                    ensuring excellence at every step.
                </p>
            </div>
            <div className="marquee">
                <div className="logo-slide">
                    <img src="https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk" alt="Brand Logo 1" />
                    <img src="https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk" alt="Brand Logo 2" />
                    <img src="https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk" alt="Brand Logo 3" />
                    <img src="https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk" alt="Brand Logo 4" />
                    <img src="https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk" alt="Brand Logo 5" />
                    <img src="https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk" alt="Brand Logo 6" />
                    <img src="https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk" alt="Brand Logo 7" />
                    <img src="https://cdn.filestackcontent.com/6A6K9WFGRnqW602d3HAk" alt="Brand Logo 8" />
                </div>
            </div>
        </section>
    );
};

export default Marquee;

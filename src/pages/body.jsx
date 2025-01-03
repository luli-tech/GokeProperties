import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FAQ from "../components/HomeComponent/faq";
import Marquee from "../components/HomeComponent/brandLogo";
import AboutSection from "../components/HomeComponent/about";
import Footer from "../components/HomeComponent/footer";
import GallerySection from "../components/HomeComponent/gallery";
import Header from "../components/HomeComponent/header";
import HeroSection from "../components/HomeComponent/hero";
import VideoSection from "../components/HomeComponent/video";
import Properties from "../components/HomeComponent/Properties";
import Blog from "../components/HomeComponent/blog";
import Locations from "../components/HomeComponent/location";
import AnimatedTestimonialsDemo from "../components/HomeComponent/demo";
import CompareDemo from "../components/aceternity/beforeAfter/before";
import HangingCard from "../components/HomeComponent/hangingCard";
const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
        });
    }, []);

    return (
        <div className="min-h-screen overflow-hidden bg-blue-[221.2 83.2% 53.3%]">
            {/* <Loader /> */}
            <Header />
            <HeroSection />
            <div className="lg:hidden mt-10 mb-[50px] md:hidden" data-aos="fade-up">
                <HangingCard />
            </div>
            <main className="container lg:flex-col lg:w-[70%] mx-auto px-5">
                <section data-aos="fade-right">
                    <AboutSection />
                </section>
                <section data-aos="fade-left">
                    <Properties />
                </section>
                <section data-aos="zoom-in">
                    <Locations />
                </section>
                <section data-aos="zoom-in">
                    <Marquee />
                </section>
                <section data-aos="flip-up">
                    <CompareDemo />
                </section>
                <section data-aos="fade-up">
                    <GallerySection />
                </section>
                {/* <section data-aos="zoom-in">
                    <AnimatedTestimonialsDemo />
                </section> */}
                <section data-aos="fade-up">
                    <Blog />
                </section>
                <section data-aos="flip-left">
                    <VideoSection />
                </section>
                <section data-aos="fade-down">
                    <FAQ />
                </section>
            </main>
            <section data-aos="flip-left">
                <Footer />
            </section>
        </div>
    );
};

export default Home;

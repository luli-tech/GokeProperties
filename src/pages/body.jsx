import AboutSection from "../components/HomeComponent/about";
import ContactSection from "../components/HomeComponent/contact";
import Footer from "../components/HomeComponent/footer";
import GallerySection from "../components/HomeComponent/gallery";
import ServicesSection from "../components/HomeComponent/service";
import Header from "../components/HomeComponent/header";
import HeroSection from "../components/HomeComponent/hero";
import TestimonialsSection from "../components/HomeComponent/testimonials";
import VideoSection from "../components/HomeComponent/video";
import Properties from "../components/HomeComponent/Properties";
import Loader from "../components/HomeComponent/Loader";
import Blog from "../components/HomeComponent/blog";
import Locations from "../components/HomeComponent/location";
import AnimatedTestimonialsDemo from "../components/HomeComponent/demo";
import CompareDemo from "../components/aceternity/beforeAfter/before";
const Home = () => {
    return (
        <div className="min-h-screen overflow-hidden  bg-blue-[221.2 83.2% 53.3%]">
            <Loader />
            <Header />
            <HeroSection />
            <main className="container mx-auto px-8">
                <AboutSection />
                <ServicesSection />
                <Properties />
                <Locations />
                <CompareDemo />
                <TestimonialsSection />
                <GallerySection />
                <AnimatedTestimonialsDemo />
                <GallerySection />
                <Blog />
                <VideoSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home
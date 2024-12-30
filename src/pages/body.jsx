import AboutSection from "../components/HomeComponent/about";
import Footer from "../components/HomeComponent/footer";
import GallerySection from "../components/HomeComponent/gallery"
import Header from "../components/HomeComponent/header";
import HeroSection from "../components/HomeComponent/hero";
import VideoSection from "../components/HomeComponent/video";
import Properties from "../components/HomeComponent/Properties";
import Loader from "../components/HomeComponent/Loader";
import Blog from "../components/HomeComponent/blog";
import Locations from "../components/HomeComponent/location";
import AnimatedTestimonialsDemo from "../components/HomeComponent/demo";
import CompareDemo from "../components/aceternity/beforeAfter/before";
import HangingCard from "../components/HomeComponent/hangingCard";
const Home = () => {
    return (
        <div className="min-h-screen overflow-hidden  bg-blue-[221.2 83.2% 53.3%]">
            <Loader />
            <Header />
            <HeroSection />
            <div className="lg:hidden md:hidden"><HangingCard />
            </div>
            <main className="container mx-auto px-5">
                <AboutSection />
                <Properties />
                <Locations />
                <CompareDemo />
                <GallerySection />
                <AnimatedTestimonialsDemo />
                <Blog />
                <VideoSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home
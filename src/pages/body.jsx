import AboutSection from "../components/HomeComponent/about";
import ContactSection from "../components/HomeComponent/contact";
import Footer from "../components/HomeComponent/footer";
import GallerySection from "../components/HomeComponent/gallery";
import ServicesSection from "../components/HomeComponent/service";
import Header from "../components/HomeComponent/header";
import HeroSection from "../components/HomeComponent/hero";
import TestimonialsSection from "../components/HomeComponent/testimonials";
import VideoSection from "../components/HomeComponent/video";


const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <TestimonialsSection />
            <GallerySection />
            <VideoSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Home;
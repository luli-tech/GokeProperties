import AboutSection from "../components/HomeComponent/about";
import ContactSection from "../components/HomeComponent/contact";
import Footer from "../components/HomeComponent/footer";
import GallerySection from "../components/HomeComponent/gallery";
import ServicesSection from "../components/HomeComponent/service";
import Header from "../components/HomeComponent/header";
import HeroSection from "../components/HomeComponent/hero";
import TestimonialsSection from "../components/HomeComponent/testimonials";
import VideoSection from "../components/HomeComponent/video";


// App Component
const Home = () => {
    return (
        <div className="min-h-screen overflow-hidden  bg-gray-100">
            <Header />
            <main className="container mx-auto px-2">
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <TestimonialsSection />
                <GallerySection />
                <VideoSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home
const Header = () => (
    <header className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Real Estate Portfolio</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#hero" className="hover:underline">Home</a></li>
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#services" className="hover:underline">Services</a></li>
                    <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
                    <li><a href="#gallery" className="hover:underline">Gallery</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;
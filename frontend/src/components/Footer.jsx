import {Link} from "react-router-dom";
import {Facebook, Instagram, Twitter} from "lucide-react";

const Footer = () => (
    <footer className="relative bg-white border-t-2 border-gray-200">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
        <div className="container mx-auto px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Brand Column */}
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center mb-2">
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 border border-indigo-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-2 shadow-lg">
                            M
                        </div>
                        <h3 className="text-xl font-light text-gray-800 tracking-wide">MANGA AI</h3>
                    </div>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                        Inspired by the vibrant world of Japanese manga. Transform your photos into stunning manga artwork.
                    </p>
                </div>

                {/* Links Column */}
                <div className="col-span-1">
                    <h4 className="font-light text-gray-800 mb-3 tracking-wide">LINKS</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li><Link to="/" className="hover:text-gray-800 transition-colors font-light">Home</Link></li>
                        <li><Link to="/create" className="hover:text-gray-800 transition-colors font-light">Create</Link></li>
                        <li><Link to="/features" className="hover:text-gray-800 transition-colors font-light">Features</Link></li>
                        <li><Link to="/gallery" className="hover:text-gray-800 transition-colors font-light">Gallery</Link></li>
                        <li><Link to="/faq" className="hover:text-gray-800 transition-colors font-light">FAQ</Link></li>
                    </ul>
                </div>

                {/* Features Column */}
                <div className="col-span-1">
                    <h4 className="font-light text-gray-800 mb-3 tracking-wide">FEATURES</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li><a href="#" className="hover:text-gray-800 transition-colors font-light">Photo to Manga Art</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors font-light">Text to Manga Art</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors font-light">Character Generator</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors font-light">Background Generator</a></li>
                    </ul>
                </div>

                {/* Legal Column */}
                <div className="col-span-1">
                    <h4 className="font-light text-gray-800 mb-3 tracking-wide">LEGAL</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li><a href="#" className="hover:text-gray-800 transition-colors font-light">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition-colors font-light">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <p className="font-light">&copy; 2025 Manga AI. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-800 transition-colors"><Twitter size={18} /></a>
                    <a href="#" className="hover:text-gray-800 transition-colors"><Instagram size={18} /></a>
                    <a href="#" className="hover:text-gray-800 transition-colors"><Facebook size={18} /></a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
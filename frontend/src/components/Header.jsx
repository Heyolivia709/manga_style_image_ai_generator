import {Link, NavLink} from "react-router-dom";

const Header = () => (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <nav className="flex justify-end items-center p-8">
            <div className="flex items-center space-x-8">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        `relative text-gray-600 hover:text-gray-800 transition-colors duration-200 text-sm font-inter font-light tracking-[0.15em] uppercase group ${isActive ? 'text-gray-800 font-medium' : ''}`
                    }
                >
                    <span className="relative z-10">Home</span>
                    <div className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-indigo-500 to-purple-500 w-0 group-hover:w-full transition-all duration-300"></div>
                </NavLink>
                <NavLink 
                    to="/create" 
                    className={({ isActive }) => 
                        `relative text-gray-600 hover:text-gray-800 transition-colors duration-200 text-sm font-inter font-light tracking-[0.15em] uppercase group ${isActive ? 'text-gray-800 font-medium' : ''}`
                    }
                >
                    <span className="relative z-10">Create</span>
                    <div className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-indigo-500 to-purple-500 w-0 group-hover:w-full transition-all duration-300"></div>
                </NavLink>
                <NavLink 
                    to="/features" 
                    className="relative text-gray-600 hover:text-gray-800 transition-colors duration-200 text-sm font-inter font-light tracking-[0.15em] uppercase group"
                >
                    <span className="relative z-10">Features</span>
                    <div className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-indigo-500 to-purple-500 w-0 group-hover:w-full transition-all duration-300"></div>
                </NavLink>
                <NavLink 
                    to="/gallery" 
                    className="relative text-gray-600 hover:text-gray-800 transition-colors duration-200 text-sm font-inter font-light tracking-[0.15em] uppercase group"
                >
                    <span className="relative z-10">Gallery</span>
                    <div className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-indigo-500 to-purple-500 w-0 group-hover:w-full transition-all duration-300"></div>
                </NavLink>
                <NavLink 
                    to="/faq" 
                    className="relative text-gray-600 hover:text-gray-800 transition-colors duration-200 text-sm font-inter font-light tracking-[0.15em] uppercase group"
                >
                    <span className="relative z-10">FAQ</span>
                    <div className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-indigo-500 to-purple-500 w-0 group-hover:w-full transition-all duration-300"></div>
                </NavLink>
            </div>
        </nav>
    </header>
);

export default Header;
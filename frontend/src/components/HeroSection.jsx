import {useNavigate, Link} from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
            {/* Decorative background patterns */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>
            
            {/* Decorative lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            </div>
            
            {/* Left side branding with accent */}
            <div className="absolute top-8 left-8 z-50 group">
                <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Link to="/" className="text-gray-800 text-2xl font-playfair font-semibold tracking-wide cursor-pointer hover:text-indigo-600 transition-all duration-300 pl-3 drop-shadow-sm">
                    Manga AI
                </Link>
            </div>
            
            {/* Main content with decorative elements */}
            <div className="relative z-10 container mx-auto flex flex-col items-center justify-center text-center px-8 py-32">
                {/* Decorative top accent */}
                <div className="mb-8 flex items-center gap-4">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent to-indigo-300"></div>
                    <span className="text-indigo-600 text-sm font-inter font-light tracking-[0.4em] uppercase">Welcome to</span>
                    <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-300"></div>
                </div>
                
                {/* Main title with shadow effect */}
                <h1 className="text-7xl md:text-9xl font-playfair font-light text-gray-800 mb-6 leading-[0.85] tracking-tight relative">
                    <span className="relative inline-block">
                        Manga AI
                        <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-30 blur-sm"></div>
                    </span>
                </h1>
                
                <h2 className="text-2xl md:text-4xl font-inter font-extralight text-gray-600 mb-12 tracking-wide">
                    Art Generator
                </h2>
                
                {/* Description with side accents */}
                <div className="relative max-w-3xl mb-16">
                    <div className="absolute -left-8 top-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-300 to-transparent hidden md:block"></div>
                    <div className="absolute -right-8 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-300 to-transparent hidden md:block"></div>
                    <p className="text-xl text-gray-600 leading-relaxed font-inter font-light">
                        Transform your photos into stunning Japanese manga style artwork with our AI-powered generator. Experience the vibrant world of manga art.
                    </p>
                </div>
                
                {/* Enhanced button with icon accents */}
                <div className="relative inline-block">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                    <button 
                        onClick={() => navigate('/create')} 
                        className="relative group bg-transparent border-2 border-gray-800 text-gray-800 font-inter font-light py-4 px-20 rounded-none hover:bg-gray-800 hover:text-white transition-all duration-500 tracking-[0.2em] text-sm uppercase hover:scale-105 shadow-lg"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Start Creating
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            {/* Enhanced portfolio indicators with labels */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full group-hover:w-12 transition-all duration-300"></div>
                        <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Creative</span>
                    </div>
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-4 h-1 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full group-hover:w-12 transition-all duration-300"></div>
                        <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Magical</span>
                    </div>
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-4 h-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full group-hover:w-12 transition-all duration-300"></div>
                        <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Artistic</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
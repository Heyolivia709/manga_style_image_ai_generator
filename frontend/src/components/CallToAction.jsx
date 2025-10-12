const CallToAction = ({ onNavigate }) => (
    <div className="py-16 relative">
        <div className="container mx-auto px-8">
            <div className="relative bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-12 text-center flex flex-col items-center shadow-xl overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                    <div className="mb-4 flex items-center justify-center gap-4">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-indigo-300"></div>
                        <h2 className="text-3xl font-playfair font-light text-gray-800">Create Your Vibrant Manga Artwork Today</h2>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-300"></div>
                    </div>
                    <p className="text-gray-600 max-w-2xl mb-8 font-inter font-light leading-relaxed">
                        Join thousands of artists and manga fans who are creating stunning Japanese manga-style artwork with our Manga AI generator.
                    </p>
                    <div className="relative inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                        <button 
                            onClick={() => onNavigate('/create')} 
                            className="relative group bg-transparent border-2 border-gray-800 text-gray-800 font-inter font-light py-3 px-8 rounded-none hover:bg-gray-800 hover:text-white transition-all duration-500 tracking-[0.15em] text-sm uppercase hover:scale-105 shadow-lg"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Try Manga AI For Free
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default CallToAction;
import {useState} from "react";
import PhotoToImageSection from "../components/PhotoToImageSection.jsx";
import TextToImageSection from "../components/TextToImageSection.jsx";

const CreatePage = () => {
    const [activeTab, setActiveTab] = useState('photo');

    return(
        <div className="relative min-h-screen">
            {/* Decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            
            {/* Content with proper spacing from header */}
            <div className="relative z-10 container mx-auto py-12 px-8 pt-24">
                <div className="flex justify-center mb-12 border-b border-gray-200">
                    <button 
                        onClick={() => setActiveTab('photo')} 
                        className={`relative px-8 py-4 text-sm font-inter font-light tracking-[0.2em] uppercase transition-colors duration-200 text-gray-600 group ${activeTab === 'photo' ? 'text-gray-800 font-medium' : 'text-gray-500 hover:text-gray-800'}`}
                    >
                        <span className="relative z-10">Photo to Art</span>
                        <div className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${activeTab === 'photo' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                    </button>
                    <button 
                        onClick={() => setActiveTab('text')} 
                        className={`relative px-8 py-4 text-sm font-inter font-light tracking-[0.2em] uppercase transition-colors duration-200 text-gray-600 group ${activeTab === 'text' ? 'text-gray-800 font-medium' : 'text-gray-500 hover:text-gray-800'}`}
                    >
                        <span className="relative z-10">Text to Art</span>
                        <div className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${activeTab === 'text' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                    </button>
                </div>
                <div>
                    {activeTab === 'photo' && <PhotoToImageSection />}
                    {activeTab === 'text' && <TextToImageSection />}
                </div>
            </div>
        </div>
    );
};

export default CreatePage;
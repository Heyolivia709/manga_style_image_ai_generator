import {useState} from "react";
import ErrorMessage from "./ErrorMessage.jsx";
import Spinner from "./Spinner.jsx";
import {Download, FileText, PlusCircle} from "lucide-react";
import MangaStyleDropdown from "./MangaStyleDropdown.jsx";

const BASE_URL = import.meta.env.PROD
    ? 'https://manga-style-image-ai-generator.onrender.com'
    : 'http://localhost:8080';


const TextToImageSection = () => {

    const [generatedImage, setGeneratedImage] = useState(null);
    const [prompt, setPrompt] = useState('');
    const [style, setStyle] = useState('general');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const isCreateDisabled = isLoading || !prompt.trim();

    const handleGenerate = async () => {
        console.log("🎯 handleGenerate triggered with:", { prompt, style });
        if (!prompt.trim()) {
            setError("Please enter a description for your artwork.");
            return;
        }

        setIsLoading(true);
        setError(null);

        const payload = {prompt, style};

        try {
            const API_URL = '${BASE_URL}/api/v1/generate-from-text';
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok. Status: ${response.status}. Message: ${errorText}`);
            }

            const resultBlob = await response.blob();
            setGeneratedImage(URL.createObjectURL(resultBlob));

        }catch (error) {
            console.error('Error generating image from text:', error);
            setError("failed to generate image. Please ensure the backend is running and check the console");
        }finally {
            setIsLoading(false);
        }
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = generatedImage;
        link.download = `manga-art-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleCreateAnother = () => {
        setGeneratedImage(null);
        setPrompt('');
        setStyle('general');
        setError(null);
    }

    return (
        <div className="relative">
            {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
            <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-8 rounded-2xl shadow-xl flex flex-col max-w-4xl mx-auto">
                <h2 className="text-xl font-inter font-light text-gray-800 mb-6 tracking-[0.2em] uppercase">Text to Manga Art</h2>
                <div className="w-full h-80 flex justify-center items-center border-2 border-gray-200 rounded-xl bg-gray-50 mb-6">
                    {isLoading ? (<Spinner />) : generatedImage ? (<img src={generatedImage} alt="Generated Manga art" className="h-full w-full rounded-lg object-contain p-2"/>) : (
                        <div className="text-center text-gray-500">
                            <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                            <p className="font-inter font-light">Generate manga art from your text description</p>
                        </div>
                    )}
                </div>

                {!generatedImage && (
                    <>
                        <div className="space-y-4">
                            <MangaStyleDropdown value={style} onChange={(e) => setStyle(e.target.value)} />
                            <div>
                                <label htmlFor="prompt-text" className="text-sm font-inter font-light text-gray-700 mb-2 block tracking-[0.15em] uppercase">Your Description</label>
                                <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} id="prompt-text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:border-gray-400 focus:bg-white transition-all duration-300 font-inter" rows="3" placeholder="Describe the manga scene you want to create in detail..."></textarea>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={(e) =>{
                              e.preventDefault();
                              handleGenerate();
                              }}
                            disabled={isCreateDisabled} className="mt-6 bg-gray-800 border border-gray-700 text-white font-inter font-light py-3 px-6 rounded-lg hover:bg-gray-900 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed w-full tracking-[0.15em] uppercase">
                            {isLoading ? 'Generating...' : 'Generate Manga Art'}
                        </button>
                    </>
                )}

                {generatedImage && (
                    <div className="mt-6 flex gap-4">
                        <button onClick={handleDownload} className="flex-1 bg-gray-100 border border-gray-300 text-gray-700 font-inter font-light py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 tracking-[0.1em] uppercase">
                            <Download size={20} /> Download
                        </button>
                        <button onClick={handleCreateAnother} className="flex-1 bg-gray-800 border border-gray-700 text-white font-inter font-light py-3 px-6 rounded-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2 tracking-[0.1em] uppercase">
                            <PlusCircle size={20} /> Create Another
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextToImageSection;
import {Image, Palette, Users} from "lucide-react";
import {assets} from "../assets/assets.js";

const MangaSteps = () => {
    return (
        <div className="rounded-lg flex flex-col lg:flex-row items-center lg:items-start gap-8 container mx-auto px-8 pb-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Photo to Manga Art</h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
                    Transform any photo into beautiful Japanese manga-style artwork with our Manga AI.
                    Simply upload your image and describe elements you want to enhance - mood,
                    scene setting, character details - and our advanced manga image generator will
                    craft a complete transformation that captures the iconic manga art aesthetic with
                    vibrant colors and dynamic motion lines.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <div className="p-3 rounded-xl mr-3 bg-gray-900 text-white shadow-md transform transition-transform hover:scale-110">
                            <Image size={28} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 text-md sm:text-lg">Simple Manga AI Prompting</h3>
                            <p className="text-gray-600 text-sm">
                                Use everyday language to guide the manga transformation with our manga
                                generator. No artistic background required. Our Manga AI translates your vision into
                                perfect manga art imagery with authentic Japanese manga qualities.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="p-3 rounded-xl mr-3 bg-gray-800 text-white shadow-md transform transition-transform hover:scale-110">
                            <Palette size={28} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 text-md sm:text-lg">Manga Art Style Control</h3>
                            <p className="text-gray-600 text-sm">
                                Select specific manga style influences from shonen, shojo, or seinen styles
                                with our manga image generator to customize your
                                manga artwork's aesthetic to your exact preferences.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="p-3 rounded-xl mr-3 bg-gray-700 text-white shadow-md transform transition-transform hover:scale-110">
                            <Users size={28} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 text-md sm:text-lg">Manga Character Integration</h3>
                            <p className="text-gray-600 text-sm">
                                Our Manga AI can seamlessly integrate your pets or family members into the manga
                                universe, maintaining their recognizable features while giving them distinctive
                                manga art charm in every manga image we generate.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 rounded-lg overflow-hidden shadow-md max-h-[500px]">
                <img
                    src={assets.mangaStepDemo}
                    alt="Photo to Manga Art Transformation"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    )
}

export default MangaSteps;
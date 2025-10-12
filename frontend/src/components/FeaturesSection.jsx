import FeatureCard from "./FeatureCard.jsx";
import {Eye, FileClock, Sparkles} from "lucide-react";

const FeaturesSection = () => (
    <div className="container mx-auto py-16 px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Manga AI Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Eye size={24} />} title="High Accuracy Manga Art Generation">
                Our advanced Manga AI algorithms ensure your photos maintain their essence while transforming into authentic Japanese manga art style. Every manga image preserves the original character while adopting the distinctive manga aesthetic.
            </FeatureCard>
            <FeatureCard icon={<FileClock size={24} />} title="Fast Image Processing">
                Get your transformed manga art images in seconds with our optimized Manga AI generator technology. Our efficient processing ensures quick delivery of high-quality manga style artwork.
            </FeatureCard>
            <FeatureCard icon={<Sparkles size={24} />} title="Stunning Manga Quality">
                Our Manga AI creates beautiful high-resolution manga art that perfectly captures the vibrant manga aesthetic. Every detail in your generated manga image reflects the authentic charm of Japanese manga.
            </FeatureCard>
        </div>
    </div>
);

export default FeaturesSection;
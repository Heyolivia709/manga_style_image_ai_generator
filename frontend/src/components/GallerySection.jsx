import GalleryCard from "./GalleryCard.jsx";
import {assets} from "../assets/assets.js";
import GalleryStories from "./GalleryStories.jsx";

const GallerySection = () => {
    const topGalleryItems = [
        {
            imageSrc: assets.galleryForest,
            title: "Whimsical Forest Dweller",
        },
        {
            imageSrc: assets.gallerySkypirate,
            title: "Sky Pirate's Retreat",
        },
        {
            imageSrc: assets.galleryRiver,
            title: "Spirited River Journey",
        },
        {
            imageSrc: assets.galleryGarden,
            title: "Enchanted Garden Spirit",
        },
    ];

    const sections = [
        {
            title: "Mountain Lake Manga Transformation",
            description:
                "See how our Manga AI generator transforms ordinary landscapes into breathtaking manga worlds, with authentic manga art style and vibrant details in every manga image.",
            images: [
                {
                    src: "https://placehold.co/400x300/A0D9B5/000000?text=Original+Lake",
                    alt: "Original Mountain Lake",
                },
                {
                    src: "https://placehold.co/400x300/87CEEB/000000?text=Manga+Lake",
                    alt: "Manga Mountain Lake Transformation",
                }
            ],
        }
    ];
    return (
        <div className="container mx-auto py-16 px-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                Vibrant Manga AI Transformations Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10">
                {topGalleryItems.map((item, index) => (
                    <GalleryCard key={index} imageSrc={item.imageSrc} title={item.title} />
                ))}
            </div>

            <div className="space-y-8 sm:space-y-10">
                <GalleryStories />
            </div>
        </div>
    )
}

export default GallerySection;
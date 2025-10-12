import GallerySection from "../components/GallerySection.jsx";

const GalleryPage = () => {
    return (
        <div className="relative min-h-screen">
            
            {/* Content with proper spacing from header */}
            <div className="relative z-10 pt-24">
                <GallerySection />
            </div>
        </div>
    )
}

export default GalleryPage;

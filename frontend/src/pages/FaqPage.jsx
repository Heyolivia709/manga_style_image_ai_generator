import FaqSection from "../components/FaqSection.jsx";

const FaqPage = () => {
    return (
        <div className="relative min-h-screen">
            
            {/* Content with proper spacing from header */}
            <div className="relative z-10 pt-24">
                <FaqSection />
            </div>
        </div>
    )
}

export default FaqPage;

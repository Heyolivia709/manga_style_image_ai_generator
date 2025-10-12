import FeaturesSection from "../components/FeaturesSection.jsx";
import MangaSteps from "../components/MangaSteps.jsx";
import CallToAction from "../components/CallToAction.jsx";
import {useNavigate} from "react-router-dom";

const FeaturesPage = () => {
    const navigate = useNavigate();
    return (
        <div className="relative min-h-screen">
            
            {/* Content with proper spacing from header */}
            <div className="relative z-10 pt-24">
                <FeaturesSection />
                <MangaSteps />
                <CallToAction onNavigate={navigate}/>
            </div>
        </div>
    )
}

export default FeaturesPage;

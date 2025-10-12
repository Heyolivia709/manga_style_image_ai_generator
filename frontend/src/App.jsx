import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import FeaturesPage from "./pages/FeaturesPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";

const App = () => {
  return (
    <div className="min-h-screen font-inter text-gray-800 flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
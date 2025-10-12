import FaqCard from "./FaqCard.jsx";

const FaqSection = () => (
    <div className="container mx-auto py-16 px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions about Manga AI</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <FaqCard question="What is the Manga AI Generator?">
                The Manga AI Generator is an advanced platform powered by AI that creates original artwork in the distinctive style of Japanese manga. Our technology transforms photos or text descriptions into beautiful manga art images with authentic aesthetic elements.
            </FaqCard>
            <FaqCard question="What are the key features of the Manga AI?">
                Key features include photo-to-manga art transformation, text-to-manga image generation, manga character creation, scene extension, manga background generation, and dynamic motion lines - all in authentic Japanese manga style using our specialized manga generator.
            </FaqCard>
            <FaqCard question="Can I select specific manga styles for my manga art?">
                Absolutely! You can choose influences from various manga styles like shonen, shojo, or seinen and customize the style, mood, and visual elements to reflect your creative vision in the generated manga images.
            </FaqCard>
            <FaqCard question="Is the Manga AI Generator available on mobile?">
                Yes, our Manga AI platform is accessible on both desktop and mobile devices via web browsers, allowing you to create manga-style artwork and manga images wherever you are.
            </FaqCard>
        </div>
    </div>
);

export default FaqSection;
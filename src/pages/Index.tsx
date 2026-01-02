import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoSection from "@/components/BentoSection";
import FeaturesSection from "@/components/FeaturesSection";
import DataSection from "@/components/DataSection";
import ReviewsSection from "@/components/ReviewsSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BentoSection />
      <FeaturesSection />
      <DataSection />
      <ReviewsSection />
    </main>
  );
};

export default Index;

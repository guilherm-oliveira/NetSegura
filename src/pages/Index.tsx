import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import DigitalWorld from "@/components/sections/DigitalWorld";
import Risks from "@/components/sections/Risks";
import Guidance from "@/components/sections/Guidance";
import BestPractices from "@/components/sections/BestPractices";
import Laws from "@/components/sections/Laws";
import Resources from "@/components/sections/Resources";
import About from "@/components/sections/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Introduction />
      <DigitalWorld />
      <Risks />
      <Guidance />
      <BestPractices />
      <Laws />
      <Resources />
      <About />
      <Footer />
    </div>
  );
};

export default Index;

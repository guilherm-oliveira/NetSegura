import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-digital-safety.jpg";

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector("#introducao");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          NetSegura
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Orientação essencial para pais, educadores e responsáveis sobre o uso consciente
          de plataformas digitais e jogos por crianças e adolescentes
        </p>
        <Button
          onClick={scrollToNext}
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg"
        >
          Comece a Explorar
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;

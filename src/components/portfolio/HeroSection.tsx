import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import DotGrid from "@/blocks/Backgrounds/DotGrid/DotGrid";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div style={{ width: '100%', height: '100vh', position: 'relative' }} className="bg-[#060010]">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#323FF5"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col xl:flex-row items-start xl:items-center justify-center gap-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight animate-fade-in text-white">
              Hey, I'm <span className="text-blue-600">Tatwik</span>
            </h1>
            <p className="text-lg md:text-2xl mb-6 font-light text-gray-400 max-w-2xl mx-auto animate-fade-in delay-100">
              A future focused developer building intelligent systems and immersive web experiences.
            </p>
            <Button
              onClick={scrollToProjects}
              size="lg"
              variant="secondary"
              className="text-white text-lg px-8 py-5 bg-white/5 backdrop-blur-md border border-white/5 hover:bg-white/5 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              View My Projects
              {/* <ChevronDown className="ml-2 h-5 w-5" /> */}
            </Button>
          </div>
          <div className="flex flex-col items-start justify-center gap-2 min-w-fit">
            <h2 className="text-white text-4xl md:text-5xl font-bold">I'm a</h2>
            <RotatingText
              texts={['FullStack Dev', 'AI/ML Enthusiast', 'Web3 Developer']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-blue-600 text-white font-bold text-2xl md:text-3xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg whitespace-nowrap min-w-max"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 whitespace-nowrap"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

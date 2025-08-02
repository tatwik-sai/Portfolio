import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const interests = ["AI/ML   ", "Full-Stack", "Blockchain"];

  return (
    <section id="about" className="py-20 bg-[#060010] opacity-100">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-[#0b0416] shadow-custom border-0">
              <CardContent className="p-8 text-gray-400">
                <p className="text-lg leading-relaxed mb-6">
                  I'm a passionate developer with a deep interest in cutting-edge technologies
                  and innovative solutions. Currently pursuing my studies at IIIT Bangalore,
                  I'm focused on building robust applications that solve real-world problems.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey in tech spans from AI and machine learning to blockchain development,
                  with a strong foundation in full-stack development. I believe in writing clean,
                  efficient code and staying updated with the latest industry trends.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-lg bg-muted flex items-center justify-center">
                <img
                  src="/about.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl font-semibold text-gray-400 mb-4">My Interests</h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium rounded-3xl bg-blue-600/10 text-blue-600 hover:bg-blue-600/15 transition-colors"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
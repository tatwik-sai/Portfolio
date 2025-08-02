import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen } from "lucide-react";

const EducationSection = () => {
  const courses = [
    "Data Structures & Algorithms",
    "Linear Algebra",
    "Computer Architecture",
    "Differential Calculus",
    "Probability & Statistics",
    "Digital Logic Design",
  ];

  return (
    <section id="education" className="py-20 bg-[#060010]">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#0B0416] shadow-custom border-0 p-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="md:flex">
                <div className="bg-blue-600 p-8 md:w-1/3 flex flex-col justify-center items-center text-center">
                  <GraduationCap className="h-16 w-16 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">IIIT Bangalore</h3>
                  <p className="text-white/90 text-sm">2024 - 2028</p>
                </div>
                
                <div className="p-8 md:w-2/3">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-white mb-2">
                      Bachelor of Technology
                    </h4>
                    <p className="text-gray-400">Computer Science & Engineering</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-4">
                      <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                      <h5 className="font-semibold text-white">Notable Coursework</h5>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {courses.map((course, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="justify-start text-xs bg-muted hover:bg-muted/80 text-gray-400"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center ">
            <Card className="bg-[#0B0416] shadow-custom border-0">
              <CardContent className="p-6">
                <h4 className="font-bold text-white mb-2">Academic Interests</h4>
                <p className="text-gray-400 text-sm">
                  Machine Learning, Deep Learning, Blockchain Technology, 
                  Computer Vision, and Natural Language Processing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
import { Card, CardContent } from "@/components/ui/card";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiSolidity } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";



const SkillsSection = () => {
  const skills = [
    { name: "Python", icon: FaPython, color: "text-blue-600" },
    { name: "React", icon: FaReact, color: "text-blue-600" },
    { name: "NextJs", icon: RiNextjsLine, color: "text-gray-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "PostgreSQL", icon: BiLogoPostgresql, color: "text-blue-500" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-400" },
    { name: "Docker", icon: FaDocker, color: "text-blue-600" },
    { name: "Linux", icon: FaLinux, color: "text-gray-400" },
    { name: "Firebase", icon: IoLogoFirebase, color: "text-yellow-400" },
    { name: "Solidity", icon: SiSolidity, color: "text-gray-400" },
  ];

  return (
    <section id="skills" className="py-20 bg-[#060010]">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 hover:shadow-lg border-0 bg-[#0B0416] cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 flex items-center justify-center transition-transform duration-300">
                  <skill.icon className={`text-5xl ${skill.color}`} />
                </div>
                <h3 className="font-semibold tech-dark text-sm">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-[#0B0416] shadow-custom border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
              <p className="text-lg text-gray-400">
                I'm constantly exploring new technologies and frameworks to stay at the forefront
                of modern development. Currently diving deeper into advanced AI/ML techniques and
                decentralized application development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
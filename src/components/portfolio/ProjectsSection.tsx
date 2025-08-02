import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Ghost Socket",
      description: "A secure remote access platform that lets users control devices, access terminals, browse files, and monitor systems using a Python desktop app through browser.",
      tech: ["NextJs", "Node.js", "Python", "MongoDB", "WebRTC", "Sockets"],
      image: "/ghostsocket.png",
      github: "https://github.com/tatwik-sai/GhostSocket",
      demo: "https://ghost-socket.vercel.app/"
    },
    {
      name: "BookNest",
      description: "BookNest is a simple, user friendly Library Management System that allows admins to manage books and users to browse, borrow, and interact with a built in virtual assistant.",
      tech: ["Python", "OpenAI API", "Tkinter", "Matplotlib"],
      image: "/BookNest.png",
      github: "https://github.com/tatwik-sai/Book-Nest",
      demo: "https://github.com/tatwik-sai/Book-Nest"
    },
    {
      name: "Mystic Square Solver",
      description: "A Python based solver for the classic 8-puzzle (Mystic Square) using the A* search algorithm with Manhattan distance as the heuristic. It visualizes each step from the initial state to the goal configuration.",
      tech: ["Python", "Pygame", "A* Algo", "DSA"],
      image: "/MysticSquare.png",
      github: "https://github.com/tatwik-sai/Mystic-Square-Solver",
      demo: "https://www.youtube.com/watch?v=CSVLwvDCME0"
    },
    // {
    //   name: "Distributed Learning Platform",
    //   description: "Scalable e-learning platform with peer-to-peer content sharing, blockchain-verified certificates, and adaptive learning algorithms for personalized education.",
    //   tech: ["React", "Node.js", "Solidity", "IPFS", "TensorFlow"],
    //   image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=300&fit=crop",
    //   github: "#",
    //   demo: "#"
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-[#060010]">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my latest work in AI, blockchain, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group pt-0 overflow-hidden border-0 bg-[#0B0416] shadow-custom hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-white text-2xl group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs rounded-xl border-blue-600/20 text-blue-600 hover:bg-blue-600/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group cursor-pointer border-blue-600/20 hover:bg-blue-600 hover:text-white text-gray-400"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2 text-gray-400 group-hover:text-white transition-colors" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 cursor-pointer bg-blue-600 text-white hover:bg-blue-600"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
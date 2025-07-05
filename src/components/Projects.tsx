
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce website built with React, TypeScript, and Stripe integration. Features include product catalog, shopping cart, and secure checkout.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "TypeScript", "Tailwind", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["Next.js", "React", "Firebase", "Framer Motion"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that displays current conditions, forecasts, and interactive maps with data visualization.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tech: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern design principles, smooth animations, and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          My <span className="text-purple-400">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 sm:mb-8"></div>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and creativity
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <Card 
            key={project.title} 
            className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group animate-fade-in overflow-hidden"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{project.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 sm:px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Github size={16} />
                  Code
                </Button>
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;

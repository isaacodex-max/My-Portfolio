import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce website built with React, TypeScript, and Stripe integration. Features include product catalog, shopping cart, and secure checkout.",
      image: "https://i.ibb.co/1f6pBRkg/2025-07-13.png",
      tech: ["React", "TypeScript", "Tailwind", "Stripe"],
      github: "https://github.com/isaacodex-max/ecom-website-main.git",
      live: "https://ecom-website-main.vercel.app/"
    },
    {
      title: "Extensive Academy website",
      description: "A modern, mobile-first school website built with React and Tailwind CSS. Features include dynamic news/events sections, an online admission form, gallery showcase, and contact integration.",
      image: "https://i.ibb.co/275qjbv8/2025-07-13-2.png",
      tech: ["Next.js", "React", "Tailwind", "TypeScript"],
      github: "https://github.com/isaacodex-max/academy-web-oasis.git",
      live: "https://www.extensiveacademy.org/"
    },
    {
      title: "Naija-blog Landing Page",
      description: "A modern Nigerian blog landing page featuring curated articles, category filters, responsive design, and engaging UI elements tailored for news and entertainment content.",
      image: "https://i.ibb.co/ccgFH6mF/2025-07-19.png",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/isaacodex-max/naija-vibe-blog-main.git",
      live: "https://naija-vibe-blog-main.vercel.app/"
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
          My <span className="text-yellow-500">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 via-gray-800 to-yellow-600 mx-auto mb-6 sm:mb-8"></div>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and creativity
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="bg-slate-800/50 backdrop-blur-sm border-yellow-600 hover:border-gray-600 transition-all duration-300 group animate-fade-in overflow-hidden"
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
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-2 sm:mb-3">{project.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 bg-black text-yellow-500 rounded-full text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-yellow-600 text-gray-800 hover:bg-yellow-600 hover:text-white flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="bg-gradient-to-r from-yellow-600 to-gray-600 hover:from-gray-600 hover:to-yellow-600 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
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

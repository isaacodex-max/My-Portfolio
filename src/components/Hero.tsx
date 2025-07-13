import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-gradient-to-r text-yellow-500 to-blue-600/20 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 z-10">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r text-yellow-500 to-pink-400">CodeMax</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Frontend Web Developer
              </p>
              <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                I craft beautiful, responsive, and user-friendly web experiences using modern technologies and best practices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 sm:mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button 
                onClick={scrollToAbout}
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-gray-800 hover:from-blue-950 hover:to-yellow-600 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                View My Work
              </Button>
              <a href="/ALuko Isaac Ayomide’s cv.pdf" download>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-yellow-500 text-black hover:bg-yellow-600 hover:text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 w-full sm:w-auto"
                  >
                  Download CV
                </Button>
              </a>

            </div>
            
            <div
              className="flex justify-center lg:justify-start py-4 mt-4 bg-black/30 rounded-xl w-full max-w-md mx-auto lg:mx-0 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              {/* GitHub */}
              <a
                href="https://github.com/isaacodex-max"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-gray-400 hover:text-yellow-600 transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={24} className="sm:w-7 sm:h-7" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/isaac-ayomide-1a96031b0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-gray-400 hover:text-yellow-600 transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={24} className="sm:w-7 sm:h-7" />
              </a>

              {/* Email */}
              <a
                href="mailto:isaacayomide2019@gmail.com"
                className="p-1 text-gray-400 hover:text-yellow-600 transition-colors duration-200 transform hover:scale-110"
              >
                <Mail size={24} className="sm:w-7 sm:h-7" />
              </a>
            </div>

          </div>
          
          {/* Professional Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-2xl blur-xl transform rotate-6"></div>
              <img 
                src="/lovable-uploads/d274a7e4-a4f0-4758-879b-6ee63b00ac52.png" 
                alt="CodeMax - Professional Photo"
                className="relative w-64 sm:w-80 lg:w-96 h-auto object-cover rounded-2xl shadow-2xl border-2 border-yellow-600"
              />
            </div>
          </div>
        </div>
      </div>
      
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-yellow-600 w-5 h-5 sm:w-6 sm:h-6" />
      </div>
    </section>  
  );
};

export default Hero;


import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          About <span className="text-purple-400">Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 sm:mb-8"></div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
        {/* Professional Photo */}
        <div className="flex justify-center lg:justify-start order-1 lg:order-1">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-lg"></div>
            <img 
              src="/lovable-uploads/aa365eb7-f26f-4dd2-b635-f0a462613689.png" 
              alt="CodeMax - Full Body Professional Photo"
              className="relative w-64 sm:w-80 lg:w-96 h-auto object-cover rounded-2xl shadow-xl border border-purple-500/20"
            />
          </div>
        </div>
        
        {/* Text Content */}
        <div className="space-y-4 sm:space-y-6 order-2 lg:order-2 text-center lg:text-left">
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            I'm a passionate frontend developer with over 3 years of experience creating 
            exceptional digital experiences. I specialize in modern JavaScript frameworks, 
            responsive design, and performance optimization.
          </p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            My journey in web development started with a curiosity about how websites work, 
            and it has evolved into a deep passion for crafting pixel-perfect, accessible, 
            and performant web applications.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4 pt-4 justify-center lg:justify-start">
            <span className="px-3 sm:px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm">React</span>
            <span className="px-3 sm:px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm">TypeScript</span>
            <span className="px-3 sm:px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-3 sm:px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm">Next.js</span>
          </div>
        </div>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
          <Code className="text-purple-400 mb-3 sm:mb-4" size={28} />
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Clean Code</h3>
          <p className="text-sm sm:text-base text-gray-300">Writing maintainable, scalable, and well-documented code that follows industry best practices.</p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
          <Palette className="text-purple-400 mb-3 sm:mb-4" size={28} />
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">UI/UX Focus</h3>
          <p className="text-sm sm:text-base text-gray-300">Creating intuitive and visually appealing interfaces that provide excellent user experiences.</p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 sm:col-span-2 lg:col-span-1">
          <Zap className="text-purple-400 mb-3 sm:mb-4" size={28} />
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Performance</h3>
          <p className="text-sm sm:text-base text-gray-300">Optimizing applications for speed, accessibility, and search engine visibility.</p>
        </div>
      </div>
    </section>
  );
};

export default About;

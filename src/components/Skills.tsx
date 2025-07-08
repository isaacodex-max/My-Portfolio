import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Git", level: 85 },
    { name: "Figma", level: 75 },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          My <span className="text-yellow-500">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 via-gray-800 to-yellow-600 mx-auto mb-6 sm:mb-8"></div>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="bg-yellow-700 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-yellow-600 hover:border-gray-800 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
              <span className="text-white font-semibold text-sm sm:text-base">{skill.level}%</span>
            </div>
            <Progress 
              value={skill.level} 
              className="h-2 bg-slate-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
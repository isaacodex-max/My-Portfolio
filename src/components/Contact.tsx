
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 sm:mb-8"></div>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          Have a project in mind? Let's work together to bring your ideas to life!
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Let's Talk</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardContent className="p-4 sm:p-6 flex items-center space-x-4">
                <Mail className="text-purple-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">Email</h4>
                  <p className="text-gray-300 text-sm sm:text-base">codemax.dev@example.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardContent className="p-4 sm:p-6 flex items-center space-x-4">
                <Phone className="text-purple-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">Phone</h4>
                  <p className="text-gray-300 text-sm sm:text-base">+1 (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardContent className="p-4 sm:p-6 flex items-center space-x-4">
                <MapPin className="text-purple-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">Location</h4>
                  <p className="text-gray-300 text-sm sm:text-base">San Francisco, CA</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20">
          <CardContent className="p-6 sm:p-8">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <Input 
                    className="bg-slate-700/50 border-purple-500/20 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input 
                    type="email"
                    className="bg-slate-700/50 border-purple-500/20 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <Input 
                  className="bg-slate-700/50 border-purple-500/20 text-white placeholder-gray-400"
                  placeholder="Project discussion"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <Textarea 
                  className="bg-slate-700/50 border-purple-500/20 text-white placeholder-gray-400 min-h-[120px]"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-purple-500/20">
        <p className="text-gray-400 text-sm sm:text-base">
          © 2024 CodeMax. Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default Contact;

import { Mail, Phone, MapPin, Send, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { user_name, user_email, subject, message } = formData;
    if (!user_name.trim() || !user_email.trim() || !subject.trim() || !message.trim()) {
      alert('Please fill in all required fields before sending.');
      return;
    }

    const whatsappNumber = '2349065065415'; // Your WhatsApp number without '+'
    const text = `*New Message from Website*\n\nName: ${user_name}\nEmail: ${user_email}\nSubject: ${subject}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappURL, '_blank');

    // Refresh after short delay so WhatsApp link can open
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Get In <span className="text-yellow-500">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 via-gray-800 to-yellow-600 mx-auto mb-6 sm:mb-8"></div>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          Have a project in mind? Let's work together to bring your ideas to life!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Contact Info Section */}
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-yellow-500 mb-4 sm:mb-6">Let's Talk</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-yellow-600 hover:border-gray-800 transition-all duration-300">
              <CardContent className="p-4 sm:p-6 flex items-center space-x-4">
                <Mail className="text-yellow-600 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">Email</h4>
                  <p className="text-gray-300 text-sm sm:text-base">Isaacayomide2019@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border-yellow-600 hover:border-gray-800 transition-all duration-300">
              <CardContent className="p-4 sm:p-6 flex items-center space-x-4">
                <Phone className="text-yellow-600 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">Phone</h4>
                  <p className="text-gray-300 text-sm sm:text-base">+234 (090) 650-65415</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border-yellow-600 hover:border-gray-800 transition-all duration-300">
              <CardContent className="p-4 sm:p-6 flex items-center space-x-4">
                <MapPin className="text-yellow-600 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">Location</h4>
                  <p className="text-gray-300 text-sm sm:text-base">Lagos, Nigeria</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Form Section */}
        <Card className="bg-slate-800/50 backdrop-blur-sm border-yellow-600">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <Input
                    name="user_name"
                    className="bg-slate-700/50 border-yellow-600 text-yellow-500 placeholder-gray-400"
                    placeholder="Isaac Aluko"
                    required
                    value={formData.user_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    name="user_email"
                    className="bg-slate-700/50 border-yellow-600 text-yellow-500 placeholder-gray-400"
                    placeholder="your.email@example.com"
                    required
                    value={formData.user_email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <Input
                  name="subject"
                  className="bg-slate-700/50 border-yellow-600 text-yellow-500 placeholder-gray-400"
                  placeholder="Project discussion"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <Textarea
                  name="message"
                  className="bg-slate-700/50 border-yellow-600 text-yellow-500 placeholder-gray-400 min-h-[120px]"
                  placeholder="Tell me about your project..."
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 via-gray-800 to-yellow-600 hover:from-gray-800 hover:via-yellow-600 hover:to-gray-800 text-white py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-yellow-600">
        <p className="text-yellow-500 text-sm sm:text-base">
          © 2025 CodeMax. Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default Contact;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import apiClient from "@/lib/apiClient";
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    apiClient.post('/send-message', formData)
      .then(response => {
        toast.success("Message sent successfully!");
        console.log("Message sent:", response.data);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        console.error("Error sending message:", error);
        toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/tatwik-sai",
      color: "hover:text-white"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://linkedin.com/in/tatwik-sai-molleti-0aa96931a",
      color: "hover:text-blue-600"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:molletitatwiksai@gmail.com",
      color: "hover:text-green-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#060010]">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-[#0B0416] shadow-custom border-0">
            <CardHeader>
              <CardTitle className="text-gray-700 flex items-center">
                <Send className="h-5 w-5 mr-2 text-blue-600" />
                <p className="text-2xl text-white">Send me a message</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-400">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="border border-[#ffffff1a] bg-[#060010] focus:border-none text-gray-300 focus:outline-[#ffffff1a] focus:ring-[#ffffff1a]"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-400">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="border border-[#ffffff1a] bg-[#060010] focus:border-none text-gray-300 focus:outline-[#ffffff1a] focus:ring-[#ffffff1a]"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-400">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={10}
                    className="h-30 bg-[#060010] resize-none custom-scrollbar border border-[#ffffff1a] focus:border-none text-gray-300 focus:outline-[#ffffff1a] focus:ring-[#ffffff1a]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className={`w-full cursor-pointer bg-blue-600 hover:bg-blue-600/90 text-white`}
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 
                  <ClipLoader color={"#FFFFFF80"} loading={true} size={20} aria-label="Loading Spinner" data-testid="loader" />
                  : <Send className="h-4 w-4 mr-2" />}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <Card className="bg-[#0B0416] shadow-custom border-0">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">
                  Feel free to reach out through any of these platforms. I typically 
                  respond within 24 hours and I'm always excited to discuss new projects, 
                  opportunities, or just chat about technology!
                </p>
                
                <div className="space-y-4">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex border border-[#ffffff1a] items-center p-4 rounded-lg bg-[#060010] hover:bg-[#060010]/80 hover:scale-103 transition-all duration-300 group"
                      >
                        <IconComponent className={`h-6 w-6 mr-4 text-gray-400 group-hover:scale-110 transition-transform ${link.color}`} />
                        <div>
                          <div className="font-medium text-white">{link.name}</div>
                          <div className="text-sm text-gray-400">
                            {link.url.replace('https://', '').replace('mailto:', '')}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0B0416] shadow-custom border-0">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-white mb-2">Open to Opportunities</h4>
                <p className="text-sm text-gray-400">
                  Currently seeking internships and collaboration opportunities 
                  in AI, blockchain, and full-stack development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
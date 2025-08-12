import { useState, useEffect, useRef } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Send, Linkedin } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs.sendForm('service_gxm6ytm', 'template_prp7f9g', form.current, 'TT6NSG_gsZ2qqLtAt')
        .then((result) => {
          toast({
            title: "Message Sent! 🎉",
            description: "Thank you for reaching out. I'll get back to you soon!",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
        }, (error) => {
          toast({
            title: "Submission Failed",
            description: "There was an error sending your message. Please try again.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        });
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "letsmailjet@gmail.com",
      href: "mailto:letsmailjet@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91-9967695413",
      href: "tel:+919967695413"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Thane, Maharashtra",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jeet-manjrekar-507884260/",
      username: "Jeet Manjrekar"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-2 h-2 bg-accent rounded-full animate-float opacity-50"></div>
        <div className="absolute top-1/3 left-10 w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow opacity-40"></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-accent rounded-full animate-pulse-glow opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-accent bg-clip-text text-transparent animate-shimmer">Get In Touch</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Let's connect and discuss opportunities, collaborations, or just chat about cybersecurity and tech!
            </p>
            <div className="flex items-center justify-center space-x-2 mt-6">
              <a
                href="https://www.linkedin.com/in/jeet-manjrekar-507884260/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <Linkedin size={24} className="text-accent animate-pulse" />
                <span className="text-accent font-semibold text-lg">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className={`lg:col-span-3 transition-all duration-1000 delay-200 ${
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            }`}>
              <Card className="futuristic-card p-10 shadow-card border-border/50 hover:shadow-glow transition-smooth hover-lift group">
                <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="block text-base font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name" // Corrected name attribute
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12 px-4 text-base transition-all duration-300 focus:ring-2 focus:ring-accent focus:border-accent hover:border-accent/50 bg-muted/30 border-border/50"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="block text-base font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email" // Corrected name attribute
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12 px-4 text-base transition-all duration-300 focus:ring-2 focus:ring-accent focus:border-accent hover:border-accent/50 bg-muted/30 border-border/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="subject" className="block text-base font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject" // Corrected name attribute
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="h-12 px-4 text-base transition-all duration-300 focus:ring-2 focus:ring-accent focus:border-accent hover:border-accent/50 bg-muted/30 border-border/50"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="message" className="block text-base font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message" // This name attribute is fine
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={8}
                      className="text-base p-4 transition-all duration-300 focus:ring-2 focus:ring-accent focus:border-accent hover:border-accent/50 bg-muted/30 border-border/50 resize-none"
                      placeholder="Tell me more about your project, inquiry, or how I can help..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-semibold shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300 animate-pulse-glow"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <Send size={20} />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info & Social */}
            <div className={`lg:col-span-2 space-y-10 transition-all duration-1000 delay-400 ${
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            }`}>
              {/* Contact Information */}
              <Card className="futuristic-card p-8 shadow-card border-border/50 hover:shadow-glow transition-smooth hover-lift cursor-pointer group">
                <h3 className="text-2xl font-semibold text-accent mb-8 group-hover:text-foreground transition-colors">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.label}
                      className={`flex items-center space-x-4 p-4 rounded-xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 cursor-pointer group/item`}
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => window.open(info.href, '_blank')}
                    >
                      <div className="p-3 bg-accent/20 rounded-xl text-accent animate-pulse group-hover/item:bg-accent group-hover/item:text-background transition-all duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground mb-1">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-sm text-muted-foreground hover:text-accent transition-colors group-hover/item:text-accent"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="futuristic-card p-8 shadow-card border-border/50 hover:shadow-glow transition-smooth hover-lift group">
                <h3 className="text-2xl font-semibold text-accent mb-8 group-hover:text-foreground transition-colors">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 rounded-xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 group/item cursor-pointer`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="p-3 bg-accent/20 rounded-xl text-accent group-hover/item:bg-accent group-hover/item:text-background transition-all duration-300 animate-pulse">
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground group-hover/item:text-accent transition-colors">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                      <div className="text-accent opacity-60 group-hover/item:opacity-100 transition-opacity duration-300">
                        ↗
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Quick Response Info */}
              <Card className="futuristic-card p-8 shadow-card border-border/50 hover:shadow-glow transition-smooth hover-lift cursor-pointer group">
                <h3 className="text-xl font-semibold text-accent mb-6 group-hover:text-foreground transition-colors">Quick Response</h3>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    I typically respond to emails within 24 hours. For urgent matters, 
                    feel free to reach out via phone or LinkedIn.
                  </p>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">Available for new opportunities</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
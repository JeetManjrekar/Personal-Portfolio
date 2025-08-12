import { Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 w-1 h-1 bg-accent rounded-full animate-float opacity-40"></div>
        <div className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow opacity-30"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                <span className="gradient-accent bg-clip-text text-transparent">Jeet Manjrekar</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                AI Engineering student and cybersecurity specialist passionate about machine learning, 
                deep learning, and ethical hacking. Building intelligent solutions for tomorrow's challenges.
              </p>
            </div>

            {/* Quick Links */}
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            }`}>
              <h4 className="text-xl font-semibold text-foreground">Quick Links</h4>
              <nav className="space-y-3">
                {["About", "Resume", "Hackathons", "Certifications", "Contact"].map((link, index) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className={`block text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 hover:translate-x-1 transform text-base`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            }`}>
              <h4 className="text-xl font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform">
                  <Mail size={18} className="text-accent animate-pulse" />
                  <a 
                    href="mailto:letsmailjet@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors text-base"
                  >
                    letsmailjet@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/jeet-manjrekar-507884260/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 transform p-2 hover:bg-accent/10 rounded-lg"
                  >
                    <Linkedin size={20} className="animate-float" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={`flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 transition-all duration-1000 delay-600 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-muted-foreground text-base">
              © {currentYear} Jeet Manjrekar. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-accent hover:scale-105 transition-all duration-300 hover:shadow-glow px-4 py-2"
              >
                <ArrowUp size={18} className="animate-float" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
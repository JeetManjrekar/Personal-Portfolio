import { Button } from "./ui/button";
import { ArrowDown, Shield, Code, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-accent rounded-full animate-rotate-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-primary rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-muted rounded-full animate-rotate-slow" style={{ animationDuration: '30s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-accent rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 bg-accent rounded-full animate-pulse-glow opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow opacity-50" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <h1 className="text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-accent bg-clip-text text-transparent animate-shimmer">
                  Jeet Manjrekar
                </span>
              </h1>
              <p className="text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                AI Engineering student and cybersecurity specialist passionate about machine learning, 
                deep learning, and ethical hacking. Building intelligent solutions for tomorrow's challenges.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('resume')}
                className="h-14 px-8 text-lg font-semibold shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300 animate-pulse-glow"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="h-14 px-8 text-lg font-semibold border-accent/30 text-accent hover:bg-accent hover:text-background transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors cursor-pointer group">
                <Shield className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 animate-float" />
                <span className="text-base font-medium">Cybersecurity</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors cursor-pointer group">
                <Code className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '1s' }} />
                <span className="text-base font-medium">AI/ML</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors cursor-pointer group">
                <Zap className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '2s' }} />
                <span className="text-base font-medium">Innovation</span>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-start transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative group -ml-8"> {/* Added -ml-8 to move image 2cm left */}
              <div className="absolute inset-0 gradient-accent rounded-2xl blur-3xl opacity-20 animate-glow"></div>
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-4 border-accent/30 shadow-card hover:shadow-glow transition-all duration-500 group-hover:scale-105 group-hover:border-accent/50">
                <img
                  src="/lovable-uploads/12438050-a747-4fa8-bbd1-a988ac24bfd3.png"
                  alt="Jeet Manjrekar - AI & Cybersecurity Specialist"
                  className="w-full h-full object-cover object-top"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
        }`}>
          <button
            onClick={() => scrollToSection("about")}
            className="p-2 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-smooth hover:scale-110 hover:shadow-glow animate-bounce"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
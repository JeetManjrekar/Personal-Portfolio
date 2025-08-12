import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "hackathons", label: "Hackathons" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      // Check if scrolled
      setIsScrolled(window.scrollY > 50);

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-accent/20 shadow-glow' 
        : 'bg-background/80 backdrop-blur-lg border-b border-border/50'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold gradient-accent bg-clip-text text-transparent animate-shimmer hover:scale-105 transition-transform">
            Jeet Manjrekar
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-accent hover:scale-105 transform relative group ${
                  activeSection === item.id ? "text-accent" : "text-muted-foreground"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                {/* Hover Underline Effect */}
                <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${
                  activeSection === item.id ? 'w-full' : ''
                }`}></div>
              </button>
            ))}
            <Button 
              variant="secondary" 
              size="sm"
              className="hover:scale-105 transition-all duration-300 hover:shadow-glow group"
            >
              <Download size={16} className="mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:scale-105 transition-all duration-300 hover:bg-accent/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} className="animate-rotate-180" /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-border/50">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 transform ${
                  activeSection === item.id
                    ? "bg-accent/10 text-accent border-l-4 border-accent"
                    : "text-muted-foreground hover:text-accent hover:bg-accent/5 hover:border-l-4 hover:border-accent/30"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-border/50">
              <Button 
                variant="secondary" 
                className="w-full hover:scale-105 transition-all duration-300 hover:shadow-glow group"
              >
                <Download size={16} className="mr-2 group-hover:animate-bounce" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
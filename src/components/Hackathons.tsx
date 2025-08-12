import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Users, Code, ExternalLink, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

const Hackathons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const hackathons = [
    {
      name: "TryHackMe Global Ranking",
      position: "Global Top 1%",
      date: "Ongoing",
      participants: "3M+",
      project: "Cybersecurity Challenges",
      description: "Ranked in the Global Top 1% on TryHackMe for cybersecurity challenges",
      technologies: ["Ethical Hacking", "Penetration Testing", "Linux", "Network Security", "OSINT"],
      achievements: [
        "Top 1% global ranking among 3M+ users",
        "Advanced penetration testing skills",
        "Expert-level cybersecurity knowledge"
      ],
      link: "https://tryhackme.com"
    },
    {
      name: "HACKSCRIPT 6.0",
      position: "2nd Place",
      date: "2023",
      participants: "200+",
      project: "Innovations in AI",
      description: "Secured 2nd place in 'Innovations in AI' at HACKSCRIPT 6.0 for developing an advanced document forgery detection system",
      technologies: ["AI", "Machine Learning", "Computer Vision", "Document Analysis", "Python"],
      achievements: [
        "Advanced document forgery detection",
        "AI-powered authenticity verification",
        "Real-time document processing"
      ],
      link: "https://github.com/jeet/document-forgery-detection"
    },
    {
      name: "Hack-A-Loud Hackathon",
      position: "Top 10",
      date: "2023",
      participants: "300+",
      project: "Problem-Solving Innovation",
      description: "Achieved Top 10 finish at 'Hack-A-Loud' Hackathon, demonstrating strong innovative problem-solving skills",
      technologies: ["Full-Stack Development", "Problem Solving", "Innovation", "Team Collaboration"],
      achievements: [
        "Top 10 finish among 300+ participants",
        "Innovative problem-solving approach",
        "Strong technical implementation"
      ],
      link: "https://github.com/jeet/hack-a-loud-project"
    }
  ];

  const getPositionIcon = (position: string) => {
    if (position.includes("1st")) return <Trophy className="text-yellow-400 animate-float" size={20} />;
    if (position.includes("2nd")) return <Trophy className="text-gray-300 animate-float" size={20} />;
    if (position.includes("3rd")) return <Trophy className="text-amber-600 animate-float" size={20} />;
    return <Trophy className="text-accent animate-float" size={20} />;
  };

  return (
    <section id="hackathons" className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse-glow opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow opacity-50"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-accent rounded-full animate-float opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-accent bg-clip-text text-transparent animate-shimmer">Hackathons</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Competitive programming and innovation through hackathon victories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
                }`}
              >
                <Card className="futuristic-card p-8 shadow-card border-border/50 hover:shadow-glow transition-smooth hover-lift group">
                  <div className="space-y-8 relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        {getPositionIcon(hackathon.position)}
                        <div>
                          <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                            {hackathon.name}
                          </h3>
                          <p className="text-accent font-medium text-lg">{hackathon.position}</p>
                        </div>
                      </div>
                      <a
                        href={hackathon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-smooth hover:scale-110 transform p-2 hover:bg-accent/10 rounded-lg"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-base text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="animate-pulse" />
                        <span>{hackathon.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users size={16} className="animate-pulse" />
                        <span>{hackathon.participants} participants</span>
                      </div>
                    </div>

                    {/* Project */}
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <Code size={18} className="text-accent animate-rotate-slow" />
                        <h4 className="font-semibold text-foreground text-lg">{hackathon.project}</h4>
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed mb-6">
                        {hackathon.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-base font-medium text-foreground mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-3">
                        {hackathon.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className={`px-3 py-2 text-sm bg-accent/10 text-accent border-accent/30 transition-all duration-300 hover:scale-105 hover:bg-accent/20 cursor-pointer`}
                            style={{ animationDelay: `${techIndex * 100}ms` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-base font-medium text-foreground mb-3">Key Achievements:</h5>
                      <ul className="space-y-3">
                        {hackathon.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-base text-muted-foreground hover:text-foreground transition-colors">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0 animate-pulse"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const certifications = [
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2023",
      status: "Active",
      credentialId: "ECC9178245360",
      description: "Comprehensive ethical hacking and penetration testing certification covering advanced security concepts",
      skills: ["Ethical Hacking", "Penetration Testing", "Network Security", "Vulnerability Assessment"],
      link: "https://cert.eccouncil.org/verify",
      logo: "🛡️"
    },
    {
      name: "Deep Learning Certificate",
      issuer: "Stanford University via Coursera",
      date: "2023",
      status: "Active", 
      credentialId: "KWG2YR6681D3",
      description: "Advanced deep learning concepts, neural networks, and practical implementation using TensorFlow and Keras",
      skills: ["Deep Learning", "Neural Networks", "TensorFlow", "Keras", "Machine Learning"],
      link: "https://coursera.org/verify/stanford-dl",
      logo: "🧠"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-500/10 text-green-400 border-green-500/30 animate-pulse">Active</Badge>;
      case "In Progress":
        return <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/30 animate-pulse">In Progress</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <section id="certifications" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-3 h-3 bg-accent rounded-full animate-float opacity-40"></div>
        <div className="absolute top-1/3 left-5 w-2 h-2 bg-accent rounded-full animate-pulse-glow opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-float opacity-30"></div>
        <div className="absolute bottom-10 left-1/3 w-1 h-1 bg-accent rounded-full animate-pulse-glow opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-accent bg-clip-text text-transparent animate-shimmer">Certifications</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Professional certifications and continuous learning achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${index * 300} ${
                  isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
                }`}
              >
                <Card className="futuristic-card p-10 shadow-card border-border/50 hover:shadow-glow transition-smooth hover-lift group">
                  <div className="space-y-6 relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl animate-float">{cert.logo}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-lg leading-tight group-hover:text-accent transition-colors">
                            {cert.name}
                          </h3>
                          <p className="text-sm text-accent font-medium">{cert.issuer}</p>
                        </div>
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-smooth hover:scale-110 transform p-2 hover:bg-accent/10 rounded-lg"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>

                    {/* Status and Date */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar size={14} className="animate-pulse" />
                        <span>{cert.date}</span>
                      </div>
                      {getStatusBadge(cert.status)}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {cert.description}
                    </p>

                    {/* Credential ID */}
                    <div className="p-4 bg-muted/50 rounded-lg border border-accent/20 group-hover:border-accent/40 transition-colors">
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <span className="font-medium">ID:</span> {cert.credentialId}
                      </p>
                    </div>

                    {/* Skills */}
                    <div>
                      <h5 className="text-sm font-medium text-foreground mb-3">Skills Covered:</h5>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className={`text-sm px-3 py-1.5 bg-accent/10 text-accent border-accent/30 transition-all duration-300 hover:scale-105 hover:bg-accent/20 cursor-pointer`}
                            style={{ animationDelay: `${skillIndex * 100}ms` }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Stats section removed as requested */}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
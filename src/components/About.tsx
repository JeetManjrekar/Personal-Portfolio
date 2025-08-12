import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    // AI & Machine Learning
    "Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision", "NLP", 
    "Reinforcement Learning", "Recommendation Systems", "Data Science",
    
    // Cybersecurity & Networking
    "Ethical Hacking", "Web Application Security", "VAPT", "OWASP Top 10", "Nmap", 
    "Burp Suite", "Computer Networking",
    
    // Languages & Web Technologies
    "Python", "JavaScript", "HTML", "CSS", "Bash", "SQL",
    
    // Libraries & Frameworks
    "TensorFlow", "Keras", "scikit-learn", "OpenCV", "MediaPipe", "YOLOv8", 
    "NumPy", "Pandas", "Matplotlib", "Seaborn",
    
    // Cloud & DevOps
    "AWS", "Google Cloud Platform", "Git",
    
    // Databases
    "MySQL", "PostgreSQL",
    
    // GenAI, ML, DL
    "Generative AI", "Large Language Models", "Computer Vision", "Natural Language Processing"
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-50"></div>
        <div className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow opacity-40"></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-accent rounded-full animate-pulse-glow opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-accent bg-clip-text text-transparent animate-shimmer">About Me</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              A passionate technologist with expertise in cybersecurity and full-stack development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Story */}
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            }`}>
              <Card className="futuristic-card p-10 shadow-card border-border/50 hover:shadow-glow transition-smooth hover-lift group">
                <h3 className="text-3xl font-semibold mb-6 text-accent group-hover:text-foreground transition-colors">My Journey</h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed text-base group-hover:text-foreground transition-colors">
                  <p>
                    I'm pursuing B.E. in Artificial Intelligence and Machine Learning at A.P. Shah Institute 
                    of Technology, Thane. My journey combines the power of AI with cybersecurity to create 
                    innovative solutions for real-world problems.
                  </p>
                  <p>
                    Through internships and projects, I've developed expertise in machine learning, 
                    deep learning, and AI-powered security systems. I'm particularly passionate about 
                    multimodal AI, computer vision, and building intelligent proctoring systems.
                  </p>
                  <p>
                    When I'm not coding AI models, I enjoy participating in hackathons and contributing 
                    to open-source AI and security projects. I'm also ranked in the global top 1% on 
                    TryHackMe for cybersecurity challenges.
                  </p>
                </div>
              </Card>

              {/* What I Love - New Section */}
              <Card className="futuristic-card p-10 shadow-card border-border/50 hover:shadow-glow transition-smooth hover-lift group">
                <h3 className="text-3xl font-semibold mb-6 text-accent group-hover:text-foreground transition-colors">What I Love</h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed text-base group-hover:text-foreground transition-colors">
                  <p>
                    Beyond technology, I'm passionate about exploring new places, capturing moments through photography, 
                    and staying active through various sports and fitness activities. These experiences help me maintain 
                    a balanced perspective and bring creativity to my technical work.
                  </p>
                  
                  {/* Personal Images Gallery */}
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold text-foreground mb-4">Life Through My Lens</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {[
                        "https://i.postimg.cc/njcFd3hX/450824144-1453799306013856-226725017335405354-n.jpg",
                        "https://i.postimg.cc/svBXdH9S/458308717-3692897030950813-6717376474156638960-n.jpg",
                        "https://i.postimg.cc/qhbkW2Nj/458743594-1591491501719597-5025651150210561719-n.jpg",
                        "https://i.postimg.cc/zV9fJw0Q/461197745-1426908271334106-6217713937912289402-n.jpg",
                        "https://i.postimg.cc/4K14bDsC/461265011-505824905494726-1433406231131721118-n.jpg",
                        "https://i.postimg.cc/TKg3hys3/461309946-855243243418922-3212653957374080636-n.jpg",
                        "https://i.postimg.cc/KKbvTGXr/475799946-1337563187271851-9085907632526166296-n.jpg"
                      ].map((imageUrl, index) => (
                        <div
                          key={index}
                          className="relative group/image overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <img
                            src={imageUrl}
                            alt={`Personal photo ${index + 1}`}
                            className="w-full h-32 object-cover transition-transform duration-300 group-hover/image:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Skills & Interests */}
            <div className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
            }`}>
              <Card className="futuristic-card p-10 shadow-card border-border/50 hover:shadow-glow transition-smooth hover-lift group">
                <h3 className="text-3xl font-semibold mb-8 text-accent group-hover:text-foreground transition-colors">Technical Skills</h3>
                <div className="flex flex-wrap gap-4">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`px-4 py-2 text-sm bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-pointer`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="futuristic-card p-10 shadow-card border-border/50 hover:shadow-glow transition-smooth hover-lift group">
                <h3 className="text-3xl font-semibold mb-6 text-accent group-hover:text-foreground transition-colors">What I Do</h3>
                <ul className="space-y-4 text-muted-foreground group-hover:text-foreground transition-colors">
                  <li className="flex items-start space-x-4 text-base">
                    <div className="w-2.5 h-2.5 bg-accent rounded-full mt-2 animate-pulse flex-shrink-0"></div>
                    <span>AI-powered system development and optimization</span>
                  </li>
                  <li className="flex items-start space-x-4 text-base">
                    <div className="w-2.5 h-2.5 bg-accent rounded-full mt-2 animate-pulse flex-shrink-0" style={{ animationDelay: '0.5s' }}></div>
                    <span>Machine learning model training and deployment</span>
                  </li>
                  <li className="flex items-start space-x-4 text-base">
                    <div className="w-2.5 h-2.5 bg-accent rounded-full mt-2 animate-pulse flex-shrink-0" style={{ animationDelay: '1s' }}></div>
                    <span>Computer vision and multimodal AI systems</span>
                  </li>
                  <li className="flex items-start space-x-4 text-base">
                    <div className="w-2.5 h-2.5 bg-accent rounded-full mt-2 animate-pulse flex-shrink-0" style={{ animationDelay: '1.5s' }}></div>
                    <span>Cybersecurity and ethical hacking solutions</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
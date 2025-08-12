import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, ExternalLink, Code, Trophy, Users, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      title: "AI Developer Intern",
      company: "Humsiha Parikshha Private Limited (Prep.Study)",
      location: "Remote",
      period: "June 2023 - September 2023",
      description: [
        "Developed an AI-powered Remote Proctoring System to enhance online exam fairness and monitoring",
        "Implemented machine learning models for detecting live vocal cues indicating potential cheating",
        "Utilized MediaPipe and webcam feeds to analyze candidate behavior, including head movement, multiple faces, or absence from frame",
        "Created a gesture-based interaction system using MediaPipe for candidates to signal proctors",
        "Built real-time alert mechanisms to notify proctors of abnormal behavior or gesture communications",
        "Fine-tuned detection pipelines for high reliability and minimal false alerts, integrating AI and real-time systems effectively"
      ],
      technologies: ["Python", "MediaPipe", "Machine Learning", "Computer Vision", "Real-time Systems", "AI", "OpenCV", "TensorFlow"]
    }
  ];

  const projects = [
    {
      title: "Crime Detection Using Deep Learning",
      description: "AI system that detects weapons, screams, gestures, with instant CCTV alerts for rapid response",
      technologies: ["Deep Learning", "Computer Vision", "Real-time Detection", "CCTV Integration", "Alert Systems"]
    },
    {
      title: "Multimodal Emotion Recognition",
      description: "Achieved 85% accuracy using text, audio, video; published in JECRA. Developed real-time emotion recognition dashboards using Flask integrated with machine learning and deep learning models",
      technologies: ["Machine Learning", "Deep Learning", "Flask", "Multimodal AI", "Computer Vision", "NLP"]
    },
    {
      title: "Army AI Dashboard with VR Assistant",
      description: "Designed a VR dashboard with real-time weapon data and training modules; integrated AI assistant for hands-free interaction",
      technologies: ["VR", "AI", "Real-time Data", "Voice Recognition", "Dashboard Design"]
    },
    {
      title: "Generative AI Text-to-Image Transformer",
      description: "Transformed text input into customized images using generative AI; enabled real-time design adjustments with API and offline models",
      technologies: ["Generative AI", "Text-to-Image", "API Integration", "Real-time Processing", "Transformers"]
    },
    {
      title: "Proctoring System with Gesture & Face Recognition", 
      description: "Built a secure proctoring system using face and gesture recognition; implemented real-time alerts and session monitoring dashboard",
      technologies: ["Computer Vision", "Face Recognition", "Gesture Recognition", "Real-time Monitoring", "Security"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Artificial Intelligence and Machine Learning",
      institution: "A. P. Shah Institute of Technology, Thane",
      period: "July 2021 - May 2025",
      location: "Thane, Maharashtra",
      gpa: "7.61/10",
      relevant: ["Neural Networks", "Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Data Science"]
    },
    {
      degree: "XII Science",
      institution: "Shubhamraje Junior College",
      period: "May 2019 - May 2021",
      location: "Maharashtra",
      gpa: "82%",
      relevant: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    }
  ];

  return (
    <section id="resume" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-2 h-2 bg-accent rounded-full animate-float opacity-50"></div>
        <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow opacity-40"></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-accent rounded-full animate-pulse-glow opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-accent bg-clip-text text-transparent animate-shimmer">Resume</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              My professional journey in cybersecurity and software development
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Experience */}
            <div className="lg:col-span-2 space-y-8">
              <h3 className="text-3xl font-semibold text-accent mb-8 flex items-center">
                <Code className="mr-3 animate-rotate-slow" />
                WORK EXPERIENCE
              </h3>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 delay-${index * 200} ${
                    isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <Card className="futuristic-card p-8 shadow-card border-border/50 hover:shadow-glow transition-smooth hover-lift group">
                    <div className="space-y-6 relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <h4 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">{exp.title}</h4>
                        <div className="flex items-center space-x-3 text-base text-muted-foreground">
                          <Calendar size={16} className="animate-pulse" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6 text-base text-muted-foreground">
                        <span className="font-medium text-accent">{exp.company}</span>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} className="animate-pulse" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-4 text-muted-foreground">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-4 group-hover:text-foreground transition-colors">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0 animate-pulse"></div>
                            <span className="text-base leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, techIndex) => (
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
                  </Card>
                </div>
              ))}

              {/* Projects Section */}
              <div className={`mt-16 transition-all duration-1000 delay-600 ${
                isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
              }`}>
                <h3 className="text-3xl font-semibold text-accent mb-8 flex items-center">
                  <Trophy className="mr-3 animate-float" />
                  Key Projects
                </h3>
                <div className="space-y-8">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                        isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
                      }`}
                    >
                      <Card className="futuristic-card p-8 shadow-card border-border/50 hover:shadow-glow transition-smooth hover-lift group">
                        <div className="space-y-6 relative z-10">
                          <h4 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">{project.title}</h4>
                          <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{project.description}</p>
                          <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, techIndex) => (
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
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Quick Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semibold text-accent mb-8 flex items-center">
                  <BookOpen className="mr-3 animate-float" />
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 delay-${index * 300} ${
                      isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <Card className="futuristic-card p-8 shadow-card border-border/50 hover-lift">
                      <div className="space-y-6 relative z-10">
                        <h4 className="text-xl font-semibold text-foreground leading-tight">
                          {edu.degree}
                        </h4>
                        
                        <div className="space-y-4 text-base">
                          <div className="flex items-center space-x-3 text-accent">
                            <ExternalLink size={16} className="animate-pulse" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          
                          <div className="flex items-center space-x-3 text-muted-foreground">
                            <Calendar size={16} className="animate-pulse" />
                            <span>{edu.period}</span>
                          </div>
                          
                          <div className="flex items-center space-x-3 text-muted-foreground">
                            <MapPin size={16} className="animate-pulse" />
                            <span>{edu.location}</span>
                          </div>
                          
                          <div className="text-accent font-medium text-lg">CGPA/Grade: {edu.gpa}</div>
                        </div>

                        <div>
                          <h5 className="text-base font-medium text-foreground mb-3">Relevant Coursework:</h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.relevant.map((course, courseIndex) => (
                              <Badge 
                                key={course} 
                                variant="secondary" 
                                className={`px-3 py-1.5 text-sm bg-muted text-muted-foreground transition-all duration-300 hover:scale-105 cursor-pointer`}
                                style={{ animationDelay: `${courseIndex * 100}ms` }}
                              >
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className={`transition-all duration-1000 delay-800 ${
                isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
              }`}>
                <Card className="futuristic-card p-8 shadow-card border-border/50 hover-lift">
                  <h4 className="text-xl font-semibold text-accent mb-6 flex items-center">
                    <Users className="mr-3 animate-float" />
                    Quick Stats
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-base text-muted-foreground">CGPA</span>
                      <span className="font-semibold text-foreground animate-pulse-glow">7.61/10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base text-muted-foreground">Projects</span>
                      <span className="font-semibold text-foreground animate-pulse-glow">5+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base text-muted-foreground">Hackathons</span>
                      <span className="font-semibold text-foreground animate-pulse-glow">3+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base text-muted-foreground">Publications</span>
                      <span className="font-semibold text-foreground animate-pulse-glow">1</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
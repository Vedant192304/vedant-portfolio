import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "Festiva",
      subtitle: "Event Discovery & Management Platform",
      description:
        "Full-stack event discovery platform built with Spring Boot and React. Empowers organizers to manage concerts and attendees to book tickets. Features include AI-generated event summaries, personalized recommendations, MFA security, and real-time QR code check-ins for venues.",
      technologies: ["Java", "Spring Boot", "React.js", "PostgreSQL", "Groq AI", "JWT"],
      github: "https://github.com/Vedantrajhans/concert-platform",
      live: null,
    },
    {
      title: "MentorConnect",
      subtitle: "Mentorship Marketplace (In Progress)",
      description:
        "SEO-friendly mentorship marketplace built with Next.js, Node.js, and MongoDB. Features Google/LinkedIn OAuth, advanced search, Stripe payments, and Zoom/Google Meet integration. Deployed on Vercel (frontend) and AWS/Render (backend) for scalable, production-ready performance.",
      technologies: ["Next.js", "Node.js", "MongoDB", "OAuth", "Stripe", "AWS", "Vercel"],
      github: "https://github.com/Vedantrajhans/Mentor_Connect",
      live: null,
    },
    {
      title: "FraudGuard AI",
      subtitle: "Real-Time Fraud Detection System",
      description:
        "Real-time fraud detection system processing transactions using Kafka streaming with 96% accuracy. Uses ensemble learning combining Random Forest and XGBoost algorithms with features like amount Z-score normalization, velocity tracking, and geographic anomaly detection. React dashboard provides real-time monitoring, analytics, and alerts.",
      technologies: ["Python", "Kafka", "Random Forest", "XGBoost", "React.js", "Machine Learning"],
      github:  "https://github.com/Vedantrajhans/Fraudguard-ai" ,
      live: null,
    },
    {
      title: "WanderLust",
      subtitle: "Airbnb-Style Rental Platform",
      description:
        "Full-stack rental marketplace built with MERN stack featuring session-based authentication via Passport.js. Includes listing uploads with Multer + Cloudinary, reviews, ratings, and search-based filtering. Deployed on Render with MongoDB Atlas for scalable production hosting.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Cloudinary", "Passport.js"],
      github: "https://github.com/Vedantrajhans/WanderLust",
      live: null,
    },
    {
      title: "Live Object Detection System",
      subtitle: "Browser-Based AI Vision",
      description:
        "Complete live object detection system using TensorFlow.js that detects 80+ object types in real-time directly in the browser. Features visual bounding boxes with confidence scores, FPS counter, and works without any Python dependencies. Uses pre-trained COCO-SSD model for accurate and fast detection with fully customizable code.",
      technologies: ["TensorFlow.js", "JavaScript", "COCO-SSD", "HTML5", "CSS3", "Computer Vision"],
      github: "https://github.com/Vedantrajhans/Live-Object-Detection-System",
      live: null ,
    },
    {
      title: "GoFood",
      subtitle: "Food Delivery Platform",
      description:
        "Advanced food delivery platform built with React.js, Node.js, and MongoDB. Features JWT authentication, dynamic cart management via Context API, and secure backend using Express.js and Mongoose. Implements Bootstrap 5 and modern web standards for scalable, responsive performance.",
      technologies: ["React.js", "Node.js", "MongoDB", "JWT", "Bootstrap", "Express.js"],
      github: "https://github.com/Vedantrajhans/GoFood",
      live: null,
    },
    {
      title: "VitalWatch AI",
      subtitle: "Health Monitoring System",
      description:
        "Real-time health monitoring system using RandomForestClassifier to predict health risks from wearable data (heart rate, BP, sleep). Features a Streamlit dashboard with live metrics and Gmail alerts for critical health events. Achieved high-accuracy predictions through robust preprocessing.",
      technologies: ["Python", "Machine Learning", "Streamlit", "Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/Vedantrajhans/Vital-Watch-AI",
      live: null,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Check out my latest work and innovations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 bg-card border-border hover:border-primary transition-all duration-700 hover-lift flex flex-col group ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-primary font-semibold mb-4">{project.subtitle}</p>
                <p className="text-foreground/80 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <Button
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary/10"
                    onClick={() => window.open(project.github!, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                )}
                {project.live && (
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => window.open(project.live!, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  const experiences = [
    {
      title: "Front End Web Development Intern",
      company: "Edunet Foundation (AICTE - IBM SkillsBuild)",
      period: "Aug 2024 – Oct 2024",
      description: [
        "Completed internship under IBM SkillsBuild Program with hands-on front-end development experience",
        "Built GoFood – Advanced Food Delivery Platform using React.js, Node.js, and MongoDB with JWT authentication",
        "Implemented dynamic cart management via Context API and secure backend using Express.js and Mongoose",
        "Utilized modern libraries: Axios, Bootstrap 5, React Router, Express Validator, and Bcrypt.js",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "JWT", "Express.js", "Bootstrap"],
      certificateLink: "https://drive.google.com/file/d/1uNGPSX0gj7wNY7IhB_gLftQDUsI169H5/view?usp=drive_link",
    },
    {
      title: "Machine Learning Intern",
      company: "Edunet Foundation (AICTE-Microsoft)",
      period: "Apr 2024 – May 2024",
      description: [
        "Built VitalWatch AI – real-time health monitoring system using RandomForestClassifier",
        "Engineered features to predict health risks from wearable data (heart rate, BP, sleep patterns)",
        "Deployed Streamlit dashboard with live metrics and integrated Gmail alerts for critical events",
        "Achieved high-accuracy predictions through robust preprocessing with Pandas, NumPy, and Scikit-learn",
      ],
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Streamlit", "Pandas", "NumPy"],
      certificateLink: "https://drive.google.com/file/d/1zuDDNRLVj5uYN_k8BnlE8Ahc3Pgu5hyK/view?usp=drive_link",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:border-primary transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mt-1">{exp.period}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-foreground/90 flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>

              <a
                href={exp.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                View Certificate →
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

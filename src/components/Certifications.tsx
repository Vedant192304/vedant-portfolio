import { Card } from "@/components/ui/card";
import { Award, Trophy, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();
  const achievements = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Data Structures & Algorithms",
      description: "Solved 100+ algorithmic challenges across LeetCode and GeeksforGeeks, refining problem-solving skills and data-structure mastery.",
      link: "https://www.geeksforgeeks.org/user/vedant7639/",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Hackathons",
      description: "Participated in national and international hackathons: Smart India Hackathon (SIH), CodeRed, GenAI Hackathon, and Stellar Hackathon.",
      link: null,
    },
  ];

  const certifications = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "AWS Foundational Course",
      organization: "Amazon Web Services",
      link: "https://drive.google.com/file/d/1qlAPrVl8XcNUkr-IlnJWCB_3-0qSLNW5/view?usp=drive_link",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Red Hat Certified System Administrator (RHCSA)",
      organization: "Red Hat",
      link: "https://drive.google.com/file/d/1xYC5WJfSt8E_-lzC-la_JkTLT3t-HrR0/view?usp=drive_link",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Pregrad Full-Stack Development Certification",
      organization: "MERN Stack",
      link: "https://drive.google.com/file/d/1ZWgDgAUIQf_IeAP4pFHqt6qqWdgvKZy6/view?usp=drive_link",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "C Programming Certification",
      organization: "ESPEE Infotech Academy",
      link: "https://drive.google.com/file/d/1FFWKxsImp75xtN7o3QZFAomkRU9wunbQ/view?usp=drive_link",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "C++ Programming Certification",
      organization: "ESPEE Infotech Academy",
      link: "https://drive.google.com/file/d/1NLpKSka8UZIU4EFz8Re5v27W6i6iC7cO/view?usp=drive_link",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-accent">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Recognition and continuous learning journey
          </p>
        </div>

        <div className="mb-12">
          <h3 className={`text-2xl font-bold mb-6 text-center transition-all duration-700 delay-100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`p-6 bg-card border-border hover:border-primary transition-all duration-700 hover-lift ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="text-primary mb-4">{achievement.icon}</div>
                <h4 className="text-xl font-bold mb-2">{achievement.title}</h4>
                <p className="text-foreground/80 mb-4">{achievement.description}</p>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    View Profile →
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-2xl font-bold mb-6 text-center transition-all duration-700 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`p-6 bg-card border-border hover:border-primary transition-all duration-700 hover-lift text-center ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="flex justify-center text-primary mb-4">{cert.icon}</div>
                <h4 className="font-bold mb-2">{cert.title}</h4>
                <p className="text-muted-foreground text-sm mb-3">{cert.organization}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  View Certificate →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

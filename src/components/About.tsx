import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Cloud, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "MIT Student",
      description: "B.E. in Computer Science (Honours: Cloud Computing) with 9.06 GPA",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Developer",
      description: "Building scalable applications with MERN stack and modern frameworks",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "AI/ML Enthusiast",
      description: "Building intelligent systems with LLMs, RAG, and ML algorithms",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Problem Solver",
      description: "100+ DSA problems solved across LeetCode and GeeksforGeeks",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Get to know the person behind the code
          </p>
        </div>

        <div className={`max-w-6xl mx-auto mb-12 transition-all duration-700 delay-100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Card className="p-8 bg-card border-border hover-lift">
            <div className="grid md:grid-cols-[1fr,300px] gap-8 items-center">
              <div>
                <p className="text-lg leading-relaxed text-foreground/90">
                  I'm <span className="text-primary font-semibold">Vedant Rajhans</span>, a Full-Stack Web Developer and B.Tech CSE student passionate about building fast, scalable, and intelligent web applications. I work with React, Next.js, Node.js, Express, MongoDB, and MySQL, and I enjoy creating clean, responsive user interfaces with Tailwind CSS and modern design principles.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90 mt-4">
                  I'm currently learning and exploring AI integration in web development, working on various projects that help me understand LLMs, automation, and smart system design. Through hands-on development and participation in hackathons, I continue to sharpen my skills by building innovative prototypes and gaining real-world experience with emerging AI technologies.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-3xl animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-full opacity-10 blur-2xl animate-glow"></div>
                  <img
                    src={profileImage}
                    alt="Vedant Rajhans"
                    className="relative w-full h-full object-cover rounded-full border-4 border-primary shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className={`p-6 bg-card border-border hover:border-primary transition-all duration-700 hover-lift ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="text-primary mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

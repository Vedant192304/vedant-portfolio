import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Java"],
    },
    {
      title: "Frontend & Libraries",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Responsive Design"],
    },
    {
      title: "Backend & Frameworks",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "FastAPI", "REST API", "MongoDB", "MySQL", "SQLite"],
    },
    {
      title: "AI/ML & Data Science",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Google Gemini", "RAG Systems", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "ML Algorithms"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Docker", "Git/GitHub", "CI/CD", "Kafka", "Vercel", "Render"],
    },
    {
      title: "Tools & Soft Skills",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["VS Code", "Postman", "Figma", "Photoshop", "Problem Solving", "Team Collaboration", "Agile", "Leadership"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20 relative">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`p-6 bg-card border-border hover:border-primary transition-all duration-700 hover-lift ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-muted text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

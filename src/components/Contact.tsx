import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "vedant.rajhans23@gmail.com",
      href: "mailto:vedant.rajhans23@gmail.com",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/vedant-rajhans-0218682b8/",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "@Vedantrajhans",
      href: "https://github.com/Vedantrajhans",
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      label: "GeeksforGeeks",
      value: "View Profile",
      href: "https://www.geeksforgeeks.org/user/vedant7639/",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20 relative">
      <div className="container mx-auto" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and collaborate on exciting projects
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Card className="p-8 bg-card border-border hover-lift">
            <div className="text-center mb-8">
              <p className="text-lg text-foreground/90">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
                Feel free to reach out through any of the platforms below!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="p-6 bg-muted border-border hover:border-primary transition-all duration-300 hover-lift cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{method.label}</h3>
                        <p className="text-muted-foreground text-sm">{method.value}</p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform animate-glow"
                onClick={() => window.location.href = "mailto:vedant.rajhans23@gmail.com"}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send an Email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

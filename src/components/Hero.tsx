import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import ShaderAnimation from "@/components/ui/shader-animation";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden bg-black">
      <ShaderAnimation />
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Main content */}
      <div className="container mx-auto text-center relative z-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-muted-foreground animate-fade-in-up">
              Hi, I'm
            </p>
            <h1 className="text-6xl md:text-8xl font-bold animate-fade-in-up stagger-1 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease-in-out_infinite] pb-2 leading-tight">
              Vedant Rajhans
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/90 animate-fade-in-up stagger-2">
              <span className="text-primary font-semibold">
                Full-Stack Developer
              </span>{" "}
              |{" "}
              <span className="text-accent font-semibold">AIML Enthusiast</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up stagger-3">
            <Button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform"
            >
              Get In Touch
            </Button>
            <Button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-transform"
            >
              View My Work
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-4 animate-fade-in-up stagger-4">
            <a
              href="https://github.com/Vedantrajhans"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-125"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/vedant-rajhans-0218682b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-125"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:vedant.rajhans23@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-125"
            >
              <Mail size={28} />
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/vedant7639"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-125"
            >
              <ExternalLink size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

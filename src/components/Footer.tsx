import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-foreground">
              <span className="text-accent font-bold">Vedant Rajhans</span>
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Building innovative solutions, one line of code at a time
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Vedantrajhans"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vedant-rajhans-0218682b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:vedant.rajhans23@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/vedant7639/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Vedant Rajhans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo & tagline */}
            <div className="text-center md:text-left">
              <a href="#" className="font-bold text-2xl text-foreground hover:text-primary transition-colors inline-block mb-2">
                <span className="text-primary">&lt;</span>
                Gowtham Kalli
                <span className="text-primary">/&gt;</span>
              </a>
              <p className="text-sm text-muted-foreground">
                Building the future with AI, one model at a time.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/GowthamKalli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/gowtham-kalli-bb9574203/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="mailto:gowtham2005.kalli@gmail.com"
                className="p-3 rounded-full border border-border hover:border-secondary hover:bg-secondary/10 transition-all"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-secondary" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Gowtham Kalli. Built with{" "}
              lots of ☕
            </p>
            <p className="text-xs text-muted-foreground/50 mt-2 font-mono">
              // console.log("Thanks for visiting!");
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
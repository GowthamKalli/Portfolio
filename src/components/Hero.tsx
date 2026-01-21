import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <div className="inline-block mb-6 animate-slide-up">
            <span className="font-mono text-sm text-muted-foreground px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
              <span className="text-primary">~/</span>gowtham<span className="text-secondary">$</span> hello --world
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up delay-100">
            <span className="block text-foreground">I'm</span>
            <span className="text-gradient">Gowtham Kalli</span>
          </h1>

          {/* Subtitle with typing effect style */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up delay-200">
            <span className="text-primary font-mono">&lt;</span>
            Aspiring Data Scientist & Problem Solver
            <span className="text-primary font-mono">/&gt;</span>
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up delay-300">
            A passionate B.Tech CSE student specializing in AI/ML, 
            building intelligent systems that make a real difference. Let's innovate together!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up delay-400">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect font-semibold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-slide-up delay-500">
            <a 
              href="https://github.com/GowthamKalli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover-glow group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/gowtham-kalli-bb9574203/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover-glow group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:gowtham2005.kalli@gmail.com"
              className="p-3 rounded-full border border-border bg-card/50 hover:border-secondary hover:bg-secondary/10 transition-all duration-300 hover-glow group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-secondary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
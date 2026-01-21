import { Brain, Code, Rocket, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Focus",
      description: "Deep learning, computer vision, and intelligent systems"
    },
    {
      icon: Code,
      title: "Full Stack Skills",
      description: "Python, Java, C++ with ML frameworks"
    },
    {
      icon: Rocket,
      title: "Problem Solver",
      description: "Turning complex problems into elegant solutions"
    },
    {
      icon: Sparkles,
      title: "Open Source",
      description: "Actievely trying to get into GSoC"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">
              // about_me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who Am I<span className="text-primary">?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Description */}
            <div className="space-y-6">
              <div className="card-gradient p-8 rounded-2xl border border-border hover-glow">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a dedicated <span className="text-primary font-semibold">B.Tech CSE student</span> at 
                  VIT-AP, specializing in Artificial Intelligence and Machine Learning. My journey in tech started 
                  with early coding exposure through WhiteHat Jr, and now I'm deep into the world of AI/ML, constantly learning and building.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm particularly passionate about applying AI to <span className="text-secondary font-semibold">autonomous systems</span> and 
                  <span className="text-accent font-semibold"> innovative solutions</span>. When I'm not training models, 
                  you'll find me competing in Kaggle, participating in hackathons, or contributing to open-source projects.
                </p>
              </div>

              {/* Fun facts */}
            </div>

            {/* Right side - Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={item.title}
                  className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300 hover-glow group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
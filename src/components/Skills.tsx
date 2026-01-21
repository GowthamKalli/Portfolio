import { Code, Database, Wrench, Trophy } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "C++", level: "Intermediate" }
      ]
    },
    {
      title: "ML Development",
      icon: Database,
      skills: [
        { name: "PyTorch", level: "Advanced" },
        { name: "TensorFlow", level: "Advanced" },
        { name: "OpenCV", level: "Advanced" },
        { name: "Pandas/NumPy", level: "Advanced" },
        { name: "MediaPipe", level: "Intermediate" },
        { name: "YOLO", level: "Intermediate" },
        { name: "scikit-learn", level: "Advanced" }
      ]
    },
    {
      title: "Other Skills",
      icon: Wrench,
      skills: [
        { name: "Arduino Programming", level: "Basic" },
        { name: "Git/GitHub", level: "Intermediate" },
        { name: "Research Implementation", level: "Intermediate" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-primary text-primary-foreground";
      case "Intermediate": return "bg-secondary text-secondary-foreground";
      case "Basic": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">
              // tech_stack
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & Tools<span className="text-primary">.</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover-glow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Extracurricular section */}
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Extracurricular Activities</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-muted/30 border border-border">
                <p className="text-foreground font-medium mb-2">Leetcoder</p>
                <p className="text-sm text-muted-foreground">Solving algorithmic problems and improving coding skills.</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/30 border border-border">
                <p className="text-foreground font-medium mb-2">Kaggle Competitor</p>
                <p className="text-sm text-muted-foreground">Pursuing competitive ML coding challenges and improving data science skills.</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/30 border border-border">
                <p className="text-foreground font-medium mb-2">Hackathon Enthusiast</p>
                <p className="text-sm text-muted-foreground">Active participation in hackathons and technical events in college.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
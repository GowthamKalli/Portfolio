import { GraduationCap, School, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      period: "2023 - 2027",
      title: "B.Tech in Computer Science and Engineering",
      institution: "Vellore Institute of Technology, AP",
      description: "Specialization: Artificial Intelligence and Machine Learning. Pursuing a four-year undergraduate program with exposure to real-world applications through projects and research.",
      icon: GraduationCap,
      current: true
    },
    {
      period: "2021 - 2023",
      title: "+1 and +2 Graduation",
      institution: "FIITJEE",
      description: "Completed intermediate education with a focus on Physics, Chemistry, and Mathematics under the Telangana State Board of Intermediate Education.",
      icon: School,
      current: false
    },
    {
      period: "2011 - 2021",
      title: "Schooling",
      institution: "Birla Open Minds International School",
      description: "Completed foundational and secondary schooling. Developed problem-solving skills and gained early programming exposure.",
      icon: BookOpen,
      current: false
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-card/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">
              // education_timeline
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My Journey<span className="text-primary">.</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary" />

            {education.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary glow-effect z-10">
                  {item.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}>
                  <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover-glow">
                    <div className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-mono text-sm text-secondary">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-primary font-medium mb-3">{item.institution}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
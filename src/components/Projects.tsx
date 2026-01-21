import { ExternalLink, Github, Brain, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

/* 
  ================================================
  🚀 ADD MORE PROJECTS HERE!
  ================================================
  
  To add a new project, simply add a new object to the 'projects' array below.
  
  Template:
  {
    title: "Your Project Title",
    category: "Category Name",
    icon: IconComponent,  // Import from lucide-react
    description: "Short description of what the project does",
    bullets: [
      "Key achievement or feature 1",
      "Key achievement or feature 2",
      "Key achievement or feature 3"
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
    githubUrl: "https://github.com/yourusername/project-name",  // Optional
    liveUrl: "https://your-demo-url.com"  // Optional
  }
  
  Available icons from lucide-react: Brain, Eye, Cpu, Code, Database, Globe, Smartphone, etc.
  ================================================
*/

interface Project {
  title: string;
  category: string;
  icon: LucideIcon;
  description: string;
  bullets: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Sign Language to Text Converter",
    category: "Deep Learning",
    icon: Brain,
    description: "An AI-powered system that converts sign language videos into readable text, improving accessibility for the deaf and hard-of-hearing community.",
    bullets: [
      "Built using ST-GCN (Spatial Temporal Graph Convolutional Network) with LSA64 dataset",
      "Processed raw videos into skeleton and RGB feature streams with end-to-end preprocessing",
      "Achieved strong recognition performance through temporal graph convolution"
    ],
    technologies: ["Python", "PyTorch", "OpenCV", "ST-GCN", "MediaPipe"],
    githubUrl: "https://github.com/GowthamKalli"
  },
  {
    title: "Blind Image Deblurring (PMP Prior)",
    category: "Computer Vision",
    icon: Eye,
    description: "Implementation of a research paper on image deblurring using Patch-wise Minimal Pixel prior, with custom improvements.",
    bullets: [
      "Reproduced core algorithms including PMP and developed improvements",
      "Implemented Adaptive Kernel Estimation and Robust Oracle Selection",
      "Evaluated performance against baseline metrics with detailed analysis"
    ],
    technologies: ["Python", "OpenCV", "NumPy", "Research Implementation"],
    githubUrl: "https://github.com/GowthamKalli"
  }
  
  /*
    ================================================
    ⬇️ ADD YOUR NEW PROJECTS BELOW THIS COMMENT ⬇️
    ================================================
    
    Example:
    {
      title: "Autonomous Drone Navigation",
      category: "Robotics",
      icon: Cpu,  // Remember to import Cpu from lucide-react at the top
      description: "AI-powered drone navigation system using computer vision",
      bullets: [
        "Implemented real-time object detection",
        "Built path planning algorithms",
        "Integrated with ROS"
      ],
      technologies: ["Python", "ROS", "TensorFlow", "OpenCV"],
      githubUrl: "https://github.com/GowthamKalli/drone-project",
      liveUrl: "https://demo.example.com"  // Optional live demo link
    },
    
    ================================================
  */
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">
              // featured_projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I've Built<span className="text-primary">.</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some projects I've worked on.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-500 hover-glow overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-secondary uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                      </div>
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
                        >
                          <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-border hover:border-secondary hover:bg-secondary/10 transition-all"
                        >
                          <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-secondary" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-6">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More projects teaser */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              More projects in the making...
            </p>
            <Button
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/GowthamKalli" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
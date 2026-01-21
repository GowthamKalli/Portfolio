import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">
              // get_in_touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Connect<span className="text-primary">!</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact card */}
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-3xl rounded-full" />
            
            <div className="relative p-8 md:p-12 rounded-3xl border border-border bg-card/90 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact info */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Contact Info</h3>
                  
                  <a 
                    href="mailto:gowtham2005.kalli@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">gowtham2005.kalli@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+916300942948"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border hover:border-secondary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">+91 63009 42948</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium">VIT-AP, Andhra Pradesh, India</p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Find Me Online</h3>
                  
                  <div className="space-y-4">
                    <a
                      href="https://github.com/GowthamKalli"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Github className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-foreground font-medium">GitHub</p>
                          <p className="text-sm text-muted-foreground">@GowthamKalli</p>
                        </div>
                      </div>
                      <Send className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/gowtham-kalli-bb9574203/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Linkedin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-foreground font-medium">LinkedIn</p>
                          <p className="text-sm text-muted-foreground">Connect with me</p>
                        </div>
                      </div>
                      <Send className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </a>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                    <p className="text-foreground font-medium mb-3">Ready to work together?</p>
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
                      asChild
                    >
                      <a href="mailto:gowtham2005.kalli@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Me an Email
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
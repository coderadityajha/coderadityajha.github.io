import { Shield, Heart, GraduationCap, School } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">CyberSecWiki</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              A comprehensive cybersecurity educational resource created as a school project 
              to help students understand the fundamentals of digital security.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#basics" className="block text-muted-foreground hover:text-primary transition-colors">
                Cybersecurity Basics
              </a>
              <a href="#threats" className="block text-muted-foreground hover:text-primary transition-colors">
                Common Threats
              </a>
              <a href="#protection" className="block text-muted-foreground hover:text-primary transition-colors">
                Protection Methods
              </a>
              <a href="#tools" className="block text-muted-foreground hover:text-primary transition-colors">
                Security Tools
              </a>
              <a href="#careers" className="block text-muted-foreground hover:text-primary transition-colors">
                Career Opportunities
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-accent">Project Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <School className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">S D Public School</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Created by: Aditya Jha</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Class 8A - 2024</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 CyberSecWiki. Created for educational purposes by Aditya Jha, Class 8A, S D Public School.
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for cybersecurity education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
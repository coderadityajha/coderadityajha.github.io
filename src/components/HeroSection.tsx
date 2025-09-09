import { Shield, Lock, Eye, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center mb-6">
              <Shield className="h-20 w-20 text-primary animate-pulse-glow" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              CyberSec Wiki
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Your comprehensive guide to cybersecurity fundamentals, threats, and protection strategies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Card className="p-3 gradient-card border border-primary/20">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="font-medium">School Project</span>
              </div>
            </Card>
            <Card className="p-3 gradient-card border border-primary/20">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" />
                <span className="font-medium">Created by: Aditya Jha</span>
              </div>
            </Card>
            <Card className="p-3 gradient-card border border-primary/20">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-primary" />
                <span className="font-medium">Class 8A</span>
              </div>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="shadow-cyber hover:shadow-glow transition-all duration-300">
              <Shield className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
            <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary transition-colors">
              <AlertTriangle className="mr-2 h-5 w-5" />
              View Threats
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
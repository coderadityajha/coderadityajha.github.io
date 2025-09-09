import { Shield, Menu, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-primary animate-pulse-glow" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-glow">CyberSecWiki</h1>
            <p className="text-xs text-muted-foreground">S D Public School</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#basics" className="text-sm font-medium hover:text-primary transition-colors">
            Basics
          </a>
          <a href="#threats" className="text-sm font-medium hover:text-primary transition-colors">
            Threats
          </a>
          <a href="#protection" className="text-sm font-medium hover:text-primary transition-colors">
            Protection
          </a>
          <a href="#tools" className="text-sm font-medium hover:text-primary transition-colors">
            Tools
          </a>
          <a href="#careers" className="text-sm font-medium hover:text-primary transition-colors">
            Careers
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
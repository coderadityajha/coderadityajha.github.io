import { Shield, Search, Network, Lock, Eye, Terminal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const cyberTools = [
  {
    icon: Shield,
    title: "Antivirus Software",
    category: "Protection",
    description: "Detect and remove malicious software from your computer",
    examples: [
      { name: "Windows Defender", type: "Free", platform: "Windows" },
      { name: "Malwarebytes", type: "Freemium", platform: "Multi-platform" },
      { name: "Norton 360", type: "Paid", platform: "Multi-platform" },
      { name: "Kaspersky", type: "Paid", platform: "Multi-platform" }
    ],
    features: ["Real-time scanning", "Threat removal", "Web protection", "Email scanning"]
  },
  {
    icon: Lock,
    title: "Password Managers",
    category: "Authentication",
    description: "Securely store and generate strong passwords for all accounts",
    examples: [
      { name: "Bitwarden", type: "Freemium", platform: "Multi-platform" },
      { name: "1Password", type: "Paid", platform: "Multi-platform" },
      { name: "LastPass", type: "Freemium", platform: "Multi-platform" },
      { name: "KeePass", type: "Free", platform: "Multi-platform" }
    ],
    features: ["Password generation", "Secure storage", "Auto-fill", "Multi-device sync"]
  },
  {
    icon: Network,
    title: "VPN Services",
    category: "Privacy",
    description: "Create secure, encrypted connections to protect your online privacy",
    examples: [
      { name: "NordVPN", type: "Paid", platform: "Multi-platform" },
      { name: "ExpressVPN", type: "Paid", platform: "Multi-platform" },
      { name: "ProtonVPN", type: "Freemium", platform: "Multi-platform" },
      { name: "Windscribe", type: "Freemium", platform: "Multi-platform" }
    ],
    features: ["IP masking", "Traffic encryption", "Geo-unblocking", "No-logs policy"]
  },
  {
    icon: Search,
    title: "Network Scanners",
    category: "Analysis",
    description: "Analyze network security and identify potential vulnerabilities",
    examples: [
      { name: "Nmap", type: "Free", platform: "Multi-platform" },
      { name: "Wireshark", type: "Free", platform: "Multi-platform" },
      { name: "Angry IP Scanner", type: "Free", platform: "Multi-platform" },
      { name: "Advanced IP Scanner", type: "Free", platform: "Windows" }
    ],
    features: ["Port scanning", "Network discovery", "Packet analysis", "Vulnerability detection"]
  },
  {
    icon: Eye,
    title: "Monitoring Tools",
    category: "Surveillance",
    description: "Monitor system activity and detect suspicious behavior",
    examples: [
      { name: "OSSEC", type: "Free", platform: "Multi-platform" },
      { name: "Splunk", type: "Freemium", platform: "Multi-platform" },
      { name: "Process Monitor", type: "Free", platform: "Windows" },
      { name: "CrowdStrike", type: "Paid", platform: "Enterprise" }
    ],
    features: ["Log monitoring", "Real-time alerts", "Behavioral analysis", "Incident response"]
  },
  {
    icon: Terminal,
    title: "Penetration Testing",
    category: "Testing",
    description: "Ethical hacking tools to test system security (Educational purposes)",
    examples: [
      { name: "Kali Linux", type: "Free", platform: "Linux" },
      { name: "Metasploit", type: "Freemium", platform: "Multi-platform" },
      { name: "Burp Suite", type: "Freemium", platform: "Multi-platform" },
      { name: "OWASP ZAP", type: "Free", platform: "Multi-platform" }
    ],
    features: ["Vulnerability scanning", "Exploit testing", "Web app testing", "Reporting"]
  }
];

export function ToolsSection() {
  return (
    <section id="tools" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-glow">Cybersecurity Tools</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential tools and software for cybersecurity protection and analysis
          </p>
          <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg max-w-3xl mx-auto">
            <p className="text-sm text-amber-600 dark:text-amber-400">
              <strong>Educational Note:</strong> These tools are presented for educational purposes. 
              Always use cybersecurity tools ethically and legally, with proper authorization.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {cyberTools.map((tool, index) => (
            <Card key={index} className="gradient-card border border-primary/20 shadow-cyber hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <tool.icon className="h-10 w-10 text-primary group-hover:animate-pulse" />
                    <div>
                      <CardTitle className="text-xl">{tool.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="border-primary/30">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base mt-3">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {tool.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs justify-center">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Popular Tools:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tool.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border/50">
                        <div>
                          <span className="font-medium text-sm">{example.name}</span>
                          <div className="flex gap-2 mt-1">
                            <Badge 
                              variant={example.type === "Free" ? "secondary" : 
                                     example.type === "Freemium" ? "outline" : "default"}
                            >
                              {example.type}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {example.platform}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
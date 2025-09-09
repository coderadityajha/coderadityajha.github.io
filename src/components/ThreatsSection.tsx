import { AlertTriangle, Bug, Zap, Wifi, Mail, CreditCard, UserX } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const threatsData = [
  {
    icon: Bug,
    title: "Malware",
    severity: "High",
    description: "Malicious software designed to damage or gain unauthorized access",
    types: ["Viruses", "Worms", "Trojans", "Ransomware", "Spyware"],
    prevention: "Use antivirus software, keep systems updated, avoid suspicious downloads"
  },
  {
    icon: Mail,
    title: "Phishing",
    severity: "High", 
    description: "Fraudulent attempts to obtain sensitive information by impersonating trustworthy entities",
    types: ["Email Phishing", "SMS Phishing", "Voice Phishing", "Social Media Phishing"],
    prevention: "Verify sender identity, check URLs carefully, never share personal info via email"
  },
  {
    icon: UserX,
    title: "Social Engineering",
    severity: "Medium",
    description: "Manipulation tactics to trick people into divulging confidential information",
    types: ["Pretexting", "Baiting", "Quid Pro Quo", "Tailgating"],
    prevention: "Be skeptical of unsolicited requests, verify identity independently"
  },
  {
    icon: Wifi,
    title: "Man-in-the-Middle",
    severity: "High",
    description: "Intercepting communications between two parties without their knowledge",
    types: ["WiFi Eavesdropping", "SSL Hijacking", "DNS Spoofing"],
    prevention: "Use encrypted connections (HTTPS), avoid public WiFi for sensitive tasks"
  },
  {
    icon: Zap,
    title: "DDoS Attacks",
    severity: "Medium",
    description: "Overwhelming servers with traffic to make services unavailable",
    types: ["Volume-based", "Protocol", "Application Layer"],
    prevention: "Use DDoS protection services, implement rate limiting, have incident response plans"
  },
  {
    icon: CreditCard,
    title: "Identity Theft",
    severity: "High",
    description: "Stealing personal information to impersonate someone for fraudulent purposes",
    types: ["Financial ID Theft", "Medical ID Theft", "Criminal ID Theft"],
    prevention: "Monitor credit reports, use strong passwords, secure personal documents"
  }
];

export function ThreatsSection() {
  return (
    <section id="threats" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-glow">Common Cyber Threats</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding the various types of cyber threats and how to protect against them
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {threatsData.map((threat, index) => (
            <Card key={index} className="gradient-card border border-destructive/20 shadow-cyber hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <threat.icon className="h-8 w-8 text-destructive group-hover:animate-pulse" />
                    <div>
                      <CardTitle className="text-lg">{threat.title}</CardTitle>
                      <Badge 
                        variant={threat.severity === "High" ? "destructive" : "secondary"}
                        className="mt-1"
                      >
                        {threat.severity} Risk
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {threat.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">Common Types:</h4>
                  <div className="flex flex-wrap gap-2">
                    {threat.types.map((type, typeIndex) => (
                      <Badge key={typeIndex} variant="outline" className="text-xs border-primary/30">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-accent">Prevention:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {threat.prevention}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
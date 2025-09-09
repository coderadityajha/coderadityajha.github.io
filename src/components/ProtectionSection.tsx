import { Shield, Lock, Key, Smartphone, Globe, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const protectionMethods = [
  {
    icon: Lock,
    title: "Strong Passwords",
    importance: "Essential",
    description: "Create complex, unique passwords for all accounts",
    tips: [
      "Use 12+ characters with mixed case, numbers, symbols",
      "Avoid personal information or common words",
      "Use different passwords for each account",
      "Consider using passphrases"
    ],
    tools: ["Password managers", "Two-factor authentication"]
  },
  {
    icon: Smartphone,
    title: "Multi-Factor Authentication",
    importance: "Critical",
    description: "Add extra security layers beyond just passwords",
    tips: [
      "Enable 2FA on all important accounts",
      "Use authenticator apps over SMS when possible",
      "Keep backup codes in a safe place",
      "Consider hardware security keys"
    ],
    tools: ["Google Authenticator", "Authy", "YubiKey"]
  },
  {
    icon: RefreshCw,
    title: "Regular Updates",
    importance: "Important",
    description: "Keep all software and systems up to date",
    tips: [
      "Enable automatic updates when possible",
      "Update operating systems promptly",
      "Keep browsers and apps current",
      "Patch security vulnerabilities quickly"
    ],
    tools: ["Windows Update", "Software updaters", "Patch management"]
  },
  {
    icon: Shield,
    title: "Antivirus & Firewall",
    importance: "Essential",
    description: "Use comprehensive security software protection",
    tips: [
      "Install reputable antivirus software",
      "Enable real-time protection",
      "Configure firewall settings properly",
      "Perform regular system scans"
    ],
    tools: ["Windows Defender", "Norton", "Kaspersky", "Bitdefender"]
  },
  {
    icon: Globe,
    title: "Secure Browsing",
    importance: "Important",
    description: "Practice safe internet browsing habits",
    tips: [
      "Look for HTTPS (secure) websites",
      "Be cautious of suspicious links",
      "Use reputable download sources",
      "Keep browser security settings updated"
    ],
    tools: ["HTTPS Everywhere", "uBlock Origin", "Safe browsing extensions"]
  },
  {
    icon: Key,
    title: "Data Backup",
    importance: "Critical",
    description: "Regularly backup important data and files",
    tips: [
      "Follow the 3-2-1 backup rule",
      "Use both cloud and local backups",
      "Test backup restoration regularly",
      "Encrypt sensitive backup data"
    ],
    tools: ["Google Drive", "iCloud", "External drives", "Backup software"]
  }
];

export function ProtectionSection() {
  return (
    <section id="protection" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-glow">Protection Strategies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential practices and tools to keep yourself safe in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {protectionMethods.map((method, index) => (
            <Card key={index} className="gradient-card border border-primary/20 shadow-cyber hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <method.icon className="h-8 w-8 text-primary group-hover:animate-pulse" />
                    <div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                      <Badge 
                        variant={method.importance === "Critical" ? "destructive" : 
                               method.importance === "Essential" ? "default" : "secondary"}
                        className="mt-1"
                      >
                        {method.importance}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-3 text-primary">Best Practices:</h4>
                  <ul className="space-y-2">
                    {method.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-accent">Recommended Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {method.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="outline" className="text-xs border-accent/30">
                        {tool}
                      </Badge>
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
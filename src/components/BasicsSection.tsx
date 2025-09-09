import { Shield, Lock, Key, Eye, Network, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const basicsData = [
  {
    icon: Shield,
    title: "What is Cybersecurity?",
    description: "The practice of protecting systems, networks, and programs from digital attacks",
    content: "Cybersecurity involves defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security."
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "Ensuring information is accessible only to authorized users",
    content: "Information should only be accessible to those who have been granted access. This involves implementing access controls, encryption, and authentication mechanisms."
  },
  {
    icon: Eye,
    title: "Integrity",
    description: "Maintaining accuracy and completeness of data",
    content: "Data integrity ensures that information remains accurate and complete. It protects against unauthorized modification, corruption, or destruction of data."
  },
  {
    icon: Network,
    title: "Availability",
    description: "Ensuring systems are accessible when needed",
    content: "Information and systems must be available to authorized users when they need them. This involves maintaining systems, implementing redundancy, and having disaster recovery plans."
  },
  {
    icon: Key,
    title: "Authentication",
    description: "Verifying the identity of users and systems",
    content: "Authentication confirms that users and systems are who they claim to be. This can involve passwords, biometrics, smart cards, or multi-factor authentication."
  },
  {
    icon: Database,
    title: "Authorization",
    description: "Granting appropriate access rights to authenticated users",
    content: "After authentication, authorization determines what resources a user can access and what actions they can perform. This follows the principle of least privilege."
  }
];

export function BasicsSection() {
  return (
    <section id="basics" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-glow">Cybersecurity Basics</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding the fundamental concepts that form the foundation of cybersecurity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {basicsData.map((item, index) => (
            <Card key={index} className="gradient-card border border-primary/20 shadow-cyber hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="h-8 w-8 text-primary group-hover:animate-pulse" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Briefcase, GraduationCap, TrendingUp, Users, Code, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const careerPaths = [
  {
    icon: Shield,
    title: "Security Analyst",
    salary: "₹4-8 LPA",
    experience: "Entry Level",
    description: "Monitor and analyze security events, investigate incidents",
    skills: ["SIEM tools", "Log analysis", "Incident response", "Risk assessment"],
    education: ["B.Tech/B.E. in CS/IT", "Cybersecurity certifications", "CompTIA Security+"]
  },
  {
    icon: Code,
    title: "Penetration Tester",
    salary: "₹6-12 LPA", 
    experience: "Mid Level",
    description: "Conduct ethical hacking to find system vulnerabilities",
    skills: ["Kali Linux", "Metasploit", "Web app testing", "Network security"],
    education: ["B.Tech/B.E. in CS/IT", "CEH certification", "OSCP certification"]
  },
  {
    icon: Users,
    title: "Security Consultant",
    salary: "₹8-15 LPA",
    experience: "Mid-Senior Level", 
    description: "Advise organizations on security strategies and implementations",
    skills: ["Risk management", "Compliance", "Security frameworks", "Client management"],
    education: ["B.Tech/M.Tech in CS/IT", "CISSP certification", "Business knowledge"]
  },
  {
    icon: Briefcase,
    title: "Security Architect",
    salary: "₹12-25 LPA",
    experience: "Senior Level",
    description: "Design secure systems and infrastructure architectures",
    skills: ["System design", "Security patterns", "Cloud security", "Enterprise architecture"],
    education: ["B.Tech/M.Tech", "SABSA/TOGAF", "10+ years experience"]
  },
  {
    icon: GraduationCap,
    title: "Security Researcher",
    salary: "₹8-20 LPA",
    experience: "Variable",
    description: "Research new threats, vulnerabilities, and security technologies",
    skills: ["Research methods", "Malware analysis", "Cryptography", "Academic writing"],
    education: ["M.Tech/PhD preferred", "Research publications", "Conference presentations"]
  },
  {
    icon: TrendingUp,
    title: "CISO/Security Manager",
    salary: "₹20-50 LPA",
    experience: "Senior Executive",
    description: "Lead organizational security strategy and teams",
    skills: ["Leadership", "Business strategy", "Risk management", "Regulatory compliance"],
    education: ["MBA/M.Tech", "CISSP/CISM", "15+ years experience"]
  }
];

const certifications = [
  { name: "CompTIA Security+", level: "Beginner", focus: "Fundamentals" },
  { name: "CEH (Ethical Hacker)", level: "Intermediate", focus: "Penetration Testing" },
  { name: "CISSP", level: "Advanced", focus: "Management" },
  { name: "CISM", level: "Advanced", focus: "Information Security Management" },
  { name: "OSCP", level: "Advanced", focus: "Practical Penetration Testing" },
  { name: "CISA", level: "Advanced", focus: "Audit & Control" }
];

export function CareersSection() {
  return (
    <section id="careers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-glow">Cybersecurity Careers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore exciting career opportunities in the rapidly growing cybersecurity field
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Career Paths</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {careerPaths.map((career, index) => (
              <Card key={index} className="gradient-card border border-primary/20 shadow-cyber hover:shadow-glow transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <career.icon className="h-8 w-8 text-primary group-hover:animate-pulse" />
                      <div>
                        <CardTitle className="text-lg">{career.title}</CardTitle>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline" className="text-xs border-primary/30">
                            {career.salary}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {career.experience}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-3">
                    {career.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-primary">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs border-accent/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-accent">Education & Certifications:</h4>
                    <ul className="space-y-1">
                      {career.education.map((edu, eduIndex) => (
                        <li key={eduIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Popular Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="gradient-card border border-primary/20 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-4">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">{cert.name}</h4>
                    <div className="flex justify-center gap-2 mb-2">
                      <Badge 
                        variant={cert.level === "Beginner" ? "secondary" : 
                               cert.level === "Intermediate" ? "outline" : "default"}
                        className="text-xs"
                      >
                        {cert.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.focus}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="gradient-card border border-primary/20 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Getting Started in Cybersecurity</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">For Students (Like You!):</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Focus on computer science fundamentals</li>
                    <li>• Learn networking and system administration</li>
                    <li>• Practice with cybersecurity labs and CTFs</li>
                    <li>• Start with CompTIA Security+ certification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Next Steps:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Pursue B.Tech in Computer Science/IT</li>
                    <li>• Join cybersecurity clubs and communities</li>
                    <li>• Attend security conferences and workshops</li>
                    <li>• Build a home lab for hands-on practice</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
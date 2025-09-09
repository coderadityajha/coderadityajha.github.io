import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BasicsSection } from "@/components/BasicsSection";
import { ThreatsSection } from "@/components/ThreatsSection";
import { ProtectionSection } from "@/components/ProtectionSection";
import { ToolsSection } from "@/components/ToolsSection";
import { CareersSection } from "@/components/CareersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BasicsSection />
      <ThreatsSection />
      <ProtectionSection />
      <ToolsSection />
      <CareersSection />
      <Footer />
    </div>
  );
};

export default Index;

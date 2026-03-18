import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesBar from "@/components/FeaturesBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import ClientsSection from "@/components/ClientsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ClientsSection />
        <FeaturesBar />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
        <BlogPreviewSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

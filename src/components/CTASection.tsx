import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 gradient-primary-reverse relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px), radial-gradient(circle at 60% 80%, white 1px, transparent 1px)",
          backgroundSize: "100px 100px, 150px 150px, 120px 120px",
        }} />
      </div>
      
      <div className="container px-4 md:px-8 text-center relative">
        <Sparkles size={32} className="text-white/40 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          UPGRADE YOUR SKILLS & GROW YOUR BUSINESS
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          The learning never stops! Partner with Menokraft Services for professional development and workforce solutions.
        </p>
        <Button asChild size="lg" className="font-semibold bg-white text-secondary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all">
          <Link to="/contact">
            Get Started <ArrowRight size={18} className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;

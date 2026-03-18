import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Building2, Users, ArrowRight } from "lucide-react";

const services = [
  {
    id: "recruitment",
    icon: Search,
    title: "Recruitment (Talent Acquisition)",
    description:
      "Our search and end-to-end recruitment services help you attract and retain top talent with an efficient, scalable, and measurable approach. We ensure alignment between your company culture and who we recruit. Our services include candidate sourcing, evaluation and selection, assessments, interviews, onboarding, and early productivity support.",
  },
  {
    id: "outsourcing",
    icon: Building2,
    title: "Outsourcing",
    description:
      "Not ready for a full-time HR business unit? Our team offers a range of HR outsourcing services handled remotely or internally at your business. We provide end-to-end recruitment, onboarding, documentation, HR policy drafting, performance management, compensation and benefits management, training, and HRIS implementation.",
  },
  {
    id: "hr-consulting",
    icon: Users,
    title: "HR Consulting (Talent Management)",
    description:
      "Our Human Resources consulting services help organizations better manage and support their workforce, attract, develop, and retain talent, as well as remain compliant with local labour laws and best practices. We offer startup HR solutions, organizational design, workforce planning, and HR policy development.",
  },
];

const HRServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary py-16">
          <div className="container px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
              HR Services
            </h1>
            <p className="text-primary-foreground/70 mt-2 max-w-lg">
              Your trusted HR services provider — we handle sourcing, onboarding, and HR system development and implementation
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-card border rounded-lg p-8 hover:shadow-lg hover:border-accent/30 transition-all text-center"
                >
                  <service.icon size={48} className="text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/contact">
                  Get Started <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HRServices;

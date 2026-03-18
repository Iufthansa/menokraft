import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, ClipboardCheck, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    id: "gap-analysis",
    icon: Search,
    title: "Management Systems Gap Analysis",
    description:
      "Comprehensive gap analysis services to assess your organization's current state against ISO standards and regulatory requirements. We provide detailed reports with actionable recommendations to help close compliance gaps efficiently and prepare your organization for certification.",
  },
  {
    id: "audits",
    icon: ClipboardCheck,
    title: "Management Systems Audits",
    description:
      "Our audit services provide organizations with an independent and structured review of how effectively their management systems are implemented and maintained. These include internal audits, pre-certification audits, surveillance readiness audits, and compliance audits designed to meet ISO 19011 requirements.",
  },
  {
    id: "implementation",
    icon: Settings,
    title: "Management Systems Implementation",
    description:
      "We assist organizations in implementing ISO management systems including ISO 9001 (Quality), ISO 14001 (Environmental), ISO 45001 (Occupational Health & Safety), ISO 27001 (Information Security), and ISO 22000 (Food Safety). Our approach ensures seamless integration with your existing business processes.",
  },
];

const ManagementSystems = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary py-16">
          <div className="container px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
              Management Systems
            </h1>
            <p className="text-primary-foreground/70 mt-2 max-w-lg">
              Implementation, auditing, and consultancy services for management systems
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
                  Request Consultation <ArrowRight size={18} className="ml-2" />
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

export default ManagementSystems;

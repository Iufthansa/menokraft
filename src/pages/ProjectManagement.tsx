import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ClipboardList, ShieldAlert, Rocket, ArrowRight } from "lucide-react";

const services = [
  {
    id: "planning",
    icon: ClipboardList,
    title: "Project Planning",
    description:
      "We help organizations develop comprehensive project plans that define scope, timelines, resource allocation, and deliverables. Our structured planning approach ensures projects are set up for success from day one, with clear milestones and accountability frameworks.",
  },
  {
    id: "risk",
    icon: ShieldAlert,
    title: "Risk Management",
    description:
      "Our risk management services identify, assess, and mitigate potential risks that could impact project delivery. We implement proactive risk strategies including contingency planning, risk registers, and continuous monitoring to keep your projects on track.",
  },
  {
    id: "execution",
    icon: Rocket,
    title: "Project Execution & Monitoring",
    description:
      "We provide end-to-end project execution support, from team coordination and task management to progress tracking and stakeholder reporting. Our approach ensures projects are delivered on time, within budget, and to the highest quality standards.",
  },
];

const ProjectManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader />
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 border border-white/20 rounded-full" />
            <div className="absolute bottom-5 left-20 w-24 h-24 border border-white/10 rounded-full" />
          </div>
          <div className="container px-4 md:px-8 relative">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
              Project Management
            </h1>
            <p className="text-primary-foreground/70 mt-2 max-w-lg">
              Expert project management services to deliver your projects on time, on budget, and beyond expectations
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
                  className="bg-card border rounded-lg p-8 hover:shadow-lg hover:border-accent/30 transition-all text-center group"
                >
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon size={32} className="text-accent" />
                  </div>
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

export default ProjectManagement;

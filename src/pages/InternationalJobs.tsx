import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight, MapPin, Briefcase } from "lucide-react";

const internationalListings = [
  {
    title: "Project Manager – Oil & Gas",
    location: "Dubai, UAE",
    type: "Contract",
    description: "Manage large-scale oil and gas projects across the Middle East region with a reputable EPC contractor.",
  },
  {
    title: "HSE Officer",
    location: "London, UK",
    type: "Full-time",
    description: "Oversee health, safety, and environmental compliance for construction and infrastructure projects.",
  },
  {
    title: "HR Business Partner",
    location: "Johannesburg, South Africa",
    type: "Full-time",
    description: "Drive HR strategy and talent management for a multinational services company across Southern Africa.",
  },
  {
    title: "Quality Assurance Engineer",
    location: "Doha, Qatar",
    type: "Contract",
    description: "Ensure quality management system compliance for infrastructure development projects.",
  },
];

const InternationalJobs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary py-16">
          <div className="container px-4 md:px-8">
            <div className="flex items-center gap-3 mb-2">
              <Globe size={28} className="text-primary-foreground/70" />
              <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
                Vacancies
              </h1>
            </div>
            <p className="text-primary-foreground/70 max-w-lg">
              Explore career opportunities with top employers around the world. We connect Nigerian talent with international roles.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internationalListings.map((job) => (
                <div
                  key={job.title}
                  className="bg-card border rounded-lg p-6 hover:shadow-lg hover:border-accent/30 transition-all"
                >
                  <div className="flex items-center gap-2 text-xs text-accent font-semibold mb-2">
                    <Briefcase size={14} />
                    <span>{job.type}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{job.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{job.description}</p>
                  <Button asChild size="sm" variant="outline">
                    <Link to="/contact">
                      Apply <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 bg-muted/50 rounded-lg p-8">
              <h2 className="text-xl font-bold text-foreground mb-3">
                Looking for International Placement?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Submit your CV and our international recruitment team will match you with suitable opportunities worldwide.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Submit Your CV <ArrowRight size={18} className="ml-2" />
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

export default InternationalJobs;

import { Link } from "react-router-dom";
import { Users, GraduationCap, Settings, Briefcase, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "HR Services",
    description:
      "End-to-end HR management including recruitment, onboarding, performance management, and employee engagement strategies.",
    path: "/hr-services",
    color: "from-accent to-accent/70",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description:
      "Customized corporate training programs designed to upskill your workforce and drive measurable business results.",
    path: "/training",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: Settings,
    title: "Management Systems",
    description:
      "Implementation, auditing, and consultancy services for ISO management systems across quality, safety, and environment.",
    path: "/management-systems",
    color: "from-accent to-secondary",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description:
      "Expert project planning, risk management, and execution support to deliver projects on time and within budget.",
    path: "/project-management",
    color: "from-secondary to-accent",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container px-4 md:px-8 relative">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2 gradient-text">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Our Services
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              to={service.path}
              key={service.title}
              className="group bg-card border rounded-xl p-6 hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                <service.icon size={26} className="text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="text-accent text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { GraduationCap, HeadphonesIcon, Users, Award } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "TRENDING COURSES",
    description: "Browse through our popular training courses and enroll on public scheduled classes or request onsite sessions",
  },
  {
    icon: HeadphonesIcon,
    title: "CUSTOMER SERVICE",
    description: "We are readily available to assist and respond to your enquiries. Reach out to us soon",
  },
  {
    icon: Users,
    title: "CERTIFIED PROFESSIONALS",
    description: "Our facilitators and consultants are industry-accredited to deliver our services",
  },
  {
    icon: Award,
    title: "CERTIFICATION",
    description: "We are a duly registered and accredited training and HR solutions provider",
  },
];

const FeaturesBar = () => {
  return (
    <section className="py-16 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-accent rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-secondary rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-accent/50 rounded-full" />
      </div>
      
      <div className="container px-4 md:px-8 relative">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2 gradient-text">
            Why Choose Us
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
            What Sets Us Apart
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-sm tracking-wider mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;

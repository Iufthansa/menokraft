import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary py-16">
          <div className="container px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
              About Menokraft Services
            </h1>
            <p className="text-primary-foreground/70 mt-2 max-w-lg">
              Developing professionals and empowering businesses across Africa
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
                  About Menokraft
                </p>
                <h2 className="text-3xl font-extrabold text-foreground mb-6">
                  Developing Professionals Across Africa
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Menokraft Services LTD is a Lagos-based human capital company dedicated to bridging the gap between exceptional talent and forward-thinking organizations across Nigeria and beyond.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We aim to continuously partner with businesses to render professional services that meet your business needs. We are committed to setting a new standard of training and HR practice across Sub-Saharan Africa.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With deep expertise in HR, outsourcing, corporate training, and management consulting, we deliver tailored solutions that drive real business outcomes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, value: "500+", label: "Placements" },
                  { icon: Target, value: "50+", label: "Clients" },
                  { icon: Award, value: "8+", label: "Years" },
                  { icon: TrendingUp, value: "98%", label: "Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card border rounded-lg p-6 text-center">
                    <stat.icon size={28} className="mx-auto text-accent mb-2" />
                    <div className="text-3xl font-extrabold text-accent mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container px-4 md:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-foreground mb-6">Our Mission</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              To provide excellent, innovative, and client-focused HR, training, and consultancy services that empower businesses to achieve sustainable growth and workforce excellence.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

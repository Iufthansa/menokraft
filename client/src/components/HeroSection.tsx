import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  {
    subtitle: "DELIVERING PROVEN INNOVATIVE SOLUTIONS",
    title: "YOUR BUSINESS SUCCESS",
    highlight: "IS OUR FOCUS",
    description:
      "In Lagos, Across Nigeria we go above and beyond to provide excellent HR & training services.",
    cta: { label: "Read More", path: "/about" },
  },
  {
    subtitle: "CONSULTANCY SERVICES",
    title: "EXCELLENT INDUSTRY",
    highlight: "EXPERIENCE",
    description:
      "Our consultants deliver proven expertise in HR, HSE, and management systems, supported by solid technical and business knowledge.",
    cta: { label: "Read More", path: "/about" },
  },
  {
    subtitle: "TRAINING SERVICES",
    title: "YOUR ACCREDITED TRAINING",
    highlight: "SOLUTIONS PARTNER",
    description:
      "We provide both accredited and short courses aimed at improving competence across various disciplines.",
    cta: { label: "Read More", path: "/training" },
  },
  {
    subtitle: "HR SERVICES",
    title: "YOUR TRUSTED HR",
    highlight: "SERVICES PROVIDER",
    description:
      "We handle sourcing, onboarding, and HR system development and implementation, so you can focus on growth.",
    cta: { label: "Read More", path: "/hr-services" },
  },
  {
    subtitle: "CONSULTANCY & AUDITING SERVICES",
    title: "MANAGEMENT SYSTEMS",
    highlight: "IMPLEMENTATION & AUDITING",
    description:
      "By understanding your processes, people, and goals, we implement and audit management systems that elevate business performance.",
    cta: { label: "Read More", path: "/management-systems" },
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-primary opacity-85" />

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="relative container px-4 md:px-8 py-20">
        <div className="max-w-2xl" key={current}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-white/90 animate-fade-in">
            {slide.subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in">
            {slide.title}
            <br />
            <span className="text-white drop-shadow-lg">{slide.highlight}</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed animate-fade-in">
            {slide.description}
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="font-semibold bg-secondary text-white hover:bg-secondary/90"
            >
              <Link to={slide.cta.path}>
                {slide.cta.label}
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="font-semibold bg-accent text-white hover:bg-accent/90 border-none"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

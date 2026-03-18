import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "One of the most outstanding professional service providers I know. They help find the best solutions for workforce challenges.",
    name: "Adebayo Ogunleye",
    role: "Operations Manager",
  },
  {
    text: "Menokraft puts in the effort to ensure they deliver the ideal candidate. We are satisfied with their recruitment services.",
    name: "Folake Adeniyi",
    role: "Managing Director",
  },
  {
    text: "Menokraft is a very credible organisation and they deliver consistent, quality results every time.",
    name: "Chinedu Okeke",
    role: "HR & Admin Officer",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-white/50 rotate-45" />
      </div>
      
      <div className="container px-4 md:px-8 relative">
        <div className="text-center mb-12">
          <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-2">
            Customer Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            WHAT PEOPLE SAY ABOUT US
          </h2>
          <div className="w-20 h-1 bg-white/30 mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto relative">
          <Quote size={48} className="text-white/20 mx-auto mb-6" />
          <div key={current} className="animate-fade-in text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-lg text-white/90 italic leading-relaxed mb-8">
              "{testimonials[current].text}"
            </p>
            <div>
              <p className="font-bold text-white text-lg">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-white/60">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? "bg-white w-8" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { useEffect, useRef, useState } from "react";
import cargoNaija from "@/assets/clients/cargo-naija.png";
import cheersMedical from "@/assets/clients/cheers-medical.png";
import usg from "@/assets/clients/usg.jpg";
import oaklands from "@/assets/clients/oaklands.png";
import lifetime from "@/assets/clients/lifetime.png";
import jhLogistics from "@/assets/clients/jh-logistics.jpg";
import dreamsavers from "@/assets/clients/dreamsavers.png";
import bigtree from "@/assets/clients/bigtree.png";
import benling from "@/assets/clients/benling.jpg";

const clients = [
  { name: "Cargo Naija", logo: cargoNaija },
  { name: "Cheers Medical", logo: cheersMedical },
  { name: "Ultimate Security Gadgets", logo: usg },
  { name: "Oaklands & Johnson", logo: oaklands },
  { name: "Lifetime Gutters", logo: lifetime },
  { name: "JH Logistics", logo: jhLogistics },
  { name: "Dream Savers", logo: dreamsavers },
  { name: "Bigtree Group", logo: bigtree },
  { name: "Benling", logo: benling },
];

const ClientsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    const speed = 1;

    const scroll = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const allClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-accent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-secondary" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-accent" />
      </div>

      <div className="container px-4 md:px-8 relative">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2 gradient-text">
            Trusted By
          </p>
          <h2 className="text-xl font-bold text-foreground">Our Clients</h2>
          <div className="w-16 h-1 gradient-primary mx-auto mt-3 rounded-full" />
        </div>
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-10 overflow-hidden items-center"
        >
          {allClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="bg-card border rounded-xl px-6 py-4 shrink-0 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              style={{ minWidth: 160, height: 100 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

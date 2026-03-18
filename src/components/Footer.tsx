import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoFull from "@/assets/logo-full.jpeg";

const Footer = () => {
  return (
    <footer className="gradient-primary text-white">
      <div className="container px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <img src={logoFull} alt="Menokraft Services LTD" className="h-16 w-auto rounded" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Empowering businesses through innovative HR solutions, outsourcing, training, and strategic consulting.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><Facebook size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><Twitter size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><Instagram size={16} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors">About Us</Link>
              <Link to="/hr-services" className="text-sm text-white/70 hover:text-white transition-colors">Our Services</Link>
              <Link to="/jobs" className="text-sm text-white/70 hover:text-white transition-colors">Job Portal</Link>
              <Link to="/blogs" className="text-sm text-white/70 hover:text-white transition-colors">Blogs</Link>
              <Link to="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              <Link to="/hr-services" className="text-sm text-white/70 hover:text-white transition-colors">HR Services</Link>
              <Link to="/training" className="text-sm text-white/70 hover:text-white transition-colors">Training</Link>
              <Link to="/management-systems" className="text-sm text-white/70 hover:text-white transition-colors">Management Systems</Link>
              <Link to="/project-management" className="text-sm text-white/70 hover:text-white transition-colors">Project Management</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>5 Ajose Street, Ajao Estate, Lagos State</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+2340703473255" className="hover:text-white transition-colors">(+234) 0703 473 2552</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:info@menokraftservices.com" className="hover:text-white transition-colors">info@menokraftservices.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Menokraft Services LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

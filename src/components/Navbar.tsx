import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

type SubItem = { label: string; path: string };
type ServiceGroup = { label: string; path: string; children: SubItem[] };
type NavItem = {
  label: string;
  path: string;
  children?: SubItem[];
  serviceGroups?: ServiceGroup[];
};

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Our Services",
    path: "/hr-services",
    serviceGroups: [
      {
        label: "HR Services",
        path: "/hr-services",
        children: [
          { label: "Recruitment", path: "/hr-services#recruitment" },
          { label: "Outsourcing", path: "/hr-services#outsourcing" },
          { label: "Consulting", path: "/hr-services#hr-consulting" },
        ],
      },
      {
        label: "Training",
        path: "/training",
        children: [
          { label: "IOSH Courses", path: "/training#iosh" },
          { label: "ISO Courses", path: "/training#iso" },
          { label: "Health & Safety Courses", path: "/training#health-safety" },
          { label: "Soft & PC Skills Courses", path: "/training#soft-pc-skills" },
        ],
      },
      {
        label: "Management Systems",
        path: "/management-systems",
        children: [
          { label: "Gap Analysis", path: "/management-systems#gap-analysis" },
          { label: "Audits", path: "/management-systems#audits" },
          { label: "Implementation", path: "/management-systems#implementation" },
        ],
      },
      {
        label: "Project Management",
        path: "/project-management",
        children: [
          { label: "Project Planning", path: "/project-management#planning" },
          { label: "Risk Management", path: "/project-management#risk" },
          { label: "Project Execution", path: "/project-management#execution" },
        ],
      },
    ],
  },
  {
    label: "Job Portal",
    path: "/jobs",
    children: [
      { label: "Career", path: "/jobs" },
      { label: "Vacancies", path: "/international-jobs" },
    ],
  },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubGroup, setOpenSubGroup] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [mobileSubGroup, setMobileSubGroup] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b">
      <div className="gradient-primary text-white text-xs hidden md:block">
        <div className="container flex items-center justify-between h-8 px-4 md:px-8">
          <div className="flex items-center gap-6">
            <span>📍 5 Ajose Street, Ajao Estate, Lagos State</span>
            <span>📞 (+234) 0703 473 2552</span>
          </div>
          <span>✉️ info@menokraftservices.com</span>
        </div>
      </div>

      <div className="container flex items-center justify-between h-16 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Menokraft Services LTD" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                if (item.children || item.serviceGroups) setOpenDropdown(item.label);
              }}
              onMouseLeave={() => {
                setOpenDropdown(null);
                setOpenSubGroup(null);
              }}
            >
              <Link
                to={item.path}
                className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md transition-colors hover:text-accent hover:bg-accent/5 ${
                  location.pathname === item.path ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {item.label}
                {(item.children || item.serviceGroups) && <ChevronDown size={14} />}
              </Link>

              {/* Simple dropdown */}
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-card border rounded-lg shadow-lg py-2 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-accent/5 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Mega dropdown for services */}
              {item.serviceGroups && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-card border rounded-lg shadow-lg py-2 z-50">
                  {item.serviceGroups.map((group) => (
                    <div
                      key={group.label}
                      className="relative"
                      onMouseEnter={() => setOpenSubGroup(group.label)}
                      onMouseLeave={() => setOpenSubGroup(null)}
                    >
                      <Link
                        to={group.path}
                        className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/5 transition-colors"
                      >
                        {group.label}
                        <ChevronRight size={14} />
                      </Link>
                      {openSubGroup === group.label && (
                        <div className="absolute left-full top-0 w-56 bg-card border rounded-lg shadow-lg py-2 -ml-1">
                          {group.children.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-accent/5 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-b max-h-[80vh] overflow-y-auto">
          <nav className="container flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    onClick={() => !item.children && !item.serviceGroups && setMobileOpen(false)}
                    className={`text-sm font-medium py-2 ${
                      location.pathname === item.path ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {(item.children || item.serviceGroups) && (
                    <button
                      onClick={() =>
                        setMobileDropdown(mobileDropdown === item.label ? null : item.label)
                      }
                      className="p-2 text-muted-foreground"
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${mobileDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile simple children */}
                {item.children && mobileDropdown === item.label && (
                  <div className="pl-4 flex flex-col gap-1 mb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm text-muted-foreground py-1.5 hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Mobile service groups */}
                {item.serviceGroups && mobileDropdown === item.label && (
                  <div className="pl-4 flex flex-col gap-1 mb-2">
                    {item.serviceGroups.map((group) => (
                      <div key={group.label}>
                        <button
                          onClick={() =>
                            setMobileSubGroup(mobileSubGroup === group.label ? null : group.label)
                          }
                          className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground py-1.5 hover:text-accent"
                        >
                          {group.label}
                          <ChevronDown
                            size={12}
                            className={`transition-transform ${mobileSubGroup === group.label ? "rotate-180" : ""}`}
                          />
                        </button>
                        {mobileSubGroup === group.label && (
                          <div className="pl-4 flex flex-col gap-1">
                            {group.children.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                onClick={() => setMobileOpen(false)}
                                className="text-sm text-muted-foreground py-1 hover:text-accent"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button asChild size="sm" className="w-fit mt-2 gradient-primary text-white">
              <Link to="/jobs" onClick={() => setMobileOpen(false)}>
                Join Our Talent Pool
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

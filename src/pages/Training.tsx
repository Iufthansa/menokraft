import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Award, HeartPulse, Briefcase, Monitor, ArrowRight } from "lucide-react";

const categories = [
  {
    id: "iosh",
    icon: Award,
    title: "IOSH Courses",
    description:
      "Institution of Occupational Safety and Health (IOSH) accredited courses including IOSH Managing Safely, IOSH Working Safely, and IOSH Safety for Executives and Directors.",
    items: [
      "IOSH Managing Safely",
      "IOSH Working Safely",
      "IOSH Safety for Executives & Directors",
    ],
  },
  {
    id: "iso",
    icon: ShieldCheck,
    title: "ISO Courses",
    description:
      "Comprehensive ISO management systems training covering Quality, Environmental, Health & Safety, Food Safety, and Information Security standards.",
    items: [
      "ISO 9001:2015 QMS Lead Auditor",
      "ISO 14001:2015 EMS Lead Auditor",
      "ISO 45001:2018 OHSMS Lead Auditor",
      "ISO 22000:2018 Food Safety Lead Auditor",
      "ISO 27001 ISMS Lead Auditor",
      "Internal Auditor Training",
    ],
  },
  {
    id: "health-safety",
    icon: HeartPulse,
    title: "Health and Safety Courses",
    description:
      "Practical health and safety training courses designed to ensure workplace compliance, reduce risk, and build a safety-first culture.",
    items: [
      "First Aid – Beginners & Advanced",
      "Basic Fire Fighting Course",
      "Risk Assessment (HIRA)",
      "Accident & Incident Investigation",
      "Scaffold Erection Safety",
      "Confined Space Entry",
      "OHS Awareness",
    ],
  },
  {
    id: "project-management",
    icon: Briefcase,
    title: "Project Management Courses",
    description:
      "Build the skills to plan, execute, and deliver projects on time and within budget with our project management training programs.",
    items: [
      "Project Management Fundamentals",
      "Microsoft Project Skills",
      "Agile Project Management",
      "Risk Management in Projects",
    ],
  },
  {
    id: "soft-pc-skills",
    icon: Monitor,
    title: "Soft & PC Skills Courses",
    description:
      "Develop essential workplace competencies including communication, leadership, and computer proficiency to enhance productivity.",
    items: [
      "Microsoft Excel – Introduction to Advanced",
      "Microsoft Word & PowerPoint",
      "Communication & Business Writing",
      "Emotional Intelligence",
      "Leadership & Teamwork",
      "HR Talent Management",
    ],
  },
];

const upcomingCourses = [
  { title: "Microsoft Excel – Introduction Course", date: "March 23, 2026", location: "Lagos, Nigeria" },
  { title: "Basic Fire Fighting Course", date: "March 15, 2026", location: "Lagos, Nigeria" },
  { title: "ISO 9001:2015 QMS Lead Auditor", date: "April 10, 2026", location: "Lagos, Nigeria" },
  { title: "IOSH Managing Safely", date: "April 20, 2026", location: "Lagos, Nigeria" },
];

const Training = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary py-16">
          <div className="container px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
              Training Services
            </h1>
            <p className="text-primary-foreground/70 mt-2 max-w-lg">
              Practical, high-quality training designed to add real business value
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 md:px-8">
            <div className="space-y-12">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  id={cat.id}
                  className="bg-card border rounded-lg p-8 hover:shadow-lg hover:border-accent/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <cat.icon size={36} className="text-accent mt-1 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{cat.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{cat.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cat.items.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container px-4 md:px-8">
            <h2 className="text-2xl font-extrabold text-foreground mb-8 text-center">
              UPCOMING EVENTS & COURSES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingCourses.map((course) => (
                <div key={course.title} className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-foreground mb-3">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">📅 {course.date}</p>
                  <p className="text-sm text-muted-foreground">📍 {course.location}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild size="lg">
                <Link to="/contact">
                  Enroll Now <ArrowRight size={18} className="ml-2" />
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

export default Training;

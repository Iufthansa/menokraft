import { Link } from "react-router-dom";
import { Shield, HardHat, Monitor, BookOpen, Settings } from "lucide-react";

const categories = [
  { icon: Settings, label: "Management Systems", path: "/management-systems" },
  { icon: HardHat, label: "Health & Safety", path: "/training#health-safety" },
  { icon: Shield, label: "Compliance", path: "/management-systems#compliance" },
  { icon: Monitor, label: "PC Skills", path: "/training#pc-skills" },
  { icon: BookOpen, label: "Soft Skills", path: "/training#workshops" },
];

const CourseCategoriesSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            Browse Categories
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            BROWSE OUR SERVICE CATEGORIES
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={cat.path}
              className="bg-card border rounded-lg p-6 text-center hover:shadow-lg hover:border-accent/30 transition-all group"
            >
              <cat.icon
                size={36}
                className="mx-auto mb-3 text-accent group-hover:scale-110 transition-transform"
              />
              <h3 className="font-semibold text-sm text-foreground">
                {cat.label}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategoriesSection;

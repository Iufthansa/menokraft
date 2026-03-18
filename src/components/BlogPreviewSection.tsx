import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    id: "1",
    title: "Employee Management: 7 HR Best Practices",
    excerpt: "This is the effort made to help employees do their best work and contribute to organizational success.",
    date: "July 18, 2023",
  },
  {
    id: "2",
    title: "Ownership Culture at Work",
    excerpt: "In the contemporary business environment, fostering a culture of ownership drives engagement and results.",
    date: "May 23, 2024",
  },
  {
    id: "3",
    title: "Aligning Corporate Goals for Success in 2025",
    excerpt: "Let's plan for a successful year by aligning corporate strategy with workforce development.",
    date: "Feb 5, 2025",
  },
];

const BlogPreviewSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container px-4 md:px-8 relative">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2 gradient-text">
            Our Blogs
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            LATEST BLOGS & ARTICLES
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blogs#${blog.id}`}
              className="bg-card border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="h-48 gradient-primary opacity-90 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
                <span className="text-5xl font-extrabold text-white/20">M</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar size={12} />
                  {blog.date}
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="hover:border-accent hover:text-accent">
            <Link to="/blogs">
              View All Articles <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;

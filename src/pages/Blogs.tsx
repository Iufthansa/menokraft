import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

const blogs = [
  {
    id: "1",
    title: "Employee Management: 7 HR Best Practices",
    excerpt: "This is the effort made to help employees do their best work. Learn the key strategies that top organizations use to manage, motivate, and retain their workforce effectively.",
    date: "July 18, 2023",
    category: "HR",
  },
  {
    id: "2",
    title: "Ownership Culture at Work",
    excerpt: "In the contemporary business environment, fostering a culture of ownership drives engagement and results. Discover how to build accountability at every level of your organization.",
    date: "May 23, 2024",
    category: "Culture",
  },
  {
    id: "3",
    title: "Aligning Corporate Goals for Success in 2025",
    excerpt: "Let's plan for a successful year by aligning corporate strategy with workforce development. Strategic alignment is key to executing ambitious business goals.",
    date: "Feb 5, 2025",
    category: "Strategy",
  },
  {
    id: "4",
    title: "The Future of Remote Work in Africa",
    excerpt: "Remote work is reshaping the African workforce. Explore how companies across the continent are adapting their HR policies and infrastructure for distributed teams.",
    date: "Jan 12, 2026",
    category: "Trends",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary py-16">
          <div className="container px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
              Blogs & Articles
            </h1>
            <p className="text-primary-foreground/70 mt-2 max-w-lg">
              Insights, tips, and thought leadership from the Menokraft team
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  id={blog.id}
                  className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-accent/10 flex items-center justify-center">
                    <span className="text-5xl font-extrabold text-accent/20">M</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded">
                        {blog.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {blog.date}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3">{blog.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{blog.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;

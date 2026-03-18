import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Briefcase } from "lucide-react";


type Job = {
  id: number;
  job_title: string;
  job_description: string;
  job_requirements: string | null;
  job_location: string;
  job_salary: string | null;
  created_at: string;
  specs?: { id: number; name: string }[];
};



const Jobs = () => {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("https://menokraft.onrender.com/jobs");
        setAllJobs(res.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    console.log(allJobs);
  }, [allJobs]);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading jobs...
      </div>
    );
  }


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary py-16">
          <div className="container px-4 md:px-8">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase size={28} className="text-primary-foreground/70" />
              <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
                Find Jobs
              </h1>
            </div>
            <p className="text-primary-foreground/70 max-w-lg">
              Browse open positions and take the next step in your career with Menokraft Services.
            </p>
          </div>
        </section>

        {/* <section className="bg-card border-b sticky top-16 z-40">
          <div className="container px-4 md:px-8 py-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search jobs..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {categoryLabels[cat] || cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section> */}

        <section className="py-10">
          <div className="container px-4 md:px-8">
            {allJobs.length > 0 ? (
              <>
                <p className="text-sm text-muted-foreground mb-6">
                  {allJobs.length} position{allJobs.length !== 1 ? "s" : ""} found
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <Briefcase size={48} className="text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No jobs found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or check back later.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;

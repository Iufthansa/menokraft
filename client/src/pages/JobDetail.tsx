import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";
import { ArrowLeft, MapPin, Clock, Banknote } from "lucide-react";
import { specColors } from "@/components/JobCard";


const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`https://menokraft.onrender.com/jobs/${id}`);
        setJob(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  
  if (loading) return <div>Loading...</div>;
  if (!job) return <div>Job not found</div>;


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary py-10">
          <div className="container px-4 md:px-8">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-4"
            >
              <ArrowLeft size={16} /> Back to Jobs
            </Link>
            {job && (
              <>
                <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-3">
                  {job.job_title}
                </h1>
                <div className="flex flex-wrap gap-3">
                  {job.specs?.map((spec) => (
                    <span
                      key={spec.id}
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        specColors[spec.name] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {spec.name}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        <section className="py-10">
          <div className="container px-4 md:px-8">
            {job ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-8">
                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={16} /> {job.job_location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={16} /> Posted {job.created_at
                      ? new Date(job.created_at).toLocaleDateString()
                      : "N/A"}
                    </span>
                    {job.job_salary && (
                      <span className="flex items-center gap-1.5">
                        <Banknote size={16} /> {job.job_salary}
                      </span>
                    )}
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-3">Job Description</h2>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {job.job_description}
                    </p>
                  </div>

                  {job.job_requirements && (
                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-3">Requirements</h2>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {job.job_requirements}
                      </p>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-card border rounded-lg p-6 sticky top-24">
                    <ApplicationForm jobId={job.id} jobTitle={job.job_title} />
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-20">Job not found.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetail;

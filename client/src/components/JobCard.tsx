import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


export const specColors: Record<string, string> = {
  "Full time": "bg-green-100 text-green-700",
  "Part time": "bg-blue-100 text-blue-700",
  "Contract": "bg-purple-100 text-purple-700",
  "Internship": "bg-yellow-100 text-yellow-700",

  "Human Resources": "bg-pink-100 text-pink-700",
  "Engineering": "bg-indigo-100 text-indigo-700",
  "Finance": "bg-emerald-100 text-emerald-700",
  "Marketing": "bg-orange-100 text-orange-700",
  "Operations": "bg-cyan-100 text-cyan-700",
  "Consulting": "bg-red-100 text-red-700",
  "Training": "bg-teal-100 text-teal-700",
  "Outsourcing": "bg-gray-200 text-gray-700",

  "Other": "bg-gray-100 text-gray-600"
};


interface Job {
  id: number;
  job_title: string;
  job_description: string;
  job_requirements: string | null;
  job_location: string;
  job_salary: string | null;
  created_at: string;
  specs?: { id: number; name: string }[];
}

type JobCardProps = {
  job: Job;
};



const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="bg-card border rounded-lg p-6 hover:shadow-md hover:border-accent/20 transition-all group">

      <div className="flex flex-wrap gap-2 mb-3">
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

      <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
        {job.job_title}
      </h3>

      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <MapPin size={14} />
          {job.job_location}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} />
          {job.created_at
            ? new Date(job.created_at).toLocaleDateString()
            : "N/A"}
        </span>
      </div>

      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
        {job.job_description}
      </p>

      {job.job_salary && (
        <p className="text-sm font-semibold text-foreground mb-4">{job.job_salary}</p>
      )}

      <Button asChild variant="outline" size="sm">
        <Link to={`/jobs/${job.id}`}>
          View Details <ArrowRight size={14} className="ml-1" />
        </Link>
      </Button>
    </div>
  );
};

export default JobCard;

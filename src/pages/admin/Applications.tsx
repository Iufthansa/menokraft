import { useEffect, useState } from "react";
import Api from "../../services/api";
import Layout from "../../components/admin/Layout";
import { useNavigate } from "react-router-dom";

interface Application {
  id: number;
  fullname: string;
  email: string;
  job_title: string;
}

interface Job {
  id: number;
  job_title: string;
}

interface Spec {
  id: number;
  name: string;
}

export default function Applications() {
  const navigate = useNavigate();

  const [apps, setApps] = useState<Application[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [specs, setSpecs] = useState<Spec[]>([]);

  const [search, setSearch] = useState("");
  const [jobId, setJobId] = useState("");
  const [specInput, setSpecInput] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // 🔄 Fetch filters data
  useEffect(() => {
    Api.get("/jobs").then(res => setJobs(res.data));
    Api.get("/job-specs").then(res => setSpecs(res.data));
  }, []);

  // 🔄 Fetch applications
  useEffect(() => {
    fetchApplications();
  }, [search, jobId, specInput, page]);

  const fetchApplications = async () => {
    try {
      // 🔥 Convert spec names → IDs
      let specIds: number[] = [];

      if (specInput.trim()) {
        const names = specInput.toLowerCase().split(" ");

        specIds = specs
          .filter(s => names.includes(s.name.toLowerCase()))
          .map(s => s.id);
      }

      const res = await Api.get("/applications", {
        params: {
          search,
          job_id: jobId || undefined,
          spec_ids: specIds.length ? specIds.join(",") : undefined,
          page,
          limit: 10
        }
      });

      setApps(res.data.data);
      setTotalPages(res.data.totalPages);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <h2 className="text-2xl mb-4">Applications</h2>

      {/* 🔍 Filters */}
      <div className="flex flex-wrap gap-4 mb-4">

        {/* Search by name/email */}
        <input
          type="text"
          placeholder="Search name/email"
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          className="border p-2"
        />

        {/* Filter by job */}
        <select
          value={jobId}
          onChange={(e) => {
            setPage(1);
            setJobId(e.target.value);
          }}
          className="border p-2"
        >
          <option value="">All Jobs</option>
          {jobs.map(job => (
            <option key={job.id} value={job.id}>
              {job.job_title}
            </option>
          ))}
        </select>

        {/* Filter by specs (space-separated) */}
        <input
          type="text"
          placeholder="Specs (e.g full-time HR)"
          value={specInput}
          onChange={(e) => {
            setPage(1);
            setSpecInput(e.target.value);
          }}
          className="border p-2"
        />

      </div>

      {/* 📄 Table */}
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Job Title</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {apps.map(app => (
            <tr key={app.id}>
              <td className="border p-2">{app.fullname}</td>
              <td className="border p-2">{app.email}</td>
              <td className="border p-2">{app.job_title}</td>
              <td className="border p-2">
                <button
                  onClick={() => navigate(`/admin/applications/${app.id}`)}
                  className="text-blue-500"
                >
                  View Application
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 📌 Pagination */}
      <div className="flex gap-2 mt-4">

        <button
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
          className="p-2 border"
        >
          Prev
        </button>

        <span>Page {page} of {totalPages}</span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(p => p + 1)}
          className="p-2 border"
        >
          Next
        </button>

      </div>
    </Layout>
  );
}
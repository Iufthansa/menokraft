import { useEffect, useState } from "react";
import Api from "../../services/api";
import Layout from "../../components/admin/Layout";

interface Spec {
  id: number;
  name: string;
}

export default function UploadJobs() {
  const [form, setForm] = useState({
    job_title: "",
    job_description: "",
    job_location: "",
    job_salary: "",
    job_requirements: "",
    job_specs: [] as number[]
  });

  const [specs, setSpecs] = useState<Spec[]>([]);

  const isFormValid =
  form.job_title.trim() !== "" &&
  form.job_description.trim() !== "" &&
  form.job_location.trim() !== "" &&
  form.job_salary.trim() !== "" &&
  form.job_requirements.trim() !== "" &&
  form.job_specs.length > 0;

  //  Fetch job specs
  useEffect(() => {
    Api.get("/job-specs")
      .then(res => setSpecs(res.data))
      .catch(err => console.error(err));
  }, []);

  //  Handle checkbox toggle
  const handleSpecChange = (id: number) => {
    setForm(prev => {
      const exists = prev.job_specs.includes(id);

      return {
        ...prev,
        job_specs: exists
          ? prev.job_specs.filter(s => s !== id) // remove
          : [...prev.job_specs, id] // add
      };
    });
  };

  // Submit
  const handleSubmit = async () => {
    try {
      await Api.post("/jobs", form);
      alert("Job created successfully");

      // reset form
      setForm({
        job_title: "",
        job_description: "",
        job_location: "",
        job_salary: "",
        job_requirements: "",
        job_specs: []
      });

    } catch (err) {
      console.error(err);
      alert("Error uploading job");
    }
  };

  return (
    <Layout>
      <h2 className="text-2xl mb-4">Create Job</h2>

      <div className="grid grid-cols-2 gap-2">

        <input
          placeholder="Job Title"
          value={form.job_title}
          onChange={(e) => setForm({ ...form, job_title: e.target.value })}
          className="border p-2"
        />

        <textarea
          placeholder="Job Description"
          value={form.job_description}
          onChange={(e) => setForm({ ...form, job_description: e.target.value })}
          className="border p-2"
        />

        <input
          placeholder="Location"
          value={form.job_location}
          onChange={(e) => setForm({ ...form, job_location: e.target.value })}
          className="border p-2"
        />

        <input
          placeholder="Salary"
          value={form.job_salary}
          onChange={(e) => setForm({ ...form, job_salary: e.target.value })}
          className="border p-2"
        />

        <textarea
          placeholder="Job Requirements"
          value={form.job_requirements}
          onChange={(e) => setForm({ ...form, job_requirements: e.target.value })}
          className="border p-2"
        />

        {/* Job Specs (checkboxes) */}
        <div>
          <h3 className="font-bold mb-2">Job Specs</h3>

          <div className="flex flex-col gap-2">
            {specs.map(spec => (
              <label key={spec.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.job_specs.includes(spec.id)}
                  onChange={() => handleSpecChange(spec.id)}
                />
                {spec.name}
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`p-2 text-white ${
            isFormValid ? "bg-blue-500" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Create Job
        </button>

      </div>
    </Layout>
  );
}
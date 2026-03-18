import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../services/api";
import Layout from "../../components/admin/Layout";

export default function ApplicationDetails() {
  const { id } = useParams();
  const [app, setApp] = useState<any>(null);

  useEffect(() => {
    Api.get(`/applications/${id}`)
      .then(res => setApp(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!app) return <p>Loading...</p>;

  return (
    <Layout>
      <h2 className="text-2xl mb-4">Application Details</h2>

      <p><strong>Name:</strong> {app.fullname}</p>
      <p><strong>Email:</strong> {app.email}</p>
      <p><strong>Phone:</strong> {app.phone}</p>
      <p><strong>Job:</strong> {app.job_title}</p>
      <p><strong>Location:</strong> {app.job_location}</p>

      <p className="mt-4">
        <strong>Cover Letter:</strong><br />
        {app.cover_letter}
      </p>

      <a
        href={app.resume_url}
        target="_blank"
        className="text-blue-500 mt-4 block"
      >
        View Resume
      </a>
    </Layout>
  );
}
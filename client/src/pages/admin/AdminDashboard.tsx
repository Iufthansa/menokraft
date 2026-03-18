import { useEffect, useState } from "react";
import Api from "../../services/api";
import Layout from "@/components/admin/Layout";



export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    Api.get("/dashboard/summary")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <Layout>
      <h2 className="text-2xl mb-4">Dashboard</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow">
          <h3>Total Jobs</h3>
          <p>{data.total_jobs}</p>
        </div>

        <div className="p-4 bg-white shadow">
          <h3>Total Applications</h3>
          <p>{data.total_applications}</p>
        </div>
      </div>

      <h3 className="mt-6">Recent Applications</h3>

      <ul>
        {data.recent_applications.map((app: any) => (
          <li key={app.id}>
            {app.fullname} - {app.job_title}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
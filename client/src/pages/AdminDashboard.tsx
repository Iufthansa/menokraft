import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const token = localStorage.getItem("adminToken");

      const res = await fetch("https://menokraft.onrender.com/applications", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();
      setApplications(data.data);
    };

    fetchApplications();
  }, []);

  return (
    <div>
      <h2>Applications</h2>
      {applications.map((app: any) => (
        <div key={app.id}>
          <p>{app.fullname}</p>
          <a href={app.resume_url} target="_blank">View Resume</a>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
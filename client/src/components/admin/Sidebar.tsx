import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/applications">Applications</Link>
        <Link to="/admin/jobs">Jobs</Link>
      </nav>
    </div>
  );
}
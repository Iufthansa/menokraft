import { logout } from "../../utils/auth";

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-gray-100">
      <h1 className="font-bold">Admin Panel</h1>
      <button onClick={logout} className="text-red-500">
        Logout
      </button>
    </div>
  );
}
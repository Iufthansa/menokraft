import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Right side */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Page content */}
        <div className="p-4 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoader from "@/components/PageLoader";
import Index from "./pages/Index";
import About from "./pages/About";
import HRServices from "./pages/HRServices";
import ManagementSystems from "./pages/ManagementSystems";
import Training from "./pages/Training";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import InternationalJobs from "./pages/InternationalJobs";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProjectManagement from "./pages/ProjectManagement";
import AdminLogin from "./pages/admin/AdminLogin";
import PrivateRoute from "./components/admin/PrivateRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Applications from "./pages/admin/Applications";
import UploadJobs from "./pages/admin/Jobs";
import ApplicationDetails from "./pages/admin/ApplicationDetails";



const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <PageLoader />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/hr-services" element={<HRServices />} />
        <Route path="/management-systems" element={<ManagementSystems />} />
        <Route path="/training" element={<Training />} />
        <Route path="/project-management" element={<ProjectManagement />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/international-jobs" element={<InternationalJobs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }/>
        <Route path="/admin/applications" element={
          <PrivateRoute>
            <Applications />
          </PrivateRoute> 
        }/>
        <Route path="/admin/jobs" element={
          <PrivateRoute>
            <UploadJobs />
          </PrivateRoute>
        } />
        <Route path="/admin/applications/:id" element={
          <PrivateRoute>
            <ApplicationDetails />
          </PrivateRoute>  
        } />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;

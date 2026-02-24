import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/dashboard/Dashboard";
import AdStudio from "../pages/studio/AdStudio";
import History from "../pages/history/History";

export default function AppRoutes() {
  return (
    <Routes>
      {/* DEFAULT PAGE */}
      <Route path="/" element={<Login />} />

      {/* SIGNUP PAGE */}
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/ad-studio" element={<AdStudio />} />
     <Route path="/history" element={<History />} />
    </Routes>
  );
}
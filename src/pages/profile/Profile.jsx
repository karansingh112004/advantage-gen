import { motion } from "framer-motion";
import {
  User,
  Mail,
  LogOut,
  Shield,
  Sparkles,
  CreditCard,
  Calendar,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

/* ---------- Background Blob ---------- */
const Blob = ({ className }) => (
  <div
    className={`absolute rounded-full blur-[120px] opacity-40 animate-pulse ${className}`}
  />
);

/* ---------- Glass Card ---------- */
const Card = ({ children }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="bg-white/5 border border-white/10
    rounded-2xl p-8 backdrop-blur-xl
    hover:border-violet-400/40
    hover:shadow-lg hover:shadow-violet-500/20"
  >
    {children}
  </motion.div>
);

export default function Profile() {
  const navigate = useNavigate();

  // temporary user data (later backend se aayega)
  const user = {
    name: "Demo User",
    email: "demo@user.com",
    role: "Admin",
    credits: 120,
    ads: 28,
    joined: "Jan 2025",
  };

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="relative min-h-screen bg-[#05060a] text-white overflow-hidden
    flex items-center justify-center px-6">

      {/* BACKGROUND */}
      <Blob className="w-[420px] h-[420px] bg-violet-600 -top-20 -left-20" />
      <Blob className="w-[360px] h-[360px] bg-cyan-500 bottom-10 right-10" />

      {/* CENTER CARD */}
      <div className="relative z-10 w-full max-w-xl">
        <Card>

          {/* HEADER */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-16 h-16 rounded-full
              bg-gradient-to-r from-violet-500 to-cyan-500
              flex items-center justify-center shadow-lg"
            >
              <User size={28} />
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-400">{user.email}</p>
            </div>

            <span
              className="text-xs px-3 py-1 rounded-full
              bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
            >
              Verified
            </span>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-center">
              <Sparkles className="mx-auto mb-1 text-violet-400" size={18} />
              <p className="text-lg font-semibold">{user.ads}</p>
              <p className="text-xs text-gray-400">Ads Generated</p>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-center">
              <CreditCard className="mx-auto mb-1 text-cyan-400" size={18} />
              <p className="text-lg font-semibold">{user.credits}</p>
              <p className="text-xs text-gray-400">Credits Left</p>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-center">
              <Calendar className="mx-auto mb-1 text-gray-300" size={18} />
              <p className="text-sm font-medium">{user.joined}</p>
              <p className="text-xs text-gray-400">Member Since</p>
            </div>
          </div>

          {/* DETAILS */}
          <div className="space-y-4 text-sm text-gray-300 mb-10">
            <div className="flex items-center gap-3">
              <Shield size={16} />
              Role: <span className="text-white">{user.role}</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} />
              Email verified and secured
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium
              bg-gradient-to-r from-violet-500 to-cyan-500
              shadow-lg shadow-violet-500/30
              hover:shadow-cyan-500/40 transition"
            >
              Edit Profile
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleLogout}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium
              bg-red-500/10 text-red-400
              border border-red-500/30
              hover:bg-red-500/20 transition
              flex items-center justify-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </motion.button>
          </div>
        </Card>
      </div>
    </div>
  );
}
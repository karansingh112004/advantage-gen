import useAuthStore from "../../context/useAuthStore";
import { motion } from "framer-motion";
import {
  LogOut,
  Sparkles,
  Image,
  FileText,
  CreditCard,
  History as HistoryIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    rounded-xl p-5 backdrop-blur-xl
    hover:border-violet-400/40
    hover:shadow-lg hover:shadow-violet-500/20"
  >
    {children}
  </motion.div>
);

export default function Dashboard() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#05060a] text-white px-6 py-8 overflow-hidden">

      {/* BACKGROUND */}
      <Blob className="w-[420px] h-[420px] bg-violet-600 -top-20 -left-20" />
      <Blob className="w-[360px] h-[360px] bg-cyan-500 bottom-10 right-10" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-12"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="text-4xl font-semibold tracking-tight
              bg-gradient-to-r from-violet-400 to-cyan-400
              bg-clip-text text-transparent"
            >
              AdVantage Gen
            </h1>

            <p
              className="mt-2 text-sm font-medium
              bg-gradient-to-r from-violet-300 to-cyan-300
              bg-clip-text text-transparent"
            >
              AI-powered ad generation studio
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Welcome back, {user?.name || "Marketer"} 👋
            </p>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">

            {/* ✅ HISTORY BUTTON (ADDED ONLY) */}
            <button
              onClick={() => navigate("/history")}
              className="flex items-center gap-2 text-sm
              px-4 py-2 rounded-lg
              bg-white/10 text-gray-300
              hover:bg-violet-500/30 hover:text-white
              transition"
            >
              <HistoryIcon size={16} />
              History
            </button>

            {/* LOGOUT (UNCHANGED) */}
            <button
              onClick={logout}
              className="flex items-center gap-2 text-sm
              px-4 py-2 rounded-lg
              bg-red-500/10 text-red-400
              hover:bg-red-500 hover:text-white transition"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </motion.div>

      {/* STATS */}
      <div className="relative z-10 grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <p className="text-2xl font-semibold">42</p>
          <p className="text-xs text-gray-400 flex items-center gap-1">
            <Image size={14} /> Images Generated
          </p>
        </Card>

        <Card>
          <p className="text-2xl font-semibold">28</p>
          <p className="text-xs text-gray-400 flex items-center gap-1">
            <FileText size={14} /> Ad Copies Written
          </p>
        </Card>

        <Card>
          <p className="text-2xl font-semibold">120</p>
          <p className="text-xs text-gray-400 flex items-center gap-1">
            <CreditCard size={14} /> Credits Remaining
          </p>
        </Card>
      </div>

      {/* PROMPT GENERATOR */}
      <div className="relative z-10">
        <Card>
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <Sparkles size={16} />
            Generate New Ad Campaign
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* INPUT SIDE */}
            <div className="space-y-4">
              <textarea
                placeholder="Describe your ad idea (product, mood, environment)"
                className="w-full h-32 p-4 text-sm
                bg-black/40 rounded-lg border border-white/10
                placeholder-gray-500 transition-all
                focus:border-violet-400 focus:ring-2
                focus:ring-violet-400/20 outline-none"
              />

              <div className="flex flex-wrap gap-3">
                {["Witty", "Professional", "Urgent", "Inspirational"].map(
                  (tone) => (
                    <button
                      key={tone}
                      className="px-3 py-1.5 text-xs rounded-full
                      bg-white/10 hover:bg-violet-500/30
                      hover:text-white transition"
                    >
                      {tone}
                    </button>
                  )
                )}
              </div>

              <input
                placeholder="CTA text (e.g. Shop Now)"
                className="w-full p-3 text-sm
                bg-black/40 rounded-lg border border-white/10
                placeholder-gray-500 transition-all
                focus:border-violet-400 focus:ring-2
                focus:ring-violet-400/20 outline-none"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/ad-studio")}
                className="w-full py-2.5 rounded-lg
                font-medium text-sm
                bg-gradient-to-r from-violet-500 to-cyan-500
                shadow-lg shadow-violet-500/30
                hover:shadow-cyan-500/40 transition"
              >
                Generate Campaign →
              </motion.button>
            </div>

            {/* PREVIEW SIDE */}
            <div className="space-y-4">
              <div
                className="h-40 rounded-lg bg-black/40
                border border-white/10
                flex items-center justify-center
                text-gray-500 text-sm"
              >
                Image Preview
              </div>

              <div
                className="h-32 rounded-lg bg-black/40
                border border-white/10
                p-3 text-sm text-gray-400"
              >
                Generated ad copy will appear here...
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/ad-studio")}
                className="w-full py-2.5 rounded-lg
                font-medium text-sm
                bg-gradient-to-r from-violet-500 to-cyan-500
                shadow-lg shadow-violet-500/30
                hover:shadow-cyan-500/40 transition"
              >
                Edit in Studio →
              </motion.button>
            </div>
          </div>
        </Card>
      </div>

      {/* RECENT */}
      <div className="relative z-10 mt-12">
        <Card>
          <h3 className="font-semibold mb-2">Recent Campaigns</h3>
          <p className="text-sm text-gray-500">
            No campaigns yet. Generate your first AI ad 🚀
          </p>
        </Card>
      </div>
    </div>
  );
}
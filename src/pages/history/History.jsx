import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function History() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#05060a] text-white px-6 py-10">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto mb-10">
        <h1
          className="text-4xl font-semibold tracking-tight
          bg-gradient-to-r from-violet-400 to-cyan-400
          bg-clip-text text-transparent"
        >
          History
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Your previously generated ad campaigns
        </p>
      </div>

      {/* HISTORY BOX */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto
        bg-white/5 border border-white/10
        rounded-2xl p-8 backdrop-blur-xl
        hover:border-violet-400/40
        hover:shadow-lg hover:shadow-violet-500/20
        transition"
      >
        {/* EMPTY STATE */}
        <div className="text-center">
          <h2 className="text-lg font-medium mb-2">
            No campaigns yet
          </h2>
          <p className="text-sm text-gray-400">
            Once you generate ads, they will appear here for quick access.
          </p>
        </div>
      </motion.div>

      {/* BACK ACTION */}
      <div className="max-w-3xl mx-auto mt-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="px-5 py-2 rounded-lg text-sm
          bg-white/10 hover:bg-white/20 transition"
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}
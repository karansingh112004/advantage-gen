import { motion } from "framer-motion";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ---------- Neon Blob ---------- */
const Blob = ({ className }) => (
  <div
    className={`absolute rounded-full blur-[140px] opacity-40 animate-pulse ${className}`}
  />
);

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center
    bg-[#05060a] text-white px-6 overflow-hidden">

      {/* NEON BACKGROUND */}
      <Blob className="w-[520px] h-[520px] bg-violet-600 -top-32 -left-32" />
      <Blob className="w-[460px] h-[460px] bg-cyan-500 bottom-0 right-0" />

      {/* GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-lg w-full
        bg-gradient-to-b from-white/10 to-white/5
        border border-white/10 backdrop-blur-2xl
        rounded-3xl p-12 text-center
        shadow-2xl shadow-violet-500/20"
      >
        {/* ICON */}
        <motion.div
          initial={{ rotate: -20, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-20 h-20 mx-auto mb-6 rounded-full
          bg-gradient-to-r from-violet-500 to-cyan-500
          flex items-center justify-center
          shadow-xl shadow-violet-500/40"
        >
          <AlertTriangle size={32} />
        </motion.div>

        {/* 404 TEXT */}
        <motion.h1
          initial={{ letterSpacing: "0.5em", opacity: 0 }}
          animate={{ letterSpacing: "0em", opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-8xl font-extrabold mb-4
          bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400
          bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* MESSAGE */}
        <p className="text-2xl font-semibold mb-3">
          Lost in the Matrix
        </p>

        <p className="text-sm text-gray-400 mb-10 leading-relaxed">
          Looks like this page slipped through the digital void.
          Don’t worry — your dashboard is just one click away.
        </p>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/dashboard")}
          className="inline-flex items-center gap-2
          px-7 py-3 rounded-xl text-sm font-semibold
          bg-gradient-to-r from-violet-500 to-cyan-500
          shadow-lg shadow-violet-500/40
          hover:shadow-cyan-500/60 transition-all"
        >
          <ArrowLeft size={18} />
          Return to Dashboard
        </motion.button>

        {/* FOOTER */}
        <p className="mt-8 text-xs text-gray-500">
          Error code: 404 • AdVantage Gen
        </p>
      </motion.div>
    </div>
  );
}
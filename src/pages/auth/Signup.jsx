import { useForm } from "react-hook-form";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

/* ---- Background Blob ---- */
const Blob = ({ className }) => (
  <div className={`absolute rounded-full blur-[120px] opacity-40 ${className}`} />
);

export default function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Account created successfully 🚀");
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-[#05060a] text-white overflow-hidden">

      {/* ================= LEFT BRAND ================= */}
      <div className="relative hidden md:flex items-center justify-center px-16">
        <Blob className="w-[420px] h-[420px] bg-violet-600 -top-20 -left-20" />
        <Blob className="w-[360px] h-[360px] bg-cyan-500 bottom-10 right-10" />

        <div className="relative z-10 max-w-md">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-semibold tracking-tight
            bg-gradient-to-r from-violet-400 to-cyan-400
            bg-clip-text text-transparent"
          >
            AdVantage Gen
          </motion.h1>

          <p className="mt-6 text-lg font-medium
            bg-gradient-to-r from-violet-300 to-cyan-300
            bg-clip-text text-transparent">
            Build smarter ads with AI
          </p>

          <p className="mt-6 text-sm text-gray-400 leading-relaxed">
            Launch high-performing ad creatives, copies, and campaigns using AI-driven intelligence.
          </p>
        </div>
      </div>

      {/* ================= RIGHT SIGNUP ================= */}
      <div className="flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-white/5 backdrop-blur-xl
          rounded-2xl p-10 border border-white/10"
        >
          <h2 className="text-2xl font-semibold">Create your account</h2>
          <p className="text-sm text-gray-400 mt-1">
            Start your AI marketing journey
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-7">

            {/* NAME */}
            <div className="group">
              <label className="text-xs text-gray-400">Full Name</label>
              <div className="relative mt-2">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  {...register("name", { required: true })}
                  placeholder="John Doe"
                  className="w-full pl-9 pr-3 py-2.5 text-sm
                  bg-black/40 rounded-lg border border-white/10
                  placeholder-gray-500 transition-all
                  focus:placeholder-transparent
                  focus:border-violet-400 focus:ring-2
                  focus:ring-violet-400/20 outline-none
                  group-hover:border-white/30"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="group">
              <label className="text-xs text-gray-400">Email</label>
              <div className="relative mt-2">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="you@company.com"
                  className="w-full pl-9 pr-3 py-2.5 text-sm
                  bg-black/40 rounded-lg border border-white/10
                  placeholder-gray-500 transition-all
                  focus:placeholder-transparent
                  focus:border-violet-400 focus:ring-2
                  focus:ring-violet-400/20 outline-none
                  group-hover:border-white/30"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="group">
              <label className="text-xs text-gray-400">Password</label>
              <div className="relative mt-2">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="password"
                  {...register("password", { required: true, minLength: 6 })}
                  placeholder="Minimum 6 characters"
                  className="w-full pl-9 pr-3 py-2.5 text-sm
                  bg-black/40 rounded-lg border border-white/10
                  placeholder-gray-500 transition-all
                  focus:placeholder-transparent
                  focus:border-violet-400 focus:ring-2
                  focus:ring-violet-400/20 outline-none
                  group-hover:border-white/30"
                />
              </div>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="relative w-full py-2.5 rounded-lg
              font-medium text-sm overflow-hidden
              bg-gradient-to-r from-violet-500 to-cyan-500
              shadow-lg shadow-violet-500/30
              hover:shadow-cyan-500/40 transition-all"
            >
              <span className="relative z-10">Create Account</span>
            </motion.button>
          </form>

          {/* LOGIN BOX */}
          <motion.div
            whileHover={{ y: -3 }}
            className="mt-10 p-4 rounded-xl
            bg-black/40 border border-white/10
            hover:border-violet-400/50
            hover:shadow-lg hover:shadow-violet-500/20
            transition"
          >
            <p className="text-xs text-gray-400">
              Already have an account?
            </p>
            <Link
              to="/"
              className="mt-2 inline-flex items-center gap-2
              text-sm font-medium text-violet-400
              hover:text-cyan-400 transition"
            >
              Login instead <ArrowRight size={16} />
            </Link>
          </motion.div>

          <p className="mt-6 text-[11px] text-gray-600 text-center">
            © 2026 AdVantage Gen
          </p>
        </motion.div>
      </div>
    </div>
  );
}

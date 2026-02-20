import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import useAuthStore from "../../context/useAuthStore";

/* -------- Background Blob -------- */
const Blob = ({ className }) => (
  <div className={`absolute rounded-full blur-[120px] opacity-40 ${className}`} />
);

export default function Login() {
  // ✅ ALL HOOKS INSIDE COMPONENT
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuthStore();

  // ✅ submit handler ALSO inside component
  const onSubmit = (data) => {
    login({ email: data.email });
    toast.success("Logged in successfully");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-[#05060a] text-white overflow-hidden">

      {/* ========== LEFT BRAND ========== */}
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
            AI-powered ad creative intelligence
          </p>

          <p className="mt-6 text-sm text-gray-400 leading-relaxed">
            Generate, test, and scale high-converting ads using advanced AI.
          </p>
        </div>
      </div>

      {/* ========== RIGHT LOGIN ========== */}
      <div className="flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-white/5 backdrop-blur-xl
          rounded-2xl p-10 border border-white/10"
        >
          <h2 className="text-2xl font-semibold">Sign in</h2>
          <p className="text-sm text-gray-400 mt-1">
            Access your AI workspace
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-7">

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
                  placeholder-gray-500 focus:border-violet-400 focus:ring-2
                  focus:ring-violet-400/20 outline-none"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="group">
              <label className="text-xs text-gray-400">Password</label>
              <div className="relative mt-2">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  placeholder="Enter your password"
                  className="w-full pl-9 pr-9 py-2.5 text-sm
                  bg-black/40 rounded-lg border border-white/10
                  placeholder-gray-500 focus:border-violet-400 focus:ring-2
                  focus:ring-violet-400/20 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-2.5 rounded-lg text-sm font-medium
              bg-gradient-to-r from-violet-500 to-cyan-500"
            >
              Continue
            </motion.button>
          </form>

          {/* SIGNUP LINK */}
          <div className="mt-10">
            <p className="text-xs text-gray-400">New to AdVantage Gen?</p>
            <Link
              to="/signup"
              className="mt-2 inline-flex items-center gap-2
              text-sm font-medium text-violet-400"
            >
              Create a free account <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
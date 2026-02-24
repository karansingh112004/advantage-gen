import { useState } from "react";
import { motion } from "framer-motion";

export default function AdStudio() {
  const [form, setForm] = useState({
    headline: "",
    description: "",
    cta: "Learn More",
  });

  const handleGenerate = () => {
    setForm({
      headline: "Boost your sales with AI-powered ads",
      description:
        "Create high-performing ads in minutes using AdVantage Gen.",
      cta: "Get Started",
    });
  };

  return (
    <div className="min-h-screen bg-[#05060a] text-white px-6 py-8">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Ad Studio
        </h1>
        <p className="text-sm text-gray-400 mt-2">
          Generate & preview AI-powered ads
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* INPUT */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h2 className="font-semibold mb-4">Ad Copy</h2>

          <input
            placeholder="Headline"
            value={form.headline}
            onChange={(e) =>
              setForm({ ...form, headline: e.target.value })
            }
            className="w-full mb-4 p-3 bg-black/40
            border border-white/10 rounded-lg outline-none"
          />

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            rows={5}
            className="w-full mb-4 p-3 bg-black/40
            border border-white/10 rounded-lg outline-none resize-none"
          />

          <button
            onClick={handleGenerate}
            className="w-full py-2.5 rounded-lg
            bg-gradient-to-r from-violet-500 to-cyan-500
            font-medium"
          >
            Generate Preview
          </button>
        </div>

        {/* PREVIEW */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/5 border border-white/10 p-6 rounded-xl"
        >
          <h2 className="font-semibold mb-4">Live Preview</h2>

          <div className="bg-black/40 p-5 rounded-lg">
            <p className="text-xs text-gray-400 mb-2">Sponsored</p>

            <h3 className="text-lg font-semibold">
              {form.headline || "Your headline here"}
            </h3>

            <p className="text-sm text-gray-300 mt-2">
              {form.description || "Your ad description here"}
            </p>

            <button className="mt-4 px-4 py-2 rounded-lg bg-violet-500 text-sm">
              {form.cta}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
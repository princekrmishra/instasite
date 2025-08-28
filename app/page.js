import React from "react";
import { Code2, Rocket, Palette, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-black text-white">
      {/* Hero Section */}
      <header className="text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          Unlock Human Potential With Generative AI
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Export your code, host it instantly, or make changes on the fly —
          the choice is yours, InstaSite makes it seamless ✨
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#features"
            className="px-6 py-3 rounded-xl font-medium transition transform hover:scale-105"
          >
            Explore Features
          </a>
          <a
            href="/hero"
            className="px-6 py-3 rounded-xl font-medium bg-green-500 hover:bg-green-600 transition transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          🚀 Features That Power InstaSite
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition">
            <Code2 className="h-10 w-10 text-indigo-400" />
            <h3 className="text-xl font-semibold mt-4">Code Export</h3>
            <p className="text-gray-400 mt-2">
              Export clean, production-ready React code instantly.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition">
            <Rocket className="h-10 w-10 text-green-400" />
            <h3 className="text-xl font-semibold mt-4">Instant Hosting</h3>
            <p className="text-gray-400 mt-2">
              Deploy your site in one click with blazing-fast hosting.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition">
            <Palette className="h-10 w-10 text-pink-400" />
            <h3 className="text-xl font-semibold mt-4">Modern UI</h3>
            <p className="text-gray-400 mt-2">
              Beautiful layouts powered by Tailwind CSS and shadcn/ui.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition">
            <Globe className="h-10 w-10 text-yellow-400" />
            <h3 className="text-xl font-semibold mt-4">Global Access</h3>
            <p className="text-gray-400 mt-2">
              Reach users worldwide with CDN-powered infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          💰 Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
            <h3 className="text-xl font-semibold">Free 🌱</h3>
            <p className="text-gray-400 mt-2">For hobby projects & testing.</p>
            <p className="text-2xl font-bold mt-4">₹0</p>
          </div>
          <div className="p-6 rounded-xl border-2 border-indigo-500 bg-gray-800 shadow-lg">
            <h3 className="text-xl font-semibold">Pro 🚀</h3>
            <p className="text-gray-400 mt-2">
              For developers and small teams.
            </p>
            <p className="text-2xl font-bold mt-4">₹499/month</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
            <h3 className="text-xl font-semibold">Enterprise 🏢</h3>
            <p className="text-gray-400 mt-2">
              For large-scale organizations with SLA.
            </p>
            <p className="text-2xl font-bold mt-4">Custom</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Build Your Next Site?
        </h2>
        <p className="text-lg text-indigo-100 mt-4">
          Join thousands of creators using InstaSite today.
        </p>
        <a
          href="/hero"
          className="mt-6 inline-block px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition transform hover:scale-105"
        >
          Get Started Free
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} InstaSite. Built with ❤️ by{" "}
        <a
          href="https://github.com/princekrmishra"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-400 hover:underline"
        >
          Prince Kumar Mishra
        </a>
      </footer>
    </div>
  );
}

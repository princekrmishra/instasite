"use client"
import React, { useState } from "react";

/**
 * Render the Help Center UI: search-enabled FAQ list, quick tips, and contact options.
 *
 * Displays a searchable set of frequently asked questions (case-insensitive match against question text),
 * a "Quick Tips" panel with shortcuts and guidance, and a contact section containing an email link and an external contact form.
 *
 * @returns {JSX.Element} The Help Center React component.
 */
function Help() {
  const [search, setSearch] = useState("");

  const faqs = [
    {
      q: "How do I update my profile?",
      a: "Go to Settings → Profile tab and update your name, email, or password."
    },
    {
      q: "How can I upgrade my plan?",
      a: "Navigate to Pricing and choose the plan that suits you best."
    },
    {
      q: "How do I reset my password?",
      a: "Click on Forgot Password from the login page to reset your password."
    },
    {
      q: "Where can I contact support?",
      a: "You can email us at kmishraprince@gmail.com or use the Contact form."
    }
  ];

  const filteredFaqs = faqs.filter(item =>
    item.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Help Center</h1>
      <p className="text-gray-600 mb-6">
        Find answers to common questions or get in touch with support.
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search for help..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-md px-4 py-2 mb-6 outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* FAQ Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 hover:shadow-md transition"
            >
              <p className="font-medium">{item.q}</p>
              <p className="text-gray-600 mt-1">{item.a}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>

      {/* Tips & Shortcuts */}
      <div className="mt-8 bg-blue-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Quick Tips</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Use <kbd className="px-2 py-1 bg-gray-200 rounded">Ctrl + K</kbd> to quickly search.</li>
          <li>Check <span className="font-medium">Settings</span> to manage your account.</li>
          <li>Visit <span className="font-medium">Pricing</span> to manage subscriptions.</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="mt-8 bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold">Need More Help?</h2>
        <p className="text-gray-600 mt-2">
          Still stuck? Reach out to us:
        </p>
        <ul className="mt-2 text-blue-500 space-y-1">
          <li><a href="mailto:support@yourapp.com">kmishraprince@gmail.com</a></li>
          <li>
        <a 
          href="https://forms.gle/jWzrU1E1sVgKcu8L6" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline"
        >
        Contact Form
      </a>
    </li>
        </ul>
      </div>
    </div>
  );
}

export default Help;

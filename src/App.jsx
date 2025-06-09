import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">CrickIQ</h1>
          <nav className="space-x-6">
            <a href="#features" className="hover:text-indigo-500">Features</a>
            <a href="#pricing" className="hover:text-indigo-500">Pricing</a>
            <a href="#waitlist" className="hover:text-indigo-500">Join Waitlist</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Smarter Practice. Sharper Play.</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          AI-powered cricket training app that tracks your ball, speed and offers expert coaching insights.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">
          Join Waitlist
        </button>
      </main>

      <section id="features" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold mb-8 text-center">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">Basic Model (Free)</h4>
            <p>
              Tracks ball and ball speed. Uses AI to track trajectory after hitting. Choose between 3 default fields: off-spin, pace, leg-spin. Makes net sessions more like a match.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">Premium Model (£)</h4>
            <p>
              Create your own fields with more match options and expert coaching tips for batting, bowling, and wicket keeping.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">Add-Ons (£)</h4>
            <p>
              Special cricket bat, ball, and set of stumps for enhanced training experience.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="max-w-4xl mx-auto px-6 py-16 text-center bg-indigo-50 rounded-lg shadow">
        <h3 className="text-3xl font-semibold mb-8">Pricing</h3>
        <p className="text-lg mb-4">Basic model is free. Premium model and add-ons available at affordable prices.</p>
      </section>

      <section id="waitlist" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold mb-8 text-center">Join the Waitlist</h3>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="email"
            placeholder="Your email"
            required
            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>
      </section>

      <footer className="bg-white py-6 mt-12 text-center text-sm text-gray-500">
        © 2025 CrickIQ. All rights reserved.
      </footer>
    </div>
  );
}

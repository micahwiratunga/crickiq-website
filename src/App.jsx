import React from 'react';

function Hero() {
  return (
    <section className="bg-lightGray min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-darkNavy mb-4">
          Welcome to <span className="text-neonPink">CrickIQ</span>
        </h1>
        <p className="text-lg text-darkNavy mb-8">
          Track your shots, train smarter, and play like a pro — powered by AI.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-electricBlue text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-brightOrange transition">
            Join the Waitlist
          </button>
          <button className="bg-white text-electricBlue border-2 border-electricBlue font-semibold py-3 px-6 rounded-full hover:bg-brightOrange hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Nav Bar */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">CrickIQ</h1>
          <nav className="space-x-6">
            <a href="#features" className="hover:text-brightOrange">Features</a>
            <a href="#pricing" className="hover:text-brightOrange">Pricing</a>
            <a href="#waitlist" className="hover:text-brightOrange">Join Waitlist</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Features */}
      <section id="features" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold mb-8 text-center">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">Basic Model (Free)</h4>
            <p>
              Tracks ball and ball speed. Uses AI to track trajectory after hitting. Choose between 3 default fields: off-spin, pace, leg-spin.
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

      {/* Pricing */}
      <section id="pricing" className="max-w-4xl mx-auto px-6 py-16 text-center bg-indigo-50 rounded-lg shadow">
        <h3 className="text-3xl font-semibold mb-8">Pricing</h3>
        <p className="text-lg mb-4">Basic model is free. Premium model and add-ons available at affordable prices.</p>
      </section>

      {/* Waitlist */}
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
  <p className="text-sm text-indigo-500 text-center">
    By signing up, you agree to our <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
  </p>
</form>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 mt-12 text-center text-sm text-gray-500">
        © 2025 CrickIQ. All rights reserved.
      </footer>
    </div>
  );
}

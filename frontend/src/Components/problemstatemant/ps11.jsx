import React from 'react';
import { motion } from 'framer-motion';

const Ps11 = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      <main className="container mx-auto px-4 pt-16 pb-20">
        
        {/* Title */}
        <motion.div
          className="space-y-8 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-2xl md:text-4xl font-mono text-center font-bold pt-4">
            <div className="bg-gradient-to-r from-green-600 via-blue-500 to-white text-transparent bg-clip-text pressfont">
              Simplifying Investment Portfolio Management
            </div>
          </h1>
        </motion.div>

        {/* Objective */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Objective</h2>
          <p className="text-gray-400">
            Build an In-House App that helps investors (like your parents or friends) easily track, analyze, and execute their investments in one place. The app must:
          </p>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Automatically fetch and display mutual funds (MFs) and stocks across all platforms.</li>
            <li>Simplify comparisons using AI/ML models (like Netflix recommending movies).</li>
            <li>Provide a single, interactive dashboard with one-click execution (buy/sell) for MFs and stocks.</li>
            <li>Use zero jargon—explain everything like Google Weather (e.g., "This fund is safer than 80% of others" instead of "Beta = 0.8").</li>
          </ul>
        </motion.div>

        {/* About Company */}

        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">About the Company</h2>
          <p className="text-gray-400">
ILNB Financial Services Pvt Ltd is registered entity offering solutions to its client in Financial Domain. Within 6 years, ILNB has established themselves as one of the most trusted brands when it comes to managing finances and planning for long term goals. With over 600 clients and 150Cr+ assets under management, ILNB is now set to introduce new technology to its clients in order to provide better flexibility, simplicity in portfolios and faster execution.
          </p>
          </motion.div>

          {/* Overview */}

        <motion.div

          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Overview</h2>
          <p className="text-gray-400">
While ILNB always strives on introducing new technology to its clients, the main focus is always on quick execution of investments. For the same purpose, ILNB is planning to develop new age platform and technology which can be more beneficial for quicker operation flow.
          </p>
          </motion.div>


        {/* Key Features */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Key Features</h2>

          {/* 1. Automatic Portfolio Tracking */}
          <h3 className="text-xl font-semibold text-orange-200 mb-4">1. Automatic Portfolio Tracking</h3>
          <p className="text-gray-400">
            <strong>Problem:</strong> Checking investments across apps like MF Central, Zerodha, and Angel One is like juggling 3 email apps (Gmail, Outlook, Yahoo) separately.
          </p>
          <p className="text-gray-400">
            <strong>Solution:</strong> Fetch data from MF Central API, Demat accounts (ICICI Direct, Angel One, etc.) and show platform-wise holdings (e.g., "Zerodha: ₹50,000 in stocks | MF Central: ₹1L in MFs").
          </p>
          <p className="text-gray-400">
            <strong>Example:</strong> Just like PhonePe shows all bank balances, your app shows all investments with execution links (e.g., "Buy more" button next to each fund).
          </p>

          {/* 2. Smart AI-Powered Comparison Tool */}
          <h3 className="text-xl font-semibold text-orange-200 my-4">2. Smart AI-Powered Comparison Tool</h3>
          <p className="text-gray-400">
            <strong>Problem:</strong> Manually comparing funds is like comparing smartphones using Excel.
          </p>
          <p className="text-gray-400">
            <strong>Solution:</strong> Use AI/ML models to recommend better funds/stocks (like Netflix’s "Because you watched X, try Y").
          </p>
          <p className="text-gray-400">
            <strong>Simple Visuals:</strong>
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
              <li>Fund Manager Experience: Show as a "Trust Score" (⭐⭐⭐⭐). Think of it like Uber driver ratings.</li>
              <li>Risk Parameters: Use a "Safety Meter" (🟢 Low Risk | 🟡 Medium | 🔴 High).</li>
              <li>Returns: "₹10,000 → ₹12,000 in 1 year" with a 📈 emoji.</li>
            </ul>
          </p>
          <p className="text-gray-400">
            <strong>Example:</strong> The app says, "Fund A is better than Fund B: 15% returns, same risk. Switch now? ✅"
          </p>

          {/* 3. One Dashboard for Tracking + Execution */}
          <h3 className="text-xl font-semibold text-orange-200 my-4">3. One Dashboard for Tracking + Execution</h3>
          <p className="text-gray-400">
            <strong>Problem:</strong> Managing stocks and MFs across apps is like booking flights on 3 different airline apps.
          </p>
          <p className="text-gray-400">
            <strong>Solution:</strong> All MFs: Display with execution links to MFU (Mutual Fund Utility). Example: "Click here to invest more in Fund X."
          </p>
          <p className="text-gray-400">
            <strong>Unified Execution:</strong> Buy/sell MFs/stocks without leaving the app (like ordering food on Swiggy from multiple restaurants).
          </p>
          <p className="text-gray-400">
            <strong>Example:</strong> A "Quick Invest" button that lets users buy a fund with one click, just like Amazon’s "Buy Now."
          </p>

          {/* 4. Super Simple & Interactive UI */}
          <h3 className="text-xl font-semibold text-orange-200 my-4">4. Super Simple & Interactive UI</h3>
          <p className="text-gray-400">
            <strong>Problem:</strong> Finance apps feel like reading a textbook ("Beta = 0.8" 🤯).
          </p>
          <p className="text-gray-400">
            <strong>Solution:</strong> Google Weather-like Interface:
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
              <li>Icons: Use a 💰 emoji for "Total Investments," 📊 for "Performance."</li>
              <li>Plain-English Summaries: Instead of "Alpha = 1.2," say "This fund beats 90% of others."</li>
              <li>Add tooltips with emojis (ℹ️) to explain terms.</li>
            </ul>
          </p>
          <p className="text-gray-400">
            <strong>One-Click Actions:</strong>
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
              <li>"Compare" button (like Amazon).</li>
              <li>"Invest Now" button (like Uber’s "Book Ride").</li>
            </ul>
          </p>
        </motion.div>

        {/* Final Deliverables */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Final Deliverables</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Working App (Web/Mobile) with correct + unique execution interface.</li>
            <li>MF transactions via MFU API.</li>
            <li>Stock trading via broker APIs (Zerodha, Angel One, etc.).</li>
            <li>Interactive Dashboard: Shows all MFs + stocks in one place with platform-wise holdings (e.g., "ICICI Direct: ₹20,000 in stocks").</li>
            <li>AI-Powered Comparison Report: "Fund X is better than Fund Y because: Higher returns (15% vs. 10%), same risk 🛡️."</li>
            <li>User-Friendly Execution Flow: Example: A "Quick Sell" option for stocks with a confirmation popup: "Sell 5 Reliance shares? ✅ Cancel ❌."</li>
            <li>No-Jargon Design: Every metric is visual (e.g., "Risk Level: 🟢" instead of "Sharpe Ratio = 1.2").</li>
          </ul>
        </motion.div>

        {/* Real-Life Example */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Real-Life Example</h2>
          <p className="text-gray-400">
            Imagine your father uses the app to:
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
              <li>See All Investments: "Zerodha: ₹50K in stocks | MF Central: ₹1L in MFs."</li>
              <li>Compare Funds: AI suggests, "Switch from Fund A (10% returns) to Fund B (15% returns)."</li>
              <li>Execute Instantly: Clicks "Invest Now" to buy Fund B without logging into MF Central.</li>
            </ul>
          </p>
        </motion.div>

        {/* Prizes & Opportunities */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Prizes & Opportunities</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>💰 Cash Prize: ₹10,000 for the top team.</li>
            <li>🎯 Summer Internship: PPI (Pre-Placement interview) for top 5 teams.</li>
            <li>Stipend: ₹50,000 for 3 months.</li>
            <li>🏆 Equity Opportunity: Exceptional candidates may get equity in the company.</li>
            <li>Team Size: Max 5 members.</li>
          </ul>
        </motion.div>

        {/* Why This Matters */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Why This Matters</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>For Non-Tech Users: Feels like checking the weather—no jargon, just clear visuals.</li>
            <li>For Developers: Build a "finance Instagram" where every metric is a visual story.</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
};

export default Ps11;

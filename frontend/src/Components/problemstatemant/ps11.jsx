import React from 'react';
import { motion } from 'framer-motion';

const InvestmentPS = () => {
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
            <div className="bg-gradient-to-r from-orange-100 via-blue-500 to-white text-transparent bg-clip-text pressfont">
              AI-Powered Smart Investment Portfolio Management System
            </div>
          </h1>
        </motion.div>

        {/* Problem Description */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Problem Description</h2>
          <p className="text-gray-400">
            Managing investments across multiple platforms is complex and time-consuming:
          </p>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Investors struggle with tracking holdings across different brokers and MF platforms.</li>
            <li>Comparing and selecting funds/stocks requires extensive manual effort.</li>
            <li>Investment decisions are hindered by financial jargon and lack of clear insights.</li>
          </ul>
        </motion.div>

        {/* Example Scenario */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Example Scenario</h2>
          <p className="text-gray-400">
            A user spends hours checking multiple apps like Zerodha and MF Central to track investments, struggling to compare and make informed decisions.
          </p>
        </motion.div>

        {/* Expected Solution */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Expected Solution</h2>
          <p className="text-gray-400">
            Develop an AI-driven investment management app with:
          </p>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Automatic portfolio tracking across MF and stock platforms.</li>
            <li>AI-powered recommendations for fund and stock selection.</li>
            <li>One-click execution for investment decisions.</li>
            <li>Clear, jargon-free insights for non-technical users.</li>
          </ul>
        </motion.div>

        {/* Key Features */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Key Features</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Unified dashboard displaying all investments.</li>
            <li>AI-powered smart fund and stock comparison.</li>
            <li>Real-time execution through broker and MF APIs.</li>
            <li>Simple UI with visual insights (safety meter, trust score, etc.).</li>
          </ul>
        </motion.div>

        {/* Evaluation Criteria */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Evaluation Criteria</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Functionality (30%): Accurate data fetching and execution.</li>
            <li>AI Accuracy (25%): Quality of investment recommendations.</li>
            <li>User Experience (20%): Simplicity and clarity of UI.</li>
            <li>Scalability (15%): Handling multiple user portfolios.</li>
            <li>Innovation (10%): Unique features and improvements.</li>
          </ul>
        </motion.div>

        {/* Deliverables */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Deliverables</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Fully functional web/mobile app.</li>
            <li>AI-powered portfolio tracking and recommendation system.</li>
            <li>Seamless integration with broker APIs for execution.</li>
            <li>Demo showcasing portfolio tracking, AI suggestions, and execution.</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
};

export default InvestmentPS;

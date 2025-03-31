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
            <div className="bg-gradient-to-r from-red-800 via-blue-500 to-white text-transparent bg-clip-text pressfont">
              Simplifying Investment Portfolio Management
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
            <li>Tracking MFs and stocks across multiple apps is inefficient.</li>
            <li>Comparing investments manually is challenging.</li>
            <li>Executing transactions requires switching between different platforms.</li>
          </ul>
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
            Develop an intuitive investment management app that offers:
          </p>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Automatic portfolio tracking across all investment platforms.</li>
            <li>AI-powered fund and stock comparisons with simple explanations.</li>
            <li>One-click execution of buy/sell actions for investments.</li>
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
            <li><b>Automatic Tracking:</b> Fetch investment data from multiple platforms.</li>
            <li><b>AI-Powered Comparison:</b> Provide investment recommendations using machine learning.</li>
            <li><b>Unified Dashboard:</b> Display all investments with execution links.</li>
            <li><b>Simple UI:</b> Explain complex financial terms in an easy-to-understand manner.</li>
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
            <li><b>Web/Mobile App:</b> Interactive dashboard for investment tracking and execution.</li>
            <li><b>Execution Interface:</b> MF transactions via MFU API, stock trading via broker APIs.</li>
            <li><b>Demo Video:</b> Showcase portfolio tracking, AI comparisons, and seamless execution.</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
};

export default Ps11;

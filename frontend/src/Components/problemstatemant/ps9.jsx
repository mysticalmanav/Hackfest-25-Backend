import React from 'react';
import { motion } from 'framer-motion';

const Ps9 = () => {
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
              Product Strategy for Zomato - Senior Product Manager Task
            </div>
          </h1>
        </motion.div>

        {/* Challenge */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Challenge</h2>
          <p className="text-gray-400">
            You've been hired as the Senior Product Manager at Zomato, India's leading food delivery platform. Zomato has become a household name, providing food delivery services in over 500 cities across India. Despite this success, user engagement is declining, and the platform's average order value (AOV) stands at ₹350, compared to Swiggy’s ₹460. Additionally, Zomato's customer retention rate is stuck at 40%, with many users only placing orders during weekends or special occasions.
          </p>
        </motion.div>

        {/* Goal */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Goal</h2>
          <p className="text-gray-400">
            Develop a product strategy to increase customer retention and make Zomato the go-to platform for daily food ordering. Given the recommendation to focus on one goal, this strategy prioritizes retention to build a loyal user base and drive consistent engagement.
          </p>
        </motion.div>

        {/* Approach */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Approach</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Review the current Zomato app, its features, and offerings to understand the baseline experience.</li>
            <li>Understand Zomato’s business model and target audience to align the strategy with company goals.</li>
            <li>Study current food delivery trends and consumer behavior to identify opportunities for daily ordering.</li>
            <li>Analyze Swiggy’s approach to product features and customer engagement to benchmark best practices.</li>
            <li>Develop user personas based on demographics and ordering habits to tailor retention efforts.</li>
            <li>Identify friction points in the user journey that lead to cart abandonment or low engagement.</li>
            <li>Prioritize features that would make the most impact on user retention, such as personalized offers or subscription models.</li>
            <li>Propose changes to the user interface and experience to optimize for higher frequency of orders.</li>
            <li>Define metrics and KPIs to measure success post-implementation (e.g., retention rate increase to 50%, daily active users growth).</li>
          </ul>
        </motion.div>

        {/* Submission Details */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Submission Details</h2>
          <p className="text-gray-400">
            **Deadline:** 6th Mar’25 EOD
          </p>
          <p className="text-gray-400 mt-2">
            **Submission Link:**{' '}
            <a
              href="https://forms.gle/MbTqYTL7wLToZEVGA"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://forms.gle/QYVjPezSU7nmVzRR6
            </a>
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Ps9;
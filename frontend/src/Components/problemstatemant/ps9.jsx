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
            You’ve been hired as the Senior Product Manager at Zomato, India’s leading food delivery platform. Zomato has become a household name, providing food delivery services in over 500 cities across India. Despite this success, user engagement is declining, and the platform’s average order value (AOV) stands at ₹350, compared to Swiggy’s ₹460. Additionally, Zomato's customer retention rate is stuck at 40%, with many users only placing orders during weekends or special occasions.
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
          Your goal is to develop a product strategy to: [Be careful while picking up the goal - It’s recommended to focus on 1 goal]
          <ul className="text-gray-400 list-disc pl-5 space-y-2"l>
            <li>Increase customer retention and make Swiggy the go-to platform for daily food ordering.</li>
            <li>Boost AOV by encouraging users to order more frequently and add more items per order.</li>
            <li>Enhance the overall user experience and ensure a smoother journey from browsing to checkout.</li>
          </ul>
          </p>
        </motion.div>

        {/* Approach */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Deadline</h2>
          <h3 className="text-xl font-semibold text-orange-100 mb-4">Please complete the task before 6th Apr'25 6 p.m </h3>
          <ul className="text-gray-400  pl-5 space-y-2">
            <li><strong>Product Understanding and Overview</strong><ul  className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Review the current Swiggy app, its features, and offerings.</li>
            <li> Understand Swiggy’s business model and target audience.</li>
            </ul>
            </li>
            <li><strong>Market and Competitor Analysis</strong>
            <ul  className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Study current food delivery trends and consumer behavior.</li>
            <li>Analyze Zomato’s approach to product features and customer engagement.</li>
            </ul>
            </li>
            <li><strong>User Persona Creation</strong>
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Develop personas based on user demographics and ordering habits.</li>
            </ul>
            </li>
            <li><strong>Problem Identification</strong>
            <ul className='text-gray-400 list-disc pl-5 space-y-2'>
            <li>- Identify friction points in the user journey that lead to cart abandonment or low engagement.</li>
            </ul>
            </li>
            <li><strong>Feature Prioritization</strong>
            <ul className='text-gray-400 list-disc pl-5 space-y-2'>
            <li>Choose product features that would make the most impact on user engagement and retention.</li>
            </ul>
            </li>
            <li><strong>Redesign the User Journey</strong>
            <ul className='text-gray-400 list-disc pl-5 space-y-2'>
            <li>Propose changes to the user interface and experience to optimize for higher frequency and larger orders.</li>
            </ul>
            </li>
            <li><strong>Metrics and KPIs</strong>
            <ul  className='text-gray-400 list-disc pl-5 space-y-2'>
            <li>Define how success will be measured post-implementation (e.g., improved retention rate, increased AOV, higher user engagement).</li>
            <li>Include a deck design that highlights your strategy and key metrics.</li>
            </ul>
            </li>
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
            <strong>Deadline:</strong> 6th Mar’25 EOD <br />
            <strong>Parameters on which the deck will be evaluated Criteria and a detailed feedback will be shared after the round 1</strong>
          </p>
          <p className="text-gray-400 mt-2">
            <strong>Submission Link:</strong>{' '}
            <a
              href="https://forms.gle/MbTqYTL7wLToZEVGA"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://forms.gle/MbTqYTL7wLToZEVGA
            </a>
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Ps9;
import React from 'react';
import { motion } from 'framer-motion';

function Ps5() {
  return (
    <div className="min-h-screen bg-zinc-900 text-cream-100">
      <main className="container mx-auto px-4 pt-16 pb-20">
        {/* Title */}
        <motion.div
          className="space-y-8 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-2xl md:text-4xl font-mono text-center font-bold pt-4">
            <div className="bg-gradient-to-r from-red-800 via-blue-500 to-white text-transparent bg-clip-text  pressfont">
              GoFloww Atom HR Employee Performance & Feedback Management Module
            </div>
          </h1>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Introduction</h2>
          <p className="text-gray-400">
            <strong className=" text-orange-100 ">About GoFloww:</strong><br /> GoFloww is a pioneering technology company specializing in AI-powered SaaS solutions tailored for startups and MSMEs. Their ecosystem including Atom Mail, Atom HR Manager, Accounting, Atom Builder, and Floww Expert Logistic empowers organizations to streamline operations and drive productivity.
            <br /><br />
            <strong className=" text-orange-100 ">Overview:</strong><br />This problem statement challenges participants to design a web-based Employee Performance & Feedback Management module for the Atom HR platform. The goal is to create a robust system that streamlines performance evaluations, facilitates continuous feedback, and supports career development through data-driven insights.
            <br /><br />
            <strong className=" text-orange-100 ">Background: Optimizing Performance Reviews and Continuous Feedback</strong><br /> Traditional performance evaluation processes are often time-consuming and fail to reflect the dynamic nature of employee contributions. A modern, integrated system can enhance transparency, support continuous improvement, and boost engagement by delivering real-time insights and clear developmental guidance. GoFloww aims to enhance its Atom HR platform with an end-to-end solution for performance tracking, real-time feedback, goal setting, and career progression planning.
          </p>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Problem Statement</h2>
          <p className="text-gray-400">
            Design and develop a web-based Employee Performance & Feedback Management module for GoFloww’s Atom HR platform. This module should enable comprehensive performance reviews, continuous feedback loops, and personalized development plans.
            <br /><br />
            Your solution must demonstrate how modern web technologies can:
            <ul className="list-disc pl-5 space-y-2">
              <li>Streamline performance evaluation cycles</li>
              <li>Enable multi-source (360-degree) feedback</li>
              <li>Generate actionable insights for career development</li>
            </ul>
            <br />
            The implementation should address challenges such as data security, integration with existing HR data, user-friendly interfaces for both employees and managers, and flexibility to accommodate various performance metrics.
          </p>
        </motion.div>

        {/* Core Features
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Core Features</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>
              <strong>Intuitive Dashboard:</strong> A user-friendly interface for performance reviews and goal tracking, offering a clear overview of employee progress and objectives.
            </li>
            <li>
              <strong>Multi-Source Feedback:</strong> A system to collect and aggregate 360-degree feedback from peers, subordinates, and supervisors, ensuring a holistic view of performance.
            </li>
            <li>
              <strong>Analytics and Reporting:</strong> Tools to analyze performance data and provide actionable insights and recommendations for career development.
            </li>
          </ul>
        </motion.div> */}

        {/* Deliverables */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Deliverables</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>
              <strong>Working Prototype:</strong> A functional Performance & Feedback module integrated with Atom HR, featuring:
              <ul className="list-disc pl-5 space-y-1">
                <li>An intuitive dashboard for performance reviews and goal tracking</li>
                <li>A mechanism for multi-source (360-degree) feedback collection and aggregation</li>
                <li>Analytics and reporting tools providing actionable insights and recommendations</li>
              </ul>
            </li>
            <li>
              <strong>Technical Documentation:</strong> Detailed documentation covering system architecture and integration approach.
            </li>
            <li>
              <strong>Presentation:</strong> A slide deck addressing:
              <ul className="list-disc pl-5 space-y-1">
                <li>Problem analysis and solution overview</li>
                <li>Technical implementation details</li>
                <li>User experience and interface considerations</li>
                <li>Security and privacy measures</li>
                <li>Future enhancement opportunities</li>
              </ul>
            </li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Resources</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>
              <a href="https://gofloww.co/atom-hr" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Atom HR
              </a>
            </li>
            <li>
              <a href="https://blog.gofloww.co/tag/floww-console/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Atom HR Blogs
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Closing Remark */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-xl text-orange-100">
            Join the hackfest and transform HR management with GoFloww's Atom HR platform!
          </p>
        </motion.div>
      </main>
    </div>
  );
}

export default Ps5;
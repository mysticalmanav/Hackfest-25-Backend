import React from 'react';
import { motion } from 'framer-motion';

const Ps10 = () => {
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
              AI-Powered Autonomous Border Surveillance System
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
            Current border surveillance systems are plagued by inefficiencies, high costs, and scalability challenges:
          </p>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Manual Reliance: Patrol teams often miss camouflaged intruders or tampered fences due to human error or limited coverage.</li>
            <li>Latency: Existing systems struggle to process real-time threats, leading to delayed responses.</li>
            <li>Static Infrastructure: Outdated hardware and software cannot adapt to evolving threats like disguised personnel or drone incursions.</li>
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
            A border patrol team fails to detect intruders using forged uniforms due to reliance on visual inspection alone. Tampered fences go unnoticed for hours, enabling illegal crossings.
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
            Develop an AI-powered surveillance system that autonomously detects, tracks, and verifies threats in real time using multimodal AI. The solution must:
          </p>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Detect Intrusions: Identify unauthorized personnel, vehicles, drones, and fence tampering.</li>
            <li>Behavior Analysis: Flag suspicious activities (e.g., loitering, crawling) using temporal models.</li>
            <li>Edge Deployment: Operate offline on low-power devices (e.g., NVIDIA Jetson) for remote areas.</li>
            <li>Alert System: Trigger instant notifications via dashboards or SMS with GPS coordinates.</li>
          </ul>
        </motion.div>

        {/* Key Technical Requirements */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Key Technical Requirements</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Accuracy: &gt;95% detection rate in low-light/thermal conditions.</li>
            <li>Latency: &lt;500ms processing time per frame.</li>
            <li>Scalability: Support 50+ simultaneous drone/camera feeds.</li>
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
            <li>Detection Accuracy (30%): Precision/recall for intruders, drones, and tampering.</li>
            <li>Real-Time Performance (25%): Latency (&lt;500ms) and FPS on edge devices.</li>
            <li>Innovation (20%): Use of multimodal AI (e.g., thermal + RGB fusion).</li>
            <li>Scalability (15%): Handling 50+ concurrent feeds.</li>
            <li>Usability (10%): Intuitive dashboard with actionable alerts.</li>
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
            <li>Code: Dockerized pipeline with modular components (detection, tracking, alerts).</li>
            <li>
              Demo Video: 3-5 minute video showing:
              <ul className="list-circle pl-5 space-y-2">
                <li>Real-time intruder tracking with SAM segmentation.</li>
                <li>Heatmaps of high-risk zones.</li>
                <li>Alert triggers for tampered fences or unauthorized drones.</li>
              </ul>
            </li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
};

export default Ps10;
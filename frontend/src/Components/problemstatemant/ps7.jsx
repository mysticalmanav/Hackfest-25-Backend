import React from 'react';
import { motion } from 'framer-motion';

const Ps7 = () => {
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
                AI-Powered Multichannel Sentiment Monitoring & Real-Time Issue Detection for Events
            </div>
          </h1>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Problem Statement</h2>
          <p className="text-gray-400 mt-4">
            Event organizers often struggle to track attendee sentiment in real time, relying on delayed surveys and manual monitoring of social media and feedback channels. Negative experiences—such as long queues, poor audio quality, overcrowding, or dissatisfaction with speakers—often go unnoticed until after the event, leading to missed opportunities for immediate intervention.
          </p>
          <p className="text-gray-400 mt-4">
            With multiple feedback sources like social media, in-app chats, live Q&A sessions, and review platforms, manually aggregating and analyzing sentiment is inefficient and inaccurate. Organizers need an AI-driven system to detect and respond to concerns as they arise, ensuring a seamless event experience.
          </p>
        </motion.div>

        {/* Deliverable */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Deliverable</h2>
          <p className="text-gray-400">
            Deliverable:<br />
            A web or mobile platform integrating AI-powered sentiment monitoring and real-time issue detection with:
          </p>
          <ol className="text-gray-400 list-decimal pl-5 space-y-4 mt-4">
            <li>
              Multichannel Sentiment Monitoring
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Aggregates attendee feedback from:
                  <ul className="list-[circle] pl-5 space-y-1">
                    <li>Social media (Twitter, Instagram, LinkedIn) via hashtag and mention tracking.</li>
                    <li>In-app event chats, live Q&A sessions, and surveys.</li>
                    <li>Review platforms and direct event feedback forms.</li>
                  </ul>
                </li>
                <li>
                  Uses Natural Language Processing (NLP) and emotion detection to classify feedback as:
                  <ul className="list-[circle] pl-5 space-y-1">
                    <li>Positive (e.g., “Great session! Loved the speaker.”)</li>
                    <li>Neutral (e.g., “Decent event, but nothing special.”)</li>
                    <li>Negative (e.g., “The registration queue is taking forever!”)</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Real-Time Alerts & Issue Detection
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Identifies trending complaints and technical issues, such as:
                  <ul className="list-[circle] pl-5 space-y-1">
                    <li>Long waiting times at entry points or food stalls.</li>
                    <li>Audio/visual glitches during sessions.</li>
                    <li>Overcrowding or safety concerns.</li>
                  </ul>
                </li>
                <li>
                  Notifies event organizers instantly through:
                  <ul className="list-[circle] pl-5 space-y-1">
                    <li>An admin dashboard with live sentiment analytics.</li>
                    <li>Mobile push notifications or SMS alerts for urgent issues.</li>
                  </ul>
                </li>
                <li>Provides severity-based alerts (e.g., escalating multiple similar complaints).</li>
              </ul>
            </li>
          </ol>
        </motion.div>

        {/* Expected Outcome */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Expected Outcome</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Faster issue resolution, improving attendee satisfaction and event experience.</li>
            <li>Data-driven decision-making for organizers to allocate resources dynamically (e.g., deploying more staff to problem areas).</li>
            <li>Reduced negative publicity by addressing complaints proactively before they escalate.</li>
            <li>Comprehensive sentiment insights to enhance future event planning.</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
};

export default Ps7;
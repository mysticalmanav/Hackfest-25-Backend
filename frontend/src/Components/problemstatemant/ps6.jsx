import React from 'react';
import { motion } from 'framer-motion';

const Ps6 = () => {
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
                Mobile App for Ticket Sales Tracking & Event Analytics
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
            Context & Problem:<br />
            Event organizers lack real-time visibility into their ticket sales, audience demographics, and revenue streams, leading to inefficient marketing strategies and missed revenue opportunities. Many rely on static reports, third-party ticketing platforms, or spreadsheets, making it difficult to make data-driven decisions on the go.
          </p>
          <p className="text-gray-400 mt-4">
            Common issues include:
          </p>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>No live ticket sales tracking, leading to uncertainty about event demand.</li>
            <li>Difficulty identifying marketing effectiveness, resulting in wasted ad spend.</li>
            <li>Lack of insights into attendee demographics and purchase patterns.</li>
            <li>Inability to react quickly to low sales trends, causing revenue loss.</li>
          </ul>
          <p className="text-gray-400 mt-4">
            A mobile-first solution is needed to give event organizers real-time access to their ticketing data, revenue insights, and marketing performance on the go.
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
            Deliverable: A Mobile App for Event Organizers
          </p>
          <p className="text-gray-400 mt-4">
            Develop a mobile app (Android & iOS) that provides real-time ticket sales tracking, audience analytics, and actionable recommendations to event organizers.
          </p>
          <ol className="text-gray-400 list-decimal pl-5 space-y-4 mt-4">
            <li>
              Real-Time Ticket Sales Dashboard
              <ul className="list-disc pl-5 space-y-2">
                <li>Live sales tracking with updates on sold, remaining, and refunded tickets.</li>
                <li>Breakdown by ticket type (VIP, Early Bird, General, etc.).</li>
                <li>Sales heatmaps showing demand spikes and slow-selling periods.</li>
              </ul>
            </li>
            <li>
              Audience Insights & Engagement Analytics
              <ul className="list-disc pl-5 space-y-2">
                <li>Demographics analysis (age, location, repeat attendees).</li>
                <li>Purchase behavior trends (peak buying times, popular ticket categories).</li>
                <li>Conversion tracking to see which marketing efforts drive the most sales.</li>
              </ul>
            </li>
            <li>
              Revenue & Payment Tracking
              <ul className="list-disc pl-5 space-y-2">
                <li>Total revenue overview including discounts and refunds.</li>
                <li>Payment method analysis (UPI, credit card, wallets).</li>
                <li>Automated financial reports for post-event analysis.</li>
              </ul>
            </li>
            <li>
              Smart Notifications & Recommendations
              <ul className="list-disc pl-5 space-y-2">
                <li>Low ticket sales alerts with suggested actions (e.g., flash sales, promo codes).</li>
                <li>Price adjustment recommendations based on demand trends.</li>
                <li>Automated marketing insights on which promotions are performing best.</li>
              </ul>
            </li>
            <li>
              Event Performance & Marketing Integration (Optional)
              <ul className="list-disc pl-5 space-y-2">
                <li>Ad campaign tracking to monitor Facebook, Google, and Instagram ad effectiveness.</li>
                <li>Social media integration for quick post sharing and engagement tracking.</li>
                <li>Customizable push notifications to boost ticket sales.</li>
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
            <li>Improved Event Performance: Organizers get real-time insights to maximize attendance.</li>
            <li>Increased Revenue: Smart recommendations boost ticket sales through optimized pricing.</li>
            <li>Faster Decision-Making: Instant access to key metrics helps organizers react to sales trends quickly.</li>
            <li>Better Marketing ROI: Organizers track ad performance and adjust strategies accordingly.</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
};

export default Ps6;
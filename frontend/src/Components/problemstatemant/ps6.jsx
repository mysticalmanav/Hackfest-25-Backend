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
              First-Expiry-First-Out (FEFO) & Expiry Date Management for Perishable Goods
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
          <p className="text-gray-400">
            
          </p>
          <p className="text-gray-400 mt-4">
            Context & Problem:<br />
            Warehouses and distribution centers handling perishable goods such as food, pharmaceuticals, and chemicals face significant challenges in managing inventory expiration dates. Many businesses still rely on manual tracking methods, spreadsheets, or basic ERP systems, which are prone to errors, inefficiency, and inaccurate stock rotation.
          </p>
          <p className="text-gray-400 mt-4">
            Common issues include:
          </p>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Stock wastage due to expired products remaining unnoticed in storage.</li>
            <li>Inconsistent product rotation, where newly stocked items are sold before older inventory.</li>
            <li>Regulatory non-compliance, especially in the food and pharmaceutical industries, where strict adherence to expiration tracking is required.</li>
            <li>Delayed decision-making, as warehouse managers lack real-time visibility into approaching expiry dates.</li>
          </ul>
          <p className="text-gray-400 mt-4">
            A streamlined FEFO (First-Expiry-First-Out) system is essential to optimize inventory movement, reduce wastage, and ensure compliance with industry regulations.
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
            Deliverable: Warehouse Expiry Date Management System
          </p>
          <p className="text-gray-400 mt-4">
            Develop a web or mobile-based warehouse management system that automates expiry tracking, stock rotation, and dispatch prioritization. The system should include the following key features:
          </p>
          <ol className="text-gray-400 list-decimal pl-5 space-y-4 mt-4">
            <li>
              Expiry Date Tracking & Automated Alerts
              <ul className="list-disc pl-5 space-y-2">
                <li>Centralized database to store product batch numbers and expiration dates.</li>
                <li>Automated tracking of stock nearing expiry, preventing last-minute wastage.</li>
                <li>Real-time notifications (email/SMS/app alerts) to warehouse managers and suppliers about products approaching expiration.</li>
              </ul>
            </li>
            <li>
              First-Expiry-First-Out (FEFO) Stock Rotation
              <ul className="list-disc pl-5 space-y-2">
                <li>Enforces a FEFO system by ensuring older stock is dispatched first.</li>
                <li>Barcode/QR code integration for easy scanning and real-time inventory updates.</li>
                <li>Dashboard with priority indicators, highlighting items that need immediate attention.</li>
              </ul>
            </li>
            <li>
              Inventory Optimization & Compliance Reporting
              <ul className="list-disc pl-5 space-y-2">
                <li>Automated compliance tracking for food safety, pharmaceuticals, and chemical handling regulations.</li>
                <li>Detailed analytics & reports on wastage trends, expiry patterns, and order prioritization.</li>
                <li>Integration with existing ERP/WMS software for seamless warehouse operations.</li>
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
            <li>Reduced Product Waste: Prevent stock expiration and financial losses through proactive monitoring.</li>
            <li>Optimized Inventory Management: Ensure perishable goods are always rotated correctly, improving supply chain efficiency.</li>
            <li>Regulatory Compliance: Meet industry standards for food safety, pharmaceuticals, and chemical storage.</li>
            <li>Higher Profitability: Minimize losses due to expired stock, ensuring better resource utilization and cost savings.</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
};

export default Ps6;
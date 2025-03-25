import React from 'react';
import { motion } from 'framer-motion';

function Ps2() {
  return (
    <div className="min-h-screen bg-zinc-900 text-cream-100">
      <main className="container mx-auto px-4 pt-16 pb-20">
        <motion.div
          className="space-y-8 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-2xl md:text-4xl font-mono text-center font-bold pt-4">
            <div className="bg-gradient-to-r from-red-800 via-blue-500 to-white text-transparent bg-clip-text pressfont ">
              Automatic Paper Printing Kiosk
            </div>
          </h1>
        </motion.div>

        {/** Objective **/}
        <motion.div 
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Objective</h2>
          <p className="text-gray-400">
            Design a CAD model of an automatic paper printing machine that allows users to upload, print, and securely delete documents. 
            This machine should be suitable for public places such as airports, colleges, banks, and other high-footfall areas.
          </p>
        </motion.div>

        {/** Key Features **/}
        <motion.div 
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Key Features & Design Requirements</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li><strong>Outer Body & Structure:</strong><ul  className="text-gray-400 list-disc pl-5 space-y-0.5"> <li>The machine should have a sturdy outer body made of sheet metal for durability and security.</li> <li>A large interactive touchscreen for user interaction.</li><li> Proper ventilation to ensure smooth functioning of electronics and motors.</li></ul> </li>
            <li><strong>Internal Mechanism:</strong><ul className="text-gray-400 list-disc pl-5 space-y-0.5"><li>Bearings, threaded screws, and motor couplers(if needed) to enable precise movement of paper and printing components.</li><li>CNC-based motion system to ensure accurate and smooth printing</li><li>Secure storage system to hold the printing material (A4/A3 sheets, various thicknesses).</li></ul></li>
            <li><strong>User Interface & Workflow:</strong><ul className="text-gray-400 list-disc pl-5 space-y-0.5"><li>Document Upload & Authentication: Users can scan a QR code or use a USB drive to upload files.</li><li>Material & Quantity Selection: Users can choose paper type (plain, glossy, etc.) and quantity.</li><li>Payment Integration: Payment via QR code, UPI, debit/credit card, or digital wallets before printing.</li><li>Printing & Deletion: The document is processed and printed via an inkjet/laser system.Once the printing is complete, the file is automatically deleted from the database.</li></ul></li>
            <li><strong>Hardware Requirements:</strong><ul className="text-gray-400 list-disc pl-5 space-y-0.5"><li>Inkjet or Laser Printing System for high-speed and high-quality output.</li><li>Embedded Electronics & PCB Development for smooth operation and communication between different machine components.</li><li>Motorized paper handling system to avoid jams and ensure precise positioning.</li><li>Secure storage for ink and maintenance access points.</li></ul></li>
            <li><strong>Software & Simulation:</strong> <ul className="text-gray-400 list-disc pl-5 space-y-0.5"><li>MATLAB Simulation(or any other suitable simulation software) of the circuit/model for analysis and optimization.</li><li>PCB Design & Prototyping for managing power, motor control, and system logic</li><li>Embedded system programming (Arduino, Raspberry Pi, or custom microcontrollers) for automation.</li></ul></li>
          </ul>
        </motion.div>

        {/** Final Deliverables **/}
        <motion.div 
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Final Deliverables</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Detailed CAD Model (in SolidWorks or Fusion 360) with all mechanical components, including bearings, threaded rods, motors, and sheet metal casing</li>
            <li><strong>PowerPoint Presentation (PPT) summarizing:</strong><ul className="text-gray-400 list-disc pl-5 space-y-0.5"><li>Project concept & objectives</li><li>CAD design and internal mechanisms</li><li>Workflow and software integration</li><li>Simulation and hardware considerations</li></ul></li>
            <li>User Interface Mockup (optional) demonstrating the steps from document upload to printing and deletion.</li>
            <li>Basic Circuit Diagram & PCB Design (if applicable).</li>
            <li>MATLAB Simulation for motor control and system analysis (bonus points).</li>
          </ul>
        </motion.div>

        {/** Additional Considerations **/}
        <motion.div 
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Additional Considerations</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Ergonomics & Accessibility: The design should be user-friendly, with proper screen height and easy access.</li>
            <li>Security & Privacy: All uploaded documents should be encrypted and automatically deleted after printing to ensure user privacy.</li>
            <li>Maintenance & Refilling System: Easy replacement of paper and ink/toner to ensure continuous operation.</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}

export default Ps2;

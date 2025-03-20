import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';

function Ps1() {
  return (
    <div>
      <div className="min-h-screen bg-zinc-900 text-cream-100">
        <main className="container mx-auto px-4 pt-16 pb-20">
          <motion.div
            className="space-y-8 mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-2xl md:text-4xl font-mono text-center font-bold pt-4">
              <div className="bg-gradient-to-r from-red-800 pressfont via-blue-500 to-white text-transparent bg-clip-text">
                GoFloww Atom mail Challenge
              </div>
            </h1>
          </motion.div>

          <motion.div 
            className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-orange-100 mb-4">Overview</h2>
            <span className="text-gray-400 list-disc ">
              {/* <li> */}
                This challenge invites participants to transform email communication by integrating artificial intelligence into the Atom Mail platform, creating a seamless and intuitive user experience that enhances productivity and reshapes how users interact with their inbox.
              {/* </li> */}
            </span>
          </motion.div>

          <motion.div 
            className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-gray-400 text-2xl font-semibold text-orange-100 mb-4">About the Company</h2>
            <span className="text-gray-400 list-disc">
              {/* <li> */}
                GoFloww is an innovative technology company specializing in AI-powered SaaS solutions designed for startups and MSMEs. Their comprehensive software suite includes flagship products such as Atom Mail, Atom HR Manager, Accounting, Atom Builder, and Logistics Manager — all aimed at streamlining business operations, improving productivity, and driving sustainable growth.
              {/* </li> */}
            </span>
          </motion.div>

          <motion.div 
            className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-orange-100 mb-4">Background</h2>
            <span className="text-gray-400 list-disc">
              {/* <li> */}
                Email remains a critical tool for both professional and personal communication, with the average worker spending approximately 28% of their workday managing their inbox. Despite significant technological advancements, the core functionality of email platforms has seen limited evolution over the years. Recent progress in AI language models presents a unique opportunity to transform how users engage with email, potentially saving hours of work each week while improving the quality of communication. GoFloww aims to harness these advancements to introduce intelligent, context-aware capabilities within the Atom Mail platform, enhancing user experience and communication efficiency.
              {/* </li> */}
            </span>
          </motion.div>

          <motion.div 
            className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-orange-100 mb-4">Problem Statement</h2>
            <ul className="text-gray-400 list-disc pl-5">
              <li>
                Design and implement an AI-driven solution for GoFloww's Atom Mail platform to enable smart email composition, response generation, and content refinement based on user prompts.<br /><br />
                </li>
                <li>
                The solution should effectively analyze past email conversations to understand context, generate appropriate responses, and adapt to individual communication styles and preferences.<br /><br />
                </li>
                <li>
                Key challenges to address include ensuring user privacy, delivering a seamless user experience, maintaining the accuracy of AI-generated content, and handling diverse email contexts (formal, informal, technical, etc.).<br /><br />
                </li>
                <li>
                    The ultimate objective is to significantly reduce the time spent on email management while maintaining or enhancing communication quality and user satisfaction.
              </li>
            </ul>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default Ps1;

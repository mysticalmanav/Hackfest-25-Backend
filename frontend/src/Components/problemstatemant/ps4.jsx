import React from 'react';
import { motion } from 'framer-motion';

function Ps4() {
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
            <div className="bg-gradient-to-r from-red-800 via-blue-500 to-white text-transparent bg-clip-text pressfont">
              HectoClash - The Ultimate Mental Math Duel
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
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Problem Statement</h2>
          <p className="text-gray-400">
            Traditional mental math games often lack competitive and interactive elements, limiting user engagement. There's a need for a platform that combines the challenging aspects of mental calculation with real-time competition to enhance user experience and learning.
            {/* <br /><br />
            Develop HectoClash, an interactive application where users participate in real-time, time-based duels centered around the Hectoc game format. Participants will compete head-to-head, solving Hectoc puzzles under time constraints, fostering a competitive yet educational environment. */}
          </p>
        </motion.div>

        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Your Challenge</h2>
          <p className="text-gray-400">
            {/* Traditional mental math games often lack competitive and interactive elements, limiting user engagement. There's a need for a platform that combines the challenging aspects of mental calculation with real-time competition to enhance user experience and learning.
            <br /><br /> */}
            Develop HectoClash, an interactive application where users participate in real-time, time-based duels centered around the Hectoc game format. Participants will compete head-to-head, solving Hectoc puzzles under time constraints, fostering a competitive yet educational environment.
          </p>
        </motion.div>

        {/* Key Features to Include */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Key Features to Include</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li><strong>Real-Time Duels:</strong> Enable users to challenge each other in live, timed Hectoc battles.</li>
            <li><strong>Dynamic Puzzle Generation:</strong> Implement algorithms to generate random six-digit sequences for each duel, ensuring varied and unpredictable challenges.</li>
            <li><strong>Leaderboards & Rankings:</strong> Introduce a ranking system to track player performance, rewarding accuracy and speed.</li>
          </ul>
          <h3 className="text-xl font-semibold text-orange-100 mb-2 mt-4">Bonus Points for:</h3>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li>Building the application in Go Lang (preferred, but any language is allowed).</li>
            <li><strong>Spectator Mode:</strong> Allow users to watch live duels, fostering a community around the game.</li>
            <li><strong>Educational Insights:</strong> Provide post-game analyses, highlighting optimal solutions and common mistakes to aid learning.</li>
          </ul>
        </motion.div>

        {/* What is Hectoc */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">What is Hectoc</h2>
          <p className="text-gray-400">
            Hectoc is a mental calculation game developed by Yusnier Viera in the 2010s. In this game, players are given a sequence of six digits (each ranging from 1 to 9) and must insert mathematical operations - such as addition, subtraction, multiplication, division, exponentiation, and parentheses - to make the expression equal to 100. The digits must be used in the given order without rearrangement. For example, given the sequence "123456," a possible solution is: 1 + (2 + 3 + 4) × (5 + 6) = 100.
          </p>
        </motion.div>

        {/* Judging Criteria */}
        <motion.div
          className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-orange-100 mb-4">Judging Criteria</h2>
          <ul className="text-gray-400 list-disc pl-5 space-y-2">
            <li><strong>Functionality & Innovation:</strong> Does the app work seamlessly? How unique and engaging is the gameplay?</li>
            <li><strong>User Experience:</strong> Is the interface intuitive and appealing? Does it encourage prolonged engagement?</li>
            <li><strong>Scalability:</strong> Can the platform handle a growing number of users without performance issues?</li>
          </ul>
          <p className="text-gray-400 mt-4">
            <strong>Preferred Tech Stack:</strong> Go Lang (bonus points if used), but open to any language.
          </p>
        </motion.div>

        {/* Closing Remark */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-xl text-orange-100">Let the HectoClash begin! May the sharpest minds prevail!</p>
        </motion.div>
      </main>
    </div>
  );
}

export default Ps4;
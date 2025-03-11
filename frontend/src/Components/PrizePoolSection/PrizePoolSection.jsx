import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const PrizePoolSection = () => {
  const prizes = [
    {
      position: "1st",
      amount: "₹50,000",
      color: "from-yellow-300 to-amber-500",
      icon: <Trophy size={32} />,
      delay: 0.2,
    },
    {
      position: "2nd",
      amount: "₹30,000",
      color: "from-gray-300 to-gray-400",
      icon: <Trophy size={32} />,
      delay: 0.4,
    },
    {
      position: "3rd",
      amount: "₹20,000",
      color: "from-amber-600 to-amber-700",
      icon: <Trophy size={32} />,
      delay: 0.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const prizeCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={headerVariants} className="text-center mb-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-6 py-2 bg-orange-100/10 rounded-full mb-8"
        >
          <h3 className="text-orange-100 font-mono text-2xl">REWARDS</h3>
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-mono pressfont mb-4">
          <span className="bg-gradient-to-r from-red-800 via-blue-500 to-white text-transparent bg-clip-text">
            Prize Pool: ₹1,00,000
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Compete for incredible prizes that recognize your innovation and hard work.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {prizes.map((prize, index) => (
          <motion.div
            key={index}
            variants={prizeCardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 flex flex-col items-center shadow-lg backdrop-blur-sm relative overflow-hidden group"
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
            />
            
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: prize.delay, duration: 0.5 }}
              className={`w-16 h-16 rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center mb-4`}
            >
              {prize.icon}
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-1">{prize.position} Prize</h3>
            <p className="text-4xl font-mono font-bold bg-gradient-to-r from-white via-orange-100 to-white text-transparent bg-clip-text mb-2">
              {prize.amount}
            </p>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "40%" }}
              transition={{ delay: prize.delay + 0.3, duration: 0.8 }}
              className={`h-1 bg-gradient-to-r ${prize.color} rounded-full mt-2`}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PrizePoolSection;
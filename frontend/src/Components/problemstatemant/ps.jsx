import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import gofloww from "../../assets/gofloww.png";
import design from "../../assets/des.jpeg";
import grull from "../../assets/grull.svg";
import matics from "../../assets/matiks.png";
import chillr from "../../assets/chillr.webp";
import productspace from "../../assets/productspace.png";

const ProblemStatement = ({ companies }) => {
  // Sample company data - replace with your actual data
  const sampleCompanies = [
    {
      id: 1,
      name: "GoFloww ",
      logo: gofloww,
      docsLink: "/problemstatement/ps1",
      description: "GoFloww Atom Mail Challenge",
    },
    {
      id: 5,
      name: "GoFloww ",
      logo: gofloww,
      docsLink: "/problemstatement/ps5",
      description:
        "GoFloww Atom HR Employee Performance & Feedback Management Module",
    },
    {
      id: 2,
      name: "Design Ingenesis",
      logo: design,
      docsLink: "/problemstatement/ps2",
      description: "Automatic Paper Printing Kiosk",
    },
    {
      id: 3,
      name: "Grull",
      logo: grull,
      docsLink: "/problemstatement/ps3",
      description: "Decentralized Arbitration System",
    },
    {
      id: 4,
      name: "Matiks",
      logo: matics,
      docsLink: "/problemstatement/ps4",
      description: "HectoClash - The Ultimate Mental Math Duel",
    },
    {
      id: 6,
      name: "Chillr",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN25Er-tnDdUNzJyIQ5c4Bww-_ofyW5DWV8A&s",
      docsLink: "/problemstatement/ps6",
      description: "Mobile App for Ticket Sales Tracking & Event Analytics",
    },
    {
      id: 7,
      name: "Chillr",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN25Er-tnDdUNzJyIQ5c4Bww-_ofyW5DWV8A&s",
      docsLink: "/problemstatement/ps7",
      description:
        "AI-Powered Multichannel Sentiment Monitoring & Real-Time Issue Detection for Events",
    },
    {
      id: 7,
      name: "Pathway",
      logo: "data:image/jpeg;base64,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",
      docsLink: "/problemstatement/ps8",
      description:
        "Real-Time RAG Assistant for Enterprise Support/Marketing | IIT (ISM) Dhanbad",
    },
    {
      id: 9,
      name: "Product Space",
      logo: productspace,
      docsLink: "/problemstatement/ps9",
      description:
        "Zomato Daily - Reclaiming the Everyday Order",
    },
  ];

  const companiesData = companies || sampleCompanies;

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-cream-100 ">
      <main className="container mx-auto px-4 pt-16 pb-20">
        <motion.div
          className="space-y-8 mb-16"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <h1 className="text-2xl md:text-4xl font-mono  text-center font-bold pt-4">
            <div className="bg-gradient-to-r from-red-800 pressfont via-blue-500 to-white text-transparent bg-clip-text">
              Choose Your Challenge
            </div>
          </h1>

          <motion.p
            className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg px-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explore innovative problem statements from our industry partners.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {companiesData.map((company) => (
            <motion.div
              key={company.id}
              className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-100 transition-all duration-300 flex flex-col"
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center">
                <motion.a
                  href={company.docsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                  whileHover={{ scale: 1.01 }}
                >
                  <motion.img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-16 h-16 object-contain mr-4 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div>
                    <h3 className="text-xl font-mono pressfont text-orange-100 group-hover:text-orange-200 transition-colors flex items-center">
                      {company.name}
                      <motion.span
                        initial={{ opacity: 0.5 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </motion.span>
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {company.description}
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default ProblemStatement;

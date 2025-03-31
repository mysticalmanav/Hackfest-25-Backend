import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import gofloww from "../../assets/gofloww.png";
import design from "../../assets/des.jpeg";
import grull from "../../assets/grull.svg";
import matics from "../../assets/matiks.png";
import chillr from "../../assets/chillr.webp";
import productspace from "../../assets/productspace.png";
import ps10 from "../../assets/ps10.png";

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
      description: "Zomato Daily - Reclaiming the Everyday Order",
    },
    {
      id: 10,
      name: "Vyomchara",
      logo: ps10,
      docsLink: "/problemstatement/ps10",
      description: "AI-Powered Autonomous Border Surveillance System",
    },
    {
      id: 11,
      name: "ILNB Financial Services",
      logo: "data:image/jpeg;base64,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",
      docsLink: "/problemstatement/ps11",
      description:
        "Build an in-house app for investors to track, analyze, and manage their investments in one place.",
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

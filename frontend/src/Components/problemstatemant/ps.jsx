import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import gofloww from '../../assets/gofloww.png';

const ProblemStatement = ({ companies }) => {
  // Sample company data - replace with your actual data
  const sampleCompanies = [
    {
      id: 1,
      name: "GoFloww ",
      logo: gofloww,
      docsLink: "/problemstatement/ps1",
      description: "Atom Mail Challenge"
    }
  ];

  const companiesData = companies || sampleCompanies;

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
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
                    <p className="text-gray-400 text-sm">{company.description}</p>
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
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Calendar, Users, HelpCircle } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div 
      className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:bg-zinc-700/50 transition-colors duration-300 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 30px -15px rgba(255, 87, 51, 0.3)" 
      }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay * 0.1 + 0.2 }}
      >
        <Icon className="w-10 h-10 text-green-400 mb-4" />
      </motion.div>
      
      <motion.h3 
        className="font-mono text-xl mb-3 font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay * 0.1 + 0.3 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay * 0.1 + 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      icon: Code2,
      title: "36 Hours of Coding",
      description: "Non-stop coding, creating, and innovating in our immersive hackathon environment",
      delay: 0
    },
    {
      icon: Calendar,
      title: "Expert Workshops",
      description: "Learn cutting-edge skills from industry experts and experienced mentors",
      delay: 1
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Form teams with talented peers and build something amazing together",
      delay: 2
    },
    {
      icon: HelpCircle,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance and mentorship throughout the event",
      delay: 3
    }
  ];

  return (
    <motion.div 
      className="mt-20 px-4 md:px-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-2xl md:text-3xl font-mono font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        What Makes <span className="text-green-400">HackFest'25</span> Special
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={feature.delay}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturesGrid;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Loader2, User } from 'lucide-react';
import Navbar from '../Navbar/Navbar';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-rose-100"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl text-zinc-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We'd love to hear from you. Drop us a line below.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
              <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-blue-400/20 p-3 rounded-full">
                    <User className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Contact</p>
                    <p className="text-lg">Manav Sharma </p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-orange-400/20 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Email</p>
                    <p className="text-lg">support@hackfest.in</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-rose-400/20 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Phone</p>
                    <p className="text-lg">+91 8114439297</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg">
              <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
              <p className="text-zinc-400">Stay updated with our latest news and events.</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-zinc-400">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-orange-500 focus:ring-0 h-10 px-2 text-gray-100"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-zinc-400">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-orange-500 focus:ring-0  h-10 px-2 text-gray-100"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-zinc-400">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-orange-500 focus:ring-0  px-2 pt-2 text-gray-100"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;

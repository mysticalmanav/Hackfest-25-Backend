import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar.jsx";
import SplitText from "../UI/Splittext.jsx";
function HackfestEmailPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendEmails = async () => {
    console.log(process.env.BACKEND_URL);
    if (!email || !message) {
      toast.info("Please provide both email and message.");
      return;
    }

    setLoading(true);
    toast.info("Sending email...");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_backendUrl}/api/sendingmessage`,
        {
          email,
          message,
        }
      );

      if (response) {
        toast.success(response.data.message || "Email sent successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mb-2 h-7"></div>
      <div className="min-h-screen bg-zinc-900 flex justify-center items-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-transparent border-2 border-orange-100/20 shadow-2xl rounded-2xl p-8 w-full max-w-2xl transform transition-all hover:scale-105"
        >
          <h1 className=" font-bold text-orange-100 mb-6 text-center">
            <SplitText
              text="Send Email to Hackfest Users"
              className="text-3xl font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <label className="block mb-2 font-semibold text-orange-100">
              User Email
            </label>
            <input
              type="email"
              placeholder="Enter email..."
              className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all bg-zinc-800 text-orange-100 placeholder-orange-100/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <label className="block mb-2 font-semibold text-orange-100">
              Email Message
            </label>
            <textarea
              className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all bg-zinc-800 text-orange-100 placeholder-orange-100/50"
              rows={6}
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <button
              onClick={handleSendEmails}
              disabled={loading}
              className="bg-green-600  text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all"
            >
              {loading ? "Sending..." : "Send Hackfest Emails"}
            </button>
          </motion.div>
        </motion.div>

        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </>
  );
}

export default HackfestEmailPage;

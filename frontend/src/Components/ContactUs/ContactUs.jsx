import { motion } from "framer-motion";
import SplitText from "../UI/Splittext.jsx";
import Navbar from "../Navbar/Navbar.jsx";

const ContactUsPage = () => {
  return (
     <div>
     <Navbar />
      <div className="mb-5 h-7"></div>
    <div className="min-h-screen relative py-[50px] bg-zinc-900 flex flex-col items-center">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:text-[70px] md:text-[65px] sm:text-5xl text-4xl text-center font-mono pressfont py-6 text-orange-100"
      >
        <SplitText
          text="Contact Us"
          className="text-3xl md:text-5xl font-semibold text-center"
          delay={100}
        />
      </motion.h1>

      {/* Contact Information Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:w-6/12 md:w-8/12 w-[92%] my-5 py-6 md:px-7 px-4 backdrop-blur-sm bg-white/20 text-orange-100 rounded-3xl shadow-2xl flex flex-col items-center"
      >
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-2xl font-semibold">Shreyansh Shandilya</span>
            <span className="text-lg text-yellow-200">HackFest Team</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-2xl font-semibold">Email</span>
            <span className="text-lg text-yellow-200">
              contact@hackfest25.com
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-2xl font-semibold">Phone</span>
            <span className="text-lg text-yellow-200">+91 98765 43210</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
     </div>

  );
};

export default ContactUsPage;

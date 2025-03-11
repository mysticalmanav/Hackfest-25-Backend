import { motion } from "framer-motion";
import Convener from "../../../public/convenor.png";
import SplitText from "../UI/Splittext.jsx";

const AboutHackFestPage = () => {
  return (
    <div className="min-h-screen relative py-[50px] bg-zinc-900">
      <div className="w-full min-h-screen flex flex-col items-center overflow-hidden">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:text-[70px] md:text-[65px] sm:text-5xl text-4xl text-center font-mono pressfont py-6 text-orange-100"
        >
          <SplitText
            text="About HackFest"
            className="text-3xl md:text-5xl font-semibold text-center"
            delay={100}
          />
        </motion.h1>

        {/* Paragraph */}
        <motion.p
  initial={{ opacity: 0, x: +200 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 2, ease: "easeInOut" }}
  className="lg:w-6/12 md:w-10/12 w-[92%] text-orange-100 md:text-lg text-base font-light text-justify mb-10"
>
  <strong>HackFest’25</strong> is a premier <strong>36-hour hackathon</strong> organized by{" "}
  <motion.span
    initial={{ backgroundSize: "0% 100%" }}
    whileInView={{ backgroundSize: "100% 100%" }}
    transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
    className="bg-gradient-to-r from-red-800 to-blue-500 bg-[length:0%_100%] bg-no-repeat bg-left px-1"
  >
    <strong>NVCTI, IIT (ISM) Dhanbad</strong>
  </motion.span>
  , taking place from{" "}
  <motion.span
    initial={{ backgroundSize: "0% 100%" }}
    whileInView={{ backgroundSize: "100% 100%" }}
    transition={{ duration: 1.5, ease: "easeInOut", delay: 1.2 }}
    className="bg-gradient-to-r from-red-800 to-blue-500 bg-[length:0%_100%] bg-no-repeat bg-left px-1"
  >
    <strong>April 4th to 6th, 2025</strong>
  </motion.span>
  . It provides a competitive platform for students to collaborate, innovate, and work with cutting-edge
  technologies like <strong>Machine Learning, Blockchain, Cybersecurity, and IoT</strong>. Participants engage in{" "}
  <strong>brainstorming, hands-on coding, and problem-solving</strong> to develop impactful solutions. HackFest serves as a launchpad for
  future industry leaders, offering
  <strong> mentorship, networking opportunities, and exposure to industry trends</strong>. With <strong>4K+ participants</strong> and{" "}
  <strong>200+ repositories</strong> from previous editions, HackFest pushes the boundaries of technological excellence. It fosters{" "}
  <strong>teamwork, innovation, and entrepreneurial thinking</strong>, proving that the right platform can drive real change.
</motion.p>


        <div className="h-20 lg:h-35"></div>
        {/* Convener Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-9/12 md:w-10/12 w-[92%] my-5 py-6 md:px-7 px-4 backdrop-blur-sm bg-white/20 text-orange-100 rounded-3xl shadow-2xl flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex md:flex-row flex-col gap-5 items-center"
          >
            <img
              src="https://res.cloudinary.com/dcapq8uyk/image/upload/v1740946743/Screenshot_2025-03-03_014833_dmj06y.png"
              loading="lazy"
              alt="Convener"
              className="h-36 w-36 object-cover rounded-full"
            />

            <span className="flex flex-col items-center justify-center">
              <span className="text-xl text-center pt-2">
                Prof. Saurabh Shrivastava
              </span>
              <span className="text-md text-center text-yellow-200">
                Faculty Advisor (Hackfest '25)
              </span>
            </span>
          </motion.div>

          {/* Message Title */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-orange-100 text-3xl text-center my-6 font-bold"
          >
            Message from the Convener
          </motion.h1>

          {/* Message Content */}
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="my-3 text-md text-justify"
          >
            It is with immense pride and enthusiasm that I welcome you all to{" "}
            <strong>HackFest 2025</strong> — the{" "}
            <strong>Annual Hackathon of IIT (ISM) Dhanbad</strong>, scheduled
            from <strong>4th to 6th April 2025</strong>. This event embodies the
            spirit of innovation, creativity, and teamwork, bringing together
            the brightest minds to solve real-world problems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="my-3 text-md text-justify"
          >
            HackFest is a symbol of innovation, determination, and excellence.
            It brings together some of the brightest young minds who are
            passionate about technology and problem-solving.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="my-3 text-md text-justify"
          >
            As technology continues to evolve, platforms like HackFest play a
            crucial role in bridging the gap between theoretical knowledge and
            real-world applications.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="my-3 text-md text-justify"
          >
            We welcome participants, sponsors, and mentors to be part of this
            incredible journey. Together, we can cultivate an environment that
            fosters learning, innovation, and collaboration.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHackFestPage;

import React, { useState } from "react";
import { Code2, Calendar, Users, HelpCircle, Spline } from "lucide-react";
import FeaturesGrid from "./FeaturesGrid";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SplitText from "../UI/Splittext";
import Navbar from "../Navbar/Navbar";
import CountdownTimerPage from "../Timer/Timer";

function LandingStatic() {
  const [email, setEmail] = useState("");

  const handlejoin = async () => {
    if (email === "") return;
    console.log("karta hu");
    toast.success("Joining.....");
    console.log(import.meta.env.VITE_backendUrl)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_backendUrl}/api/join_wait_list`,
        {
          email,
        }
      );
      console.log(response);
      toast.success(response?.data?.message);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle waitlist signup
    setEmail("");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-cream-100">
      {/* Navigation */}
      <Navbar />
      <div className="h-10 mb-5"></div>

      <main className="container mx-auto px-4 pt-20 text-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 bg-greentext-green-400/10 text-orange-100 rounded-full font-mono pressfont text-4xl md:text-6xl">
            <SplitText
              text="COMING SOON 2K25"
              className="text-4xl md:text-6xl font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>

          <h1 className="text-3xl md:text-6xl font-mono space-y-4 pressfont">
            <div className="bg-gradient-to-r from-red-800 via-blue-500 to-white text-transparent bg-clip-text">
              Get Ready to
            </div>
            <div className="bg-gradient-to-r from-red-800 to-white text-transparent bg-clip-text">
              Innovate!
            </div>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg px-4">
            The countdown has begun for Hackfest 2025—where bold ideas meet
            real-world solutions. It's more than just a hackathon; it's the
            arena where innovators, coders, designers, and problem-solvers come
            together to reshape the future.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col md:flex-row gap-2 px-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-greentext-green-400 text-gray-300"
              required
            />
            <button
              type="submit"
              onClick={handlejoin}
              className="px-6 py-2  bg-orange-100 rounded-lg hover:bg-red-100 text-black transition-colors"
            >
              Join Waitlist
            </button>
          </form>
        </div>
        <CountdownTimerPage />

        <div className="text-orange-200 text-3xl mt-10 p-1 lg:p-4">
          {" "}
          <SplitText
            text="Event : April 4th to 6th, 2025."
            className="text-md md:text-3xl lg:text-4xl text-center font-mono pressfont"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>
        <FeaturesGrid />
      </main>

      {/* Footer */}
      <footer className="mt-20 py-6 text-center text-gray-400">
        <p>© 2025 HackFest. All rights reserved.</p>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default LandingStatic;

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-zinc-900 p-4 fixed w-full z-50 font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <a
          href="/"
          className="text-3xl font-bold text-green-400"
          style={{
            fontFamily: "'Courier New', Courier, monospace",
          }}
        >
          HackFest'25
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <a
            href="/aboutus"
            className="text-orange-100 hover:text-green-400 transition-colors font-bold  text-2xl"
            style={{
              fontFamily: "'Courier New', Courier, monospace",
            }}
          >
            About
          </a>
          <a
            href="/Team"
            className="text-orange-100 hover:text-green-400 transition-colors font-bold text-2xl"
            style={{
              fontFamily: "'Courier New', Courier, monospace",
            }}
          >
            Team
          </a>
          {/* <a
            href="/comingsoon"
            className="text-gray-300 hover:text-green-400 transition-colors font-medium"
          >
            Schedule
          </a>
          <a
            href="/comingsoon"
            className="text-gray-300 hover:text-green-400 transition-colors font-medium"
          >
            Sponsors
          </a> */}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {!isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - Full Screen with Transition */}
      <div
        className={`md:hidden fixed inset-0 bg-zinc-900 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center justify-center gap-10 w-full h-full">
            <a
              href="/aboutus"
              className="text-gray-300 hover:text-green-400 transition-colors text-2xl font-medium"
              onClick={toggleMenu}
              style={{
                fontFamily: "'Courier New', Courier, monospace",
              }}
            >
              About
            </a>
            <a
              href="/Team"
              className="text-gray-300 hover:text-green-400 transition-colors text-2xl font-medium"
              onClick={toggleMenu}
              style={{
                fontFamily: "'Courier New', Courier, monospace",
              }}
            >
              Team
            </a>
            {/* <a
              href="/comingsoon"
              className="text-gray-300 hover:text-green-400 transition-colors text-2xl font-medium"
              onClick={toggleMenu}
            >
              Schedule
            </a>
            <a
              href="/comingsoon"
              className="text-gray-300 hover:text-green-400 transition-colors text-2xl font-medium"
              onClick={toggleMenu}
            >
              Sponsors
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

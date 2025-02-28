import React, { useState } from 'react';
import { Code2, Calendar, Users, HelpCircle } from 'lucide-react';
import FeaturesGrid from './FeaturesGrid';

function LandingStatic() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle waitlist signup
    setEmail('');
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-cream-100"
    
    >
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between md:mx-32 items-center relative z-50">
        <div className="text-green-400 cursor-pointer font-mono text-xl font-bold pressfont" onClick={()=>{
          window.location.href = "/"
        }}>HackFest'25</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About</a>
          <a href="#schedule" className="text-gray-300 hover:text-green-400 transition-colors">Schedule</a>
          <a href="#sponsors" className="text-gray-300 hover:text-green-400 transition-colors">Sponsors</a>
          <a href="#faq" className="text-gray-300 hover:text-green-400 transition-colors">FAQ</a>
        </div>
        
        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-gray-300 focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {!isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </nav>
      
      {/* Mobile Menu - Full Screen with Transition */}
      <div 
        className={`md:hidden fixed inset-0 bg-zinc-900 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col items-center justify-center gap-10 w-full h-full">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-green-400 transition-colors text-2xl"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#schedule" 
              className="text-gray-300 hover:text-green-400 transition-colors text-2xl"
              onClick={toggleMenu}
            >
              Schedule
            </a>
            <a 
              href="#sponsors" 
              className="text-gray-300 hover:text-green-400 transition-colors text-2xl"
              onClick={toggleMenu}
            >
              Sponsors
            </a>
            <a 
              href="#faq" 
              className="text-gray-300 hover:text-green-400 transition-colors text-2xl"
              onClick={toggleMenu}
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
      
      

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-20 text-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 bg-greentext-green-400/10 text-green-400 rounded-full font-mono">
            Coming Soon
          </div>
          
          <h1 className="text-4xl md:text-6xl font-mono space-y-4 pressfont">
            <div className="text-orange-100">Get Ready to</div>
            <div className="text-green-400">Innovate!</div>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            The countdown has begun for Hackfest 2025—where bold ideas meet real-world solutions. 
            It's more than just a hackathon; it's the arena where innovators, coders, 
            designers, and problem-solvers come together to reshape the future.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
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
              className="px-6 py-2 bg-greentext-green-400 text-white rounded-lg hover:bg-greentext-green-400/90 transition-colors"
            >
              Join Waitlist
            </button>
          </form>
        </div>

        <FeaturesGrid />
      </main>
      {/* Footer */}
      <footer className="mt-20 py-6 text-center text-gray-400">
        <p>© 2025 HackFest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingStatic;
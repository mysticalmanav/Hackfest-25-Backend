import React, { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

const DualRegisterButtons = ({ onRegisterHere, unstopUrl = "https://unstop.com" }) => {
  const buttonRef = useRef(null);
  const unstopButtonRef = useRef(null);

  useEffect(() => {
    const createShineEffect = (button) => {
      if (!button) return;
      
      const shine = document.createElement("span");
      shine.classList.add("shine");
      button.appendChild(shine);

      setTimeout(() => {
        shine.remove();
      }, 1500);
    };

    // Set up shine animations
    const button1 = buttonRef.current;
    const button2 = unstopButtonRef.current;
    
    if (button1) createShineEffect(button1);
    if (button2) createShineEffect(button2);
    
    const interval1 = setInterval(() => createShineEffect(button1), 3000);
    const interval2 = setInterval(() => createShineEffect(button2), 3000);
    
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 my-8 sm:gap-4">
      {/* Register Here Button */}
      <button
        ref={buttonRef}
        onClick={onRegisterHere}
        className="register-button relative overflow-hidden px-6 py-3 font-bold text-sm md:text-lg rounded-lg bg-gradient-to-r from-red-600 via-orange-500 to-red-600 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-orange-300/30 min-w-36"
      >
        <span className="relative z-10 font-mono pressfont flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-5 h-5 mr-2"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            <path d="M9 14h6"></path>
            <path d="M9 10h6"></path>
            <path d="M12 18h.01"></path>
          </svg>
          REGISTER HERE
        </span>
      </button>
      
     
      
      <style jsx>{`
        .register-button, .unstop-button {
          background-size: 200% auto;
          animation: gradient 5s ease infinite;
        }
        
        .register-button {
          animation-delay: 0s;
        }
        
        .unstop-button {
          animation-delay: 2.5s;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg, 
            transparent, 
            rgba(255, 255, 255, 0.6), 
            transparent
          );
          transform: skewX(-25deg);
          animation: shine 1.5s linear;
        }

        @keyframes shine {
          100% {
            left: 200%;
          }
        }
      `}</style>
    </div>
  );
};

export default DualRegisterButtons;
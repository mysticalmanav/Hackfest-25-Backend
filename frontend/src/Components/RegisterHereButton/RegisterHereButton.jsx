"use client"

import { useState, useEffect } from "react"

export default function ComicRegisterButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [sparklePosition, setSparklePosition] = useState({ x: 0, y: 0 })

  // Random sparkle position effect
  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setSparklePosition({
          x: Math.random() * 100,
          y: Math.random() * 100,
        })
      }, 300)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  return (
    <div className="relative inline-block"
    onClick={() => window.open("https://unstop.com/hackathons/hackfest-25-indian-institute-of-technology-indian-school-of-mines-iit-ism-dhanbad-1413387", "_blank")}
    >
      {/* Comic cloud background */}
      <div
        className={`absolute inset-0 -m-4 bg-yellow-400 rounded-[50%] transform transition-all duration-300
          before:content-[''] before:absolute before:top-[10%] before:left-[-15%] before:w-[40%] before:h-[40%] before:rounded-full before:bg-yellow-400
          after:content-[''] after:absolute after:bottom-[10%] after:right-[-15%] after:w-[40%] after:h-[40%] after:rounded-full after:bg-yellow-400
          ${isHovered ? "scale-110" : "scale-100"}`}
      />

      {/* Sparkles */}
      {isHovered && (
        <>
          <div
            className="absolute w-6 h-6 text-white animate-ping"
            style={{ top: `${sparklePosition.y}%`, left: `${sparklePosition.x}%` }}
          >
            ✨
          </div>
          <div
            className="absolute w-4 h-4 text-white animate-ping delay-100"
            style={{ top: `${sparklePosition.y - 20}%`, left: `${sparklePosition.x - 20}%` }}
          >
            ✨
          </div>
        </>
      )}

      {/* Button */}
      <button
        className={`relative font-extrabold text-lg px-8 py-6 border-4 border-black
          bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-600
          text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]
          active:translate-x-[4px] active:translate-y-[4px] transition-all
          uppercase tracking-wider z-10`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => console.log("Register clicked!")}
      >
        Register Here!
      </button>
    </div>
  )
}


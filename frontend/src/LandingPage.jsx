import React, { useState, useEffect } from 'react'
import ShuffleText from 'react-shuffle-text'
import LandingStatic from './LandingStatic'
import { motion, AnimatePresence } from 'framer-motion'

const LandingPage = () => {
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    // Set a timeout to hide the preloader after 5 seconds
    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 5000)

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='bg-zinc-900 min-h-screen w-full'>
      <AnimatePresence mode="wait">
        {showPreloader ? (
          <motion.div 
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              y: -20,
              filter: "blur(10px)",
              transition: { duration: 1.2, ease: "easeInOut" }
            }}
            className='flex justify-center items-center min-h-screen w-full absolute top-0 left-0'
          >
            <motion.div 
              style={{
                fontFamily: "orbitron",
                fontWeight: "bold",
              }}
              className='md:text-9xl text-4xl text-center text-green-400'
              animate={{
                textShadow: [
                  "0 0 10px rgba(74, 222, 128, 0)", 
                  "0 0 20px rgba(74, 222, 128, 0.6)", 
                  "0 0 30px rgba(74, 222, 128, 0.4)", 
                  "0 0 10px rgba(74, 222, 128, 0)"
                ],
              }}
              transition={{
                duration: 2,
                repeat: 2,
                repeatType: "reverse"
              }}
            >
              <ShuffleText content="HACK/<FEST'25" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
            }}
            className="min-h-screen"
          >
            <LandingStatic />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LandingPage
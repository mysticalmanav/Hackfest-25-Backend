import React from 'react';
import { useSprings, animated } from '@react-spring/web';

const ComingSoonPage = () => {
  // Text to animate
  const text = ['Coming', 'Soon'];

  // Create springs for each word
  const springs = useSprings(
    text.length,
    text.map((_, index) => ({
      opacity: 1,
      transform: 'translateY(0)',
      from: { opacity: 0, transform: 'translateY(50px)' },
      delay: index * 500, // Staggered delay for each word
      config: { tension: 200, friction: 20 }, // Spring physics
    }))
  );

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col justify-center items-center p-4">
      {/* Animated Text */}
      <div className="text-center">
        {springs.map((props, index) => (
          <animated.h1
            key={index}
            style={props}
            className="text-6xl md:text-9xl font-bold text-orange-100 mb-4"
          >
            {text[index]}
          </animated.h1>
        ))}
      </div>

      {/* Subtext */}
      <p className="text-orange-100 text-base md:text-xl mt-8 text-center px-4">
        We're working hard to bring you something amazing. Stay tuned!
      </p>

      {/* Optional: Progress Bar Animation */}
      <div className="w-full max-w-md mt-12 px-4">
        <animated.div
          style={{
            width: '100%',
            height: '4px',
            backgroundColor: '#3b82f6', // Blue color for progress bar
            transform: springs[0].transform.interpolate((x) => `scaleX(${x})`), // Animate progress bar
          }}
        />
      </div>
    </div>
  );
};

export default ComingSoonPage;
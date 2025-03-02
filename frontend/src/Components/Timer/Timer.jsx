import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const CountdownTimerPage = () => {
  // Target date (you can set this dynamically)
  const targetDate = new Date('2025-04-01T00:00:00'); 

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Animation for the timer
  const timerAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 200, friction: 20 },
  });

  // Calculate time left
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className=" bg-zinc-900 flex flex-col justify-center items-center p-8">
      {/* Timer Display */}
      <animated.div
        style={timerAnimation}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {/* Days */}
        <div className="p-8 bg-zinc-800 rounded-lg shadow-lg">
          <h2 className="text-6xl md:text-8xl font-bold text-orange-100">{timeLeft.days}</h2>
          <p className="text-2xl text-orange-100 mt-2">DAYS</p>
        </div>

        {/* Hours */}
        <div className="p-8 bg-zinc-800 rounded-lg shadow-lg">
          <h2 className="text-6xl md:text-8xl font-bold text-orange-100">{timeLeft.hours}</h2>
          <p className="text-2xl text-orange-100 mt-2">HOURS</p>
        </div>

        {/* Minutes */}
        <div className="p-8 bg-zinc-800 rounded-lg shadow-lg">
          <h2 className="text-6xl md:text-8xl font-bold text-orange-100">{timeLeft.minutes}</h2>
          <p className="text-2xl text-orange-100 mt-2">MINUTES</p>
        </div>

        {/* Seconds */}
        <div className="p-8 bg-zinc-800 rounded-lg shadow-lg">
          <h2 className="text-6xl md:text-8xl font-bold text-orange-100">{timeLeft.seconds}</h2>
          <p className="text-2xl text-center text-orange-100 mt-2">SECONDS</p>
        </div>
      </animated.div>
    </div>
  );
};

export default CountdownTimerPage;
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AboutUs = () => {
  // Animation for the heading
  const headingAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    delay: 200,
    config: { tension: 200, friction: 20 },
  });

  // Animation for the content
  const contentAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 500,
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col justify-center items-center p-8">
      {/* Animated Heading */}
      <animated.h1
        style={headingAnimation}
        className="text-5xl md:text-6xl font-bold text-orange-100 mb-8 text-center"
      >
        About HackFest
      </animated.h1>

      {/* Animated Content */}
      <animated.div
        style={contentAnimation}
        className="max-w-4xl text-orange-100 text-lg md:text-xl leading-relaxed"
      >
        <p className="mb-6">
          HackFest is a <strong>36-hour hackathon</strong> organized by the{' '}
          <strong>NVCTI, IIT (ISM) Dhanbad</strong>. It was devised as a means for students to
          build innovative solutions to real-life problems. HackFest aims to contribute to the
          growth of technology in India by supporting the cause of{' '}
          <strong>Make-in-India</strong>.
        </p>

        <p className="mb-6">
          The previous four iterations of HackFest proved to be among the finest hackathons in
          East India. Over <strong>2000 enthusiasts</strong> signed up in the past iterations of
          the hackathon to build and innovate.
        </p>

        <p className="mb-6">
          HackFest believes in conceptualizing <strong>"ideas into reality"</strong> and was
          started as a platform to provide support to budding developers to enhance their
          problem-solving skills and work towards providing groundbreaking solutions to
          existing day-to-day problems.
        </p>

        {/* Call-to-Action Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => alert('Join HackFest now!')}
            className="bg-green-500 text-zinc-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all"
          >
            Join HackFest
          </button>
        </div>
      </animated.div>
    </div>
  );
};

export default AboutUs;
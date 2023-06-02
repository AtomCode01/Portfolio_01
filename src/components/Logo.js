import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// const MotionLink = motion(Link);
export const MotionLink = motion(Link)


const Logo = () => {
  return (
    <div className="flex items-center mt-2 justify-center lg:hidden">
      <MotionLink href="/" className="w-16 h-16 bg-black text-white flex items-center border border-solid border-transparent justify-center rounded-full text-xl font-bold"
        whileHover={{
          backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
          transition: { duration: 1, repeat: Infinity }
        }}
      >
        Atom
      </MotionLink>
    </div>
  );
};

export default Logo;
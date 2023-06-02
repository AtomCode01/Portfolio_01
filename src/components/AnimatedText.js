import React from 'react'
import { motion } from 'framer-motion'


const  AnimatedText = ({ text, className = "" }) => {

  const quote = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.05,
      },
    },
  }

  const singleWords = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
      },
    },
  }


  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <motion.h1 className={`w-full inline-block text-dark dark:text-primary font-bold uppercase ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {
          text.split(" ").map((word, index) =>
            <motion.span key={word + "-" + index} className='inline-block'
              variants={singleWords}
            >
              {word}&nbsp;
            </motion.span>
          )
        }
      </motion.h1>
    </div>
  )
}

export default AnimatedText
import React from 'react'
import { motion, useScroll } from "framer-motion"

const LogIcon = ({reference}) => {

    const {scrollYProgress} = useScroll(
        {
          target: reference,
          offset: ["center end", "center center"]
        }
      )

  return (
    <figure className='absolute left-[-40px] stroke-dark dark:stroke-primary'>
        <svg className='-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]' width="75" height="75" viewBox='0 0 100 100'>
        <circle className="stroke-primary stroke-1 fill-none" cx="75" cy="25" r="20"/>
        <motion.circle className=" stroke-[2px] fill-light dark:fill-dark" cx="75" cy="25" r="20" style={{pathLength: scrollYProgress}}/>
        <circle className="animate-pulse stroke-1 fill-primary" cx="75" cy="25" r="10"/>
        </svg>
    </figure>
  )
}

export default LogIcon
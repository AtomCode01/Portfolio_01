import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion';
import LogIcon from './LogIcon';

const Details = ({position, company, companyLink, address, time, work,}) => {
  const ref = useRef(null)
  return <li ref={ref} className='my-8 first:my-0 last:my-0 mx-auto flex w-[60%] flex-col items-center justify-between md:w-[80%]'>
  <LogIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration: 0.5, type:"spring"}}>
        <h3 className='font-bold text-2xl capitalize dark:text-primary md:text-xl sm:text-lg'>{position}&nbsp;<a href={companyLink} target='-blank' className=' text-primaryDark dark:text-white capitalize'>{company}</a></h3>
        <span className='capitalize font-medium text-dark/75 dark:text-white xs:text-sm'>{time}&nbsp;|&nbsp;{address}</span>
        <p className='font-medium w-full dark:text-primary md:text-sm'>{work}</p>
      </motion.div>
    </li>
};

const Experience = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl text-center mb-32 w-full dark:text-primary md:text-6xl sm:text-4xl md:mb-16'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
      <motion.div style={{scaleY: scrollYProgress}} className='absolute w-[4px] left-[-23px] top-0 h-full bg-black origin-top dark:bg-primary
      md:w-[2px] md:left-[40px] xs:left-[30px]'/>
        <ul className='flex flex-col items-start justify-between w-full ml-4 xs:ml-2'>
          <Details position={"Web Developer."}
            company={"Not working for any company for now."}
            address={"Noida, IN"} work={"Worked on a team responsible for developing new application for client."}
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
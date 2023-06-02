import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion';
import LogIcon from './LogIcon';

const Details = ({ time, place, type, info }) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:my-0 last:my-0 mx-auto flex  flex-col items-center justify-between md:w-[80%]'>
        <LogIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}>
            <h3 className='dark:text-primary font-bold text-2xl capitalize  md:text-xl sm:text-lg'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-white xs:text-sm'>{time}&nbsp;|&nbsp;{place}</span>
            <p className='font-medium w-full dark:text-primary md:text-sm'>{info}</p>
        </motion.div>
    </li>
};

const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl text-center mb-32 w-full dark:text-primary md:text-6xl sm:text-4xl md:mb-16'>
                Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto mb-20 relative lg:w-[90%] md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }} className='dark:bg-primary absolute w-[4px] left-[-23px] top-0 h-full bg-black origin-top
                md:w-[2px] md:left-[40px] xs:left-[30px]' />
                <ul className='flex flex-col items-start justify-between w-full ml-4 xs:ml-2'>
                    <Details type={"Bechlor Of Computer Science"}
                        time={"2020-2022"}
                        place={"SWUN"}
                        info={"Stil learning about 3D web projects."}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education
import React from 'react'
import { delay, motion } from "framer-motion"


const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex absolute items-center justify-center rounded-full font-bold bg-dark text-white py-6 px-6 shadow-dark cursor-pointer
        dark:text-dark dark:bg-primary lg:py-4 lg:px-4 md:text-sm md:py-2 md:px-2 xs:bg-transparent dark:xs:bg-transparent xs:text-dark
        dark:xs:text-white'
            whileHover={{ scale: 1.2 }}
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y, transition:{duration: 1.5 }}}
            viewport={{once: true}}>
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='w-full mt-64 text-8xl font-bold text-center dark:text-primary md:!text-5xl'>Skills</h2>
            <div className='w-full h-screen flex relative items-center justify-center right-1/2 rounded-full bg-circularLight
            dark:bg-circularDark lg:h-[80vh] md:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>


                <motion.div className='flex items-center absolute right-[47%] justify-center rounded-full font-bold bg-dark text-white px-4 py-6 shadow-dark
                 cursor-pointer dark:text-dark dark:bg-primary
                 lg:p-6 md:p-4 xs:p-2 xs:text-xs'
                    whileHover={{ scale: 1.2 }}
                    initial={{rotate: -90}}>
                    web
                </motion.div>
                <Skill name="HTML" x="12vw" y="2vw"/>
                <Skill name="CSS" x="5vw" y="-10vw"/>
                <Skill name="JavaScript" x="22vw" y="-6vw"/>
                <Skill name="ReactJS" x="24vw" y="10vw"/>
                <Skill name="NodeJs" x="17vw" y="-17vw"/>
                <Skill name="Firebase" x="16vw" y="18vw"/>
                <Skill name="Tailwind" x="37vw" y="-1vw"/>
            </div>
        </>
    )
}

export default Skills
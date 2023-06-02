import React, { useState } from 'react'
import Link from "next/link"
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon, LinkArrow, GithubIcon, LinkedInIcon, MoonIcon, CircularText, DribbbleIcon, SunIcon } from './Icons'
import { motion } from "framer-motion"
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[2px] inline-block absolute left-0 bottom-0 bg-black dark:bg-primary
    group-hover:w-full transition-[width] ease duration-300
    ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  
  const handleClick =()=>{
    toggle();
    router.push(href);
  }
  return (
    <button href={href} className={`${className} relative group  dark:text-dark text-primary my-2 `} onClick={handleClick}>
      {title}
      <span className={`h-[2px] inline-block absolute left-0 bottom-0 bg-primary dark:bg-dark
    group-hover:w-full transition-[width] ease duration-300
    ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </button>
  )
}

const Navbar = () => {
  const [mode, setmode] = useThemeSwitcher()
  const [isOpen, setisOpen] = useState(false)

  const handelClick = () => {
    setisOpen(!isOpen)
  }
  return (
    <header className='px-32 py-8 w-full font-medium flex items-center justify-between dark:text-primary relative lg:px-16 md:px-12 sm:px-8'>
      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handelClick}>
        <span className={`bg-dark h-0.5 w-6 block rounded-sm dark:bg-white transtion-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-2' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark h-0.5 w-6 block rounded-sm dark:bg-white transtion-all duration-300 ease-out my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark h-0.5 w-6 block rounded-sm dark:bg-white transtion-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav>
          <CustomLink href="/" title="Home" className='mr-4' />
          <CustomLink href="/about" title="About" className='mx-4' />
          <CustomLink href="/project" title="Project" className='mx-4' />
          <CustomLink href="/article" title="Article" className='ml-4' />
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a href="https:/twitter.com" target={'_blank'}
            className='w-6 mr-2'
            whileTap={{ scale: 0.8 }}
            whileHover={{ y: -2 }}>
            <TwitterIcon />
          </motion.a>
          <motion.a href="/" target={'_blank'}
            className='w-6 mx-2'
            whileTap={{ scale: 0.8 }}
            whileHover={{ y: -2 }}>
            <GithubIcon />
          </motion.a>
          <motion.a href="/" target={'_blank'}
            className='w-6 mx-2'
            whileTap={{ scale: 0.8 }}
            whileHover={{ y: -2 }}>
            <LinkedInIcon />
          </motion.a>

          <button onClick={() => setmode(mode === "light" ? "dark" : "light")}
            className={`${mode === "light" ? "bg-light text-dark" : "bg-dark text-primary"}`}
          >
            {
              mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-primary"} />
            }
          </button>
        </nav>
      </div>
      {
        isOpen ? <motion.div
        initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
        animate={{scale:1, opacity:1}} className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      z-10 bg-black/80 dark:bg-primary/50 rounded-lg py-32 backdrop-blur-md'>
        <nav className='flex flex-col items-center justify-center'>
          <CustomMobileLink href="/" title="Home" toggle={handelClick} />
          <CustomMobileLink href="/about" title="About" toggle={handelClick} />
          <CustomMobileLink href="/project" title="Project" toggle={handelClick} />
          <CustomMobileLink href="/article" title="Article" toggle={handelClick} />
        </nav>
        <nav className='flex items-center justify-center flex-wrap mt-2'>
          <motion.a href="https:/twitter.com" target={'_blank'}
            className='w-6 mr-2 sm:mx-1'
            whileTap={{ scale: 0.8 }}
            whileHover={{ y: -2 }}>
            <TwitterIcon />
          </motion.a>
          <motion.a href="/" target={'_blank'}
            className='w-6 mx-2 rounded-full bg-light dark:bg-dark sm:mx-1'
            whileTap={{ scale: 0.8 }}
            whileHover={{ y: -2 }}>
            <GithubIcon />
          </motion.a>
          <motion.a href="/" target={'_blank'}
            className='w-6 mx-2 sm:mx-1'
            whileTap={{ scale: 0.8 }}
            whileHover={{ y: -2 }}>
            <LinkedInIcon />
          </motion.a>

          <button onClick={() => setmode(mode === "light" ? "dark" : "light")}
            className={`${mode === "light" ? "bg-dark/80 text-white rounded-full sm:mx-1" : "bg-primary/40 text-dark rounded-full sm:mx-1"}`}
          >
            {
              mode === "dark" ? <SunIcon className={"fill-dark "} /> : <MoonIcon className={"fill-dark"} />
            }
          </button>
        </nav>
      </motion.div> : null
      }
      <div className='absolute left-[2%] top-2'>
        <Logo />
      </div>
    </header>
  )
}

export default Navbar
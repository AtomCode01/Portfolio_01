import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Project01 from '../../public/images/projects/devdreaming.jpg'
import { motion } from 'framer-motion'


const FramerImg = motion(Image);

const FeatureProject = ({ type, title, img, link, github, summary }) => {

  return (
    <article className='flex flex-row items-center justify-center border border-solid
    border-dark rounded-2xl bg-light shadow-2xl p-12 dark:border-primary gap-6 dark:bg-dark lg:flex-col lg:p-6'>
      {/* <div className='absolute top-0 -right-10 -z-10 w-[102%] h-[103%] rounded-br-3xl rounded-[2.5rem] bg-black'></div> */}

      <div className='col-6'>

        <Link href="/" target='_blank' className='inline-block overflow-hidden rounded-lg dark:text-primary'>
          <FramerImg src={img} alt={title} className='w-50 h-auto' whileHover={{scale: 1.2}} transition={{duration: 0.2}}
            priority 
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
          />
        </Link>
      </div>
      <div className='col-6'>
        <div className='flex flex-col items-start justify-between lg:w-full lg:pl-0 lg:pt-6'>
          <span className='font-medium text-white text-xl xs:text-base'>{type}</span>
          <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-primary sm:text-sm'>{title}</h2>
          </Link>
        </div>
        <p className='my-2 font-medium text-dark dark:text-primary sm:text-sm'>{summary}</p>
        <div className='flex items-center font-medium'>
          <Link href={github} target='_blank'><GithubIcon className="w-10 border border-2xl rounded dark:bg-white" /></Link>
          <Link href={link} target='_blank' className='ml-4 bg-dark text-primary text-lg p-2 px-6 rounded-xl dark:text-dark
          dark:bg-primary sm:text-base sm:px-4'>Visit the project</Link>
        </div>
      </div>
    </article>

  )
}

const Projects = ({ title, type, link, img, github }) => {
  return (
  <article className='w-full flex flex-col items-center justify-center rounded-3xl rounded-br-2xl
  border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-primary
  lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
    <div className='col-6'>
    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark' />
      <Link href="/" target='_blank' className='w-full cursor-pointer inline-block overflow-hidden rounded-lg'>
        <FramerImg src={img} alt={title} className='w-full h-auto dark:text-primary' whileHover={{scale:1.2}} transition={{duration: 0.2}}/>
      </Link>
    </div>
    <div className='col-6 w-full'>
      <div className='flex flex-col items-start justify-between mt-4'>
        <span className='font-medium text-primaryDark dark:text-white text-xl lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-2xl font-bold dark:text-primary lg:text-2xl'>{title}</h2>
        </Link>
      </div>
      <div className='flex items-center font-medium'>
      <Link href={link} target='_blank' className='mt-4 text-lg w-full justify-between hover:underline underline-offset-2 dark:text-white md:text-base'>Visit</Link>
        <Link href={github} target='_blank'><GithubIcon className="w-8 border border-2xl rounded dark:bg-white lg:w-6" /></Link>
      </div>
    </div>
  </article>
  )
}
const project = () => {
  return (
    <>
      <Head>
        <title>AtomCoder || Projects</title>
        <meta name='discriptions' content='discriptions' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-start justify-center' >
        <Layout className="pt-16">
          <AnimatedText className='text-8xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' text="Imagination Trumps Knowledge!" />
        </Layout>
        <div className='grid grid-cols-12 gap-24 w-[75%] mx-auto gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24px sm:gap-x-0'>
          <div className='col-span-12'><FeatureProject
          
            img={Project01}
            summary={"A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."}
            link="/"
            title={"React Portfolio Website"}
            type={"Featured project"}
            github="/"


          /></div>
          <div className='col-span-6 sm:col-span-12'>
            <Projects
              img={Project01}
              summary={"A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."}
              link="/"
              title={"React Portfolio Website"}
              type={"Featured project"}
              github="/"
               />
          </div>
          <div className='col-span-6 sm:col-span-12'>
            <Projects
              img={Project01}
              summary={"A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."}
              link="/"
              title={"React Portfolio Website"}
              type={"Featured project"}
              github="/"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default project
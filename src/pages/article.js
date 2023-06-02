import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import ProjectImg from '../../public/images/articles/what is higher order component in React.jpg'
import { AnimatePresence, motion, useMotionValue } from 'framer-motion'
import ProjectImg2 from '../../public/images/articles/todo list app built using react redux and framer motion.png'

const FramerImg = motion(Image);
const Article = ({ img, date, title, link }) => {
  return (
    <motion.li
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5 , ease:"easeInOut"}}}
    viewport={{once:true}} className='w-full p-4 py-6 my-4 flex items-center justify-center border border-solid
    border-r-4 border-b-4 text-dark border-black rounded-lg bg-light relative first:mt-0 dark:bg-dark dark:border-primary lg:flex-col'>
      <Link href={link} target='_blank'>
        <h2 className='text-xl font-semibold uppercase hover:underline dark:text-white'>{title}</h2>
      </Link>
      <span className='text-primary font-semibold pl-32 md:self-start md:pl-0'>{date}</span>
    </motion.li>
  )
}
const MovingImg = ({ img, title, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const ImgRef = useRef(null);

    function handleMouse(event){
      console.log(event.pageX);
    }
    function handleMouseLeave(event){
      console.log(event.pageX);
    }

  return(
    <Link href={link} target='_blank'
    onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
      <h2 className='text-xl font-semibold uppercase hover:underline'>{title}</h2>
      <Image ref={ImgRef} img={img} alt={title} className='w-96 h-auto hidden rounded-lg absolute'
        priority 
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
      />
    </Link>
  )
}
const FeaturedArticle = ({ time, title, link, img, summary }) => {
  return (
    <li className='col-span-1 w-full p-6 bg-light border border-solid border-black rounded-2xl dark:bg-dark dark:border-primary'>
      <Link href={link} target='_blank' className='inline-block overflow-hidden rounded-lg'>
        <FramerImg src={img} alt={title} className='w-full cursor-pointer rounded-lg h-auto'
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='uppercase text-2xl font-semibold my-2 hover:underline dark:text-white xs:text-lg'>{title}</h2>
      </Link>
      <p className='text-sm mb-2 dark:text-primary'>{summary}</p>
      <span className='text-primary font-semibold'>{time}</span>
    </li>
  )
}
const article = () => {
  return (
    <>
      <Head>
        <title>AtomCoder || About Page</title>
        <meta name='discriptions' content='discriptions' />
      </Head>
      <main className='w-full flex flex-col items-center justify-center overflow-hidden mb-16'>
        <Layout className='pt-16'>
          <AnimatedText text={"Words Can Change The World! "} className='mb-16 text-6xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
        </Layout>
        <ul className='grid grid-cols-2 gap-16 mx-8 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
          <FeaturedArticle
            title={"Words Can Change The World!"}
            link={"/"}
            summary={"Build A Custom Pagination Component In Reactjs From Scratch Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."}
            time={"9 min read"}
            img={ProjectImg}
          />
          <FeaturedArticle
            title={"Words Can Change The World!"}
            link={"/"}
            summary={"Build A Custom Pagination Component In Reactjs From Scratch Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."}
            time={"9 min read"}
            img={ProjectImg}
          />
        </ul>
        <h2 className='w-full text-4xl font-bold text-center my-16 mt-32 dark:text-primary'>All Articles</h2>
        <ul className='w-full mx-10 p-32 sm:mx-2 md:p-2'>
          <Article
            title={"Redux Simplified: A Beginner's Guide For Web Developers"}
            link={"/"}
            date={"22/03/2022"}
            img={ProjectImg2}
          />
          <Article

            title={"Redux Simplified: A Beginner's Guide For Web Developers"}
            link={"/"}
            date={"22/03/2022"}
            img={ProjectImg2}
          />
          <Article
            title={"Redux Simplified: A Beginner's Guide For Web Developers"}
            link={"/"}
            date={"22/03/2022"}
            img={ProjectImg2}
          />
          <Article
            title={"Redux Simplified: A Beginner's Guide For Web Developers"}
            link={"/"}
            date={"22/03/2022"}
            img={ProjectImg2}
          />
        </ul>
      </main>
    </>
  )
}

export default article
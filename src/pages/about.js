import Head from 'next/head'
import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import ProfilePic from '../../public/images/profile/pic2.png'
import Image from 'next/image'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const about = () => {
  return (
    <>
      <Head>
        <title>AtomCoder || About Page</title>
        <meta name='discriptions' content='discriptions' />
      </Head>
      <main className='flex flex-col w-full justify-center items-center'>
        <Layout className='py-16'>
          <div>
            <AnimatedText text="Passion Fuels Purpose!" className='text-6xl mb-16 lg:!text-7xl sm:!text-6xl xs:!text-5xl sm:mb-8' />
          </div>
        </Layout>
        <div className='px-auto flex w-full flex-row px-16 gap-16 dark:text-primary md:flex-col sm:gap-8'>
          <div className='flex flex-col items-start justify-start w-1/2 md:w-full md:order-2'>
            <h2 className='mb-20 text-lg font-bold text-black/80 uppercase dark:text-primary'>About ME :</h2>
            <p className='font-medium'>Hi, I'm AtomCoder, a web developer and UI/UX designer with a passion for creating beautiful, functional,
              and user-centered digital experiences. With 1.5 years of experience in the field. I am always looking for
              new and innovative ways to bring my clients' visions to life.
            </p>
            <p className='my-4 font-medium'>I believe that design is about more than just making things look pretty. it's about solving problems and
              creating intuitive, enjoyable experiences for users.
            </p>
            <p className='mb-4 font-medium'>Whether I'm working on a website or
              other digital product, I bring my commitment to design excellence and user-centered thinking to
              every project I work on. I look forward to the opportunity to bring my skills and passion to your next project
            </p>
          </div>
          <div className='relative flex items-center h-max rounded-2xl border-solid border-dark border-2 p-8 mb-4 md:order-1 md:inline-block md:w-full dark:border-primary'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-dark rounded-2xl' />
            <Image src={ProfilePic} alt="AtomCoder" className='w-full h-auto rounded-2xl' 
              priority 
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
        </div>
        <Skills/>
        <Experience/>
        <Education/>
      </main>
    </>
  )
}

export default about
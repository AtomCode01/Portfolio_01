import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-black
    font-medium text-lg dark:border-primary sm:text-base'>
            <Layout className='flex items-center py-8 justify-between dark:text-primary lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; ALL Right Reserved</span>
                <div className='flex items-center lg:py-2'>
                Build by <span className=''>&nbsp;</span><Link href="/" className='underline underline-offset-2'>AtomCoder</Link>
                </div>
                <Link href="mailto:atomcode2002@gmail.com" className='underline underline-offset-2'>Let's build</Link>
            </Layout>
        </footer>
    )
}

export default Footer
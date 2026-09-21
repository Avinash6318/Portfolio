import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8, type: 'spring', stiffness: 100}}>
          <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </motion.div>

        <motion.h3 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
            Hi, I'm Avinash Muppidi <Image src={assets.hand_icon} alt='' className='w-6'/>
        </motion.h3 >
        <motion.h1 initial={{y: -30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.5}}
         className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
            Full Stack Developer
        </motion.h1>
        <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}}
        className='max-w-2xl mx-auto font-ovo'>
            Full Stack Developer with a strong focus on backend engineering and scalable web applications. Experienced in
            building production-ready applications using React, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, Redis, 
            and cloud services, with expertise in caching, API optimization, authentication, and AI-powered features. <br />
            📍 India • Open to Software Engineer Roles
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1}}
            href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white
             flex items-center gap-2 dark:bg-transparent '> Let's Connect 
                <Image src={assets.right_arrow_white} alt='' className='w-4'></Image>
            </motion.a>
            <motion.a initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.2}}
             href="/AvinashMuppidi_Resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 
             flex items-center gap-2 bg-white dark:text-black  hover:bg-gray-100'> my resume
                <Image src={assets.download_icon} alt='' className='w-4'></Image>
            </motion.a>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-4 mt-4'>
            <motion.a initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.4 }}
            href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
            className='px-8 py-3 border border-gray-500 rounded-full flex items-center gap-2
             bg-white hover:bg-gray-100 transition dark:bg-transparent dark:text-white dark:hover:bg-white/10'>
                GitHub
                <FaGithub size={20} />
            </motion.a>

            <motion.a initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.6 }}
            href="https://linkedin.com/in/yourusername" target="_blank"  rel="noopener noreferrer"
            className='px-8 py-3 border border-gray-500 rounded-full flex items-center gap-2
                bg-white hover:bg-gray-100 transition dark:bg-transparent dark:text-white dark:hover:bg-white/10'>
                LinkedIn
                <FaLinkedin size={20} />
            </motion.a>

            <motion.a initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.8 }}
            href="mailto:your@email.com"
            className='px-8 py-3 border border-gray-500 rounded-full flex items-center gap-2
             bg-white hover:bg-gray-100 transition dark:bg-transparent dark:text-white dark:hover:bg-white/10' >
                Email
                <MdEmail size={20} />
            </motion.a>
        </div>
    </div>
  )
}

export default Header
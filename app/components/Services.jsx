import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = () => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}
    id='services' className='w-full px-[12%] py-10 scroll-mt-20 '>
        <motion.h4 initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}
         className='text-center mb-2 text-lg font-ovo'>What I do</motion.h4>
        <motion.h2 initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}}
         className='text-center text-5xl font-ovo'>My Expertise </motion.h2>

        <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
           I build modern full-stack web applications using React, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, and Redis.
            My focus is on developing scalable, secure, and production-ready applications with clean UI, optimized backend architecture, and cloud deployment.
        </motion.p>

        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.9}}
        className='grid grid-cols-auto gap-6 my-10'>
          {serviceData.map(({icon,title, description, tech},index)=>(
            <motion.div whileHover={{scale: 1.05}}
             key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer
             hover:bg-light-hover hover:-translate-y-1 duration-500 dark:hover:bg-dark-hover dark:hover:shadow-white'>
              <Image src={icon} alt='' className='w-10'/>
              <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
              <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                {description}
              </p>
              <div className="mt-6 pt-4 border-t border-gray-300 dark:border-white/20">
                <p className="text-xs font-medium text-gray-500 dark:text-white/60 uppercase tracking-wider mb-2">
                    Tech Stack
                </p>

                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium leading-6">
                    {tech}
                </p>
              </div>

            </motion.div>
          ))}

        </motion.div>
    </motion.div>
  )
}

export default Services
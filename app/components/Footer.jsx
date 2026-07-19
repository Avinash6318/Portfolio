import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode ?  assets.logo_dark :assets.logo} alt="Avinash Muppidi Logo" className='w-36 mx-auto mb-2'/>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode?  assets.mail_icon_dark:assets.mail_icon} alt='Email' className='w-6'/>
                <a
                    href="mailto:muppidiavinash6318@gmail.com"
                    className="hover:underline"
                >
                    muppidiavinash6318@gmail.com
                </a>
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>&copy; {new Date().getFullYear()} Avinash Muppidi. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' rel="noopener noreferrer"  href="" className="hover:text-blue-500 transition">GitHub</a></li>
                <li><a target='_blank' rel="noopener noreferrer" href="" className="hover:text-blue-500 transition">Linkidin</a></li>
                <li><a target='_blank' rel="noopener noreferrer" href="" className="hover:text-blue-500 transition">Resume</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
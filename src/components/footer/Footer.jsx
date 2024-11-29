import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full sm:h-[55vh] h-[55vh]  p-[4vw] sm:p-[4vw] px-[2.5vw]'> 
      <div className='w-full h-full flex sm:flex-col sm:justify-between'>
        <div className='sm:w-full w-1/2 sm:h-fit h-full flex flex-col justify-between'>
        <h2 className='sm:text-[5vw] text-[1.4vw] font-bold'>Allastir</h2>
        <p className='sm:hidden text-[1vw] opacity-[.7]'>© 2024 All Rights Reserved</p>
        </div>
        <div className='sm:w-full w-1/2 sm:h-fit h-full flex sm:flex-wrap sm:mt-[10vw] capitalize sm:justify-between'>
        <div className='sm:w-[48%] w-[33.3%]  sm:h-fit  h-full flex flex-col sm:gap-[4vw]  justify-between'>
        <h2>product</h2>
        <div className='flex flex-col justify-between sm:h-fit h-[70%]'>
            <Link href="/">Characters</Link>
            <Link href="/">Abstract</Link>
            <Link href="/">Themes</Link>
            <Link href="/">Mockups</Link>
            <Link href="/">Freebies</Link>
            <Link href="/">Pro Access</Link>
        </div>
        </div>
        <div className='sm:w-[48%] w-[33.3%] sm:h-fit  h-full flex flex-col sm:gap-[4vw]  justify-between'>
        <h2>Info</h2>
        <div className='flex flex-col justify-between sm:h-fit h-[70%]'>
            <Link href="/">License</Link>
            <Link href="/">Use cases</Link>
            <Link href="/">Order custom</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Use</Link>
            <Link href="/">help@wannathis.one</Link>
        </div>
        </div>
        <div className='sm:w-full w-[33.3%] sm:h-fit sm:mt-[10vh]  h-full flex flex-col sm:gap-[4vw]  justify-between'>
        <h2>Follow us</h2>
       <div className='w-full flex justify-between items-center'>
       <div className='flex items-start gap-[1vw] sm:h-fit h-[70%]'>
            <Link href="/"><i className="ri-instagram-line"></i></Link>
            <Link href="/"><i className="ri-behance-line"></i></Link>
            <Link href="/"><i className="ri-pinterest-fill"></i></Link>
            <Link href="/"><i className="ri-twitter-fill"></i></Link>
        </div>
        <p className='sm:block hidden text-[3vw] opacity-[.7]'>© 2024 All Rights Reserved</p>
       </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
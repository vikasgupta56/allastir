import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full sm:h-[60vh] h-[50vh]  p-[4vw] sm:p-[4vw] sm:pb-[6vw] px-[2.5vw]'>
      <div className='w-full h-full flex sm:flex-col sm:justify-between'>
        <div className='sm:w-full w-1/2 sm:h-fit h-full flex flex-col justify-between'>
          <Image width={1000} height={1000} className='w-[200px] h-auto' src="/logo-with-tag.png" alt='logo' />
          <p className='sm:hidden text-[1vw] opacity-[.7]'>© 2024 All Rights Reserved</p>
        </div>
        <div className='sm:w-full w-1/2 sm:h-fit h-full sm:text-[4.5vw] flex sm:flex-wrap sm:mt-[10vw] capitalize sm:justify-between'>
          <div className='sm:w-[48%] w-[33.3%]  sm:h-fit  h-full flex flex-col sm:gap-[4vw] gap-[1vw]'>
            <h2 className='font-semibold text-[1.1vw]'>Quick Link</h2>
            <div className='flex flex-col gap-[.5vw] sm:h-fit h-[70%]'>
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Product</Link>
              <Link href="/">Brochure</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          <div className='sm:w-[48%] w-[33.3%] sm:h-fit  h-full flex flex-col sm:gap-[4vw] gap-[1vw]'>
            <h2 className='font-semibold text-[1.1vw]'>Info</h2>
            <div className='flex flex-col gap-[.5vw] sm:h-fit h-[70%]'>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Use</Link>
              <Link href="/">Info@allastir.com</Link>
            </div>
          </div>
          <div className='sm:w-full w-[33.3%] sm:h-fit sm:mt-[12vh]  h-full flex flex-col sm:gap-[4vw] gap-[1vw]'>
            <h2 className='font-semibold text-[1.1vw]'>Follow us</h2>
            <div className='w-full flex justify-between items-center'>
              <div className='flex items-start sm:gap-[4vw] gap-[1vw] sm:h-fit h-[70%] sm:text-[5vw]'>
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
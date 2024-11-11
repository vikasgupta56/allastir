import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[55vh]  p-[4vw] px-[2.5vw]'>
      <div className='w-full h-full flex'>
        <div className='w-1/2 h-full flex flex-col justify-between'>
        <h2 className='text-[1.4vw] font-bold'>Allastir</h2>
        <p className='text-[1vw] opacity-[.7]'>© 2024 All Rights Reserved</p>
        </div>
        <div className='w-1/2 h-full flex capitalize '>
        <div style={{width:"calc(100%/3)"}} className='h-full flex flex-col  justify-between'>
        <h2>product</h2>
        <div className='flex flex-col justify-between h-[70%]'>
            <Link href="/">Characters</Link>
            <Link href="/">Abstract</Link>
            <Link href="/">Themes</Link>
            <Link href="/">Mockups</Link>
            <Link href="/">Freebies</Link>
            <Link href="/">Pro Access</Link>
        </div>
        </div>
        <div style={{width:"calc(100%/3)"}} className='h-full flex flex-col  justify-between'>
        <h2>Info</h2>
        <div className='flex flex-col justify-between h-[70%]'>
            <Link href="/">License</Link>
            <Link href="/">Use cases</Link>
            <Link href="/">Order custom</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Use</Link>
            <Link href="/">help@wannathis.one</Link>
        </div>
        </div>
        <div style={{width:"calc(100%/3)"}} className='h-full flex flex-col  justify-between'>
        <h2>Follow us</h2>
        <div className='flex items-start gap-[1vw] h-[70%]'>
            <Link href="/"><i class="ri-instagram-line"></i></Link>
            <Link href="/"><i class="ri-behance-line"></i></Link>
            <Link href="/"><i class="ri-pinterest-fill"></i></Link>
            <Link href="/"><i class="ri-twitter-fill"></i></Link>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
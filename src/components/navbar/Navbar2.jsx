import gsap from 'gsap'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [open, setopen] = useState(false)


  const openSidebar = () => {
    if (open) {
      document.querySelector(".menu-icon").classList.remove("ri-close-line")
      document.querySelector(".menu-icon").classList.add("ri-menu-fill")
      let tl = gsap.timeline()
      tl
        .to(".side-menu", {
          top: "-100vh",
          duration: .5,
        })

      setopen(false)
    } else {
      document.querySelector(".menu-icon").classList.add("ri-close-line")
      document.querySelector(".menu-icon").classList.remove("ri-menu-fill")
      let tl = gsap.timeline()
      tl
        .to(".side-menu", {
          top: "100%",
          duration: .5,
        })

      setopen(true)
    }

  }

  return (
    <div className='w-full  sm:px-[4vw] px-[2.5vw] sm:py-[3.1vw] py-[1vw] text-black bg-white flex items-center justify-between fixed z-[9] top-0 left-0'>
      <h2 className='sm:text-[5vw] text-[1.4vw] font-bold'>Allastir</h2>
      <div className='sm:hidden absolute top-1/2  left-1/2 -translate-x-1/2 text-[1.1vw] font-regular capitalize -translate-y-1/2 flex items-center gap-[3vw]'>
        <Link href="/" className='hover:opacity-[.8]'>home</Link>
        <Link href="/about" className='hover:opacity-[.8]'>about</Link>
        <Link href="/product" className='hover:opacity-[.8]'>product</Link>
        <Link href="/Allaster_Brochure.pdf" target="_blank" className='hover:opacity-[.8]'>brochure</Link>
        <Link href="/contact" className='hover:opacity-[.8]'>contact</Link>
      </div>
      <i onClick={openSidebar} className="menu-icon cursor-pointer ri-menu-fill text-[5.5vw] sm:block hidden font-semibold"></i>
      <div className='side-menu duration-300 w-[100%] h-[100vh] absolute top-[-100vh] left-0 text-black sm:flex hidden justify-end uppercase font-semibold text-left text-[6vw]'>
        <div className='w-full h-fit relative flex flex-col justify-center bg-white'>
          <Link href="/" className='border-b border-t  p-[4vw]'>home</Link>
          <Link href="/about" className='border-b  p-[4vw]'>about</Link>
          <Link href="/product" className='border-b  p-[4vw]'>product</Link>
          <Link href="/Allaster_Brochure.pdf" target="_blank" className='border-b  p-[4vw]'>brochure</Link>
          <Link href="/contact" className='border-b  p-[4vw]'>contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import Link from 'next/link'
import React from 'react'

const Navbar = ({ navRef }) => {
  return (
    <div ref={navRef} className='w-full sm:px-[4vw] px-[2.5vw] sm:py-[3.1vw] py-[1vw] text-white flex items-center justify-between fixed z-[9] top-0 left-0' style={{ backdropFilter: "blur(40px)" }}>
      <h2 className='sm:text-[5vw] text-[1.4vw] font-bold'>Allastir</h2>
      <div className='sm:hidden absolute top-1/2  left-1/2 -translate-x-1/2 text-[1.1vw] font-regular capitalize -translate-y-1/2 flex items-center gap-[3vw]'>
        <Link href="/" className='hover:opacity-[.8]'>home</Link>
        <Link href="/about" className='hover:opacity-[.8]'>about</Link>
        <Link href="/product" className='hover:opacity-[.8]'>product</Link>
        <Link href="/ALLASTIR_BROCHURE.pdf" target="_blank" className='hover:opacity-[.8]'>brochure</Link>
        <Link href="/contact" className='hover:opacity-[.8]'>contact</Link>
      </div>
      <i onClick={()=>{
        document.querySelector(".side-menu").style.right = 0
      }} class="ri-menu-fill text-[5.5vw] font-semibold"></i>
      <div style={{right:"-50%"}} className='side-menu duration-300 w-[50%] h-screen absolute top-0 right-0 bg-white text-black flex flex-col justify-center gap-[3vh] p-[4vw] uppercase font-semibold text-left text-[6vw]'>
      <i onClick={()=>{
        document.querySelector(".side-menu").style.right = "-50%"
      }} class="ri-close-line text-[6vw] absolute top-[3.1vw] right-[4vw]"></i>
        <Link href="/" className='hover:opacity-[.8]'>home</Link>
        <Link href="/about" className='hover:opacity-[.8]'>about</Link>
        <Link href="/product" className='hover:opacity-[.8]'>product</Link>
        <Link href="/ALLASTIR_BROCHURE.pdf" target="_blank" className='hover:opacity-[.8]'>brochure</Link>
        <Link href="/contact" className='hover:opacity-[.8]'>contact</Link>
      </div>
    </div>
  )
}

export default Navbar
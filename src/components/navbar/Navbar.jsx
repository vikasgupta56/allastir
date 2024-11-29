import gsap from 'gsap'
import Link from 'next/link'
import React from 'react'

const Navbar = ({ navRef }) => {

 

  const openSidebar = ()=>{
    let tl = gsap.timeline()
    tl
    .to(".side-menu",{
      right: 0,
      duration: 0.5,
      ease: "power4.in"
    })
    .to(".side-menu",{
      backgroundColor:"#00000039",
      duration: 0.5,
    })
  }
  const closeSidebar = ()=>{
    let tl = gsap.timeline()
    tl
    .to(".side-menu",{
      backgroundColor:"transparent",
      duration: 0.1,
    })
    .to(".side-menu",{
      right: "-100%",
      duration: 0.5,
      ease: "power4.in"
    })
  }

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
      <i onClick={openSidebar} className="ri-menu-fill text-[5.5vw] font-semibold"></i>
     <div style={{ right: "-100%" }} className='side-menu duration-300 w-[100%] h-screen absolute top-0 right-0  text-black sm:flex hidden justify-end uppercase font-semibold text-left text-[6vw]'>
        <div className='w-[50vw] h-screen relative flex flex-col justify-center gap-[4vw] p-[4vw] bg-white'>
          <i onClick={closeSidebar} className="ri-close-line text-[6vw] absolute top-[3.1vw] right-[4vw]"></i>
          <Link href="/" className='hover:opacity-[.8]'>home</Link>
          <Link href="/about" className='hover:opacity-[.8]'>about</Link>
          <Link href="/product" className='hover:opacity-[.8]'>product</Link>
          <Link href="/ALLASTIR_BROCHURE.pdf" target="_blank" className='hover:opacity-[.8]'>brochure</Link>
          <Link href="/contact" className='hover:opacity-[.8]'>contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
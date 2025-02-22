import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section1 = ({sec1Ref}) => {

  return (
    <div ref={sec1Ref} className='about-hero relative w-full sm:h-[35vh] h-[60vh] flex flex-col items-center justify-center text-[15vw] font-bold uppercase'>
      <img className='w-full h-full object-cover' src="https://www.allastir.com/images/slider-mine-a.jpg" alt="" />
      <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center bg-black/50'>
        <div className='sm:h-[10vw] h-[4vw] overflow-hidden'>
        <h2 className='sm:text-[10vw] leading-none text-[4vw] text-white'>About Us</h2>
        </div>
      </div>
    </div>
  )
}

export default Section1
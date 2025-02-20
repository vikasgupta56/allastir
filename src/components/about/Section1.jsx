import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section1 = ({navRef}) => {

  // useEffect(()=>{
  //   if (navRef.current) {
  //     gsap.to(navRef.current, {
  //         backgroundColor: "white",
  //         color: "black",
  //         duration: .5,
  //         scrollTrigger: {
  //             trigger: ".about-hero",
  //             start: "bottom 5%",
  //             end: "bottom top",
  //             scrub: 1,
  //         }
  //     })
  // }
  // },[])
  return (
    <div className='about-hero relative w-full sm:h-[35vh] h-[60vh] flex flex-col items-center justify-center text-[15vw] font-bold uppercase'>
      <img className='w-full h-full object-cover' src="https://www.allastir.com/images/slider-mine-a.jpg" alt="" />
      <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center bg-black/50'>
        <h1 className='sm:text-[10vw] text-[4vw] text-white'>About Us</h1>
      </div>
    </div>
  )
}

export default Section1
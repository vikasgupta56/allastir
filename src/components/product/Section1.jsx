import gsap from 'gsap'
import React, { useEffect } from 'react'

const Section1 = () => {
  useEffect(()=>{
    gsap.to(".about-span span",{
      transform:"translateY(0%)",
      duration:.8,
      stagger:{
        amount:.2
      },
    })
    gsap.to(".ml",{
      scale:1,
      opacity:.05,
      delay:.2,
      stagger:.2,
      duration:.8
    })
  },[])
  return (
    <div className='relative w-full h-screen flex flex-col items-center justify-center text-[15vw] font-bold uppercase'>
      <div className='overflow-hidden relative z-[10]'>
        <h1 className='leading-none text-center about-span'> {"our".split("").map((l, i) => <span style={{transform:"translateY(100%)"}} className='inline-block leading-none' key={i}>{l}</span>)}</h1>
      </div>
      <div className='overflow-hidden relative z-[10]'>
        <h1 className='leading-none text-center about-span'> {"products".split("").map((l, i) => <span style={{transform:"translateY(100%)"}} className='inline-block leading-none' key={i}>{l}</span>)}</h1>
      </div>
      <img className='ml absolute opacity-0 w-[15vw] top-[30%]  left-[2%]' src="ml.png" alt="" />
      <img className='ml absolute opacity-0 w-[15vw] top-[65%]  left-[20%]' src="mol2.png" alt="" />
      <img className='ml absolute opacity-0 w-[15vw] top-[15%]  left-[40%]' src="mol4.png" alt="" />
      <img className='ml absolute opacity-0 w-[20vw] top-[30%]  left-[80%]' src="mol3.png" alt="" />
    </div>
  )
}

export default Section1
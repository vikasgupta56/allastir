import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollToPlugin)

const Section2 = () => {
  useEffect(()=>{
    gsap.to(".letters-wrapper span",{
      color:"black",
      stagger:.3,
      duration:1,
      scrollTrigger:{
        trigger:".letters-wrapper",
        start:"top 60%",
        end:"top 10%",
        scrub:1
      }
    })
  },[])
  return (
    <div className='sec2-h w-full h-screen text-[2.2vw] flex flex-col items-center justify-center px-[12.5vw] text-center'>
        <h2 className='text-[#80868B] leading-tight font-regular'><span className='text-[#1A73E8]'>“In a world interconnected like never before, language plays an increasingly important role in access to knowledge and prosperity.</span><span className='letters-wrapper'>{"Our goal is to develop technology that enables better understanding of more languages, making them accessible, removing modality barriers and empowering people to communicate effectively and have access to knowledge. This technological advancement has significant societal impact.”".split("").map((l,i)=> <span key={i}>{l}</span>)}</span></h2>
    </div>
  )
}

export default Section2
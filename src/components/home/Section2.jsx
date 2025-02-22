import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section2 = ({sec2Ref ,bluetxt , normaltxt}) => {
  useEffect(() => {
    gsap.to(".letters-wrapper span", {
      color: "black",
      stagger: .3,
      duration: 2,
      scrollTrigger: {
        trigger: ".letters-wrapper",
        start: "top 70%",
        end: "top 45%",
        scrub: 1
      }
    })

    ScrollTrigger.refresh()
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.refresh()
    };

  }, [])
  return (
    <div ref={sec2Ref} className='sec2-h w-full  sm:h-[80vh] h-[80vh] sm:text-[4.5vw] text-[2.2vw] flex flex-col items-center justify-center sm:px-[8vw] px-[12.5vw] text-center'>
      <h2 className='text-[#80868B] leading-1 font-regular'><span className='text-[#1863AB]'>{bluetxt}</span><span className='letters-wrapper sm:text-black'>{normaltxt.split("").map((l, i) => <span key={i}>{l}</span>)}</span></h2>
    </div>
  )
}

export default Section2
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section1 = ({navRef}) => {
    useEffect(() => {
        if (navRef.current) {
            gsap.to(navRef.current, {
                backgroundColor: "white",
                color: "black",
                duration: .5,
                scrollTrigger: {
                    trigger: ".product-pg",
                    start: "bottom 5%",
                    end: "bottom top",
                    scrub: 1,
                }
            })
        }
    }, [])
    
  return (
    <div className='product-pg w-full h-screen'>
        <video autoPlay muted loop playsInline className='w-full h-full object-cover' src="https://cdn.jasonbradley.co/pic/1e50e423-e10aee53.mp4"></video>
    </div>
  )
}

export default Section1
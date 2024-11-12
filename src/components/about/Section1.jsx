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
                    trigger: ".about-pg",
                    start: "bottom 5%",
                    end: "bottom top",
                    scrub: 1,
                }
            })
        }
    }, [])
    
  return (
    <div className='about-pg w-full h-screen'>
        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1591228128578-a2723fa3ed9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  )
}

export default Section1
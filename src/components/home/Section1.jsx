import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section1 = ({ navRef }) => {
    useEffect(() => {
        if (navRef.current) {
            gsap.to(navRef.current, {
                backgroundColor: "white",
                color: "black",
                duration: .5,
                scrollTrigger: {
                    trigger: ".hero",
                    start: "bottom 5%",
                    end: "bottom top",
                    scrub: 1,
                }
            })
        }
    }, [])
    return (
        <div className='hero w-full h-screen relative'>
            <video autoPlay muted loop playsInline className='w-full h-full object-cover' src="https://storage.googleapis.com/gweb-mobius-cdn/research-languages/uploads/6fa2f8761189a3cb68ae72a28c3f6b3f8599dbed.compressed.compressed.mp4"></video>
            <div className="overlay-hero w-full h-full absolute top-0 left-0 text-white flex flex-col items-center justify-center">
                <h1 className='text-[4vw] leading-none'>More languages.</h1>
                <h1 className='text-[4vw] leading-none'>Fewer barriers.</h1>
                <div className='flex flex-col items-center justify-center gap-[1vw] mt-[1.8vw]'>
                    <p className='text-[1.2vw] w-[56%] text-center'>See how Google is expanding support for
                        thousands of the world's languages.</p>
                    <div className='flex items-center justify-center h-[4vw]'>
                        <div className='text-white bg-[#1A73E8] w-fit capitalize px-[1.5vw] hover:px-[2vw] transition-all duration-500 cursor-pointer py-[.6vw] hover:py-[1vw] rounded-full font-semibold'>
                            <h4>watch video</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
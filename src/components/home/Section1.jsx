import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section1 = ({ navRef, popup }) => {
    const videoRef = useRef(null)
    useEffect(() => {
        gsap.set(videoRef.current, { opacity: 0 })
        gsap.set(navRef.current, { y: "-100%" })
        var tl = gsap.timeline()
        tl
            .to(videoRef.current, {
                opacity: 1,
                duration: .7,
                ease: "power4.in",
                onComplete: () => {
                    videoRef.current.play()
                }
            })
            .to(".hero-txt1 , .hero-txt2", {
                transform: "translateY(0%)",
                duration: .5,
                stagger:.2
            })
            .to(navRef.current, {
                y: 0,
                duration: .3
            })
            .to(".hero-para", {
                opacity: 1,
                duration: .4,
            })
            .to(popup.current, {
                scale: 1,
                duration: .5,
            }, "p")
            .to(popup.current.querySelector(".close"), {
                scale: 1,
                duration: .2,
                delay: 2
            }, "p")

        ScrollTrigger.refresh();

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            ScrollTrigger.refresh();
        };
    }, [])



    return (
        <div className='hero w-full h-screen relative'>
            <video ref={videoRef} muted loop playsInline className='w-full h-full object-cover brightness-[70%]' src="/videos/pharma.mp4"></video>
            <div className="overlay-hero w-full h-full absolute top-0 left-0  text-white flex flex-col items-center justify-center">
                <div className='sm:hidden block overflow-hidden sm:h-[14vw] h-[5vw] font-semibold'>
                    <h1 className='hero-txt1 sm:text-[11vw] text-[4vw] leading-none' style={{transform:"translateY(130%)"}}>Innovation driven</h1>
                </div>
                <div className='sm:hidden block overflow-hidden sm:h-[14vw] h-[5vw] font-semibold'>
                    <h1 className='hero-txt2 sm:text-[11vw] text-[4vw] leading-none' style={{transform:"translateY(130%)"}}>Pharmaceutical Manufacturer.</h1>
                </div>
                <div className='sm:block hidden overflow-hidden sm:h-[14vw] h-[5vw]'>
                    <h1 className='hero-txt1 sm:text-[11vw] text-[4vw] leading-none' style={{transform:"translateY(130%)"}}>Innovation driven</h1>
                </div>
                <div className='sm:block hidden overflow-hidden sm:h-[14vw] h-[5vw]'>
                    <h1 className='hero-txt2 sm:text-[11vw] text-[4vw] leading-none' style={{transform:"translateY(130%)"}}>Pharmaceutical</h1>
                </div>
                <div className='sm:block hidden overflow-hidden sm:h-[14vw] h-[5vw]'>
                    <h1 className='hero-txt2 sm:text-[11vw] text-[4vw] leading-none' style={{transform:"translateY(130%)"}}>Manufacturer.</h1>
                </div>
                <div className='hero-para flex flex-col items-center justify-center sm:gap-[4vw] gap-[1vw] sm:mt-[2.5vw] opacity-0'>
                    <p className='sm:text-[4.5vw] text-[1.4vw] sm:w-[90%] w-[56%] text-center'>Pioneering breakthroughs in healthcare with cutting-edge research and manufacturing.</p>
                    <Link href="/contact" className='flex items-center justify-center sm:h-[8vw] h-[4vw]'>
                        <div className='text-white sm:text-[4.5vw] bg-[#1863AB] w-fit capitalize sm:px-[4.5vw] px-[1.5vw] hover:px-[2vw] hover:sm:px-[5vw] transition-all duration-500 cursor-pointer sm:py-[2vw] py-[.6vw] hover:sm:py-[2.5vw] hover:py-[1vw] rounded-full'>
                            <h4>Connect us</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Section1
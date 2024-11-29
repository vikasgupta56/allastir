import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section1 = ({ navRef, popup }) => {
    const videoRef = useRef(null)
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
            .to(".ifram", {
                scaleX: 1,
                duration: .5,
            }, "p")
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
            <video ref={videoRef} muted loop playsInline className='w-full h-full object-cover' src="https://storage.googleapis.com/gweb-mobius-cdn/research-languages/uploads/6fa2f8761189a3cb68ae72a28c3f6b3f8599dbed.compressed.compressed.mp4"></video>
            <div className="overlay-hero w-full h-full absolute top-0 left-0 text-white flex flex-col items-center justify-center">
                <div className='overflow-hidden sm:h-[11vw] h-[5vw]'>
                    <h1 className='hero-txt1 sm:text-[9vw] text-[4vw] leading-none' style={{transform:"translateY(100%)"}}>More languages.</h1>
                </div>
                <div className='overflow-hidden sm:h-[11vw] h-[5vw]'>
                    <h1 className='hero-txt2 sm:text-[9vw] text-[4vw] leading-none' style={{transform:"translateY(100%)"}}>Fewer barriers.</h1>
                </div>
                <div className='hero-para flex flex-col items-center justify-center sm:gap-[4vw] gap-[1vw] mt-[2.5vw] opacity-0'>
                    <p className='sm:text-[4vw] text-[1.2vw] sm:w-[75%] w-[56%] text-center'>See how Google is expanding support for
                        thousands of the world's languages.</p>
                    <Link href="/contact" className='flex items-center justify-center sm:h-[8vw] h-[4vw]'>
                        <div className='text-white bg-[#1A73E8] w-fit capitalize sm:px-[4.5vw] px-[1.5vw] hover:px-[2vw] hover:sm:px-[5vw] transition-all duration-500 cursor-pointer sm:py-[2vw] py-[.6vw] hover:sm:py-[2.5vw] hover:py-[1vw] rounded-full font-semibold'>
                            <h4>Let's Connect</h4>
                        </div>
                    </Link>
                </div>
                <div className='ifram sm:hidden h-[2.6vw] scale-x-0 absolute bottom-[5%] left-1/2 -translate-x-1/2 flex'>
                    <img onClick={() => {
                        videoRef.current.currentTime = 1
                        videoRef.current.play()
                    }} className='h-full w-[5.3vw] object-cover transition-all duration-500  hover:w-[7.5vw]' src="https://lh3.googleusercontent.com/cCGdsw-Qj0GV01Jv4Q2VmtNUEZiZdPjZRa6Pn0NiS6r4QLg2lxapozN4tocEqXsphGZxFP9hFkjHXThJTCfk4dIlKd_3UVQVK8I=rw-s0-e365" alt="" />
                    <img onClick={() => {
                        videoRef.current.currentTime = 2
                        videoRef.current.play()
                    }} className='h-full w-[5.3vw] object-cover transition-all duration-500  hover:w-[7.5vw]' src="https://lh3.googleusercontent.com/mMu661DL7tny_32Cn8x5igtI0vOvBfhyH_bWHYGp_y_ZAYnCOy7TEIX0EzbMRWcYmMdDwbcVGTi3W42qQn4SYjCRTalHJGOjsEm4=rw-s0-e365" alt="" />
                    <img
                        onClick={() => {
                            videoRef.current.currentTime = 3
                            videoRef.current.play()
                        }} className='h-full w-[5.3vw] object-cover transition-all duration-500  hover:w-[7.5vw]' src="https://lh3.googleusercontent.com/TQNCgt6b9Xi0-ROnbEvuHIXYVUwnizeQqkj1NK2CCzn-MGKD1lo-YlWEJOJnQKn4iS2BaueWtCOhAfNc7kj07p5LAS86Q2w2Rx3nrQ=rw-s0-e365" alt="" />
                    <img onClick={() => {
                        videoRef.current.currentTime = 4.3
                        videoRef.current.play()
                    }} className='h-full w-[5.3vw] object-cover transition-all duration-500  hover:w-[7.5vw]' src="https://lh3.googleusercontent.com/g3j0qrjLbJXz2DUwgsqopUWZn-s_OI6S0yJXQ0MlWtjhW5zjK5JS7Cgds5IkSA4EtTNDqjdeC8PWuq2GY5tmdJ98CSNxXtvk1fX8=rw-s0-e365" alt="" />
                    <img onClick={() => {
                        videoRef.current.currentTime = 5.6
                        videoRef.current.play()
                    }} className='h-full w-[5.3vw] object-cover transition-all duration-500  hover:w-[7.5vw]' src="https://lh3.googleusercontent.com/P0d_WMkT9gerkFlT_QfsVZPt59i01TZCunNAgwr0NRa2hI-rGdX0S5jWFH6tLQdtR321bGdT0rpp4QaPL3V7hXvF6Dv__kiI8ts=rw-s0-e365" alt="" />
                    <img onClick={() => {
                        videoRef.current.currentTime = 8
                        videoRef.current.play()
                    }} className='h-full w-[5.3vw] object-cover transition-all duration-500  hover:w-[7.5vw]' src="https://lh3.googleusercontent.com/SbxgWpkFGO_0Yil0pCKNRB3WMujhXOQrbzabJR9rbTK3XSl1vd509G1ejncGb-jJzj1o04I1noG0LzxLdXpiMHeZsEUrJtSCQ24W=rw-s0-e365" alt="" />
                    <img onClick={() => {
                        videoRef.current.currentTime = 8.6
                        videoRef.current.play()
                    }} className='h-full w-[5.3vw] object-cover transition-all duration-500  hover:w-[7.5vw]' src="https://lh3.googleusercontent.com/oQzcAuwRpaMsT2KwWU3bpcUUgQd3zrQeoNiAm8IkiRlAPGDvqZRz5Ci-3W2zq2axhi4vZYwbyLbf5GUetd1SCXJepcuvkIqDvHCp=rw-s0-e365" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section1
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section1 = ({ navRef }) => {
    const videoRef = useRef(null)
    useEffect(() => {
        document.querySelector("body").style.overflow = "hidden"
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
        var tl = gsap.timeline()
        tl.to(".frame1", {
            onStart: () => {
                gsap.to(".loading", {
                    width: "100%",
                    duration: 4,
                    ease: "slow(0.7,0.7,false)",
                })
                gsap.to(".strip3", {
                    transform: "translateY(-2100%)",
                    duration: 4,
                })
                gsap.to(".strip2", {
                    transform: "translateY(-1000%)",
                    duration: 4,
                })
                gsap.to(".strip1", {
                    transform: "translateY(-100%)",
                    delay: 3,
                    duration: 1,
                })
            },
            opacity: 1,
            duration: 1,
            transform: "translate(0%,0%) rotate(-5deg) scale(1)",
            ease: "expo.inOut",
        })
        tl.to(".frame2", {
            opacity: 1,
            duration: 1,
            transform: "translate(0%,0%) rotate(5deg) scale(1)",
            ease: "expo.inOut",
        })
        tl.to(".frame3", {
            opacity: 1,
            duration: 1,
            transform: "translate(0%,0%) rotate(-5deg) scale(1)",
            ease: "expo.inOut",
        })
        tl.to(".frame4", {
            opacity: 1,
            duration: 1,
            transform: "translate(0%,0%) rotate(0deg) scale(1)",
            ease: "expo.inOut",
            onComplete: () => {
                gsap.set(".frame4", {
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) rotate(0deg) scale(1)",
                })
                gsap.to(".loading , .counter", {
                    opacity: 0,
                    bottom: "-100%",
                    ease: "expo.inOut",
                })
            }
        })
        tl.to(".frame4", {
            width: "100vw",
            height: "100vh",
            top: "50%",
            left: "50%",
            duration: 1,
            transform: "translate(-50%, -50%) rotate(0deg) scale(1)",
            ease: "power4.inOut",
            onComplete: () => {
                window.scrollTo(0, 0)
            }
        })
            .to(".loader", {
                opacity: 0,
                duration: .2,
                onComplete: () => {
                    document.querySelector("video").play()
                }
            })
            .to(".hero-txt1", {
                transform: "translateY(50%) scale(1.8)",
                opacity: 1,
                duration: .8,
                ease: "power4.in",
            })
            .to(".hero-txt2", {
                transform: "translateY(90%) scale(1.8)",
                opacity: 1,
                duration: .8,
                ease: "power4.in",
            })
            .to(".hero-txt1,.hero-txt2", {
                transform: "translateY(0%) scale(1)",
                opacity: 1,
                duration: .4,
            }, "a")
            .to(".hero-para", {
                transform: "translateY(0%)",
                opacity: 1,
                duration: .4,
                onComplete: () => {
                    document.querySelector("body").style.overflow = "none"
                }
            }, "a")
            .to(".ifram",{
                scaleX:1,
                duration:.5
            })

        ScrollTrigger.refresh();

        return () => {
            // Cleanup function to remove timeline and all ScrollTrigger instances
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            ScrollTrigger.refresh();
        };
    }, [])

    

    return (
        <div className='hero w-full h-screen relative'>
            <div className='loader pointer-events-none h-screen w-full bg-[#FFFFFF] fixed top-0 left-0 z-[99] flex items-center justify-center'>
                <div className='w-[12vw] h-[7vw] relative'>
                    <div className='frame4 z-[4] opacity-0  w-full h-full bg-blue-500 absolute' style={{ transform: "translate(-30%,180%) rotate(5deg) scale(1.2)" }}>
                        <img className='w-full h-full object-cover' src="https://lh3.googleusercontent.com/cCGdsw-Qj0GV01Jv4Q2VmtNUEZiZdPjZRa6Pn0NiS6r4QLg2lxapozN4tocEqXsphGZxFP9hFkjHXThJTCfk4dIlKd_3UVQVK8I=rw-s0-e365" alt="" />
                    </div>
                    <div className='frame2 z-[2] opacity-0 w-full h-full bg-blue-500 absolute' style={{ transform: "translate(-30%,180%) rotate(5deg) scale(1.2)" }}>
                        <img className='w-full h-full object-cover' src="https://lh3.googleusercontent.com/SbxgWpkFGO_0Yil0pCKNRB3WMujhXOQrbzabJR9rbTK3XSl1vd509G1ejncGb-jJzj1o04I1noG0LzxLdXpiMHeZsEUrJtSCQ24W=rw-s0-e365" alt="" />
                    </div>
                    <div className='frame1 z-[1] opacity-0 w-full h-full bg-red-500 absolute' style={{ transform: "translate(30%,180%) rotate(-5deg) scale(1.2)" }}>
                        <img className='w-full h-full object-cover' src="https://lh3.googleusercontent.com/P0d_WMkT9gerkFlT_QfsVZPt59i01TZCunNAgwr0NRa2hI-rGdX0S5jWFH6tLQdtR321bGdT0rpp4QaPL3V7hXvF6Dv__kiI8ts=rw-s0-e365" alt="" />
                    </div>
                    <div className='frame3 z-[3] opacity-0 w-full h-full bg-blue-500 absolute' style={{ transform: "translate(30%,180%) rotate(-5deg) scale(1.2)" }}>
                        <img className='w-full h-full object-cover' src="https://lh3.googleusercontent.com/TQNCgt6b9Xi0-ROnbEvuHIXYVUwnizeQqkj1NK2CCzn-MGKD1lo-YlWEJOJnQKn4iS2BaueWtCOhAfNc7kj07p5LAS86Q2w2Rx3nrQ=rw-s0-e365" alt="" />
                    </div>
                </div>
                <div className='counter absolute bottom-[5%] w-[5vw] h-[2vw]  left-1/2  -translate-x-1/2 flex items-center justify-between'>
                    <div className='w-[25%] overflow-hidden h-full'>
                        <div className='strip1 w-full h-full text-[1.6vw]'>
                            <h1 className='flex items-center justify-center h-full w-full' style={{ transform: "translateY(100%)" }}>1</h1>
                        </div>
                    </div>
                    <div className='w-[25%] overflow-hidden h-full '>
                        <div className='strip2 w-full h-full text-[1.6vw]' style={{ transform: "translateY(100%)" }}>
                            <h1 className='flex items-center justify-center h-full w-full'>0</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>1</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>2</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>3</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>4</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>5</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>6</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>7</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>8</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>9</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>0</h1>
                        </div>
                    </div>
                    <div className='w-[25%] overflow-hidden h-full text-[1.6vw]'>
                        <div className='strip3 w-full h-full' style={{ transform: "translateY(0%)" }}>
                            <h1 className='flex items-center justify-center h-full w-full'>0</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>1</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>2</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>3</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>4</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>5</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>6</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>7</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>8</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>9</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>0</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>0</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>1</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>2</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>3</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>4</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>5</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>6</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>7</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>8</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>9</h1>
                            <h1 className='flex items-center justify-center h-full w-full'>0</h1>
                        </div>
                    </div>
                    <div className='w-[25%] overflow-hidden h-full flex items-center text-[1.6vw]'>%</div>
                </div>
                <div className='loading absolute bottom-0 left-0 bg-black w-0 h-[.5vw]'></div>
            </div>
            <video ref={videoRef} muted loop playsInline className='w-full h-full object-cover' src="https://storage.googleapis.com/gweb-mobius-cdn/research-languages/uploads/6fa2f8761189a3cb68ae72a28c3f6b3f8599dbed.compressed.compressed.mp4"></video>
            <div className="overlay-hero w-full h-full absolute top-0 left-0 text-white flex flex-col items-center justify-center">
                <h1 className='hero-txt1 text-[4vw] leading-tight opacity-0' style={{ transform: "translateY(130%) scale(1.7)" }}>More languages.</h1>
                <h1 className='hero-txt2 text-[4vw] leading-tight opacity-0' style={{ transform: "translateY(170%) scale(1.7)" }}>Fewer barriers.</h1>
                <div className='hero-para flex flex-col items-center justify-center gap-[1vw] mt-[1.8vw] opacity-0' style={{ transform: "translateY(30%)" }}>
                    <p className='text-[1.2vw] w-[56%] text-center'>See how Google is expanding support for
                        thousands of the world's languages.</p>
                    <div className='flex items-center justify-center h-[4vw]'>
                        <div className='text-white bg-[#1A73E8] w-fit capitalize px-[1.5vw] hover:px-[2vw] transition-all duration-500 cursor-pointer py-[.6vw] hover:py-[1vw] rounded-full font-semibold'>
                            <h4>watch video</h4>
                        </div>
                    </div>
                </div>
                <div  className='ifram h-[2.6vw] scale-x-0 absolute bottom-[5%] left-1/2 -translate-x-1/2 flex'>
                    <img onClick={() => {
                        videoRef.current.currentTime = 1
                        videoRef.current.play()
                    }}   className='h-full w-[5.3vw] object-cover transition-all duration-500 hover:w-[7.5vw]' src="https://lh3.googleusercontent.com/cCGdsw-Qj0GV01Jv4Q2VmtNUEZiZdPjZRa6Pn0NiS6r4QLg2lxapozN4tocEqXsphGZxFP9hFkjHXThJTCfk4dIlKd_3UVQVK8I=rw-s0-e365" alt="" />
                    <img onClick={() => {
                        videoRef.current.currentTime = 2
                        videoRef.current.play()
                    }}  className='h-full w-[5.3vw] object-cover transition-all duration-500 hover:w-[7.5vw]' src="https://lh3.googleusercontent.com/mMu661DL7tny_32Cn8x5igtI0vOvBfhyH_bWHYGp_y_ZAYnCOy7TEIX0EzbMRWcYmMdDwbcVGTi3W42qQn4SYjCRTalHJGOjsEm4=rw-s0-e365" alt="" />
                    <img 
                    onClick={() => {
                        videoRef.current.currentTime = 3
                        videoRef.current.play()
                    }}  className='h-full w-[5.3vw] object-cover transition-all duration-500 hover:w-[7.5vw]' src="https://lh3.googleusercontent.com/TQNCgt6b9Xi0-ROnbEvuHIXYVUwnizeQqkj1NK2CCzn-MGKD1lo-YlWEJOJnQKn4iS2BaueWtCOhAfNc7kj07p5LAS86Q2w2Rx3nrQ=rw-s0-e365" alt="" />
                    <img onClick={() => {
                        videoRef.current.currentTime = 4.3
                        videoRef.current.play()
                    }}   className='h-full w-[5.3vw] object-cover transition-all duration-500 hover:w-[7.5vw]' src="https://lh3.googleusercontent.com/g3j0qrjLbJXz2DUwgsqopUWZn-s_OI6S0yJXQ0MlWtjhW5zjK5JS7Cgds5IkSA4EtTNDqjdeC8PWuq2GY5tmdJ98CSNxXtvk1fX8=rw-s0-e365" alt="" />
                    <img onClick={() => {
                        videoRef.current.currentTime = 5.6
                        videoRef.current.play()
                    }}   className='h-full w-[5.3vw] object-cover transition-all duration-500 hover:w-[7.5vw]' src="https://lh3.googleusercontent.com/P0d_WMkT9gerkFlT_QfsVZPt59i01TZCunNAgwr0NRa2hI-rGdX0S5jWFH6tLQdtR321bGdT0rpp4QaPL3V7hXvF6Dv__kiI8ts=rw-s0-e365" alt="" />
                    <img onClick={() => {
                        videoRef.current.currentTime = 8
                        videoRef.current.play()
                    }}   className='h-full w-[5.3vw] object-cover transition-all duration-500 hover:w-[7.5vw]' src="https://lh3.googleusercontent.com/SbxgWpkFGO_0Yil0pCKNRB3WMujhXOQrbzabJR9rbTK3XSl1vd509G1ejncGb-jJzj1o04I1noG0LzxLdXpiMHeZsEUrJtSCQ24W=rw-s0-e365" alt="" />
                    <img onClick={() => {
                        videoRef.current.currentTime = 8.6
                        videoRef.current.play()
                    }}   className='h-full w-[5.3vw] object-cover transition-all duration-500 hover:w-[7.5vw]' src="https://lh3.googleusercontent.com/oQzcAuwRpaMsT2KwWU3bpcUUgQd3zrQeoNiAm8IkiRlAPGDvqZRz5Ci-3W2zq2axhi4vZYwbyLbf5GUetd1SCXJepcuvkIqDvHCp=rw-s0-e365" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section1
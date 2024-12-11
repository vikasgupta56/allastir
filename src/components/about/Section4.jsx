import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section4 = () => {
    useEffect(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.timeline-section',
                start: 'top top',
                end: 'top -250%',
                pin: true,
                scrub: 1,
            }
        })
        tl
            .to(".timeline-strip", {
                height: "20%",
                duration: 1,
            }, "s")
            .to(".present-year , .timeline-title", {
                transform: "translateY(-100%)",
                duration: 1
            }, "s")
            .to(".timeline-para1", {
                opacity: 0,
                duration: 1
            }, "s")
            .to(".timeline-para2", {
                opacity: 1,
                duration: .3
            })
            .to(".tlig1", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1,
            }, "s")
            .to(".tlig2", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1,
            }, "s")
            .to(".dot-2", {
                backgroundColor: "#000"
            }, "a")
            .to(".dot-out2", {
                scale: 1
            }, "a")
            .to(".year2", {
                color: "black"
            }, "a")
            .to(".timeline-strip", {
                height: "40%",
                duration: 1,
            }, "s2")
            .to(".present-year , .timeline-title", {
                transform: "translateY(-200%)",
                duration: 1
            }, "s2")
            .to(".timeline-para2", {
                opacity: 0,
                duration: 1
            }, "s2")
            .to(".timeline-para3", {
                opacity: 1,
                duration: .3
            })
            .to(".tlig2", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1,
            }, "s2")
            .to(".tlig3", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1,
            }, "s2")
            .to(".dot-3", {
                backgroundColor: "#000"
            }, "b")
            .to(".dot-out3", {
                scale: 1
            }, "b")
            .to(".year3", {
                color: "black"
            }, "b")
            .to(".timeline-strip", {
                height: "60%",
                duration: 1,
            }, "s3")
            .to(".present-year , .timeline-title", {
                transform: "translateY(-300%)",
                duration: 1
            }, "s3")
            .to(".timeline-para3", {
                opacity: 0,
                duration: 1
            }, "s3")
            .to(".timeline-para4", {
                opacity: 1,
                duration: .3
            })
            .to(".tlig3", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1,
            }, "s3")
            .to(".tlig4", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1,
            }, "s3")
            .to(".dot-4", {
                backgroundColor: "#000"
            }, "c")
            .to(".dot-out4", {
                scale: 1
            }, "c")
            .to(".year4", {
                color: "black"
            }, "c")
            .to(".timeline-strip", {
                height: "80%",
                duration: 1,
            }, "s4")
            .to(".present-year , .timeline-title", {
                transform: "translateY(-400%)",
                duration: 1
            }, "s4")
            .to(".timeline-para4", {
                opacity: 0,
                duration: 1
            }, "s4")
            .to(".timeline-para5", {
                opacity: 1,
                duration: .3
            })
            .to(".tlig4", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1,
            }, "s4")
            .to(".tlig5", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1,
            }, "s4")
            .to(".dot-5", {
                backgroundColor: "#000"
            }, "d")
            .to(".dot-out5", {
                scale: 1
            }, "d")
            .to(".year5", {
                color: "black"
            }, "d")
            .to(".timeline-strip", {
                height: "100%",
                duration: 1,
            }, "s5")
            .to(".present-year , .timeline-title", {
                transform: "translateY(-500%)",
                duration: 1
            }, "s5")
            .to(".timeline-para5", {
                opacity: 0,
                duration: 1
            }, "s5")
            .to(".timeline-para6", {
                opacity: 1,
                duration: .3
            })
            .to(".tlig5", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1,
            }, "s5")
            .to(".tlig6", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1,
            }, "s5")
            .to(".dot-6", {
                backgroundColor: "#000"
            }, "e")
            .to(".dot-out6", {
                scale: 1
            }, "e")
            .to(".year6", {
                color: "black"
            }, "e")
        ScrollTrigger.refresh();

        return () => {
            // Cleanup function to remove timeline and all ScrollTrigger instances
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            ScrollTrigger.refresh();
        };
    }, [])
    return (
        <div className='timeline-section w-full  h-[100vh] flex sm:flex-col-reverse'>
            <div className='sm:w-full w-[42%] sm:h-[28vh]  h-full  flex flex-col justify-end'>
                <div className='w-full h-[72vh] pl-[2.5vw] sm:pl-[4vw] pb-[1vw] flex flex-col justify-between'>
                    <div className='sm:h-[14vw] h-[10vw] w-fit overflow-hidden '>
                        <h1 className='present-year sm:text-[12vw] text-[10vw] font-semibold leading-none'>1991</h1>
                        <h1 className='present-year sm:text-[12vw] text-[10vw] font-semibold leading-none'>1992</h1>
                        <h1 className='present-year sm:text-[12vw] text-[10vw] font-semibold leading-none'>1993</h1>
                        <h1 className='present-year sm:text-[12vw] text-[10vw] font-semibold leading-none'>1994</h1>
                        <h1 className='present-year sm:text-[12vw] text-[10vw] font-semibold leading-none'>1995</h1>
                        <h1 className='present-year sm:text-[12vw] text-[10vw] font-semibold leading-none'>1996</h1>
                    </div>
                    <div className='w-full h-[60%] flex flex-col justify-end sm:mb-[10vw]'>
                        <div className='sm:h-[8.5vw] h-[4.5vw] w-fit overflow-hidden sm:mb-[3vw]'>
                            <h2 className='timeline-title leading-1 sm:text-[5vw] text-[3vw] capitalize'>initial prospecting</h2>
                            <h2 className='timeline-title leading-1 sm:text-[5vw] text-[3vw] capitalize'>Plan Strategically</h2>
                            <h2 className='timeline-title leading-1 sm:text-[5vw] text-[3vw] capitalize'>Innovate Solutions</h2>
                            <h2 className='timeline-title leading-1 sm:text-[5vw] text-[3vw] capitalize'>Execute Efficiently</h2>
                            <h2 className='timeline-title leading-1 sm:text-[5vw] text-[3vw] capitalize'>Achieve Goals</h2>
                            <h2 className='timeline-title leading-1 sm:text-[5vw] text-[3vw] capitalize'>Transform Ideas</h2>
                        </div>
                        <div className="w-full relative h-[40%]">
                            <p className="timeline-para1 absolute w-[90%] sm:text-[4.5vw] text-[1vw] leading-1 text-[#80868B]">
                                The ancient site was rediscovered by chance during an archeological survey, revealing insights into long-lost civilizations.
                            </p>
                            <p className="timeline-para2 opacity-0 absolute w-[90%] sm:text-[4.5vw] text-[1vw] leading-1 text-[#80868B]">
                                After years of neglect, the region became a focal point of research, contributing to the cultural and historical narrative of the area.
                            </p>
                            <p className="timeline-para3 opacity-0 absolute w-[90%] sm:text-[4.5vw] text-[1vw] leading-1 text-[#80868B]">
                                The advancements in excavation technology allowed researchers to uncover artifacts that were previously inaccessible.
                            </p>
                            <p className="timeline-para4 opacity-0 absolute w-[90%] sm:text-[4.5vw] text-[1vw] leading-1 text-[#80868B]">
                                Local legends spoke of a hidden treasure buried beneath the hills, sparking curiosity and exploration for centuries.
                            </p>
                            <p className="timeline-para5 opacity-0 absolute w-[90%] sm:text-[4.5vw] text-[1vw] leading-1 text-[#80868B]">
                                Geological surveys showed evidence of a rare mineral deposit, attracting mining companies to the area in the early 1900s.
                            </p>
                            <p className="timeline-para6 opacity-0 absolute w-[90%] sm:text-[4.5vw] text-[1vw] leading-1 text-[#80868B]">
                                The transformation of the site into a UNESCO World Heritage location ensured its preservation for future generations.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='sm:w-full w-[57%] relative sm:h-fit sm:px-[4vw]'>
                <div className='sm:h-fit h-[28vh] flex flex-col justify-end pb-[1vw]'>
                    <div>
                        <h2 className='sm:text-[10vw] text-[3vw] font-semibold  mb-[1vw] capitalize'>Our history</h2>
                        <p className='sm:w-[100%] w-[70%] sm:text-[4.5vw] text-[1.2vw] leading-1 text-[#80868B] sm:mb-[4vw]'>ZCMC, and the Kajaran deposit, has a long standing history with animportant role in the development of the country and the region.</p>
                    </div>
                </div>
                <div className='w-full sm:h-[37vh]  h-[72vh] flex justify-between items-end pb-[1vw] sm:pb-[2vw] sm:mt-[13vw]'>
                    <div className='timeline w-[15%] h-full relative  sm:absolute sm:rotate-[-90deg] sm:top-[-15%] sm:left-1/2 sm:-translate-x-1/2 flex items-center'>
                        <div className='w-[1px] sm:h-[89vw] h-[66.5vh] bg-zinc-300'>
                            <div className='timeline-strip w-full h-0 bg-[#000]'></div>
                        </div>
                        <div className='w-full sm:h-[89vw]  h-full flex flex-col text-zinc-400 justify-between sm:pl-[0vw] pl-[1.2vw] sm:text-[4.5vw] text-[1.1vw]'>
                            <h2 className='text-black sm:relative sm:text-center  sm:rotate-90'>1991</h2>
                            <h2 className='year2 sm:relative sm:text-center  sm:rotate-90 sm:right-[100%]'>1992</h2>
                            <h2 className='year3 sm:relative sm:text-center  sm:rotate-90 '>1993</h2>
                            <h2 className='year4 sm:relative sm:text-center  sm:rotate-90 sm:right-[100%]'>1994</h2>
                            <h2 className='year5 sm:relative sm:text-center  sm:rotate-90 '>1995</h2>
                            <h2 className='year6 sm:relative sm:text-center  sm:rotate-90 sm:right-[100%]'>1996</h2>
                        </div>
                        <div className='w-[1.5vw] left-[-.75vw] sm:h-[92vw] h-full absolute top-0 sm:top-1/2 sm:-translate-y-1/2 flex flex-col justify-between items-center'>
                            <div className="dot1 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                                <div className="dot-1 w-[35%] h-[35%] bg-[#000] rounded-full"></div>
                                <div className='dot-out1 w-full h-full border border-[#000] scale-1 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full'></div>
                            </div>
                            <div className="dot2 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                                <div className="dot-2 w-[35%] h-[35%] bg-zinc-400 rounded-full "></div>
                                <div className='dot-out2 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full'></div>
                            </div>
                            <div className="dot3 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                                <div className="dot-3 w-[35%] h-[35%] bg-zinc-400 rounded-full "></div>
                                <div className='dot-out3 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full'></div>
                            </div>
                            <div className="dot4 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                                <div className="dot-4 w-[35%] h-[35%] bg-zinc-400 rounded-full "></div>
                                <div className='dot-out4 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full'></div>
                            </div>
                            <div className="dot5 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                                <div className="dot-5 w-[35%] h-[35%] bg-zinc-400 rounded-full "></div>
                                <div className='dot-out5 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full'></div>
                            </div>
                            <div className="dot6 relative  sm:w-[3.5vw] w-[1.5vw] sm:h-[3.5vw] h-[1.5vw] flex items-center justify-center">
                                <div className="dot-6 w-[35%] h-[35%] bg-zinc-400 rounded-full "></div>
                                <div className='dot-out6 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='sm:w-full w-[89%] sm:h-[80%] h-full relative rounded-lg overflow-hidden'>
                        <img style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }} className='tlig1 w-full h-full object-cover absolute top-0 left-0' src="https://images.unsplash.com/photo-1655711789589-b6367b970712?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" alt="" />
                        <img style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }} className='tlig2 w-full h-full object-cover absolute top-0 left-0' src="https://images.unsplash.com/photo-1728652964273-09085b4b22da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" alt="" />
                        <img style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }} className='tlig3 w-full h-full object-cover absolute top-0 left-0' src="https://images.unsplash.com/photo-1730315269715-1e25650773be?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <img style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }} className='tlig4 w-full h-full object-cover absolute top-0 left-0' src="https://images.unsplash.com/photo-1730472528691-e4624742c103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" alt="" />
                        <img style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }} className='tlig5 w-full h-full object-cover absolute top-0 left-0' src="https://images.unsplash.com/photo-1639464813750-a561e07bca2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" alt="" />
                        <img style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }} className='tlig6 w-full h-full object-cover absolute top-0 left-0' src="https://images.unsplash.com/photo-1730472528739-6b4c079085aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4
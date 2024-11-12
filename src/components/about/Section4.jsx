import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import TextPlugin from 'gsap/dist/TextPlugin'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

const Section4 = () => {
    useEffect(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.timeline-section',
                start: 'top top',
                end: 'top -230%',
                pin: true,
                scrub: 1,
            }
        })
        tl
            .to(".timeline-strip", {
                height: "20%",
                duration: 1,
                delay: 1
            }, "s")
            .to(".tlig1", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1,
                delay: 1
            }, "s")
            .to(".tlig2", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1,
                delay: 1
            }, "s")
            .to(".timeline-title", {
                text: "major undertaking",
                delay: 1,
                duration: 1
            }, "s")
            .to(".timeline-para", {
                text: "In 1924-25 Large-scale geological exploration work began in search of raw materials, non-ferrous and valuable metals. The Kajaran deposit was widely exploration (1930-1933). As a result, rich reserves of molybdenum were confirmed along with copper and a number of other metals",
                delay: 1,
                duration: 1
            }, "s")
            .to(".dot-2", {
                backgroundColor: "#000"
            }, "a")
            .to(".dot-out2", {
                scale: 1
            }, "a")
            .to(".present-year", {
                text: "1992"
            }, "a")

            .to(".year2", {
                color: "black"
            }, "a")
            .to(".timeline-strip", {
                height: "40%",
                duration: 1,
            }, "s2")
            .to(".tlig2", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1
            }, "s2")
            .to(".tlig3", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1
            }, "s2")
            .to(".timeline-title", {
                text: "Kajaran mine",
                duration: 1
            }, "s2")
            .to(".timeline-para", {
                text: "Based on these results, in 1936, a technical and economic assessment report for the Kajaran mine was compiled, which was approved by the Academy of Sciences of the USSR and the People's Commissariat for Non-ferrous Metallurgy. The decision of building the Kajaran copper-molybdenum combine was made.",
                duration: 1
            }, "s2")
            .to(".dot-3", {
                backgroundColor: "#000"
            }, "b")
            .to(".dot-out3", {
                scale: 1
            }, "b")
            .to(".present-year", {
                text: "1993"
            }, "b")
            .to(".year3", {
                color: "black"
            }, "b")
            .to(".timeline-strip", {
                height: "60%",
                duration: 1
            }, "s3")
            .to(".tlig3", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1
            }, "s3")
            .to(".tlig4", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1
            }, "s3")
            .to(".timeline-title", {
                text: "the combine",
                duration: 1
            }, "s3")
            .to(".timeline-para", {
                text: "In late 1940, the construction of the combine began, which was interrupted by the Great Patriotic War (WWII), and resumed only after the end of the war. In 1949, an experimental enrichment plant was built, and in 1952, the combine produced its first product, thereby starting the history of uninterrupted operation.",
                duration: 1
            }, "s3")
            .to(".dot-4", {
                backgroundColor: "#000"
            }, "c")
            .to(".dot-out4", {
                scale: 1
            }, "c")
            .to(".present-year", {
                text: "1994"
            }, "c")
            .to(".year4", {
                color: "black"
            }, "c")
            .to(".timeline-strip", {
                height: "80%",
                duration: 1
            }, "s4")
            .to(".tlig4", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1
            }, "s4")
            .to(".tlig5", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1
            }, "s4")
            .to(".timeline-title", {
                text: "open-pit operation",
                duration: 1
            }, "s4")
            .to(".timeline-para", {
                text: "The deposit was initially developed as an underground operation; later open pit mining started, and since 1962 the mine has been operated exclusively by open-pit method.",
                duration: 1
            }, "s4")
            .to(".dot-5", {
                backgroundColor: "#000"
            }, "d")
            .to(".dot-out5", {
                scale: 1
            }, "d")
            .to(".present-year", {
                text: "1995"
            }, "d")
            .to(".year5", {
                color: "black"
            }, "d")
            .to(".timeline-strip", {
                height: "100%",
                duration: 1
            },)
            .to(".tlig5", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1
            }, "s5")
            .to(".tlig6", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1
            }, "s5")
            .to(".timeline-title", {
                text: "recommissioning",
                duration: 1
            }, "s5")
            .to(".timeline-para", {
                text: "As a result of the economic crisis after Armenia’s independence in 1991, the operation of the combine was halted. It was recommissioned in 1994.",
                duration: 1
            }, "s5")
            .to(".dot-6", {
                backgroundColor: "#000"
            }, "e")
            .to(".dot-out6", {
                scale: 1
            }, "e")
            .to(".present-year", {
                text: "1996"
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
        <div className='timeline-section w-full h-[100vh] flex'>
            <div className='w-[42%] h-full  flex flex-col justify-between'>
                <h2 className='text-[2vw]  mb-[1vw] pl-[2.5vw]'>History</h2>
                <div className='w-full h-[72vh] pl-[2.5vw] pb-[1vw] flex flex-col justify-between'>
                    <h1 className='present-year text-[10vw] font-semibold leading-[.6]'>1991</h1>
                    <div>
                        <h2 className='timeline-title text-[3vw] mb-[1vw] capitalize'>initial prospecting</h2>
                        <p className='timeline-para w-[90%] text-[1vw] leading-tight text-[#80868B]'>Being located at a considerable distance from the communication routes of that time, the mine was initially exploited irregularly. The history of the formation and uninterrupted operation of the project is closely connected with the establishment of Soviet rule in Armenia, when mining enterprises, metallurgical plants, and mines were nationalized.</p>
                    </div>
                </div>
            </div>
            <div className='w-[57%] '>
                <div className='h-[28vh] flex flex-col justify-between pb-[1vw]'>
                    <h2 className='text-[1.2vw] font-bold'>Allastir</h2>
                    <div>
                        <h2 className='text-[3vw] mb-[1vw] capitalize'>Our history</h2>
                        <p className='w-[70%] text-[1.2vw] leading-tight text-[#80868B]'>ZCMC, and the Kajaran deposit, has a long standing history with animportant role in the development of the country and the region.</p>
                    </div>
                </div>
                <div className='w-full h-[72vh] flex justify-between pb-[1vw]'>
                    <div className='timeline w-[10%] h-full relative flex items-center'>
                        <div className='w-[1px] h-[68vh] bg-zinc-300'>
                            <div className='timeline-strip w-full h-0 bg-[#000]'></div>
                        </div>
                        <div className='w-full h-full flex flex-col text-zinc-400 justify-between pl-[1.2vw] text-[1.1vw]'>
                            <h2 className='text-black'>1991</h2>
                            <h2 className='year2'>1992</h2>
                            <h2 className='year3'>1993</h2>
                            <h2 className='year4'>1994</h2>
                            <h2 className='year5'>1995</h2>
                            <h2 className='year6'>1996</h2>
                        </div>
                        <div className='w-[1.5vw] left-[-.75vw] h-full absolute top-0 flex flex-col justify-between items-center'>
                            <div className="dot1 relative  w-[1.5vw] h-[1.5vw] flex items-center justify-center">
                                <div className="dot-1 w-[35%] h-[35%] bg-[#000] rounded"></div>
                                <div className='dot-out1 w-full h-full border border-[#000] scale-1 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full'></div>
                            </div>
                            <div className="dot2 relative  w-[1.5vw] h-[1.5vw] flex items-center justify-center">
                                <div className="dot-2 w-[35%] h-[35%] bg-zinc-400 rounded"></div>
                                <div className='dot-out2 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full'></div>
                            </div>
                            <div className="dot3 relative  w-[1.5vw] h-[1.5vw] flex items-center justify-center">
                                <div className="dot-3 w-[35%] h-[35%] bg-zinc-400 rounded"></div>
                                <div className='dot-out3 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full'></div>
                            </div>
                            <div className="dot4 relative  w-[1.5vw] h-[1.5vw] flex items-center justify-center">
                                <div className="dot-4 w-[35%] h-[35%] bg-zinc-400 rounded"></div>
                                <div className='dot-out4 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full'></div>
                            </div>
                            <div className="dot5 relative  w-[1.5vw] h-[1.5vw] flex items-center justify-center">
                                <div className="dot-5 w-[35%] h-[35%] bg-zinc-400 rounded"></div>
                                <div className='dot-out5 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full'></div>
                            </div>
                            <div className="dot6 relative  w-[1.5vw] h-[1.5vw] flex items-center justify-center">
                                <div className="dot-6 w-[35%] h-[35%] bg-zinc-400 rounded"></div>
                                <div className='dot-out6 w-full h-full border border-[#000] scale-0 absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[89%] h-full relative'>
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
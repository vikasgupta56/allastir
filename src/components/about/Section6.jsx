import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)
const Section6 = () => {
    useEffect(()=>{
        gsap.to(".leader-ship",{
            transform:"translateX(-50%)",
            duration:3.5,
            scrollTrigger:{
                trigger:".about-sec6",
                start: "top 0%",
                end: "top -150%",
                scrub: 1,
                pin: true,
            }
        }) 
        ScrollTrigger.refresh()

        return ()=>{
            ScrollTrigger.getAll().forEach(trigger=>trigger.kill())
            ScrollTrigger.refresh()
        }
    },[])
    return (
        <div className='about-sec6 h-screen'>
            <div className='leader-ship w-[200vw] h-screen flex' style={{ transform: "translateX(0%)" }}>
                <div className='w-[100vw] gap-[2.5vw] h-full  pl-[2.5vw] flex justify-between'>
                    <div className='w-[60%] h-full flex flex-col gap-[2vw] justify-center'>
                        <h2 className='text-[7vw] font-semibold leading-tight'>Our Leadership</h2>
                        <p className='text-[1vw] w-[80%]'>Our leadership at the Rashtriya Swabhimaan Sangh Party embodies a visionary and inclusive approach, driving us towards our mission to build an inclusive and prosperous India based on the principles of Integral Humanism and the New India Model of Akhand Bharat.</p>
                    </div>
                    <div className='px-[4vw] h-full flex items-center justify-center'>
                        <div className='w-[23vw]'>
                            <div className='w-full h-[26vw]'>
                                <img className='w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <div className='w-full mt-[.54vw]'>
                                <h4 className='text-[1.4vw] font-semibold'>Shri. Krrishna R. Dewassi</h4>
                                <h6 className='text-[1vw]'>National President</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100vw] h-full flex items-center pl-[4vw] gap-[8vw]'>
                    <div className='w-[23vw]'>
                        <div className='w-full h-[26vw]'>
                            <img className='w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='w-full mt-[.54vw]'>
                            <h4 className='text-[1.4vw] font-semibold'>Shri. Krrishna R. Dewassi</h4>
                            <h6 className='text-[1vw]'>National President</h6>
                        </div>
                    </div>
                    <div className='w-[23vw]'>
                        <div className='w-full h-[26vw]'>
                            <img className='w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className='w-full mt-[.54vw]'>
                            <h4 className='text-[1.4vw] font-semibold'>Shri. Krrishna R. Dewassi</h4>
                            <h6 className='text-[1vw]'>National President</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section6
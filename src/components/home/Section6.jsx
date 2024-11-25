import Link from 'next/link'
import React from 'react'

const Section6 = () => {
  return (
    <div className='w-full flex items-end justify-center px-[2.5vw] py-[4vw]'>
        <div className='contact-wrapper w-full h-[38vh] relative'>
            <video autoPlay muted loop playsInline className='w-full h-full object-cover' src="https://cdn.jasonbradley.co/pic/ea9d625c.mp4"></video>
        <div className="video-overlay w-full h-full absolute top-0 left-0  flex items-center justify-center">
            <Link href="/contact" id='home-connect' className='text-white text-[2vw] capitalize'>Let's connect</Link>
        </div>
        </div>

    </div>
  )
}

export default Section6
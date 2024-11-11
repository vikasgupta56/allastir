import React from 'react'

const Section6 = () => {
  return (
    <div className='w-full flex items-end justify-center px-[2.5vw] py-[4vw]'>
        <div className='contact-wrapper w-full h-[50vh] relative'>
            <video autoPlay muted loop playsInline className='w-full h-full object-cover' src="https://cdn.jasonbradley.co/pic/ea9d625c.mp4"></video>
        <div className="video-overlay w-full h-full absolute top-0 left-0 pointer-events-none  flex items-center justify-center">
            <h1 id='home-connect' className='text-white text-[2vw] capitalize'>Let's connect</h1>
        </div>
        </div>

    </div>
  )
}

export default Section6
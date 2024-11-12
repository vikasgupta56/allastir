import React from 'react'

const Section5 = () => {
  return (
    <div className='px-[2.5vw] flex justify-between w-full min-h-screen py-[8vw] gap-[.5vw]'>
      <div className='w-full h-screen '>
        <div className="w-full h-[40%]  flex flex-col justify-end pb-[1.2vw]">
          <h4 className='text-[2vw]'>Project</h4>
        </div>
        <div className="w-full h-[60%] bg-blue-200 rounded-md overflow-hidden">
          <video autoPlay muted loop playsInline className='w-full h-full object-cover' src="https://cdn.jasonbradley.co/pic/e41880eb-c899c2fa%20(1).mp4"></video>
        </div>
      </div>
      <div className='w-full h-screen '>
        <div className="w-full h-[40%]  flex flex-col justify-between pr-[5vw] pb-[1.2vw]">
          <h2 className='text-[3vw] leading-tight'>We are a Multi-Faceted Design Practice.</h2>
          <h4 className='text-[1vw]'>We partner with forward thinking clients, who don’t shy away from being different. Who challenge us to solve their problems, and collaborate with us, to build better brands and tell captivating stories.</h4>
        </div>
        <div className="w-full h-[60%] bg-blue-200 rounded-md overflow-hidden">
          <video autoPlay muted loop playsInline className='w-full h-full object-cover' src="https://cdn.jasonbradley.co/pic/1e50e423-e10aee53.mp4"></video>
        </div>
      </div>
    </div>
  )
}

export default Section5
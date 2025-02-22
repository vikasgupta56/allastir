import Image from 'next/image'
import React from 'react'

const Section5 = () => {
  return (
    <div className='px-[2.5vw] sm:px-[4vw] flex sm:flex-col-reverse justify-between w-full min-h-screen py-[8vw] gap-[.5vw]'>
       <div className='w-full h-[100vh] sm:h-fit'>
        <div className="w-full sm:h-[40%] h-[40%]  flex flex-col justify-between pr-[5vw] sm:pb-[5vw] pb-[1.2vw]">
          <h2 className='sm:text-[10vw] text-[3vw] leading-tight'>We are a Multi-Faceted Design Practice.</h2>
          <div>
          <p><strong>Unit 1</strong></p>
          <h4 className='sm:text-[4.5vw] text-[1vw] sm:mt-[2.5vw]'>Designed for precision and efficiency, Unit 1 is our foundation for high-quality API manufacturing. Equipped with advanced technology and rigorous quality control, it drives our commitment to excellence in pharmaceutical production.</h4>
          </div>
         </div>
        <div className="w-full sm:h-[35vh] h-[60%] bg-zinc-200 rounded-md overflow-hidden">
        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/unit1.png" alt='unit-image'/>
        </div>
      </div>
      <div className='w-full h-[100vh] sm:h-fit'>
        <div className="w-full sm:h-[40%] h-[40%]  flex flex-col  justify-end pr-[5vw] sm:pb-[5vw] pb-[1.2vw]">
          <p><strong>Unit 2</strong></p>
          <h4 className='sm:text-[4.5vw] text-[1vw] sm:mt-[2.5vw]'>Unit 2 expands our capabilities with increased production capacity and cutting-edge innovation. Built to meet global standards, it strengthens our ability to deliver advanced pharmaceutical solutions to markets worldwide.</h4>
        </div>
        <div className="w-full sm:h-[35vh] h-[60%] bg-zinc-200 rounded-md overflow-hidden">
        <Image width={1000} height={1000} className='w-full h-full object-cover' src="/unit2.jpg" alt='unit-image'/>
        </div>
      </div>
     
    </div>
  )
}

export default Section5
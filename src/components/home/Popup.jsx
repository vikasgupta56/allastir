import React from 'react'

const Popup = ({setisOpen ,popup}) => {
  return (
    <div className='w-full h-screen absolute top-0 left-0 pointer-events-none'>
      <div ref={popup} className="notification pointer-events-auto fixed scale-0 z-10 border bottom-[2vw] right-[2vw] w-[20%] p-[1vw] bg-white rounded-xl flex items-start justify-between gap-[1vw]">
    <div className='p-[1vw] px-[1.3vw] rounded-lg bg-blue-950/10 text-blue-900 flex items-center justify-center'>
    <i class="ri-notification-3-line text-[1vw]"></i>
    </div>
    <div>
      <h2 className='text-[1vw] font-semibold'>Upcoming event</h2>
      <p className='text-[.7vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className='text-white bg-[#2070DA] hover:bg-blue-900 text-[.6vw] font-regular px-[.9vw] py-[.4vw] mt-[.7vw] rounded-full'>Register Now</button>
    </div>
    <div onClick={()=>setisOpen(false)} className="close  scale-0 cursor-pointer absolute right-[.5vw] top-[.5vw] rounded-full bg-black/10 hover:bg-black/20  w-[1.5vw] h-[1.5vw] flex items-center justify-center"><i class="ri-close-line"></i></div>
  </div>
    </div>
  )
}

export default Popup
import React, { useRef } from 'react'

const Popup = ({ popup }) => {
  const bell = useRef(null)
  return (
    <div className='w-full h-screen absolute top-0 left-0 pointer-events-none'>
      <div ref={popup} className="notification pointer-events-auto fixed scale-0 z-10 border sm:bottom-[5vw] bottom-[2vw] sm:right-[4vw] right-[2vw] sm:w-[90%] w-[20%] sm:p-[4vw] p-[1vw] bg-white rounded-xl flex items-start justify-between sm:gap-[3vw] gap-[1vw]">
        <div className='sm:p-[3vw] p-[1vw] sm:px-[4vw] px-[1.3vw] rounded-lg bg-blue-950/10 text-blue-900 flex items-center justify-center'>
          <i className="ri-notification-3-line sm:text-[4vw] text-[1vw]"></i>
        </div>
        <div>
          <h2 className='sm:text-[5vw] text-[1vw] font-semibold'>Upcoming event</h2>
          <p className='sm:text-[3.5vw] text-[.7vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className='text-white bg-[#2070DA] hover:bg-blue-900 sm:text-[3vw] text-[.6vw] font-regular sm:px-[4vw] px-[.9vw] sm:py-[1.5vw] py-[.4vw] sm:mt-[1.5vw] mt-[.7vw] rounded-full'>Register Now</button>
        </div>
        <div onClick={() => {
          popup.current.classList.add("hidden")
          bell.current.style.opacity = 1
        }} className="close  scale-0 cursor-pointer absolute sm:right-[1.5vw] right-[.5vw] sm:top-[1.5vw] top-[.5vw] rounded-full bg-black/10 hover:bg-black/20  sm:w-[7vw] w-[1.5vw] sm:h-[7vw] h-[1.5vw] flex items-center justify-center"><i className="ri-close-line sm:text-[5vw]"></i></div>
      </div>
      <div ref={bell} onClick={() => {
        bell.current.style.opacity = 0
        popup.current.classList.remove("hidden")
      }} className='sm:w-[12vw] w-[2.8vw] opacity-0 sm:h-[12vw] h-[2.8vw] rounded-full bg-[#5088ff] hover:bg-[#2070DA]  fixed z-10 sm:bottom-[5vw] bottom-[2vw] sm:right-[4vw] right-[2vw] pointer-events-auto cursor-pointer flex items-center justify-center'>
        <i className="ri-notification-3-line sm:text-[4vw] text-[1vw] text-white"></i>
      </div>
    </div>
  )
}

export default Popup
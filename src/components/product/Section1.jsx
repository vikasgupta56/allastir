import React from 'react'

const Section1 = () => {
  return (
    <div className='relative w-full sm:h-[35vh] h-[60vh] flex flex-col items-center justify-center text-[15vw] font-bold uppercase'>
      <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center bg-black/50'>
        <h1 className='sm:text-[7vw] text-[4vw] text-white'>Our Product</h1>
      </div>
    </div>
  )
}

export default Section1
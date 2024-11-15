import React from 'react'

const Section2 = ({ title }) => {
    return (
        <div className='w-full min-h-screen p-[2.5vw] pt-[5vw]'>
            <h1 className='text-[3vw] font-semibold capitalize mb-[2.5vw]'>{title}</h1>
            <div className='w-full rounded-2xl overflow-hidden border border-black/20'>
                {[0, 1, 2, 3, 4, 5].map((p, i) => (<div key={i} className='product-wraper w-full h-[6.5vw] flex justify-end border-b border-black/20'>
                    <div className='w-[30%] h-[6.5vw] shrink-0 transition-all duration-150 overflow-hidden'>
                        <img className='w-full h-full object-cover object-bottom' src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className='product-txt w-[100%] full flex items-center px-[2vw] justify-between  shrink-0  hover:bg-[#58636e] hover:text-white transition-all duration-500'>
                       <div className='flex justify-between items-end w-full'>
                       <div className='flex flex-col'>
                            <h2 className='text-[1.5vw] capitalize leading-none mb-[.2vw]'>Orange pills</h2>
                            <p className='text-[.8vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className='num-c px-[1.2vw] py-[.2vw] rounded-full bg-black text-white text-[.7vw] font-semibold transition-all duration-300 relative'>
                        <h2 className='num transition-all duration-300'>{p+1}</h2>
                        <i class="ri-arrow-right-line text-[.7vw] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black transition-all duration-300 opacity-0"></i>
                        </div>
                       </div>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default Section2
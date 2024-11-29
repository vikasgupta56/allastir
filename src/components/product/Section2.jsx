import React from 'react'

const Section2 = ({ title }) => {
    return (
        <div className='w-full sm:min-h-[30vh] min-h-screen p-[2.5vw] sm:px-0 pt-[5vw]'>
            <h1 className='sm:text-[6vw] text-[3vw] font-semibold capitalize mb-[2.5vw] text-center'>{title}</h1>
            <div className='sm:w-[92%] w-[80%] mx-auto rounded-2xl overflow-hidden border border-black/20'>
                {[0, 1, 2, 3, 4, 5].map((p, i) => (<div key={i} className='product-wraper w-full sm:h-[10vw] h-[6vw] flex justify-end border-b border-black/20'>
                    <div className='w-[30%] sm:h-[10vw] h-[6vw] shrink-0 transition-all duration-150 overflow-hidden'>
                        <img className='w-full h-full object-cover object-bottom' src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className='product-txt w-[100%] full flex items-center sm:px-[4vw] px-[2vw] justify-between  shrink-0  transition-all duration-500'>
                       <div className='flex justify-between items-end w-full'>
                       <div className='flex flex-col'>
                            <h2 className='sm:text-[3vw] text-[1.5vw] capitalize leading-none mb-[.2vw]'>Orange pills</h2>
                        </div>
                        <div className='num-c sm:px-[3vw]  px-[1.2vw] sm:py-[.5vw] py-[.2vw] rounded-full bg-black text-white sm:text-[2vw] text-[.7vw] font-semibold transition-all duration-300 relative'>
                        <h2 className='num transition-all duration-300'>{p+1}</h2>
                        <i className="ri-arrow-right-line sm:text-[2vw] text-[.7vw] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black transition-all duration-300 opacity-0"></i>
                        </div>
                       </div>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default Section2
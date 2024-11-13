import React from 'react'

const Section2 = ({ title }) => {
    return (
        <div className='w-full min-h-screen p-[2.5vw] pt-[5vw]'>
            <h1 className='text-[3vw] capitalize mb-[2.5vw]'>{title}</h1>
            <div className='w-full rounded-2xl overflow-hidden border border-black/20'>
                {[0, 1, 2, 3, 4, 5].map((p, i) => (<div key={i} className='product-wraper w-full flex justify-end border-b border-black/20'>
                    <div className='w-[30%] transition-all duration-150'>
                        <img className='w-full h-full object-cover' src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/560/Classic-room-2-480x0.jpeg" alt="" />
                    </div>
                    <div className='product-txt w-[100%] flex items-center p-[2.5vw] shrink-0  hover:bg-black/10 transition-all duration-500'>
                        <div className='flex flex-col gap-[1vw]'>
                            <h2 className='text-[2vw] capitalize'>Family Room</h2>
                            <p className='text-[1vw] w-[57%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in eveniet sequi veniam itaque nihil fugit, quaerat ea autem eius?</p>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default Section2
import React from 'react'

const Section1 = () => {
    return (
        <div className='w-full min-h-screen flex gap-[1vw] items-center p-[2.5vw] pt-[5.5vw]'>
            <div className='w-[50%] h-[85vh] bg-zinc-100 rounded-2xl p-[2.5vw] flex flex-col justify-between'>
                <div className='w-full'>
                    <h1 className='text-[5vw] capitalize leading-none'>Contact us</h1>
                    <p className='text-[1vw] w-[80%] my-[1vw]'>Our secure system ensures a smooth and hassle-free booking experience. Don’t wait for your dental needs—book your appointment online today.</p>
                </div>
                <form className='w-full mt-[1.5vw] flex flex-col gap-[1vw]'>
                    <div className='w-full flex gap-[1vw]'>
                        <input className='w-[50%] p-[1.5vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='Name' />
                        <input className='w-[50%] p-[1.5vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='Phone Number' />
                    </div>
                    <div className='w-full flex gap-[1vw]'>
                        <input className='w-[50%] p-[1.5vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='Date' />
                        <input className='w-[50%] p-[1.5vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='Time' />
                    </div>
                    <div className='w-full flex'>
                        <input className='w-full p-[1.5vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='E-Mail Address' />
                    </div>
                    <div className='w-full flex'>
                        <textarea className='w-full resize-none h-[7vw] p-[1.5vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' placeholder='Write additional information'></textarea>
                    </div>
                    <div className='w-full flex items-center justify-center h-[4vw]'>
                        <div className='text-white bg-black w-full text-center capitalize px-[1.5vw] transition-all duration-500 cursor-pointer py-[.6vw] rounded-full font-semibold'>
                            <h4 className='text-[1.1vw] font-normal'>Submit</h4>
                        </div>
                    </div>
                </form>
            </div>
            <div className='w-[50%] h-[85vh] gap-[1vw]  rounded-2xl flex flex-col'>
                <div className='w-full h-[50%] rounded-2xl overflow-hidden'>
                    <img className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/662e5390115777703fa6e8da/663b51da0bf50313bd8b4a39_Woman%20Contact-p-800.webp" alt="" />
                </div>
                <div className='w-full h-[50%]  rounded-2xl bg-zinc-100 flex flex-wrap p-[2.5vw] justify-between'>
                    <div className='w-[49%] h-fit'>
                        <h4 className='text-[1vw] font-semibold'>Address</h4>
                        <p className='text-[1.1vw] w-[60%] font-light mt-[.5vw]'>Sonnenstraße 87
                            10117 Berlin
                            Germany</p>
                    </div>
                    <div className='w-[49%] h-fit'>
                        <h4 className='text-[1vw] font-semibold'>Telephone</h4>
                        <p className='text-[1.1vw] w-[60%] font-light mt-[.5vw]'>+49 0143 457632</p>
                    </div>
                    <div className='w-[49%] h-fit'>
                        <h4 className='text-[1vw] font-semibold'>Opening Times</h4>
                        <p className='text-[1.1vw] w-[60%] font-light mt-[.5vw]'>Monday to Friday 9-5pm
                            Saturday 6-12pm
                            Sunday Closed</p>
                    </div>
                    <div className='w-[49%] h-fit'>
                        <h4 className='text-[1vw] font-semibold'>E-Mail Adress</h4>
                        <p className='text-[1.1vw] w-[60%] font-light mt-[.5vw]'>marc@webflow.io</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
import React from 'react'

const Section1 = () => {
    return (
        <div className='w-full min-h-screen flex sm:flex-col sm:gap-[6vw] gap-[1vw] items-center p-[2.5vw] sm:pt-[20vw] sm:px-[4vw] pt-[5.5vw]'>
            <div className='sm:w-full w-[50%] sm:h-[50vh] h-[85vh] sm:bg-transparent  bg-zinc-100/40 rounded-2xl sm:p-0 p-[2.5vw] flex flex-col justify-between'>
                <div className='w-full'>
                    <h1 className='sm:text-[10vw] text-[5vw] capitalize leading-none'>Contact us</h1>
                    <p className='sm:text-[3.5vw] text-[1vw] w-[80%] sm:my-[4vw] my-[1vw]'>Our secure system ensures a smooth and hassle-free booking experience. Don’t wait for your dental needs—book your appointment online today.</p>
                </div>
                <form className='w-full mt-[1.5vw] flex flex-col sm:gap-[3vw] gap-[1vw] sm:text-[3.5vw]'>
                    <div className='w-full flex sm:gap-[3vw] gap-[1vw]'>
                        <input className='w-[50%] p-[1.5vw] sm:py-[1vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='Name' />
                        <input className='w-[50%] p-[1.5vw] sm:py-[1vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='Phone Number' />
                    </div>
                    <div className='w-full flex sm:gap-[3vw] gap-[1vw]'>
                        <input className='w-[50%] p-[1.5vw] sm:py-[1vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='Date' />
                        <input className='w-[50%] p-[1.5vw] sm:py-[1vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='Time' />
                    </div>
                    <div className='w-full flex'>
                        <input className='w-full p-[1.5vw] sm:py-[1vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='E-Mail Address' />
                    </div>
                    <div className='w-full flex'>
                        <textarea className='w-full resize-none sm:h-[18vw] h-[7vw] p-[1.5vw] sm:py-[1vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' placeholder='Write additional information'></textarea>
                    </div>
                    <div className='w-full flex items-center justify-center sm:h-[7vw] h-[4vw] sm:mt-[2vw]'>
                        <div className='text-white bg-black w-full text-center capitalize px-[1.5vw] transition-all duration-500 cursor-pointer sm:py-[3vw] py-[.6vw] rounded-full font-semibold'>
                            <h4 className='sm:text-[3.5vw] text-[1.1vw] font-normal'>Submit</h4>
                        </div>
                    </div>
                </form>
            </div>
            <div className='sm:w-full w-[50%] sm:h-[50vh] h-[85vh] sm:gap-[6vw] gap-[1vw]  rounded-2xl flex flex-col'>
                <div className='w-full h-[50%] rounded-2xl overflow-hidden'>
                    <img className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/662e5390115777703fa6e8da/663b51da0bf50313bd8b4a39_Woman%20Contact-p-800.webp" alt="" />
                </div>
                <div className='w-full h-[50%]  rounded-2xl sm:bg-transparent bg-zinc-100/40 flex flex-wrap sm:p-0 p-[2.5vw] justify-between'>
                    <div className='w-[49%] h-fit'>
                        <h4 className='sm:text-[3.6vw] text-[1vw] font-semibold'>Address</h4>
                        <p className='sm:text-[3.5vw] text-[1.1vw] sm:w-[80%] w-[60%] font-light mt-[.5vw]'>Sonnenstraße 87
                            10117 Berlin
                            Germany</p>
                    </div>
                    <div className='w-[49%] h-fit'>
                        <h4 className='sm:text-[3.6vw] text-[1vw] font-semibold'>Telephone</h4>
                        <p className='sm:text-[3.5vw] text-[1.1vw] sm:w-[80%] w-[60%] font-light mt-[.5vw]'>+49 0143 457632</p>
                    </div>
                    <div className='w-[49%] h-fit'>
                        <h4 className='sm:text-[3.6vw] text-[1vw] font-semibold'>Opening Times</h4>
                        <p className='sm:text-[3.5vw] text-[1.1vw] sm:w-[80%] w-[60%] font-light mt-[.5vw]'>Monday to Friday 9-5pm
                            Saturday 6-12pm
                            Sunday Closed</p>
                    </div>
                    <div className='w-[49%] h-fit'>
                        <h4 className='sm:text-[3.6vw] text-[1vw] font-semibold'>E-Mail Adress</h4>
                        <p className='sm:text-[3.5vw] text-[1.1vw] sm:w-[80%] w-[60%] font-light mt-[.5vw]'>marc@webflow.io</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
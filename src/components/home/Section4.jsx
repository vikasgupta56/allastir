import Link from 'next/link'
import React from 'react'

const Section4 = () => {
    return (
        <div className='w-full sm:h-[35vh] h-[63vh] flex  flex-col'>
            <h2 className='sm:text-[10vw] text-[3vw] font-semibold sm:mb-[3vw] sm:mt-[2vw] mb-[2vw] text-center'>Our Products</h2>
            <div className='w-full sm:h-[60vw]  h-[40vh]  flex items-center overflow-hidden'>
                <div className='product-marquee w-fit h-full flex items-start sm:gap-[1vw] gap-[.5vw] px-[.25vw]'>
                    <Link href='/product' className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/8eca099bc37b40791bcaefb770c1e95a07dd2ebe-1416x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] w-full items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/fc18a235ae5d6d22d752aeb9df4af190647246b0-700x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[70%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/80007803615590b3d31a96268109518e0e3a538e-700x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/6df2923a5a613283f3005f3326c560fef6310784-1416x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/c17ab0360b99fc853dbacffe76ca234cedb5412b-700x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/0227727b9c95b12841bee0e48a47430151bca781-1416x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/8eca099bc37b40791bcaefb770c1e95a07dd2ebe-1416x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/fc18a235ae5d6d22d752aeb9df4af190647246b0-700x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[70%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/80007803615590b3d31a96268109518e0e3a538e-700x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/6df2923a5a613283f3005f3326c560fef6310784-1416x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/c17ab0360b99fc853dbacffe76ca234cedb5412b-700x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/0227727b9c95b12841bee0e48a47430151bca781-1416x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                </div>
                <div className='product-marquee w-fit h-full flex items-start sm:gap-[1vw] gap-[.5vw] px-[.25vw]'>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/8eca099bc37b40791bcaefb770c1e95a07dd2ebe-1416x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/fc18a235ae5d6d22d752aeb9df4af190647246b0-700x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[70%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/80007803615590b3d31a96268109518e0e3a538e-700x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/6df2923a5a613283f3005f3326c560fef6310784-1416x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/c17ab0360b99fc853dbacffe76ca234cedb5412b-700x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/0227727b9c95b12841bee0e48a47430151bca781-1416x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/8eca099bc37b40791bcaefb770c1e95a07dd2ebe-1416x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/fc18a235ae5d6d22d752aeb9df4af190647246b0-700x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[70%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/80007803615590b3d31a96268109518e0e3a538e-700x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[85%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/6df2923a5a613283f3005f3326c560fef6310784-1416x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/c17ab0360b99fc853dbacffe76ca234cedb5412b-700x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                    <Link href="/product" className='mq-card sm:w-[40vw] w-[14vw] h-full'>
                        <div className='w-full h-[45%] rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://cdn.sanity.io/images/givbmsph/production/0227727b9c95b12841bee0e48a47430151bca781-1416x796.jpg?auto=format&w=768" alt="" />
                        </div>
                        <div className='flex gap-[.5vw] items-center h-[10%]'>
                            <span className='sm:w-[1vw] w-[.3vw] sm:h-[1vw] h-[.3vw] bg-black rounded-full'></span>
                            <span className='relative h-full flex overflow-hidden items-center'>
                                <h3 className='sm:text-[4vw] text-[.9vw] capitalize font-semibold whitespace-nowrap'>product name</h3>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Section4

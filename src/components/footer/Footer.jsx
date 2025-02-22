import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full sm:h-[60vh] h-[50vh]   p-[4vw] sm:p-[4vw] sm:pb-[6vw] px-[2.5vw]'>
      <div className='w-full h-full flex sm:flex-col sm:justify-between'>
        <div className='sm:w-full w-1/2 sm:h-fit h-full flex flex-col justify-between'>
          <Image width={1000} height={1000} className='w-[200px] h-auto' src="/logo-with-tag.png" alt='logo' />
          <p className='sm:hidden text-[.8vw] opacity-[.7]'>All Rights Reserved © Allastir Pvt. Ltd.</p>
        </div>
        <div className='sm:w-full w-1/2 sm:h-fit h-full sm:text-[4.5vw] flex sm:flex-wrap sm:mt-[10vw] capitalize sm:justify-between'>
          <div className='sm:w-[48%] w-[33.3%]  sm:h-fit  h-full flex flex-col sm:gap-[4vw] gap-[1vw]'>
            <h2 className='text-[1.1vw]'><strong>Quick Link</strong></h2>
            <div className='flex flex-col gap-[.5vw] sm:h-fit h-[70%]'>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/product">Product</Link>
              <Link target='_blank' href="/Allaster_Brochure.pdf">Brochure</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className='sm:w-[48%] w-[33.3%] sm:h-fit  h-full flex flex-col sm:gap-[4vw] gap-[1vw]'>
            <h2 className='text-[1.1vw]'><strong>Info</strong></h2>
            <div className='flex flex-col gap-[.5vw] sm:h-fit h-[70%]'>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Use</Link>
              <Link href="/">Info@allastir.com</Link>
            </div>
          </div>
          <div className='sm:w-full w-[50%] sm:h-fit sm:mt-[12vh]  h-full flex flex-col sm:gap-[4vw] gap-[1vw]'>
            <h2 className='text-[1.1vw]'><strong>Address</strong></h2>
            <div className='flex flex-col gap-[.5vw] sm:h-fit h-[70%]'>
              <a
              
                href="https://www.google.com/maps/place/Allastir+Private+Limited/@13.2049661,80.2602679,17z/data=!3m1!4b1!4m6!3m5!1s0x3a527bd3e5162223:0xf46d6c8e7f745a4b!8m2!3d13.2049661!4d80.2628428!16s%2Fg%2F11fv45s00w?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Unit 1:</strong> Plot No. 12, Shed No. 9A, Sidco Industrial Estate, Vichoor, Manali New Town, Chennai - 600103, Tamilnadu, INDIA
              </a>
              <a target='_blank' href="https://maps.app.goo.gl/j87WGfps9Go8yHrz7"><strong>Unit 2 :</strong> Plot No. 8-7, 8-8, 8-17, 8-18, APIIC Industrial Park, Attivaram Village, Ozili Mandal, Tirupati District, Andhra Pradesh -524 421.</a>
            </div>
            <div className='w-full flex justify-between items-center'>
              <p className='sm:block hidden text-[3vw] opacity-[.7]'>All Rights Reserved © Allastir Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
import Section1 from '@/components/contact/Section1'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React, { useRef } from 'react'

const Contact = () => {
  return (
    <div className='w-full relative overflow-hidden'>
        <Navbar/>
        <Section1/>
        <Footer/>
    </div>
  )
}

export default Contact
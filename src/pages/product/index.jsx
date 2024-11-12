import Section1 from '@/components/product/Section1'
import Footer from '@/components/footer/Footer'
import Section2 from '@/components/home/Section2'
import Navbar from '@/components/navbar/Navbar'
import React, { useRef } from 'react'

const index = () => {
    const navRef = useRef(null)
  return (
    <div className='w-full relative'>
        <Navbar navRef={navRef}/>
        <Section1 navRef={navRef}/>
        <Section2/>
        <Footer/>
    </div>
  )
}

export default index
import Footer from '@/components/footer/Footer'
import Section1 from '@/components/home/Section1'
import Section2 from '@/components/home/Section2'
import Section3 from '@/components/home/Section3'
import Section4 from '@/components/home/Section4'
import Section5 from '@/components/home/Section5'
import Section6 from '@/components/home/Section6'
import Navbar from '@/components/navbar/Navbar'
import React, { useRef } from 'react'

const index = () => {
  const navRef = useRef(null)
  return (
    <div className='relative'>
      <Navbar navRef={navRef}/>
      <Section1 navRef={navRef}/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
  )
}

export default index
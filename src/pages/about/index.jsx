import Section1 from '@/components/about/Section1'
import Section3 from '@/components/about/Section3'
import Section4 from '@/components/about/Section4'
import Section5 from '@/components/about/Section5'
import Section6 from '@/components/about/Section6'
import Footer from '@/components/footer/Footer'
import Section2 from '@/components/home/Section2'
import Navbar2 from '@/components/navbar/Navbar2'
import React, { useRef } from 'react'

const index = () => {
  return (
    <div className='w-full relative'>
      <Navbar2/>
      <Section1 />
      <Section2 />
      <Section3/>
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  )
}

export default index
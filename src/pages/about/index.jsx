import Section1 from '@/components/about/Section1'
import Section3 from '@/components/about/Section3'
import Section4 from '@/components/about/Section4'
import Section5 from '@/components/about/Section5'
import Section6 from '@/components/about/Section6'
import Footer from '@/components/footer/Footer'
import Section2 from '@/components/home/Section2'
import Navbar from '@/components/navbar/Navbar'
import React, { useRef } from 'react'

const index = () => {
  const navRef = useRef(null)
  return (
    <div className='w-full relative overflow-hidden'>
      <Navbar navRef={navRef} />
      <Section1 navRef={navRef}/>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  )
}

export default index
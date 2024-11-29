import Footer from '@/components/footer/Footer'
import Popup from '@/components/home/Popup'
import Section1 from '@/components/home/Section1'
import Section2 from '@/components/home/Section2'
import Section3 from '@/components/home/Section3'
import Section4 from '@/components/home/Section4'
import Section5 from '@/components/home/Section5'
import Section6 from '@/components/home/Section6'
import Navbar from '@/components/navbar/Navbar'
import React, {useRef, useState } from 'react'

const index = () => {
  const navRef = useRef(null)
  const popup = useRef(null)



  return (
    <div className='relative overflow-hidden'>
      <Navbar navRef={navRef}/>
      <Popup popup={popup} />
      <Section1 navRef={navRef} popup={popup}/>
      <Section2 />
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
  )
}

export default index
import Footer from '@/components/footer/Footer'
import Popup from '@/components/home/Popup'
import Section1 from '@/components/home/Section1'
import Section2 from '@/components/home/Section2'
import Section3 from '@/components/home/Section3'
import Section4 from '@/components/home/Section4'
import Section5 from '@/components/home/Section5'
import Section6 from '@/components/home/Section6'
import Navbar from '@/components/navbar/Navbar'
import React, { useRef, useState } from 'react'

const index = () => {
  const navRef = useRef(null)
  const popup = useRef(null)
  const bluetxt = "Allastir instituted the services in 2010 with a motive to cater the pharmaceutical industry with niche API's."
  const normaltxt = "In Allastir we strongly believe in teamwork and customer satisfaction. Allastir is backed by the strong R&D team who are passionate about what they do. We manufacture niche API's with high quality which are suitable for formulations like tablets, capsules, soft gelatins and oral liquids."

  return (
    <div className='relative overflow-hidden'>
      <Navbar navRef={navRef} />
      <Popup popup={popup} />
      <Section1 navRef={navRef} popup={popup} />
      <Section2 bluetxt={bluetxt} normaltxt={normaltxt} />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  )
}

export default index
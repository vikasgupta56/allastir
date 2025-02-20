import Section1 from '@/components/about/Section1'
import Section3 from '@/components/about/Section3'
import Section4 from '@/components/about/Section4'
import Section5 from '@/components/about/Section5'
import Section6 from '@/components/about/Section6'
import Footer from '@/components/footer/Footer'
import Section2 from '@/components/home/Section2'
import Navbar2 from '@/components/navbar/Navbar2'
// import Navbar from '@/components/navbar/Navbar'
import React, { useRef } from 'react'

const index = () => {
  // const navRef = useRef(null)
  const bluetxt = "Incepted and R&D activities started in 2010, Allastir boasts a state-of-the-art facility with an R&D and Analytical lab located in Chennai, India."
  const normaltxt = " Specializing in developing and manufacturing niche Active Pharmaceutical Ingredients, the company has consistently exhibited 100% year-over-year (YOY) growth since its inception. Striving to develop long and cardinal relationships with its clients by extending quality service, Allastir is a GMP and ISO-certified company."

  return (
    <div className='w-full relative overflow-hidden'>
      {/* <Navbar navRef={navRef} /> */}
      <Navbar2/>
      <Section1/>
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
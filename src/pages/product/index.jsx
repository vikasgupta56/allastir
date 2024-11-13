import Section1 from '@/components/product/Section1'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React, { useRef } from 'react'
import Section2 from '@/components/product/Section2'

const index = () => {
    const navRef = useRef(null)
  return (
    <div className='w-full relative'>
        <Navbar navRef={navRef}/>
        <Section1 navRef={navRef}/>
        <Section2 title={"Products under Offering"}/>
        <Section2 title={"Products under Pipeline"}/>
        <Section2 title={"Finished Products "}/>
        <Section2 title={"Products Under Development"}/>
        <Footer/>
    </div>
  )
}

export default index
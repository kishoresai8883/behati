import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Partner from '../components/Partner'
import Testimonial from '../components/Testimonial'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Service from '../components/Service'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Service/>
      <About/>
      <Partner/>
      <Testimonial/>
      <CTA/>
    </div>
  )
}

export default Home

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

const Hero = () => {
  return (
<section className="hero-section mx-auto min-h-screen flex items-center px-6 lg:px-30 bg-white">
  <div className="flex w-full">
    {/* Left side (50%) - Content */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center mt-24">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        Your Digital Transformation Partner
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        We deliver world-class software solutions tailored to your business needs. Let's build something amazing together.
      </p>
      <div>
        <NavLink to="/contact" className="inline-block px-8 py-3 text-white font-semibold bg-blue-700 hover:bg-blue-800 rounded-lg transition">
          Let's Talk
        </NavLink>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero;
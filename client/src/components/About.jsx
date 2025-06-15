import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <section className="relative overflow-hidden bg-gray-100 py-24 sm:py-32 lg:py-40">
  <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-50 to-white"></div>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-16">
      {/* Left Image or Visual */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="About us"
          className="rounded-3xl shadow-xl ring-1 ring-gray-900/10"
        />
        <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          We’re changing the way businesses grow
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          At Dimiour, we specialize in delivering tailored digital solutions that drive measurable impact.
          Our mission is to combine strategy, design, and technology to help organizations succeed in a digital-first world.
        </p>
        <dl className="mt-10 space-y-6 text-base leading-7 text-gray-600">
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <svg className="absolute left-1 top-1 h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 10.882l7.997-4.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 5-8-5V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Tailored Solutions.
            </dt>{' '}
            <dd className="inline">We don’t believe in one-size-fits-all. Everything is customized to your goals.</dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <svg className="absolute left-1 top-1 h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z" />
                <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v10H5V5z" clipRule="evenodd" />
              </svg>
              Creative Approach.
            </dt>{' '}
            <dd className="inline">Our design-first mindset ensures your brand makes a lasting impact.</dd>
          </div>
          <div className="relative pl-9">
            <dt className="inline font-semibold text-gray-900">
              <svg className="absolute left-1 top-1 h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0l.322 1.328a1.75 1.75 0 001.342 1.342l1.328.322c1.756.426 1.756 2.924 0 3.35l-1.328.322a1.75 1.75 0 00-1.342 1.342l-.322 1.328c-.426 1.756-2.924 1.756-3.35 0l-.322-1.328a1.75 1.75 0 00-1.342-1.342l-1.328-.322c-1.756-.426-1.756-2.924 0-3.35l1.328-.322a1.75 1.75 0 001.342-1.342l.322-1.328z" />
              </svg>
              Results Driven.
            </dt>{' '}
            <dd className="inline">We focus on metrics that move the needle for your business.</dd>
          </div>
        </dl>

        <div className="mt-10">
          <NavLink
            to="/about"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition"
          >
            Learn More About Us
          </NavLink>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default About


import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Partner from '../components/Partner'
import Testimonial from '../components/Testimonial'
import CTA from '../components/CTA'
import Service from '../components/Service'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Partner/>
      <About/>
      <Service/>
      <Testimonial/>
      <CTA/>
    </div>
  )
}

export default Home

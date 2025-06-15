import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Service1 from './pages/Service1'
import Service2 from './pages/Service2';
import Service3 from './pages/Service3';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2'
import Product3 from './pages/Product3';
import Product4 from './pages/Product4';
import Product5 from './pages/Product5';
import Product6 from './pages/Product6';
import Product7 from './pages/Product7';
import Product8 from './pages/Product8';
import Solution1 from './pages/Solution1';
import Solution2 from './pages/Solution2';
import Solution3 from './pages/Solution3';
import Solution4 from './pages/Solution4';
import Insight1 from './pages/Insight1';
import Insight2 from './pages/Insight2';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen overflow-x-hidden'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service1" element={<Service1/>} />
          <Route path="/service2" element={<Service2 />} />
          <Route path="/service3" element={<Service3 />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/product2" element={<Product2/>}/>
          <Route path="/product3" element={<Product3/>}/>
          <Route path="/product4" element={<Product4/>}/>
          <Route path="/product5" element={<Product5/>}/>
          <Route path="/product6" element={<Product6/>}/>
          <Route path="/product7" element={<Product7/>}/>
          <Route path="/product8" element={<Product8/>}/>
          <Route path="/solution1" element={<Solution1/>}/>
          <Route path="/solution2" element={<Solution2/>}/>
          <Route path="/solution3" element={<Solution3/>}/>
          <Route path="/solution4" element={<Solution4/>}/>
          <Route path="/insight1" element={<Insight1 />} />
          <Route path="/insight2" element={<Insight2 />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App

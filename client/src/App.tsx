import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
import Service4 from './pages/Service4';
import Service5 from './pages/Service5'
import Service6 from './pages/Service6';
import Service7 from './pages/Service7';
import Service8 from './pages/Service8';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
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
          <Route path="/service4" element={<Service4 />} />
          <Route path="/service5" element={<Service5/>}/>
          <Route path="/service6" element={<Service6/>}/>
          <Route path="/service7" element={<Service7/>}/>
          <Route path="/service8" element={<Service8/>}/>
          <Route path="/product1" element={<Product1/>}/>
          <Route path="/product2" element={<Product2/>}/>
          <Route path="/product3" element={<Product3/>}/>
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

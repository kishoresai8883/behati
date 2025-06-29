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
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import Solution1 from './pages/Solution1';
import Solution2 from './pages/Solution2';
import Solution3 from './pages/Solution3';
import Solution4 from './pages/Solution4';
import Insight1 from './pages/Insight1';
import Insight2 from './pages/Insight2';
import Cloud from './pages/Cloud';
import CloudMigration from './pages/CloudMigration';
import MainframeModernization from './pages/MainframeModernization';
import SapOnCloud from './pages/SapOnCloud';
import CloudFinOps from './pages/CloudFinOps';
import CloudSecurity from './pages/CloudSecurity';
import PlatformEngineering from './pages/PlatformEngineering';
import CloudManagedServices from './pages/CloudManagedServices';
import CloudAdvisorySmeServices from './pages/CloudAdvisorySmeServices';
import Cybersecurity from './pages/Cybersecurity';
import DigitalServices from './pages/DigitalServices';
import Blockchain from './pages/Blockchain';
import Saas from './pages/Saas';
import ManagedServices from './pages/ManagedServices';
import DataAnalytics from './pages/DataAnalytics';
import QualityEngineering from './pages/QualityEngineering';

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
          <Route path="/product1" element={<Product1/>}/>
          <Route path="/product2" element={<Product2/>}/>
          <Route path="/product3" element={<Product3/>}/>
          <Route path="/solution1" element={<Solution1/>}/>
          <Route path="/solution2" element={<Solution2/>}/>
          <Route path="/solution3" element={<Solution3/>}/>
          <Route path="/solution4" element={<Solution4/>}/>
          <Route path="/insight1" element={<Insight1 />} />
          <Route path="/insight2" element={<Insight2 />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/cloud/cloud-migration" element={<CloudMigration/>} />
          <Route path="/cloud/mainframe-modernization" element={<MainframeModernization />} />
          <Route path="/cloud/sap-on-cloud" element={<SapOnCloud />} />
          <Route path="/cloud/cloud-finops" element={<CloudFinOps />} />
          <Route path="/cloud/cloud-security" element={<CloudSecurity/>}/>
          <Route path="/cloud/platform-engineering" element={<PlatformEngineering/>}/>
          <Route path="/cloud/cloud-managed-services" element={<CloudManagedServices/>}/>
          <Route path="/cloud/cloud-advisory-sme-services" element={<CloudAdvisorySmeServices/>}/>
          <Route path="/cybersecurity" element={<Cybersecurity/>}/>
          <Route path="digitalservices" element={<DigitalServices />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/enterprise-saas" element={<Saas/>}/>
          <Route path="/managed-services" element={<ManagedServices />} />
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/quality-engineering" element={<QualityEngineering />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X, Cloud, Shield, Smartphone, Blocks, Building, Server, BarChart3, Users, TrendingUp } from 'lucide-react';
import { InsightsOutlined } from '@mui/icons-material';

const services = [
  {
    name: 'Cloud',
    path: '/cloud',
    icon: Cloud,
    title: 'Seamless Cloud Solutions',
    description: 'Cost-effective, flexible, & seamless cloud management for uninterrupted access.',
    image: 'https://www.devopsinstitute.com/wp-content/uploads/2021/05/iStock-1277731016-scaled.jpg',
    children: [
      { name: 'Cloud Migration', path: '/cloud/cloud-migration' },
      { name: 'Mainframe Modernization', path: '/cloud/mainframe' },
      { name: 'SAP on Cloud', path: '/cloud/sap' },
      { name: 'Cloud FinOps', path: '/cloud/finops' },
      { name: 'Cloud Security', path: '/cloud/security' },
      { name: 'Platform Engineering', path: '/cloud/platform' },
      { name: 'Cloud Managed Services', path: '/cloud/managed' },
      { name: 'Cloud Advisory & SME Services', path: '/cloud/advisory-sme' },
    ],
  },
  {
    name: 'Cybersecurity',
    path: '/cybersecurity',
    icon: Shield,
    title: 'Advanced Security Solutions',
    description: 'Comprehensive cybersecurity services to protect your digital assets.',
    image: 'https://www.devopsinstitute.com/wp-content/uploads/2021/05/iStock-1277731016-scaled.jpg',
    children: [
      { name: 'CIAM', path: '/cybersecurity/ciam' },
      { name: 'Workforce Identity', path: '/cybersecurity/workforce' },
      { name: 'Security Engineering', path: '/cybersecurity/engineering' },
      { name: 'Zero Trust Architecture', path: '/cybersecurity/zero-trust' },
      { name: 'Governance Risk Management & Compliance', path: '/cybersecurity/governance-risk-management-compliance' },
      { name: 'Cyber Defense & Investigation', path: '/cybersecurity/defense-investigation' },
      { name: 'Cyber Advisory', path: '/cybersecurity/advisory' },
      { name: 'Cyber Resilience', path: '/cybersecurity/resilience' },
    ],
  },
  {
    name: 'Digital Services',
    path: '/digital-services',
    icon: Smartphone,
    title: 'Digital Transformation',
    description: 'Modern digital solutions for your business transformation needs.',
    image: 'https://www.devopsinstitute.com/wp-content/uploads/2021/05/iStock-1277731016-scaled.jpg',
    children: [
      { name: 'Fullstack - Web', path: '/digital/fullstack' },
      { name: 'Mobile App Development', path: '/digital/mobile' },
      { name: 'Apps Support & Maintenance', path: '/digital/support' },
      { name: 'Hyper Automation', path: '/digital/automation' },
      { name: 'DevSecOps & Automation', path: '/digital-services/devsecops-automation' },
      { name: 'SRE & Chaos Engineering', path: '/digital-services/sre-chaos-engineering' },
      { name: 'Backend-Development', path: '/digital-services/backend-development' },
      { name: 'Design & Architecture', path: '/digital-services/design-architecture' },
      { name: 'UI/UX & Frontend Development', path: '/digital-services/uiux-frontend-development' },
      { name: 'Quality Engineering & Assurance', path: '/digital-services/quality-engineering-assurance' },
    ],
  },
  {
    name: 'Blockchain',
    path: '/blockchain',
    icon: Blocks,
    title: 'Blockchain Innovation',
    description: 'Cutting-edge blockchain solutions for distributed systems.',
    image: 'https://www.devopsinstitute.com/wp-content/uploads/2021/05/iStock-1277731016-scaled.jpg',
    children: [
      { name: 'Distributed Trust', path: '/blockchain/trust' },
      { name: 'Ethereum', path: '/blockchain/ethereum' },
      { name: 'Hyperledger', path: '/blockchain/hyperledger' },
      { name: 'dApps', path: '/blockchain/dapps' },
      { name: 'NFT', path: '/blockchain/nft' },
      { name: 'IPFS', path: '/blockchain/ipfs' },
    ],
  },
  {
    name: 'Enterprise & SaaS Solutions',
    path: '/enterprise',
    icon: Building,
    title: 'Enterprise Solutions',
    description: 'Scalable enterprise and SaaS solutions for large organizations.',
    image: 'https://www.devopsinstitute.com/wp-content/uploads/2021/05/iStock-1277731016-scaled.jpg',
    children: [
      { name: 'SAP', path: '/enterprise/sap' },
      { name: 'ServiceNow', path: '/enterprise/servicenow' },
      { name: 'Salesforce', path: '/enterprise/salesforce' },
      { name: 'Workday', path: '/enterprise/workday' },
      { name: 'Oracle', path: '/enterprise-saas-services/oracle' },
      { name: 'Adobe', path: '/enterprise-saas-services/adobe' },
      { name: 'Sitecore', path: '/enterprise-saas-services/sitecore' },
    ],
  },
  {
    name: 'Managed Services',
    path: '/managed-services',
    icon: Server,
    title: 'Managed IT Services',
    description: '24/7 managed services for your IT infrastructure.',
    image: 'https://www.devopsinstitute.com/wp-content/uploads/2021/05/iStock-1277731016-scaled.jpg',
    children: [
      { name: 'Network & Security Management', path: '/managed-services/network-security-management' },
      { name: 'Strategic IT Consulting & Continuous Improvement', path: '/managed-services/strategic-it-consulting-continuous-improvement' },
      { name: 'Infrastructure & Data Center Management', path: '/managed-services/infrastructure-datacenter-management' },
      { name: 'End-User Support & Device Management', path: '/managed-services/enduser-support-device-management' },
      { name: 'Cloud & Application Management', path: '/managed-services/cloud-application-management' },
      { name: 'IT Operations & Service Management', path: '/managed-services/it-operations-service-management' },
    ],
  },
  {
    name: 'Data & Analytics',
    path: '/data-analytics',
    icon: BarChart3,
    title: 'Data & Analytics',
    description: 'Transform your data into actionable business insights.',
    image: 'https://www.devopsinstitute.com/wp-content/uploads/2021/05/iStock-1277731016-scaled.jpg',
    children: [
      { name: 'Internet of Things(IOT)', path: '/data-analytics/iot' },
      { name: 'AI/NLP', path: '/data-analytics/ai-nlp' },
      { name: 'Computer Vision', path: '/data-analytics/computer-vision' },
      { name: 'Speech', path: '/data-analytics/speech' },
      { name: 'ML/MLOps', path: '/data-analytics/ml-mlops' },
      { name: 'Data Science', path: '/data-analytics/data-science' },
      { name: 'Analytics', path: '/data-analytics/analytics' },
      { name: 'Reports', path: '/data-analytics/reports' },
      { name: 'Big Data, Data Lake', path: '/data-analytics/big-data-data-lake' },
      { name: 'Data Fabric', path: '/data-analytics/data-fabric' },
    ],
  },
  {
    name: 'Quality Engineering',
    path: '/quality-engineering',
    icon: Users,
    title: 'Quality Engineering',
    description: 'Comprehensive quality assurance and testing services.',
    image: 'https://www.devopsinstitute.com/wp-content/uploads/2021/05/iStock-1277731016-scaled.jpg',
    children: [
      { name: 'QA Consulting & Strategy', path: '/quality-engineering/qa-consulting-strategy' },
      { name: 'Agile Testing', path: '/quality-engineering/agile-testing' },
      { name: 'Independent Certification', path: '/quality-engineering/independent-certification' },
      { name: 'Managed Testing Services', path: '/quality-engineering/managed-testing-services' },
    ],
  },
  {
    name: 'Supply Chain',
    path: '/supply-chain',
    icon: TrendingUp,
    title: 'Supply Chain Solutions',
    description: 'Optimize your supply chain with advanced technologies.',
    image: 'https://www.devopsinstitute.com/wp-content/uploads/2021/05/iStock-1277731016-scaled.jpg',
    children: [
      { name: 'End to End AI Driven Supply Chain Execution', path: '/supply/analytics' },
      { name: 'Connected Supply Chain Architecture', path: '/supply/logistics' },
      { name: 'Core Functional Modules', path: '/supply/inventory' },
      { name: 'Technology Stack Differentiators', path: '/supply/inventory' },
    ],
  }
];

const products = [
  { name: 'VGO', path: '/products/vgo', icon: Cloud },
  { name: 'VEngage', path: '/products/vengage', icon: Cloud },
  { name: 'V-Validate', path: '/products/v-validate', icon: Cloud },
];

const solutions = [
  { name: 'dM+', path: '/solutions/dm-plus', icon: Server },
  { name: 'dMPS', path: '/solutions/dmps', icon: Server },
  { name: 'dxM', path: '/solutions/dxm', icon: Server },
  { name: 'dZEN', path: '/solutions/dzen', icon: Server },
];

const insights = [
  { name: 'Blogs', path: '/insights/blogs', icon: InsightsOutlined },
  { name: 'Case Studies', path: '/insights/case-studies', icon: InsightsOutlined },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeService, setActiveService] = useState(services[0]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <nav className={`navbar ${
      isScrolled 
        ? 'bg-transparent' 
        : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
              <span className={`text-xl font-bold ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>
                Behati
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Mega Menu */}
            <div className="relative group">
              <button className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isScrolled 
                  ? 'text-white hover:text-blue-600' 
                  : 'text-white hover:text-blue-200'
              }`}>
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Mega Menu Dropdown */}
              <div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-lg shadow-2xl border border-gray-200 w-[800px] -translate-x-1/4">
                  <div className="flex">
                    {/* Left Side - Service Categories */}
                    <div className="w-1/2 p-6 border-r border-gray-200">
                      <div className="space-y-2">
                        {services.map((service) => (
                          <div
                            key={service.name}
                            className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                              activeService.name === service.name
                                ? 'bg-blue-50 text-blue-600'
                                : 'hover:bg-gray-50 text-gray-700'
                            }`}
                            onMouseEnter={() => setActiveService(service)}
                          >
                            <service.icon className="w-5 h-5 mr-3" />
                            <span className="font-medium">{service.name}</span>
                            <ChevronDown className="w-4 h-4 ml-auto rotate-[-90deg]" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Side - Service Details */}
                    <div className="w-1/2 p-6">
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {activeService.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {activeService.description}
                        </p>
                        {activeService.image && (
                          <div className="mb-4">
                            <img 
                              src={activeService.image} 
                              alt={activeService.title}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-1">
                        {activeService.children?.map((child) => (
                          <NavLink
                            key={child.name}
                            to={child.path}
                            className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Menu Items */}
            <div className="relative group">
              <button className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isScrolled 
                  ? 'text-white hover:text-blue-600' 
                  : 'text-white hover:text-blue-200'
              }`}>
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full bg-white shadow-xl border border-gray-200 rounded-lg mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
                <div className="p-2">
                  {products.map((product) => (
                    
                    <NavLink
                      key={product.name}
                      to={product.path}
                      className="flex px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    >
                      <product.icon className="w-5 h-5 mr-3" />
                      {product.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isScrolled 
                  ? 'text-white hover:text-blue-600' 
                  : 'text-white hover:text-blue-200'
              }`}>
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full bg-white shadow-xl border border-gray-200 rounded-lg mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
                <div className="p-2">
                  {solutions.map((solution) => (
                    <NavLink
                      key={solution.name}
                      to={solution.path}
                      className="flex px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    >
                      <solution.icon className="w-5 h-5 mr-3" />
                      {solution.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isScrolled 
                  ? 'text-white hover:text-blue-600' 
                  : 'text-white hover:text-blue-200'
              }`}>
                <span>Insights</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full bg-white shadow-xl border border-gray-200 rounded-lg mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
                <div className="p-2">
                  {insights.map((insight) => (
                    <NavLink
                      key={insight.name}
                      to={insight.path}
                      className="flex px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    >
                      <insight.icon className="w-5 h-5 mr-3" />
                      {insight.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
              <NavLink to="/about" className="text-sm/6 font-medium text-white lg:mr-8">
                About
              </NavLink>
              <NavLink to="/careers" className="text-sm/6 font-medium text-white lg:mr-8">
                Career
              </NavLink>
              <NavLink to="/contact" className="text-sm/6 font-medium text-white">
                Contact
              </NavLink>     
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${isScrolled ? 'text-white hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-4">
              {/* Services */}
              <div>
                <div className="text-gray-900 font-medium px-3 py-2">Services</div>
                {services.map((service) => (
                  <NavLink
                    key={service.name}
                    to={service.path}
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>

              {/* Products */}
              <div>
                <div className="text-gray-900 font-medium px-3 py-2">Products</div>
                {products.map((product) => (
                  <NavLink
                    key={product.name}
                    to={product.path}
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {product.name}
                  </NavLink>
                ))}
              </div>

              {/* Solutions */}
              <div>
                <div className="text-gray-900 font-medium px-3 py-2">Solutions</div>
                {solutions.map((solution) => (
                  <NavLink
                    key={solution.name}
                    to={solution.path}
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {solution.name}
                  </NavLink>
                ))}
              </div>

              {/* Insights */}
              <div>
                <div className="text-gray-900 font-medium px-3 py-2">Insights</div>
                {insights.map((insight) => (
                  <NavLink
                    key={insight.name}
                    to={insight.path}
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {insight.name}
                  </NavLink>
                ))}
              </div>

              {/* Other pages */}
              <div>
                <NavLink to="/about" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  About
                </NavLink>
                <NavLink to="/careers" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                  Career
                </NavLink>
              </div>

              <NavLink
                to="/contact"
                className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors mx-3 mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
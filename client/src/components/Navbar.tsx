'use client'

import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { 
  Cloud,
  Security, 
  Devices,
  ManageHistory,
  Analytics,
  RealEstateAgent,
  Engineering,
  Category,
  CategoryOutlined,
  CategoryTwoTone} from '@mui/icons-material';

/*const services = [
  { name: 'Cloud', path: '/cloud', icon: Cloud },
  { name: 'Cyber Security', path: '/service2', icon: Security },
  { name: 'Digital Services', path: '/service3', icon: Devices },
  { name: 'Blockchain', path: '/service4', icon: SquaresPlusIcon },
  { name: 'Managed Services', path: '/service5', icon: ManageHistory },
  { name: 'Data & Analytics', path: '/service6', icon: Analytics },
  { name: 'Enterprises & SaaS Services', path: '/service7', icon: RealEstateAgent },
  { name: 'Quality Engineering', path: '/service8', icon: Engineering },
]*/

const services = [
  {
    name: 'Cloud',
    path: '/cloud',
    icon: ChartPieIcon,
    children: [
      { name: 'Cloud Migration', path: '/cloud/cloud-migration' },
      { name: 'Mainframe Modernization', path: '/cloud/mainframe-modernization' },
      { name: 'SAP on Cloud', path: '/cloud/sap-on-cloud' },
      { name: 'Cloud FinOps', path: '/cloud/cloud-finops' },
      { name: 'Cloud Security', path: '/cloud/cloud-security' },
      { name: 'Platform Engineering', path: '/cloud/platform-engineering' },
      { name: 'Cloud Managed Services', path: '/cloud/cloud-managed-services' },
      { name: 'Cloud Advisory & SME Services', path: '/cloud/cloud-advisory-sme-services' },
    ],
  },
  {
    name: 'Cyber Security',
    path: '/cybersecurity',
    icon: CursorArrowRaysIcon,
    children: [
      { name: 'CIAM', path: '/cybersecurity/ciam' },
      { name: 'Workforce Identity', path: '/cybersecurity/workforce-identity' },
      { name: 'Security Engineering', path: '/cybersecurity/security-engineering' },
      { name: 'Zero Trust Architecture', path: '/cybersecurity/zero-trust-architecture' },
      { name: 'Governance Risk Management & Compliance', path: '/cybersecurity/governance-risk-management-compliance' },
      { name: 'Cyber Defense & Investigation', path: '/ccybersecurityloud/cyber-defense-investigation' },
      { name: 'Cyber Advisory', path: '/cybersecurity/cyber-advisory' },
      { name: 'Cyber Resilience', path: '/cybersecurity/cyber-resilience' },
    ],
  },
  {
    name: 'Digital Services',
    path: '/digital-services',
    icon: FingerPrintIcon,
    children: [
      { name: 'Fullstack - Web', path: '/digital-services/fullstack-web' },
      { name: 'Mobile App Development', path: '/digital-services/mobile-app-development' },
      { name: 'Apps Support & Maintenance', path: '/digital-services/apps-support-maintenance' },
      { name: 'Hyper Automation', path: '/digital-services/hyper-automation' },
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
    icon: SquaresPlusIcon,
    children: [
      { name: 'Distributed Trust', path: '/blockchain/distributed-trust' },
      { name: 'Ethereum', path: '/blockchain/ethereum' },
      { name: 'Hyperledger', path: '/blockchain/hyperledger' },
      { name: 'dApps', path: '/blockchain/dapps' },
      { name: 'NFT', path: '/blockchain/nft' },
      { name: 'IPFS', path: '/blockchain/ipfs' },
    ],
  },
  {
    name: 'Enterprise & SaaS Services',
    path: '/enterprise-saas-services',
    icon: ChartPieIcon,
    children: [
      { name: 'Cloud Migration', path: '/cloud/cloud-migration' },
      { name: 'Mainframe Modernization', path: '/cloud/mainframe-modernization' },
      { name: 'SAP on Cloud', path: '/cloud/sap-on-cloud' },
      { name: 'Cloud FinOps', path: '/cloud/cloud-finops' },
      { name: 'Cloud Security', path: '/cloud/cloud-security' },
      { name: 'Platform Engineering', path: '/cloud/platform-engineering' },
      { name: 'Cloud Managed Services', path: '/cloud/cloud-managed-services' },
      { name: 'Cloud Advisory & SME Services', path: '/cloud/cloud-advisory-sme-services' },
    ],
  },
  {
    name: 'Managed Services',
    path: '/managed-services',
    icon: CursorArrowRaysIcon,
    children: [
      { name: 'Cloud Migration', path: '/cloud/cloud-migration' },
      { name: 'Mainframe Modernization', path: '/cloud/mainframe-modernization' },
      { name: 'SAP on Cloud', path: '/cloud/sap-on-cloud' },
      { name: 'Cloud FinOps', path: '/cloud/cloud-finops' },
      { name: 'Cloud Security', path: '/cloud/cloud-security' },
      { name: 'Platform Engineering', path: '/cloud/platform-engineering' },
      { name: 'Cloud Managed Services', path: '/cloud/cloud-managed-services' },
      { name: 'Cloud Advisory & SME Services', path: '/cloud/cloud-advisory-sme-services' },
    ],
  },
  {
    name: 'Data & Analytics',
    path: '/data-analytics',
    icon: FingerPrintIcon,
    children: [
      { name: 'Cloud Migration', path: '/cloud/cloud-migration' },
      { name: 'Mainframe Modernization', path: '/cloud/mainframe-modernization' },
      { name: 'SAP on Cloud', path: '/cloud/sap-on-cloud' },
      { name: 'Cloud FinOps', path: '/cloud/cloud-finops' },
      { name: 'Cloud Security', path: '/cloud/cloud-security' },
      { name: 'Platform Engineering', path: '/cloud/platform-engineering' },
      { name: 'Cloud Managed Services', path: '/cloud/cloud-managed-services' },
      { name: 'Cloud Advisory & SME Services', path: '/cloud/cloud-advisory-sme-services' },
    ],
  },
  {
    name: 'Quality Engineering',
    path: '/quality-engineering',
    icon: SquaresPlusIcon,
    children: [
      { name: 'Cloud Migration', path: '/cloud/cloud-migration' },
      { name: 'Mainframe Modernization', path: '/cloud/mainframe-modernization' },
      { name: 'SAP on Cloud', path: '/cloud/sap-on-cloud' },
      { name: 'Cloud FinOps', path: '/cloud/cloud-finops' },
      { name: 'Cloud Security', path: '/cloud/cloud-security' },
      { name: 'Platform Engineering', path: '/cloud/platform-engineering' },
      { name: 'Cloud Managed Services', path: '/cloud/cloud-managed-services' },
      { name: 'Cloud Advisory & SME Services', path: '/cloud/cloud-advisory-sme-services' },
    ],
  },
]


const products = [
  { name: 'VGO', path: '/product1', icon: Category },
  { name: 'VEngage', path: '/product2', icon: CategoryOutlined },
  { name: 'V-Validate', path: '/product3', icon: CategoryTwoTone },
]

const solutions = [
  { name: 'dM+', path: '/solution1', icon: ChartPieIcon },
  { name: 'dMPS', path: '/solution2', icon: CursorArrowRaysIcon },
  { name: 'dxM', path: '/solution3', icon: FingerPrintIcon },
  { name: 'dZEN', path: '/solution4', icon: SquaresPlusIcon },
]

const insights = [
  { name: 'Blogs', path: '/insight1', icon: ChartPieIcon },
  { name: 'Case Studies', path: '/insight2', icon: CursorArrowRaysIcon },
]


const Navbar =() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''} bg-transparent lg:bg-transparent`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5 flex justify-center items-center gap-x-2">
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
            <span className="text-white text-2xl font-semibold">Behati</span>
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:mr-8">
          <div className="relative group">
            <button className="text-white font-semibold flex items-center gap-1">
              Services
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            <div className="absolute left-0 top-full bg-white rounded-xl shadow-lg mt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition min-w-[250px] z-50">
              {services.map((service) => (
                <div key={service.name} className="relative group/item flex items-center rounded-xl text-sm/6 hover:bg-gray-100 w-full">
                  <div className="bg-transparent ml-4 flex size-11 flex-none items-center justify-center rounded-xl">
                      <service.icon aria-hidden="true" className="size-6 text-gray-600" />
                  </div>
                  <NavLink
                    to={service.path}
                    className="block px-4 py-2 text-gray-900 font-semibold hover:bg-gray-100 w-full whitespace-nowrap"
                  >
                    {service.name}
                    <span className="absolute inset-0" />
                  </NavLink>

                  {service.children && (
                    <div className="absolute left-full top-0 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover/item:visible group-hover/item:opacity-100 transition min-w-[250px] z-50">
                      {service.children.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 whitespace-nowrap"
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </PopoverGroup>
        <PopoverGroup className="hidden lg:flex lg:mr-8">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
              Products
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-white" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <NavLink to={item.path} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        <PopoverGroup className="hidden lg:flex lg:mr-8">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
              Solutions
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-white" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {solutions.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <NavLink to={item.path} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
              Insights
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-white" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {insights.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <NavLink to={item.path} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <NavLink to="/about" className="text-sm/6 font-semibold text-white">
            About
          </NavLink>
          <NavLink to="/careers" className="text-sm/6 font-semibold text-white">
            Career
          </NavLink>
          <NavLink to="/contact" className="text-sm/6 font-semibold text-white">
            Contact
          </NavLink>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex justify-center items-center gap-x-2">
              <img
                alt="logo"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
              <span className="text-black font-semibold">Dimiour</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-black"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Products
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Insights
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Career
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Navbar;




/*
'use client'

import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[rgba(10,46,107,1)] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <span className="text-white text-xl font-bold">Dimiour</span>
        </div>

       
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-white hover:text-indigo-200 transition">Home</a>

          <div className="relative group">
            <button className="flex items-center text-white hover:text-indigo-200 transition" 
              onClick={() => setServicesOpen(!servicesOpen)}>
              Services
              <ChevronDownIcon className={`ml-1 w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
              <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Web Design</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">SEO</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Marketing</a>
            </div>
            )}  
          </div>

          <a href="#" className="text-white hover:text-indigo-200 transition">About</a>
          <a href="#" className="text-white hover:text-indigo-200 transition">Contact</a>
        </nav>

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-[rgba(10,46,107,1)] px-4 pb-4 space-y-2">
          <a href="#" className="block text-white hover:text-indigo-200">Home</a>

          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full text-white hover:text-indigo-200"
            >
              Services
              <ChevronDownIcon className={`ml-1 w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-2 space-y-1">
                <a href="#" className="block text-white hover:text-indigo-200">Web Design</a>
                <a href="#" className="block text-white hover:text-indigo-200">SEO</a>
                <a href="#" className="block text-white hover:text-indigo-200">Marketing</a>
              </div>
            )}
          </div>

          <a href="#" className="block text-white hover:text-indigo-200">About</a>
          <a href="#" className="block text-white hover:text-indigo-200">Contact</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
*/
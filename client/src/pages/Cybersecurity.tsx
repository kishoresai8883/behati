import ServiceCard from "../components/ServiceCard";
import { ArrowRight, ArrowDown } from "lucide-react";
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const cloudServices = [
  {
    id: 1,
    title: "Customer Identity & Access Management(CIAM)",
    description: "Protect customer identities & enhance trust with advanced authentication & access control.",
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Workforce Identity",
    description: "Ensure secure and seamless access for your workforce while maintaining compliance and operational efficiency.",
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Security Engineering",
    description: "Develop a robust security infrastructure to prevent cyber threats and safeguard sensitive business data.",
    color: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Zero Trust Architecture",
    description: "Adopt a Zero Trust model to minimize attack surfaces and prevent lateral movement of threats.",
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Governance, Risk Management & Compliance(GRC)",
    description: "Reduce risks & achieve compliance with industry regulations to avoid penalties.",
    color: "from-indigo-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Cyber Defense & Investigation",
    description: "Prevent, detect, and respond to cyber threats with advanced threat intelligence and forensics.",
    color: "from-red-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    title: "Cyber Advisory",
    description: "Prevent, detect, and respond to cyber threats with advanced threat intelligence and forensics.",
    color: "from-teal-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    title: "Cyber Resilience",
    description: "Enhance your organization’s ability to recover from cyber incidents with robust resilience planning.",
    color: "from-violet-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
  }
];

const partners = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg' },
  { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Nvidia_logo.svg' },
  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_Tesla_Motors.svg' },
];

const Cybersecurity = () => {
  return (
    <div className="bg-white min-h-screen mt-20">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-blue-900/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">
            Cybersecurity
            <span className="block text-white">
              Services & Solutions for Business
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-6xl mx-auto leading-relaxed">
            Streamline your business processes with cloud solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Explore More</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white opacity-70" />
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Trusted Partners</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-12">
            We proudly collaborate with top-tier companies to drive success and innovation.
          </p>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="max-w-6xl"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.name} className="flex justify-center items-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 hover:grayscale-0 transition duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      
      {/* Cloud Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Cybersecurity Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strengthen your defenses with VDart Digital’s industry-leading cybersecurity solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cloudServices.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Boost your Digital Defense with Cybersecurity
          </h2>
          <h2 className="text-3xl md:text-4xl text-blue-100 mb-8 max-w-2xl mx-auto">
            To request further information
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
      </div>
  )
}

export default Cybersecurity;
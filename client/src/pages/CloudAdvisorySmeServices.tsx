'use client';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { 
  ArrowRight, 
  Code, 
  CheckCircle, 
  Users, 
  Target, 
  Palette, 
  Shield, 
  Award,
  ArrowDown,
  TrendingUp,
  Smartphone,
  Search,
  Globe
} from 'lucide-react';


const CloudAdvisorySmeServices = () => {
    const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications and websites built with cutting-edge technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Integration', 'Security Best Practices'],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      deliverables: ['Custom Web Application', 'Mobile-Responsive Design', 'Admin Dashboard', 'Technical Documentation'],
      timeline: '6-12 weeks',
      popular: true
    },
  ];

const service = [
  {
    title: "Keeping Up With Technology Trends",
    description: "VDart Digital's experts stay on top of cloud computing trends, assessing emerging technologies for clients to make proactive decisions.",
    icon: "🌐"
  },
  {
    title: "Training Employees With New Technology",
    description: "VDart Digital offers tailored training on cloud tech and implementation for companies. Our skilled instructors provide practical guidance and hands-on learning.",
    icon: "🎨"
  },
  {
    title: "Extensive Research",
    description: "VDart Digital offers expert cloud advisory services that provide actionable insights and recommendations for organizations, saving time and effort for organizations on extensive research.",
    icon: "🚀"
  },
  {
    
    title: "An Agile Architectural Runway",
    description: "By leveraging an agile architectural runway, VDart Digital ensures that customers can quickly embrace new cloud solutions and technologies, allowing them to stay ahead of disruptions and capitalize on emerging opportunities.",
    icon: "🌐"
  },
  {
    title: "Customized Strategies",
    description: "VDart Digital works closely with organizations to understand their business goals and vision, aligning technology strategies with their long-term objectives.",
    icon: "🎨"
  },
  {
    title: "Flexibility & Adaptation",
    description: "VDart Digital helps organizations develop a dynamic technology roadmap that allows for flexibility and adaptation to evolving business needs and technological advancements.",
    icon: "🚀"
  },
];

const partners = [
  { name: 'Microsoft', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png' },
  { name: 'Google', logo: 'https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo-2010-2013.png' },
  { name: 'Facebook', logo: 'https://th.bing.com/th/id/R.39a1d68aec01e3a9ce7c0ad7b9a9c6b2?rik=fvudu3UHrxOzGA&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffacebook_logos%2ffacebook_logos_PNG19759.png&ehk=lxMHxgrLx0aXG6IO729Vd39tXLoekOxoiFN7goNPdEE%3d&risl=&pid=ImgRaw&r=0' },
  { name: 'Apple', logo: 'https://logosmarcas.net/wp-content/uploads/2020/04/Apple-Simbolo.png' },
  { name: 'Nvidia', logo: 'https://tse1.mm.bing.net/th/id/OIP.Tv5ZjzDW-ihj1a1uBdRoEwHaCS?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'Tesla', logo: 'https://tse4.mm.bing.net/th/id/OIP.WgRQ3UcDLPF0gxb5VR4f2QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' },
];

  return (
    <div className="min-h-screen bg-white mt-10">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-blue-900/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transcend the Promise of
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cloud Advisory & SME Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-6xl mx-auto leading-relaxed">
            Elevate your organization with cloud advisory insights and reliable expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              View Our Work
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-600 text-center mb-12">Cloud Advisory & SME Services</h2>
        <div className="grid lg:grid-cols-2 max-w-7xl mx-auto items-center px-4 sm:px-6 lg:px-8">
          <div className="text-left pr-8">
            <h2 className="text-xl md:text-2xl mb-4" style={{ color: '#232323' }}>
              Maximize your digital capabilities with VDart Digital's Cloud Advisory & SME services, ensuring resiliency, security, and compliance.
            </h2>
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              VDart Digital’s Cloud Advisory & SME services help clients stay current with tech trends, train employees, and eliminate extensive research. Our experts, who stay up-to-date with the latest cloud computing trends, provide curated insights, tailored training, and an agile architectural runway aligned with the business vision. With VDart Digital’s support, organizations can navigate the evolving cloud landscape and drive success.
            </p>
            <div className="mt-8">
              <NavLink to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all duration-300">
                Talk to our Experts
              </NavLink>
            </div>
          </div>

          <div className="flex text-center">
              <div className='relative rounded-2xl'>
                <div className="w-full rounded-2xl">
                  <div className='w-full rounded-2xl mb-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
                    <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" className='rounded-2xl' alt="" />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Features*/}

      <section style={{ padding: '2rem 0', background: '#fff' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
      <h2 className="text-4xl font-bold text-gray-800 mb-2">Support Features</h2>
      <p className='text-lg text-gray-500'>Explore the range of services we offer to help your business grow.</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '2rem' }}>
        {service.map((service, idx) => (
          <div key={idx} style={{
            background: '#fff',
            borderRadius: 8,
            boxShadow: '10px 2px 40px 10px rgba(100, 100, 110, 0.2)',
            padding: '2rem',
            margin: '1rem',
            flex: '1 1 250px',
            minWidth: 270,
            maxWidth: 350
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'left' }}>{service.icon}</div>
              <h3 className='text-left text-xl text-black font-semibold mb-6'>{service.title}</h3>
              <p className='text-left text-md text-slate-600'>{service.description}</p>
            </div>
        ))}
      </div>
    </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Expert Team', description: 'Seasoned professionals with proven track records' },
              { icon: Target, title: 'Results-Driven', description: 'Focused on measurable outcomes and ROI' },
              { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security and reliability' },
              { icon: Award, title: 'Award-Winning', description: 'Recognized excellence in design and development' }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something extraordinary together. Get in touch today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CloudAdvisorySmeServices;
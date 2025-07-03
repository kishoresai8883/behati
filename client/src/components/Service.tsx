import { NavLink } from "react-router-dom";

const Service = () => {
  const service = [
  {
    title: "Cloud",
    description: "VDart Digital analyzes your infrastructure to develop a precise cloud migration plan, ensuring a seamless transition to your chosen platform without missing any critical elements.",
    icon: "🌐"
  },
  {
    title: "Cyber Security",
    description: "VDart Digital creates customized cloud deployments using Azure, AWS, and GCP. Our experts optimize resource utilization, scalability, and flexibility for your business needs, giving you the agility to adapt to market demands and drive innovation.",
    icon: "🎨"
  },
  {
    title: "Digital Services",
    description: "VDart Digital optimizes cloud migration for maximum performance and cost-effectiveness. We assess your infrastructure, identify opportunities for optimization, and help you save costs while seamlessly migrating to the cloud.",
    icon: "🚀"
  },
  {
    
    title: "Blockchain",
    description: "VDart Digital simplifies Cloud migration with a robust change management process. We follow industry best practices and use automation to streamline the process, empowering your team to adapt to the new environment and maximize productivity.",
    icon: "🌐"
  },
  {
    title: "Managed Services",
    description: "VDart Digital thoroughly assesses your existing infrastructure, applications, and data to identify potential challenges, risks, and opportunities. This allows us to develop a tailored migration strategy for a successful transition to the cloud.",
    icon: "🎨"
  },
  {
    title: "Data & Analytics",
    description: "We at VDart Digital set clear goals and timelines for successful cloud migration. Our experts work closely with your team to establish achievable milestones and measurable deliverables, ensuring the migration stays on schedule and minimizing disruption to your operations.",
    icon: "🚀"
  },
  {
    title: "Enterprises & Saas Services",
    description: "VDart Digital analyzes your infrastructure to develop a precise cloud migration plan, ensuring a seamless transition to your chosen platform without missing any critical elements.",
    icon: "🌐"
  },
  {
    title: "Quality Engineering",
    description: "VDart Digital creates customized cloud deployments using Azure, AWS, and GCP. Our experts optimize resource utilization, scalability, and flexibility for your business needs, giving you the agility to adapt to market demands and drive innovation.",
    icon: "🎨"
  },
];
  return (
    <section style={{ padding: '2rem 0', background: '#fff' }}>
    <div style={{ maxWidth: 1200, margin: '48px auto', textAlign: 'center' }}>
      <h2 className="text-4xl font-bold text-gray-800 mb-2 mt-8">Our Core Services</h2>
      <p className='text-lg text-gray-500'>Explore the range of services we offer to help your business grow.</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '2rem' }}>
        {service.map((service, idx) => (
          <div key={idx} style={{
            background: '#fff',
            borderRadius: 12,
            boxShadow: '10px 2px 40px 10px rgba(100, 100, 110, 0.2)',
            padding: '2rem',
            margin: '1rem',
            flex: '1 1 250px',
            minWidth: 270,
            maxWidth: 350,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '12px', textAlign: 'left' }}>{service.icon}</div>
                <h3 className='text-left text-xl text-black font-semibold mb-6'>{service.title}</h3>
                <p className='text-left text-md text-slate-600 mb-4'>{service.description}</p>
              </div>
              <div className="mt-auto flex text-center">
                <NavLink to="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 max-w-44 rounded-lg text-md font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center">
                  Explore More
                </NavLink>
              </div>
            </div>
        ))}
      </div>
    </div>
      </section>
  )
}

export default Service



const Service = () => {
  return (
    <section className="h-auto py-24 px-6 lg:px-40 bg-white">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
    <p className="text-lg text-gray-600 mt-4">We offer a wide range of digital solutions</p>
  </div>

  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {[
      { title: 'Web Development', icon: '💻' },
      { title: 'Mobile Apps', icon: '📱' },
      { title: 'UI/UX Design', icon: '🎨' },
      { title: 'Cloud Solutions', icon: '☁️' },
      { title: 'SEO & Marketing', icon: '📈' },
      { title: 'E-Commerce', icon: '🛒' },
    ].map((service, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
      >
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.
        </p>
      </div>
    ))}
  </div>
</section>
  )
}

export default Service

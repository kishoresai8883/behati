

const About = () => {
  return (
    <div className="text-gray-800 mt-20">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-tr bg-[url('https://cyberintelsys.com/wp-content/uploads/2023/05/Your-paragraph-text-36-1024x487.png')] bg-cover py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
            Empowering Businesses Through Innovation
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            At Dimiour, we believe in building digital experiences that leave a lasting impact.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3 text-indigo-600">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide high-quality, user-focused solutions that inspire growth and innovation across industries.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3 text-purple-600">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a global leader in digital transformation and customer-first software design.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-indigo-50 py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { title: 'Innovation', desc: 'We challenge norms and constantly look for better ways to solve problems.' },
              { title: 'Integrity', desc: 'We believe in doing what’s right, even when it’s hard.' },
              { title: 'Excellence', desc: 'We strive for perfection and deliver nothing short of outstanding.' },
              { title: 'Collaboration', desc: 'We grow through collective efforts and value diverse perspectives.' },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((person) => (
              <div
                key={person}
                className="rounded-xl bg-gray-50 p-6 shadow-md hover:shadow-lg transition flex flex-col items-center"
              >
                <div className="w-24 h-24 mb-4 rounded-full bg-gray-300" />
                <h4 className="text-lg font-semibold text-gray-800">John Doe</h4>
                <p className="text-sm text-gray-600">Chief Technology Officer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-4">Let's build something great together</h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Reach out to us and let’s talk about your goals and how we can help you achieve them.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;

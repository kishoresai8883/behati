
const jobList = [
  {
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Engineering',
  },
  {
    title: 'UI/UX Designer',
    location: 'Hyderabad, India',
    type: 'Full-time',
    department: 'Design',
  },
  {
    title: 'Project Manager',
    location: 'Remote',
    type: 'Contract',
    department: 'Management',
  },
];

const Careers = () => {
  return (
    <div className="text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-tr bg-[url('https://cyberintelsys.com/wp-content/uploads/2023/05/Your-paragraph-text-36-1024x487.png')] py-20 text-center px-6 md:px-20 mt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Join Our Team</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          We’re building a culture where amazing people (like you) can do their best work. If you’re ready to grow your career and help businesses grow better, you’ve come to the right place.
        </p>
      </section>

      {/* Job Openings */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Open Positions</h2>
          <div className="space-y-6">
            {jobList.map((job, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-indigo-700">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.department} · {job.location} · {job.type}</p>
                </div>
                <a
                  href="#"
                  className="mt-4 md:mt-0 inline-block px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-indigo-50 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Why Work With Us?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {[
              { title: 'Flexible Schedule', desc: 'Work from anywhere and at your pace — we trust you.' },
              { title: 'Growth & Learning', desc: 'Access to courses, mentors, and conferences to grow your career.' },
              { title: 'Health & Wellness', desc: 'Top-notch medical coverage and mental health resources.' },
              { title: 'Team Retreats', desc: 'We believe in bonding, in-person and virtually.' },
              { title: 'Competitive Salary', desc: 'We offer industry-standard pay with regular raises.' },
              { title: 'Diverse Culture', desc: 'Be part of a vibrant, inclusive, and empowering workplace.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Culture</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We are a team of dreamers, builders, and believers. At Dimiour, we foster an environment that values openness, collaboration, and innovation.
          </p>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team culture"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-4">Let’s Grow Together</h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Don’t see a role that fits? We’re always on the lookout for amazing talent.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Send Your Resume
        </a>
      </section>
    </div>
  );
};

export default Careers;

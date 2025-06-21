
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <div className="bg-white text-gray-800 mt-20">

      {/* Hero */}
      <section className="bg-gradient-to-tr bg-[url('https://cyberintelsys.com/wp-content/uploads/2023/05/Your-paragraph-text-36-1024x487.png')] py-20 px-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-200 max-w-xl mx-auto">
          We’d love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to help.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 text-indigo-600">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <PhoneIcon className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">hello@dimiour.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPinIcon className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map (Optional) */}
      <section className="h-[400px] w-full">
        <iframe
          title="Google Map"
          className="w-full h-full grayscale contrast-125 opacity-90"
          frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.117755866765!2d78.47449361487937!3d17.385044788066553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978c69db2d0d%3A0x84e2bb2dbd90de5b!2sHyderabad!5e0!3m2!1sen!2sin!4v1620298697986!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;

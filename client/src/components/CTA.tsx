
import { NavLink } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[url('https://img.freepik.com/premium-vector/abstract-dark-blue-modern-futuristic-science-technology-hi-tech-digital-abstract-dark-blue-colorful-design-banner-background-vector-abstract-graphic-design-banner-pattern-background-web-template_181182-33451.jpg')] bg-cover py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl" aria-hidden="true">
        <div className="absolute left-[calc(50%-13rem)] top-0 h-[36rem] w-[72rem] bg-gradient-to-tr from-indigo-500 to-blue-500 opacity-20"></div>
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Let’s shape the future together.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Whether you're starting a new project or enhancing an existing one, we’re here to help. Let's build something extraordinary.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <NavLink
            to="/contact"
            className="rounded-full border-b-blue-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 transition-all duration-300"
          >
            Get in touch
          </NavLink>
          <NavLink
            to="/services"
            className="text-sm border px-6 py-3 rounded-full font-semibold leading-6 text-white hover:bg-gray-600"
          >
            Explore services
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CTA;
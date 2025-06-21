
import { NavLink } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-r from-slate-800 via-gray-600 to-slate-600 py-24 sm:py-32">
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
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-all duration-300"
          >
            Get in touch
          </NavLink>
          <NavLink
            to="/services"
            className="text-sm font-semibold leading-6 text-white hover:underline underline-offset-4"
          >
            Explore services →
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CTA;
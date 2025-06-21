
import { StarIcon } from "@heroicons/react/20/solid";

const testimonials = [
  {
    name: "Aarav Mehta",
    title: "Founder, TechSphere",
    quote:
      "Working with Dimiour was an absolute pleasure. Their attention to detail and commitment to excellence is unmatched.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    title: "Marketing Director, BrightEdge",
    quote:
      "They transformed our online presence with a modern, scalable solution. Highly recommend their team!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
  },
  {
    name: "Rohit Sharma",
    title: "Product Manager, FinServe",
    quote:
      "Timely delivery, great communication, and powerful UI/UX. They go above and beyond every time.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Testimonials</h2>
        <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          What Our Clients Say
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Hear from the people we’ve had the pleasure of working with.
        </p>
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
            <div className="flex items-center space-x-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.title}</p>
              </div>
            </div>
            <blockquote className="mt-6 text-gray-700 italic border-l-4 border-blue-500 pl-4">
              “{t.quote}”
            </blockquote>
            <div className="mt-4 flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${
                    i < t.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

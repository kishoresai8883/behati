'use client';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const partners = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg' },
  { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Nvidia_logo.svg' },
  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_Tesla_Motors.svg' },
];

export default function OurPartnersCarousel() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Trusted Partners</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
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
                className="h-12 grayscale hover:grayscale-0 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-12">
          <NavLink 
            to="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium shadow"
          >
            Become a Partner
          </NavLink>
        </div>
      </div>
    </section>
  );
}


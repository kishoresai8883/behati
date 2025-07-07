'use client';

import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const partners = [
  { name: 'Microsoft', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png' },
  { name: 'Google', logo: 'https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo-2010-2013.png' },
  { name: 'Facebook', logo: 'https://th.bing.com/th/id/R.39a1d68aec01e3a9ce7c0ad7b9a9c6b2?rik=fvudu3UHrxOzGA&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffacebook_logos%2ffacebook_logos_PNG19759.png&ehk=lxMHxgrLx0aXG6IO729Vd39tXLoekOxoiFN7goNPdEE%3d&risl=&pid=ImgRaw&r=0' },
  { name: 'Apple', logo: 'https://logosmarcas.net/wp-content/uploads/2020/04/Apple-Simbolo.png' },
  { name: 'Nvidia', logo: 'https://tse1.mm.bing.net/th/id/OIP.Tv5ZjzDW-ihj1a1uBdRoEwHaCS?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'Genpact', logo: 'https://tse4.mm.bing.net/th/id/OIP.WgRQ3UcDLPF0gxb5VR4f2QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' },
];

const Clients = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-20 relative">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Trusted Partners</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          We proudly collaborate with top-tier companies to drive success and innovation.
        </p>

        {/* Swiper buttons */}
        <div
          ref={prevRef}
          className="swiper-button-prev-custom w-10 h-10 bg-white border border-gray-300 rounded-full shadow flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-400 absolute top-1/2 left-4 z-20 cursor-pointer"
        >
          &#10094;
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next-custom w-10 h-10 bg-white border border-gray-300 rounded-full shadow flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-400 absolute top-1/2 right-4 z-20 cursor-pointer"
        >
          &#10095;
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="pt-6"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.name}>
              <div className="flex flex-col items-center justify-center text-center space-y-2 px-2">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-24 object-contain hover:grayscale-0 transition duration-300"
                />
                <p className="text-xs md:text-sm font-medium text-gray-700 px-2">
                  {partner.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
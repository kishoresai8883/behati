'use client';
import { NavLink } from 'react-router-dom';
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
  { name: 'Tesla', logo: 'https://tse4.mm.bing.net/th/id/OIP.WgRQ3UcDLPF0gxb5VR4f2QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' },
];

const Partner = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Trusted Partners</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          We proudly collaborate with top-tier companies to drive success and innovation.
        </p>
        <div className="absolute left-8 transform -translate-y-1/2 z-10">
          <button className="w-8 h-8 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center text-gray-700 text-xl hover:bg-blue-300 hover:text-white transition duration-300">
            &#10094;
          </button>
        </div>
        <div className="absolute right-8 transform -translate-y-1/2 z-10">
          <button className="w-8 h-8 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center text-gray-700 text-xl hover:bg-blue-300 hover:text-white transition duration-300">
            &#10095;
          </button>
        </div>
        <Swiper
          modules={[Autoplay, Navigation ]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
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
                className="h-12 hover:grayscale-0 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}


export default Partner;
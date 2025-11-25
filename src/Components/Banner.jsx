import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-15222075469751-3a6694bf2f61?auto=format&fit=crop&w=1400&q=80",
      title: "Exchange Your Skills, Expand Your World",
      text: "Teach what you know, learn what you love — all in your local community.",
    },
    {
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
      title: "Learn from Real People, Not Just Screens",
      text: "From guitar to graphic design, connect with skilled locals near you.",
    },
    {
      img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1400&q=80",
      title: "Trade Skills, Build Friendships",
      text: "Join SkillSwap — where knowledge and community grow together.",
    },
    {
      img: "https://images.unsplash.com/photo-1533231161643-77f0fd4dcfb0?auto=format&fit=crop&w=1400&q=80",
      title: "SkillShare Sessions Every Week",
      text: "Host or join meetups to share what you know.",
    },
  ];

  return (
    <section className="w-full h-[85vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[420px] overflow-hidden rounded-2xl">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="max-w-xl px-8 text-white space-y-3">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {slide.title}
                  </h2>
                  <p className="text-lg">{slide.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;

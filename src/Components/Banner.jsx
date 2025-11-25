import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const slides = [
  {
    img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1400&q=80",
    title: "Discover Your Next Favorite Book",
    text: "From timeless classics to trending bestsellers — explore stories that stay with you."
  },
  {
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1400&q=80",
    title: "A World of Knowledge in Your Hands",
    text: "Find books that inspire, teach, and transform your perspective."
  },
  {
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80",
    title: "Build Your Personal Library",
    text: "Collect books that define your journey — one chapter at a time."
  },
  {
    img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1400&q=80",
    title: "Stories That Stay With You",
    text: "Immerse yourself in worlds of fiction, fantasy, and unforgettable characters."
  },
  {
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1400&q=80",
    title: "Books for Every Curiosity",
    text: "Self-help, mystery, romance, science — explore every genre you love."
  },
  {
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1400&q=80",
    title: "Learn Something New Every Day",
    text: "Grow your knowledge with insightful non-fiction and educational reads."
  },
  {
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1400&q=80",
    title: "Dive Into Thrilling Adventures",
    text: "Mystery, thriller, and suspense novels that keep you turning pages."
  }
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

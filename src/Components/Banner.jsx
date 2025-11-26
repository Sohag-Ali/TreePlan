import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const slides = [
  {
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80",
    title: "Bring Nature Into Your Home",
    text: "Beautiful indoor plants that refresh your space and uplift your mood."
  },
  {
    img: "https://potsforplants.ph/cdn/shop/products/yucca-plant-649302.jpg?v=1748253894",
    title: "Air-Purifying Greenery",
    text: "Snake plants, ZZ plants, and more to help clean your indoor air naturally."
  },
  {
    img: "https://www.thespruce.com/thmb/ZZgnRKHyClJ0iH0hMXE154Skyhs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/get-to-know-the-feng-shui-money-plant-1275013-6-a11a86b1c5664f28a1848a5089b8aaed.jpg",
    title: "Blooming Beauty",
    text: "Flowering plants that add color, fragrance, and charm to any corner."
  },
  {
    img: "https://www.realsimple.com/thmb/hKmZA2j9Tf5x6HHjPfqtZMiFr8s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1357717927-33a98b53f0604c09b6679bd3cfac23a4.jpg",
    title: "Grow Your Urban Jungle",
    text: "Transform your home with stunning palms and large indoor trees."
  },
  {
    img: "https://cnr.ncsu.edu/news/wp-content/uploads/sites/10/2023/06/06132023-tree-planting-istock-twitter.png",
    title: "Bring Life to Every Space",
    text: "Decorative plants that enhance your room’s aesthetics instantly."
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/money-tree-plant-royalty-free-image-1726508639.jpg?crop=0.88896xw:1xh;center,top&resize=1200:*",
    title: "Perfect Plants for Beginners",
    text: "Easy-care plants that thrive with minimal watering and sunlight."
  },
  {
    img: "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2023/01/Weeping-Fig-Ficus-Benjamina-12-1408030001-819x1024.jpg",
    title: "Vibrant Indoor Greens",
    text: "Climbers and vining plants that bring natural elegance to your decor."
  }
];


  return (
    <section className="w-full  relative">
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

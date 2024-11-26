import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const BottonSlider = () => {
  const slides = [
    {
      img: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      description:
        "ADSFASDolor tempora ante lacinia? Officiis, turpis, sequi enim adipisicing, aenean! Doloribus provident atque rerum convallis accusantium, officia architecto sint lacus",
      name: "Hiroyasu Tsuchiya",
      about: "Corporate Branding Division, Anchor by Panasonic",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKxfjTf49GAtu0PpFXK7mKBgqyJ5MfJCgQw&s",
      description:
        "ADSFASDolor tempora ante lacinia? Officiis, turpis, sequi enim adipisicing, aenean! Doloribus provident atque rerum convallis accusantium, officia architecto sint lacus",
      name: "Hiroyasu Tsuchiya",
      about: "Corporate Branding Division, Anchor by Panasonic",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <Swiper
        modules={[Pagination]}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          350: { slidesPerView: 1 },
        }}
        className="max-w-5xl mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <a href="#" className="block bg-white   p-6 text-center mb-6">
              <div className="icon mt-4 ">
                <img
                  loading="lazy"
                  src={slide.img}
                  alt={slide.text}
                  className="size-20 mx-auto rounded-full border-blue-500 border-4"
                />

                <p className="text-xl my-5">{slide.description}</p>
                <h3 className="text-blue-500 text-xl font-bold">
                  {slide.name}
                </h3>
                <p>{slide.about}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BottonSlider;

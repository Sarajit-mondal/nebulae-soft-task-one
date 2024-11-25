import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const BottonSlider = () => {
  const slides = [
    {
      icon: "ion-earth",
      count: "80+",
      text: "Countries Served",
      img: "https://acodez.in/wp-content/themes/acodez-theme/images/aco-icon-1.png",
    },
    {
      icon: "ion-clipboard",
      count: "1000+",
      text: "Projects Completed",
      img: "https://acodez.in/wp-content/themes/acodez-theme/images/projects-icon.png",
    },
    {
      icon: "ion-trophy",
      count: "16",
      text: "International Awards",
      img: "https://acodez.in/wp-content/themes/acodez-theme/images/awards-icon.png",
    },
    {
      icon: "ion-ios-location",
      count: "6",
      text: "Office Locations",
      img: "https://acodez.in/wp-content/themes/acodez-theme/images/location-icon.png",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-5xl mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <a
              href="#"
              className="block bg-white shadow-md rounded-lg p-6 text-center"
            >
              <div className="counts flex flex-col items-center">
                <i className={`text-4xl mb-4 ${slide.icon}`}></i>
                <h3 className="text-3xl font-bold">{slide.count}</h3>
                <p className="mt-2 text-gray-600">{slide.text}</p>
              </div>
              <div className="icon mt-4">
                <img
                  loading="lazy"
                  src={slide.img}
                  alt={slide.text}
                  className="w-16 h-16 mx-auto"
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BottonSlider;

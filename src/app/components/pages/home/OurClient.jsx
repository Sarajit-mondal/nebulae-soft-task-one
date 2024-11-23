import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function OurClient() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
       
        breakpoints={{
          440: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        modules={[ Autoplay]}
        className="mySwiper my-20"
      >
        {companyLogo.map((link, index) => (
          <SwiperSlide key={index}>
            <Image className="filter grayscale hover:filter-none duration-200 cursor-pointer"
              height={100}
              width={200}
              src={link}
              alt="company logo"
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const companyLogo = [
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/switzerland.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/amrita.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/datamark.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/panasonic.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/anchor.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/cavincare.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/axis-bank.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/hdfc.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/future-group.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/sonata.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/indiamart.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/conagra.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/sobha.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/switzerland.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/indomie.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/amrita.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/quantifi.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/datamark.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/panasonic.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/anchor.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/cavincare.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/axis-bank.png",
  "https://acodez.in/wp-content/themes/acodez-theme/images/clients/hdfc.png",
];

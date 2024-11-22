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
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {companyLogo.map((link, index) => (
          <SwiperSlide key={index}>
            <Image
              height={60}
              width={150}
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

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

const OurDesign = () => {
  const companyLogo = [
    {
      link: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/02.jpg",
      description:
        "UX design and development for Remit Money, an Axis Bank Brand. We also developed the brand Identity design.",
    },
    {
      link: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/07.jpg",
      description:
        "A custom designed and developed, content-rich website with 20,000+ pages for Amrita University, a top-ranked University in India.",
    },
    {
      link: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/08.jpg",
      description:
        "A fully custom web design for India's leading Onboarding Due Diligence, Entity Resolution & Address Verification company.",
    },
    {
      link: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/09.jpg",
      description:
        "A custom-designed and developed website project for SELC, a leading career college based in Australia, with over 35 years of experience.",
    },
    {
      link: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/10.jpg",
      description:
        "A UX oriented custom web development for Rybbon, part of Blackhawk Network, the global leader in branded payment solutions.",
    },
  ];

  return (
    <div className="relative md:max-h-screen">
      <Swiper
        slidesPerView={1}
        
        navigation
        spaceBetween={10}
       
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          440: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="my-20 custom-swiper"
      >
        {companyLogo.map((link, index) => (
          <SwiperSlide key={index}>
            <Image
              className="cursor-pointer"
              height={200}
              width={300}
              src={link.link}
              alt="company logo"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurDesign;

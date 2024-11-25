import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const OurDesign = () => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

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
        navigation={{
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.nextEl = nextButtonRef.current;
          swiper.params.navigation.prevEl = prevButtonRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
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
        className="my-20"
      >
        {companyLogo.map((link, index) => (
          <SwiperSlide key={index}>
            <div className="group relative w-full ">
              <Image
                className="cursor-pointer group-hover:opacity-0 transition-opacity duration-300"
                height={200}
                width={300}
                src={link.link}
                alt="company logo"
              />
              <div className="absolute inset-0 flex items-center justify-center flex-col bg-blue-500  bg-opacity-100 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-4">
                <p>{link.description}</p>
                <Link href="http://iresearch.acodez.ca/" target="_blank">
                  <button className="relative overflow-hidden  w-36 h-10  px-4 py-2 mt-5 rounded-full border-2 border-white-500 group text-white">
                    {/* Text Layer */}
                    <span className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap  transition-colors duration-700 ease-in-out">
                      View Work
                    </span>

                    {/* Hover Effect Layer */}
                    <span className="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-40   border-blue-600   p-0 group-hover:border-[100px] transition-all duration-1000 "></span>
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <button
        ref={prevButtonRef}
        className="absolute right-14 -bottom-10 z-10  text-gray-600 px-4 py-2 rounded text-xl"
      >
        <FaArrowLeft />
      </button>
      <button
        ref={nextButtonRef}
        className="absolute right-5 -bottom-10 z-10  text-gray-600 px-4 py-2 rounded text-xl"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default OurDesign;
